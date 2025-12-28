import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { createUser, getUserByEmail, getUserById, updateUserLastSignedIn } from "./db";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { SignJWT } from "jose";
import { ENV } from "./_core/env";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";

// Restricted states where fantasy cricket is not allowed
const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana",
];

// Validation schemas
const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  dateOfBirth: z.string(), // ISO date string
  state: z.string().min(2, "State is required"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// Helper function to create JWT session token
async function createSessionToken(userId: number): Promise<string> {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key");
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
  return token;
}

// Helper function to calculate age from date of birth
function calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const authRouter = router({
  // Get current user
  me: publicProcedure.query(({ ctx }) => ctx.user),

  // Register new user
  register: publicProcedure.input(registerSchema).mutation(async ({ input, ctx }) => {
    // Check age restriction (18+)
    const age = calculateAge(input.dateOfBirth);
    if (age < 18) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "You must be at least 18 years old to register",
      });
    }

    // Check state restriction
    if (RESTRICTED_STATES.includes(input.state)) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: `This platform is not available in ${input.state} due to government compliance`,
      });
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(input.email);
    if (existingUser) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "User with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(input.password, 10);

    // Create user
    await createUser({
      email: input.email,
      password: hashedPassword,
      name: input.name,
      phone: input.phone || null,
      dateOfBirth: new Date(input.dateOfBirth),
      state: input.state,
      isVerified: true, // Auto-verify for now
      role: "user",
    });

    // Get the created user
    const user = await getUserByEmail(input.email);
    if (!user) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to create user",
      });
    }

    // Update last signed in
    await updateUserLastSignedIn(user.id);

    // Create session token
    const token = await createSessionToken(user.id);

    // Set cookie
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.cookie(COOKIE_NAME, token, cookieOptions);

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }),

  // Login user
  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    // Find user by email
    const user = await getUserByEmail(input.email);
    if (!user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid email or password",
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(input.password, user.password);
    if (!isValidPassword) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid email or password",
      });
    }

    // Check state restriction (in case user moved)
    if (user.state && RESTRICTED_STATES.includes(user.state)) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: `This platform is not available in ${user.state} due to government compliance`,
      });
    }

    // Update last signed in
    await updateUserLastSignedIn(user.id);

    // Create session token
    const token = await createSessionToken(user.id);

    // Set cookie
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.cookie(COOKIE_NAME, token, cookieOptions);

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }),

  // Logout user
  logout: publicProcedure.mutation(({ ctx }) => {
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    return {
      success: true,
    } as const;
  }),

  // Get user profile
  profile: protectedProcedure.query(async ({ ctx }) => {
    const user = await getUserById(ctx.user.id);
    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      dateOfBirth: user.dateOfBirth,
      state: user.state,
      role: user.role,
      createdAt: user.createdAt,
      lastSignedIn: user.lastSignedIn,
    };
  }),
});
