import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import crypto from "crypto";
import { createUser, getUserByEmail, getUserById, updateUserLastSignedIn, createPasswordResetToken, getPasswordResetToken, deletePasswordResetToken, updateUserPassword } from "./db";
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

  // Request password reset
  requestPasswordReset: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const user = await getUserByEmail(input.email);
      if (!user) {
        // Don't reveal if email exists for security
        return { success: true, message: "If the email exists, a reset link will be sent" };
      }

      // Generate random token
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 3600000); // 1 hour from now

      // Save token to database
      await createPasswordResetToken({
        userId: user.id,
        token,
        expiresAt,
      });

      // In a real app, send email here
      // For now, just return the token (in production, this should be sent via email)
      console.log(`Password reset token for ${user.email}: ${token}`);

      return { 
        success: true, 
        message: "If the email exists, a reset link will be sent",
        // Remove this in production - only for development
        devToken: token 
      };
    }),

  // Reset password with token
  resetPassword: publicProcedure
    .input(z.object({
      token: z.string(),
      newPassword: z.string().min(8, "Password must be at least 8 characters"),
    }))
    .mutation(async ({ input }) => {
      // Find token in database
      const resetToken = await getPasswordResetToken(input.token);
      if (!resetToken) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid or expired reset token",
        });
      }

      // Check if token is expired
      if (new Date() > resetToken.expiresAt) {
        await deletePasswordResetToken(resetToken.id);
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Reset token has expired",
        });
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(input.newPassword, 10);

      // Update user password
      await updateUserPassword(resetToken.userId, hashedPassword);

      // Delete used token
      await deletePasswordResetToken(resetToken.id);

      return { success: true, message: "Password reset successfully" };
    }),

  // Update user profile
  updateProfile: protectedProcedure
    .input(z.object({
      name: z.string().min(2, "Name must be at least 2 characters").optional(),
      email: z.string().email("Invalid email address").optional(),
      phone: z.string().optional(),
      state: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const user = await getUserById(ctx.user.id);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      // If email is being changed, check if it's already taken
      if (input.email && input.email !== user.email) {
        const existingUser = await getUserByEmail(input.email);
        if (existingUser) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Email already in use",
          });
        }
      }

      // Check state restriction if state is being changed
      if (input.state && RESTRICTED_STATES.includes(input.state)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `This platform is not available in ${input.state} due to government compliance`,
        });
      }

      // Update user in database
      const db = await import("./db");
      await db.updateUserProfile(ctx.user.id, input);

      return { success: true, message: "Profile updated successfully" };
    }),

  // Change password
  changePassword: protectedProcedure
    .input(z.object({
      currentPassword: z.string(),
      newPassword: z.string().min(8, "Password must be at least 8 characters"),
    }))
    .mutation(async ({ ctx, input }) => {
      const user = await getUserById(ctx.user.id);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      // Verify current password
      const isValidPassword = await bcrypt.compare(input.currentPassword, user.password);
      if (!isValidPassword) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Current password is incorrect",
        });
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(input.newPassword, 10);

      // Update password
      await updateUserPassword(ctx.user.id, hashedPassword);

      return { success: true, message: "Password changed successfully" };
    }),
});
