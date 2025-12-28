import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, json, unique } from "drizzle-orm/mysql-core";

/**
 * Fantasy Cricket Database Schema
 * Custom authentication system (no Manus OAuth)
 */

// Users table with custom authentication
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  password: text("password").notNull(), // Hashed password
  name: text("name").notNull(),
  phone: varchar("phone", { length: 15 }),
  dateOfBirth: timestamp("dateOfBirth"), // For age verification
  state: varchar("state", { length: 100 }), // For state restriction
  isVerified: boolean("isVerified").default(false).notNull(),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn"),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Password reset tokens
export const passwordResetTokens = mysqlTable("password_reset_tokens", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  token: varchar("token", { length: 255 }).notNull().unique(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Matches data from Cricket API
export const matches = mysqlTable("matches", {
  id: varchar("id", { length: 255 }).primaryKey(), // Match ID from API
  name: text("name").notNull(),
  matchType: varchar("matchType", { length: 50 }), // T20, ODI, Test
  status: text("status"),
  venue: text("venue"),
  date: varchar("date", { length: 50 }),
  dateTimeGMT: varchar("dateTimeGMT", { length: 50 }),
  dateTimeIST: varchar("dateTimeIST", { length: 50 }), // Converted from GMT
  teams: json("teams").$type<string[]>(),
  teamInfo: json("teamInfo").$type<Array<{ name: string; shortname: string; img: string }>>(),
  score: json("score").$type<Array<{ r: number; w: number; o: number; inning: string }>>(),
  seriesId: varchar("seriesId", { length: 255 }),
  fantasyEnabled: boolean("fantasyEnabled").default(false),
  hasSquad: boolean("hasSquad").default(false),
  matchStarted: boolean("matchStarted").default(false),
  matchEnded: boolean("matchEnded").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;

// Players data from Cricket API
export const players = mysqlTable("players", {
  id: varchar("id", { length: 255 }).primaryKey(), // Player ID from API
  name: text("name").notNull(),
  role: varchar("role", { length: 50 }), // Batsman, Bowler, All-rounder, Wicket-keeper
  battingStyle: varchar("battingStyle", { length: 100 }),
  bowlingStyle: varchar("bowlingStyle", { length: 100 }),
  country: varchar("country", { length: 100 }),
  playerImg: text("playerImg"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

// User teams (player selections for matches)
export const userTeams = mysqlTable("user_teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  matchId: varchar("matchId", { length: 255 }).notNull().references(() => matches.id, { onDelete: "cascade" }),
  teamName: varchar("teamName", { length: 255 }),
  selectedPlayers: json("selectedPlayers").$type<string[]>().notNull(), // Array of player IDs
  totalPoints: int("totalPoints").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  // One team per user per match
  uniqueUserMatch: unique().on(table.userId, table.matchId),
}));

export type UserTeam = typeof userTeams.$inferSelect;
export type InsertUserTeam = typeof userTeams.$inferInsert;

// Player points for each match
export const playerPoints = mysqlTable("player_points", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 255 }).notNull().references(() => matches.id, { onDelete: "cascade" }),
  playerId: varchar("playerId", { length: 255 }).notNull().references(() => players.id, { onDelete: "cascade" }),
  points: int("points").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  // One point record per player per match
  uniqueMatchPlayer: unique().on(table.matchId, table.playerId),
}));

export type PlayerPoint = typeof playerPoints.$inferSelect;
export type InsertPlayerPoint = typeof playerPoints.$inferInsert;

// User leaderboard
export const leaderboard = mysqlTable("leaderboard", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }).unique(),
  totalPoints: int("totalPoints").default(0).notNull(),
  matchesPlayed: int("matchesPlayed").default(0).notNull(),
  rank: int("rank"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Leaderboard = typeof leaderboard.$inferSelect;
export type InsertLeaderboard = typeof leaderboard.$inferInsert;

// Translations for multi-language support
export const translations = mysqlTable("translations", {
  id: int("id").autoincrement().primaryKey(),
  key: varchar("key", { length: 255 }).notNull(),
  language: varchar("language", { length: 10 }).notNull(), // en, hi, mr, bn
  value: text("value").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  // One translation per key per language
  uniqueKeyLanguage: unique().on(table.key, table.language),
}));

export type Translation = typeof translations.$inferSelect;
export type InsertTranslation = typeof translations.$inferInsert;
