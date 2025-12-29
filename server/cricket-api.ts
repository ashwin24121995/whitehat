import axios from "axios";

// Cricket Data API Configuration
const CRICKET_API_BASE_URL = process.env.CRICKET_API_URL || "https://api.cricapi.com/v1";
const API_KEY = process.env.CRICKET_API_KEY || "1a822521-d7e0-46ff-98d3-3e51020863f3";

interface CricketAPIResponse<T> {
  data: T;
  status: string;
  info?: {
    hitsToday: number;
    hitsUsed: number;
    hitsLimit: number;
    credits: number;
    server: number;
    offsetRows: number;
    totalRows: number;
    queryTime: number;
    s: number;
    cache: number;
  };
}

export interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: Array<{
    name: string;
    shortname: string;
    img: string;
  }>;
  score: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  series_id: string;
  fantasyEnabled: boolean;
  bbbEnabled: boolean;
  hasSquad: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

export interface Player {
  pid: string;
  name: string;
  role: string;
  roleStr: string;
  battingStyle?: string;
  bowlingStyle?: string;
  country?: string;
  image?: string;
  playing11?: string;
}

export interface FantasyPoints {
  pid: string;
  name: string;
  points: number;
  rating: number;
}

// Convert GMT to IST (add 5 hours 30 minutes)
export function convertGMTtoIST(gmtDate: string): Date {
  const date = new Date(gmtDate);
  date.setHours(date.getHours() + 5);
  date.setMinutes(date.getMinutes() + 30);
  return date;
}

// Format date for display in IST
export function formatISTDate(gmtDate: string): string {
  const istDate = convertGMTtoIST(gmtDate);
  return istDate.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

/**
 * Fetch current and upcoming matches
 */
export async function getCurrentMatches(): Promise<Match[]> {
  try {
    const response = await axios.get<CricketAPIResponse<Match[]>>(
      `${CRICKET_API_BASE_URL}/currentMatches`,
      {
        params: { 
          apiKey: API_KEY,
          offset: 0
        },
        timeout: 10000
      }
    );

    if (response.data.status === "success" && response.data.data) {
      // Return all matches (upcoming, live, and completed)
      return response.data.data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching current matches:", error);
    throw new Error("Failed to fetch matches from Cricket API");
  }
}

/**
 * Fetch match details by ID
 */
export async function getMatchDetails(matchId: string): Promise<Match | null> {
  try {
    const response = await axios.get<CricketAPIResponse<Match>>(
      `${CRICKET_API_BASE_URL}/match_info`,
      {
        params: { 
          apikey: API_KEY,
          id: matchId 
        },
        timeout: 10000
      }
    );

    if (response.data.status === "success" && response.data.data) {
      return response.data.data;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching match details for ${matchId}:`, error);
    return null;
  }
}

/**
 * Fetch fantasy squad for a match
 */
export async function getFantasySquad(matchId: string): Promise<Player[]> {
  try {
    const response = await axios.get<CricketAPIResponse<{ squad: Player[] }>>(
      `${CRICKET_API_BASE_URL}/fantasy_squad`,
      {
        params: { 
          apikey: API_KEY,
          id: matchId 
        },
        timeout: 10000
      }
    );

    if (response.data.status === "success" && response.data.data?.squad) {
      return response.data.data.squad;
    }

    return [];
  } catch (error) {
    console.error(`Error fetching fantasy squad for ${matchId}:`, error);
    throw new Error("Failed to fetch fantasy squad");
  }
}

/**
 * Fetch fantasy match points
 */
export async function getFantasyMatchPoints(matchId: string): Promise<FantasyPoints[]> {
  try {
    const response = await axios.get<CricketAPIResponse<{ points: FantasyPoints[] }>>(
      `${CRICKET_API_BASE_URL}/fantasy_match_points`,
      {
        params: { 
          apikey: API_KEY,
          id: matchId 
        },
        timeout: 10000
      }
    );

    if (response.data.status === "success" && response.data.data?.points) {
      return response.data.data.points;
    }

    return [];
  } catch (error) {
    console.error(`Error fetching fantasy points for ${matchId}:`, error);
    return [];
  }
}

/**
 * Get match status (upcoming, live, completed)
 */
export function getMatchStatus(match: Match): 'upcoming' | 'live' | 'completed' {
  if (match.matchEnded) {
    return 'completed';
  }
  
  if (match.matchStarted || match.status === 'Live') {
    return 'live';
  }

  return 'upcoming';
}

/**
 * Check if match is available for team creation
 */
export function isMatchAvailableForTeamCreation(match: Match): boolean {
  const status = getMatchStatus(match);
  return status === 'upcoming' && match.fantasyEnabled && match.hasSquad;
}

/**
 * Get player role display name
 */
export function getPlayerRoleDisplay(role: string): string {
  const roleMap: Record<string, string> = {
    'bat': 'Batsman',
    'bowl': 'Bowler',
    'all': 'All-rounder',
    'wk': 'Wicket-keeper',
    'wkbat': 'Wicket-keeper Batsman'
  };

  return roleMap[role.toLowerCase()] || role;
}

/**
 * Validate team composition
 */
export function validateTeamComposition(players: Player[]): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Must have exactly 11 players
  if (players.length !== 11) {
    errors.push(`Team must have exactly 11 players (currently ${players.length})`);
  }

  // Count players by role
  const roleCounts = {
    wk: 0,
    bat: 0,
    all: 0,
    bowl: 0
  };

  players.forEach(player => {
    const role = player.role.toLowerCase();
    if (role.includes('wk')) {
      roleCounts.wk++;
    } else if (role.includes('bat')) {
      roleCounts.bat++;
    } else if (role.includes('all')) {
      roleCounts.all++;
    } else if (role.includes('bowl')) {
      roleCounts.bowl++;
    }
  });

  // Validate role composition
  if (roleCounts.wk < 1 || roleCounts.wk > 2) {
    errors.push(`Must have 1-2 wicket-keepers (currently ${roleCounts.wk})`);
  }

  if (roleCounts.bat < 3 || roleCounts.bat > 5) {
    errors.push(`Must have 3-5 batsmen (currently ${roleCounts.bat})`);
  }

  if (roleCounts.all < 1 || roleCounts.all > 3) {
    errors.push(`Must have 1-3 all-rounders (currently ${roleCounts.all})`);
  }

  if (roleCounts.bowl < 3 || roleCounts.bowl > 5) {
    errors.push(`Must have 3-5 bowlers (currently ${roleCounts.bowl})`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
