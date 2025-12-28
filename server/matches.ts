import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { 
  getCurrentMatches, 
  getMatchDetails, 
  getFantasySquad,
  getFantasyMatchPoints,
  getMatchStatus,
  isMatchAvailableForTeamCreation
} from "./cricket-api";

export const matchesRouter = router({
  /**
   * Get all current and upcoming matches
   */
  list: publicProcedure.query(async () => {
    try {
      const matches = await getCurrentMatches();
      
      // Add additional computed fields
      const enrichedMatches = matches.map(match => ({
        ...match,
        status: getMatchStatus(match),
        availableForTeamCreation: isMatchAvailableForTeamCreation(match)
      }));

      return {
        matches: enrichedMatches,
        count: enrichedMatches.length
      };
    } catch (error) {
      throw new Error("Failed to fetch matches");
    }
  }),

  /**
   * Get match details by ID
   */
  getById: publicProcedure
    .input(z.object({
      matchId: z.string()
    }))
    .query(async ({ input }) => {
      try {
        const match = await getMatchDetails(input.matchId);
        
        if (!match) {
          throw new Error("Match not found");
        }

        return {
          match: {
            ...match,
            status: getMatchStatus(match),
            availableForTeamCreation: isMatchAvailableForTeamCreation(match)
          }
        };
      } catch (error) {
        throw new Error("Failed to fetch match details");
      }
    }),

  /**
   * Get fantasy squad for a match
   */
  getSquad: protectedProcedure
    .input(z.object({
      matchId: z.string()
    }))
    .query(async ({ input }) => {
      try {
        const squad = await getFantasySquad(input.matchId);
        
        return {
          squad,
          count: squad.length
        };
      } catch (error) {
        throw new Error("Failed to fetch fantasy squad");
      }
    }),

  /**
   * Get fantasy points for a match
   */
  getPoints: protectedProcedure
    .input(z.object({
      matchId: z.string()
    }))
    .query(async ({ input }) => {
      try {
        const points = await getFantasyMatchPoints(input.matchId);
        
        return {
          points,
          count: points.length
        };
      } catch (error) {
        // Points might not be available for upcoming matches
        return {
          points: [],
          count: 0
        };
      }
    }),
});
