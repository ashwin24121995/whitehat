import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { InsertUser, users, passwordResetTokens } from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      const dbUrl = process.env.DATABASE_URL;
      
      // For Railway MySQL or any rlwy.net connection, use connection pool with SSL
      if (dbUrl.includes('rlwy.net') || dbUrl.includes('railway')) {
        // Parse the connection string
        const url = new URL(dbUrl.replace('mysql://', 'http://'));
        
        const connection = mysql.createPool({
          host: url.hostname,
          port: parseInt(url.port) || 3306,
          user: url.username,
          password: url.password,
          database: url.pathname.slice(1), // Remove leading slash
          ssl: {
            rejectUnauthorized: false
          },
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0
        });
        
        _db = drizzle(connection);
      } else {
        // For other connections (like Manus internal DB), use connection string directly
        _db = drizzle(dbUrl);
      }
    } catch (error) {
      console.error("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0];
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0];
}

export async function updateUserLastSignedIn(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
}

export async function createUser(user: InsertUser) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(users).values(user);
  return result;
}

export async function createPasswordResetToken(userId: number, token: string, expiresAt: Date) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(passwordResetTokens).values({ userId, token, expiresAt });
}

export async function getPasswordResetToken(token: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db
    .select()
    .from(passwordResetTokens)
    .where(eq(passwordResetTokens.token, token))
    .limit(1);
  return result[0];
}

export async function deletePasswordResetToken(token: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.token, token));
}

export async function updateUserPassword(email: string, hashedPassword: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(users).set({ password: hashedPassword }).where(eq(users.email, email));
}
