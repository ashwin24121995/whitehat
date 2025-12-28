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
import { cacheService, CACHE_TTL } from "./cache";

export const matchesRouter = router({
  /**
   * Get all current and upcoming matches
   */
  list: publicProcedure.query(async () => {
    try {
      const cacheKey = 'matches:current';
      
      // Try to get from cache first
      const cached = cacheService.get<any>(cacheKey);
      if (cached) {
        return cached;
      }

      // Fetch from API if not in cache
      const matches = await getCurrentMatches();
      
      // Add additional computed fields
      const enrichedMatches = matches.map(match => ({
        ...match,
        status: getMatchStatus(match),
        availableForTeamCreation: isMatchAvailableForTeamCreation(match)
      }));

      const result = {
        matches: enrichedMatches,
        count: enrichedMatches.length
      };

      // Determine TTL based on match statuses
      const hasLiveMatches = enrichedMatches.some(m => m.status === 'live');
      const ttl = hasLiveMatches ? CACHE_TTL.LIVE_MATCHES : CACHE_TTL.UPCOMING_MATCHES;
      
      // Cache the result
      cacheService.set(cacheKey, result, ttl);

      return result;
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
