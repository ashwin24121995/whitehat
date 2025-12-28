import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { InsertUser, users, passwordResetTokens } from "../drizzle/schema";

let db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance
export async function getDb() {
  if (!db && process.env.DATABASE_URL) {
    try {
      console.log("[Database] Initializing connection...");
      
      // Let Drizzle handle the connection directly
      const connection = await mysql.createConnection({
        uri: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      });
      
      db = drizzle(connection);
      
      // Test connection
      await connection.query('SELECT 1');
      console.log("[Database] ✅ Connection successful!");
      
    } catch (error) {
      console.error("[Database] ❌ Connection failed:", error);
      db = null;
      throw error;
    }
  }
  
  if (!db) {
    throw new Error("Database not initialized. Check DATABASE_URL environment variable.");
  }
  
  return db;
}

export async function getUserByEmail(email: string) {
  const database = await getDb();
  const result = await database.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0];
}

export async function getUserById(id: number) {
  const database = await getDb();
  const result = await database.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0];
}

export async function updateUserLastSignedIn(id: number) {
  const database = await getDb();
  await database.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
}

export async function createUser(user: InsertUser) {
  const database = await getDb();
  const result = await database.insert(users).values(user);
  return result;
}

export async function createPasswordResetToken(userId: number, token: string, expiresAt: Date) {
  const database = await getDb();
  await database.insert(passwordResetTokens).values({ userId, token, expiresAt });
}

export async function getPasswordResetToken(token: string) {
  const database = await getDb();
  const result = await database
    .select()
    .from(passwordResetTokens)
    .where(eq(passwordResetTokens.token, token))
    .limit(1);
  return result[0];
}

export async function deletePasswordResetToken(token: string) {
  const database = await getDb();
  await database.delete(passwordResetTokens).where(eq(passwordResetTokens.token, token));
}

export async function updateUserPassword(email: string, hashedPassword: string) {
  const database = await getDb();
  await database.update(users).set({ password: hashedPassword }).where(eq(users.email, email));
}
