import { z } from "zod";
import { protectedProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { userTeams, users } from "../drizzle/schema";
import { eq, desc, sql } from "drizzle-orm";

export const leaderboardRouter = router({
  /**
   * Get global leaderboard (all users, all matches)
   */
  global: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) {
      return { leaderboard: [] };
    }

    // Get total points for each user across all matches
    const leaderboard = await db
      .select({
        userId: users.id,
        name: users.name,
        email: users.email,
        totalPoints: sql<number>`COALESCE(SUM(${userTeams.totalPoints}), 0)`,
        matchesPlayed: sql<number>`COUNT(${userTeams.id})`
      })
      .from(users)
      .leftJoin(userTeams, eq(users.id, userTeams.userId))
      .groupBy(users.id, users.name, users.email)
      .orderBy(desc(sql`COALESCE(SUM(${userTeams.totalPoints}), 0)`))
      .limit(100);

    return {
      leaderboard: leaderboard.map((entry, index) => ({
        rank: index + 1,
        ...entry
      }))
    };
  }),

  /**
   * Get leaderboard for a specific match
   */
  byMatch: protectedProcedure
    .input(z.object({
      matchId: z.string()
    }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        return { leaderboard: [] };
      }

      // Get all teams for this match, ordered by points
      const leaderboard = await db
        .select({
          userId: users.id,
          name: users.name,
          email: users.email,
          totalPoints: userTeams.totalPoints,
          teamId: userTeams.id
        })
        .from(userTeams)
        .innerJoin(users, eq(userTeams.userId, users.id))
        .where(eq(userTeams.matchId, input.matchId))
        .orderBy(desc(userTeams.totalPoints));

      return {
        leaderboard: leaderboard.map((entry, index) => ({
          rank: index + 1,
          ...entry
        }))
      };
    }),

  /**
   * Get current user's rank and stats
   */
  myRank: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) {
      return { rank: null, totalPoints: 0, matchesPlayed: 0 };
    }

    // Get user's total points
    const [userStats] = await db
      .select({
        totalPoints: sql<number>`COALESCE(SUM(${userTeams.totalPoints}), 0)`,
        matchesPlayed: sql<number>`COUNT(${userTeams.id})`
      })
      .from(userTeams)
      .where(eq(userTeams.userId, ctx.user.id));

    if (!userStats) {
      return { rank: null, totalPoints: 0, matchesPlayed: 0 };
    }

    // Get user's rank by counting users with higher points
    const [rankData] = await db
      .select({
        rank: sql<number>`COUNT(*) + 1`
      })
      .from(userTeams)
      .innerJoin(users, eq(userTeams.userId, users.id))
      .where(
        sql`${users.id} != ${ctx.user.id} AND (
          SELECT COALESCE(SUM(total_points), 0)
          FROM ${userTeams}
          WHERE user_id = ${users.id}
        ) > (
          SELECT COALESCE(SUM(total_points), 0)
          FROM ${userTeams}
          WHERE user_id = ${ctx.user.id}
        )`
      );

    return {
      rank: rankData?.rank || 1,
      totalPoints: userStats.totalPoints,
      matchesPlayed: userStats.matchesPlayed
    };
  }),

  /**
   * Get top performers (top 10 users)
   */
  topPerformers: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) {
      return { topPerformers: [] };
    }

    const topPerformers = await db
      .select({
        userId: users.id,
        name: users.name,
        totalPoints: sql<number>`COALESCE(SUM(${userTeams.totalPoints}), 0)`,
        matchesPlayed: sql<number>`COUNT(${userTeams.id})`
      })
      .from(users)
      .leftJoin(userTeams, eq(users.id, userTeams.userId))
      .groupBy(users.id, users.name)
      .orderBy(desc(sql`COALESCE(SUM(${userTeams.totalPoints}), 0)`))
      .limit(10);

    return {
      topPerformers: topPerformers.map((entry, index) => ({
        rank: index + 1,
        ...entry
      }))
    };
  }),
});
