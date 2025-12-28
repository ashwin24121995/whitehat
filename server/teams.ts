import { z } from "zod";
import { protectedProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { userTeams, playerPoints } from "../drizzle/schema";
import { eq, and, desc } from "drizzle-orm";
import { validateTeamComposition } from "./cricket-api";

export const teamsRouter = router({
  /**
   * Create a new fantasy team for a match
   */
  create: protectedProcedure
    .input(z.object({
      matchId: z.string(),
      playerIds: z.array(z.string()).length(11),
      playerDetails: z.array(z.object({
        pid: z.string(),
        name: z.string(),
        role: z.string(),
        roleStr: z.string()
      }))
    }))
    .mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      // Validate team composition
      const validation = validateTeamComposition(input.playerDetails);
      if (!validation.valid) {
        throw new Error(`Invalid team composition: ${validation.errors.join(", ")}`);
      }

      // Check if user already has a team for this match
      const existing = await db
        .select()
        .from(userTeams)
        .where(
          and(
            eq(userTeams.userId, ctx.user.id),
            eq(userTeams.matchId, input.matchId)
          )
        )
        .limit(1);

      if (existing.length > 0) {
        throw new Error("You already have a team for this match");
      }

      // Create team
      const [team] = await db.insert(userTeams).values({
        userId: ctx.user.id,
        matchId: input.matchId,
        selectedPlayers: input.playerIds,
        totalPoints: 0
      });

      return {
        success: true,
        teamId: team.insertId,
        message: "Team created successfully!"
      };
    }),

  /**
   * Get user's team for a specific match
   */
  getByMatch: protectedProcedure
    .input(z.object({
      matchId: z.string()
    }))
    .query(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) {
        return { team: null };
      }

      const [team] = await db
        .select()
        .from(userTeams)
        .where(
          and(
            eq(userTeams.userId, ctx.user.id),
            eq(userTeams.matchId, input.matchId)
          )
        )
        .limit(1);

      if (!team) {
        return { team: null };
      }

      return {
        team: {
          ...team,
          playerIds: team.selectedPlayers
        }
      };
    }),

  /**
   * Get all teams for current user
   */
  myTeams: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) {
      return { teams: [] };
    }

    const teams = await db
      .select()
      .from(userTeams)
      .where(eq(userTeams.userId, ctx.user.id))
      .orderBy(desc(userTeams.createdAt));

    return {
      teams: teams.map(team => ({
        ...team,
        playerIds: team.selectedPlayers
      }))
    };
  }),

  /**
   * Update team points (called after match completion)
   */
  updatePoints: protectedProcedure
    .input(z.object({
      teamId: z.number(),
      points: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      // Verify team belongs to user
      const [team] = await db
        .select()
        .from(userTeams)
        .where(
          and(
            eq(userTeams.id, input.teamId),
            eq(userTeams.userId, ctx.user.id)
          )
        )
        .limit(1);

      if (!team) {
        throw new Error("Team not found");
      }

      // Update points
      await db
        .update(userTeams)
        .set({ totalPoints: input.points })
        .where(eq(userTeams.id, input.teamId));

      return {
        success: true,
        message: "Points updated successfully"
      };
    }),

  /**
   * Delete a team
   */
  delete: protectedProcedure
    .input(z.object({
      teamId: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      // Verify team belongs to user
      const [team] = await db
        .select()
        .from(userTeams)
        .where(
          and(
            eq(userTeams.id, input.teamId),
            eq(userTeams.userId, ctx.user.id)
          )
        )
        .limit(1);

      if (!team) {
        throw new Error("Team not found");
      }

      // Delete team
      await db.delete(userTeams).where(eq(userTeams.id, input.teamId));

      return {
        success: true,
        message: "Team deleted successfully"
      };
    }),
});
