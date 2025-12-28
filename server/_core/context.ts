import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { jwtVerify } from "jose";
import cookie from "cookie";
import { COOKIE_NAME } from "@shared/const";
import { getUserById } from "../db";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  // Parse cookies
  const cookies = cookie.parse(opts.req.headers.cookie || "");
  const token = cookies[COOKIE_NAME];

  if (token) {
    try {
      // Verify JWT token
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "default-secret-key");
      const { payload } = await jwtVerify(token, secret);

      // Get user from database
      if (payload.userId && typeof payload.userId === "number") {
        const dbUser = await getUserById(payload.userId);
        if (dbUser) {
          user = dbUser;
        }
      }
    } catch (error) {
      // Token is invalid or expired, user remains null
      console.warn("[Auth] Invalid or expired token");
    }
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
