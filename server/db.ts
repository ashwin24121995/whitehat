import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, passwordResetTokens } from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Create a new user
export async function createUser(user: InsertUser): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create user: database not available");
    return;
  }

  try {
    await db.insert(users).values(user);
  } catch (error) {
    console.error("[Database] Failed to create user:", error);
    throw error;
  }
}

// Get user by email
export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Get user by ID
export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Update user last signed in
export async function updateUserLastSignedIn(id: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update user: database not available");
    return;
  }

  try {
    await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
  } catch (error) {
    console.error("[Database] Failed to update user:", error);
    throw error;
  }
}

// Update user password
export async function updateUserPassword(userId: number, hashedPassword: string): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update password: database not available");
    return;
  }

  try {
    await db.update(users).set({ password: hashedPassword }).where(eq(users.id, userId));
  } catch (error) {
    console.error("[Database] Failed to update password:", error);
    throw error;
  }
}

// Create password reset token
export async function createPasswordResetToken(data: { userId: number; token: string; expiresAt: Date }): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create reset token: database not available");
    return;
  }

  try {
    await db.insert(passwordResetTokens).values(data);
  } catch (error) {
    console.error("[Database] Failed to create reset token:", error);
    throw error;
  }
}

// Get password reset token
export async function getPasswordResetToken(token: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get reset token: database not available");
    return undefined;
  }

  const result = await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.token, token)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Delete password reset token
export async function deletePasswordResetToken(id: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot delete reset token: database not available");
    return;
  }

  try {
    await db.delete(passwordResetTokens).where(eq(passwordResetTokens.id, id));
  } catch (error) {
    console.error("[Database] Failed to delete reset token:", error);
    throw error;
  }
}

// Update user profile
export async function updateUserProfile(
  userId: number,
  data: { name?: string; email?: string; phone?: string; state?: string }
): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update profile: database not available");
    return;
  }

  try {
    await db.update(users).set(data).where(eq(users.id, userId));
  } catch (error) {
    console.error("[Database] Failed to update profile:", error);
    throw error;
  }
}

// TODO: add feature queries here as your schema grows.
