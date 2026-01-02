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
   * Get upcoming matches only
   */
  upcoming: publicProcedure.query(async () => {
    try {
      const cacheKey = 'matches:upcoming';
      
      // Try to get from cache first
      const cached = cacheService.get<any>(cacheKey);
      if (cached) {
        return cached;
      }

      // Fetch from API and filter for upcoming matches
      const allMatches = await getCurrentMatches();
      const now = new Date();
      
      // Filter upcoming matches: not started, status="Match not started", future date
      const upcomingMatches = allMatches.filter(match => {
        const notStarted = !match.matchStarted;
        const statusCheck = match.status === "Match not started";
        const matchDate = new Date(match.dateTimeGMT);
        const isFuture = matchDate >= now;
        return notStarted && statusCheck && isFuture;
      }).sort((a, b) => new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime());
      
      // Add additional computed fields
      const enrichedMatches = upcomingMatches.map((match: any) => ({
        ...match,
        status: getMatchStatus(match),
        availableForTeamCreation: isMatchAvailableForTeamCreation(match)
      }));

      const result = {
        matches: enrichedMatches,
        count: enrichedMatches.length
      };
      
      // Cache for 5 minutes (upcoming matches don't change frequently)
      cacheService.set(cacheKey, result, CACHE_TTL.UPCOMING_MATCHES);

      return result;
    } catch (error) {
      throw new Error("Failed to fetch upcoming matches");
    }
  }),

  /**
   * Get live matches only
   */
  live: publicProcedure.query(async () => {
    try {
      const cacheKey = 'matches:live';
      
      // Try to get from cache first
      const cached = cacheService.get<any>(cacheKey);
      if (cached) {
        return cached;
      }

      // Fetch from API and filter for live matches
      const allMatches = await getCurrentMatches();
      
      // Filter live matches: started, not ended, status includes "live"/"in progress"/"innings"
      const liveMatches = allMatches.filter(match => {
        const hasStarted = match.matchStarted === true;
        const notEnded = match.matchEnded === false;
        const isLive = match.status && (
          match.status.toLowerCase().includes("live") ||
          match.status.toLowerCase().includes("in progress") ||
          match.status.toLowerCase().includes("innings")
        );
        return hasStarted && notEnded && isLive;
      });
      
      // Add additional computed fields
      const enrichedMatches = liveMatches.map((match: any) => ({
        ...match,
        status: getMatchStatus(match),
        availableForTeamCreation: isMatchAvailableForTeamCreation(match)
      }));

      const result = {
        matches: enrichedMatches,
        count: enrichedMatches.length
      };
      
      // Cache for 30 seconds (live matches change frequently)
      cacheService.set(cacheKey, result, CACHE_TTL.LIVE_MATCHES);

      return result;
    } catch (error) {
      throw new Error("Failed to fetch live matches");
    }
  }),

  /**
   * Get completed matches only
   */
  completed: publicProcedure.query(async () => {
    try {
      const cacheKey = 'matches:completed';
      
      // Try to get from cache first
      const cached = cacheService.get<any>(cacheKey);
      if (cached) {
        return cached;
      }

      // Fetch from API and filter for completed matches
      const allMatches = await getCurrentMatches();
      
      // Filter completed matches: matchEnded=true
      const completedMatches = allMatches.filter(match => match.matchEnded === true);
      
      // Add additional computed fields
      const enrichedMatches = completedMatches.map((match: any) => ({
        ...match,
        status: getMatchStatus(match),
        availableForTeamCreation: false // Can't create teams for completed matches
      }));

      const result = {
        matches: enrichedMatches,
        count: enrichedMatches.length
      };
      
      // Cache for 10 minutes (completed matches don't change)
      cacheService.set(cacheKey, result, CACHE_TTL.UPCOMING_MATCHES);

      return result;
    } catch (error) {
      throw new Error("Failed to fetch completed matches");
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
