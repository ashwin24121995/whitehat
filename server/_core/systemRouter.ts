import { z } from "zod";
import { notifyOwner } from "./notification";
import { adminProcedure, publicProcedure, router } from "./trpc";
import { getDb } from "../db";

export const systemRouter = router({
  health: publicProcedure
    .input(
      z.object({
        timestamp: z.number().min(0, "timestamp cannot be negative"),
      })
    )
    .query(() => ({
      ok: true,
    })),

  dbHealth: publicProcedure.query(async () => {
    try {
      const db = await getDb();
      if (!db) {
        return {
          ok: false,
          error: "Database instance is null",
        };
      }
      
      // Try a simple query
      const result = await db.execute('SELECT 1 as test');
      return {
        ok: true,
        message: "Database connection successful",
        test: result,
      };
    } catch (error) {
      console.error("[Health Check] Database error:", error);
      return {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }),

  notifyOwner: adminProcedure
    .input(
      z.object({
        title: z.string().min(1, "title is required"),
        content: z.string().min(1, "content is required"),
      })
    )
    .mutation(async ({ input }) => {
      const delivered = await notifyOwner(input);
      return {
        success: delivered,
      } as const;
    }),
});
