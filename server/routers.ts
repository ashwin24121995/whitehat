import { systemRouter } from "./_core/systemRouter";
import { router } from "./_core/trpc";
import { authRouter } from "./auth";
import { matchesRouter } from "./matches";
import { teamsRouter } from "./teams";
import { leaderboardRouter } from "./leaderboard";

export const appRouter = router({
  system: systemRouter,
  auth: authRouter,
  matches: matchesRouter,
  teams: teamsRouter,
  leaderboard: leaderboardRouter,
});

export type AppRouter = typeof appRouter;
