import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";

// NOTE: This project uses custom email/password authentication
// Manus OAuth has been removed - authentication is handled in server/auth.ts
// This file is kept for compatibility but the OAuth route is disabled

export function registerOAuthRoutes(app: Express) {
  // OAuth callback route disabled - using custom authentication instead
  app.get("/api/oauth/callback", async (req: Request, res: Response) => {
    res.status(404).json({ 
      error: "OAuth not configured. This project uses custom email/password authentication." 
    });
  });
}
