import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import * as mysql from "mysql2/promise";
import { InsertUser, users, passwordResetTokens } from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;
let _pool: mysql.Pool | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      const dbUrl = process.env.DATABASE_URL;
      console.log("[Database] Initializing connection to:", dbUrl.replace(/:[^:@]+@/, ':****@'));
      
      // Parse DATABASE_URL
      const url = new URL(dbUrl.replace('mysql://', 'http://'));
      
      // Create connection pool with explicit configuration
      _pool = mysql.createPool({
        host: url.hostname,
        port: parseInt(url.port) || 3306,
        user: url.username,
        password: url.password,
        database: url.pathname.slice(1),
        ssl: { rejectUnauthorized: false },
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
      });
      
      console.log("[Database] Pool created, testing connection...");
      
      // Test connection
      try {
        const testConn = await _pool.getConnection();
        await testConn.query('SELECT 1');
        console.log("[Database] ✅ Connection test successful!");
        testConn.release();
      } catch (testError) {
        console.error("[Database] ❌ Connection test failed:", testError);
        throw testError;
      }
      
      // Create Drizzle instance with the pool
      _db = drizzle(_pool);
      console.log("[Database] ✅ Drizzle instance created successfully");
      
    } catch (error) {
      console.error("[Database] Failed to initialize:", error);
      _db = null;
      _pool = null;
      throw error;
    }
  }
  
  if (!_db) {
    throw new Error("Database not initialized. Check DATABASE_URL environment variable.");
  }
  
  return _db;
}

// Graceful shutdown
export async function closeDb() {
  if (_pool) {
    await _pool.end();
    _pool = null;
    _db = null;
    console.log("[Database] Connection pool closed");
  }
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0];
}

export async function getUserById(id: number) {
  const db = await getDb();
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0];
}

export async function updateUserLastSignedIn(id: number) {
  const db = await getDb();
  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
}

export async function createUser(user: InsertUser) {
  const db = await getDb();
  const result = await db.insert(users).values(user);
  return result;
}

export async function createPasswordResetToken(userId: number, token: string, expiresAt: Date) {
  const db = await getDb();
  await db.insert(passwordResetTokens).values({ userId, token, expiresAt });
}

export async function getPasswordResetToken(token: string) {
  const db = await getDb();
  const result = await db
    .select()
    .from(passwordResetTokens)
    .where(eq(passwordResetTokens.token, token))
    .limit(1);
  return result[0];
}

export async function deletePasswordResetToken(token: string) {
  const db = await getDb();
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.token, token));
}

export async function updateUserPassword(email: string, hashedPassword: string) {
  const db = await getDb();
  await db.update(users).set({ password: hashedPassword }).where(eq(users.email, email));
}
