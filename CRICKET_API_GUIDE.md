# Cricket API Integration Guide for WHITEHAT Fantasy Cricket

**Source:** Complete Cricket API Integration Guide for XSNAP Fantasy Cricket v2.0  
**Date:** January 2, 2026  
**API Provider:** CricketData.org API (cricapi.com)

---

## API Configuration

**Base URL:**
```
https://api.cricapi.com/v1
```

**API Key (Already Configured):**
```
Environment Variable: CRICKET_API_KEY
Value: 1a822521-d7e0-46ff-98d3-3e51020863f3
```

**Authentication:**
- API key passed as query parameter: `?apikey={CRICKET_API_KEY}`
- Never expose API key in frontend code
- Backend automatically injects from environment variables

---

## Understanding Match Status

The `status` field is **THE MOST IMPORTANT FIELD** for filtering matches.

### Match Status Values

| Status Value | Meaning | When to Show |
|--------------|---------|--------------|
| `"Match not started"` | Match is scheduled but hasn't begun | **Upcoming Matches** section |
| `"Live"` or `"In Progress"` | Match is currently being played | **Live Matches** section |
| `"Match Finished"` or `"Completed"` | Match has ended | **Completed Matches** section or hide |

### Additional Status Fields

- `matchStarted`: Boolean - `true` if match has started
- `matchEnded`: Boolean - `true` if match has finished
- `dateTimeGMT`: ISO 8601 timestamp of match start time

---

## Fetching Upcoming Matches

### API Endpoint
```
GET https://api.cricapi.com/v1/currentMatches?apikey={YOUR_API_KEY}&offset=0
```

### What This Returns
The `currentMatches` endpoint returns **ALL matches** that are:
1. Not yet finished (`matchEnded = false`)
2. Either upcoming or currently live

**You MUST filter the response** to separate upcoming from live matches.

### Step-by-Step: Getting Upcoming Matches

**Step 1: Call the API**
```typescript
const response = await fetch(
  `https://api.cricapi.com/v1/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`
);
const data = await response.json();
```

**Step 2: Filter for Upcoming Matches**
```typescript
const upcomingMatches = data.data.filter((match: any) => {
  // Match must not have started
  const notStarted = !match.matchStarted;
  
  // Match status should be "Match not started"
  const statusCheck = match.status === "Match not started";
  
  // Match date should be today or in the future
  const matchDate = new Date(match.dateTimeGMT);
  const now = new Date();
  const isFuture = matchDate >= now;
  
  return notStarted && statusCheck && isFuture;
});
```

**Step 3: Sort by Date (Earliest First)**
```typescript
upcomingMatches.sort((a, b) => {
  const dateA = new Date(a.dateTimeGMT);
  const dateB = new Date(b.dateTimeGMT);
  return dateA.getTime() - dateB.getTime();
});
```

### Complete Example: Fetching Upcoming Matches
```typescript
export async function getUpcomingMatches() {
  try {
    const response = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${process.env.CRICKET_API_KEY}&offset=0`
    );
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter for upcoming matches only
    const upcomingMatches = data.data.filter((match: any) => {
      const notStarted = !match.matchStarted;
      const statusCheck = match.status === "Match not started";
      const matchDate = new Date(match.dateTimeGMT);
      const now = new Date();
      const isFuture = matchDate >= now;
      
      return notStarted && statusCheck && isFuture;
    });
    
    // Sort by date (earliest first)
    upcomingMatches.sort((a, b) => {
      return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
    });
    
    return upcomingMatches;
  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
    return [];
  }
}
```

---

## Fetching Live Matches

### Step-by-Step: Getting Live Matches

**Step 1: Call the Same API**
```typescript
const response = await fetch(
  `https://api.cricapi.com/v1/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`
);
const data = await response.json();
```

**Step 2: Filter for Live Matches**
```typescript
const liveMatches = data.data.filter((match: any) => {
  // Match must have started
  const hasStarted = match.matchStarted === true;
  
  // Match must not have ended
  const notEnded = match.matchEnded === false;
  
  // Status should indicate live play
  const isLive = match.status && (
    match.status.toLowerCase().includes("live") ||
    match.status.toLowerCase().includes("in progress") ||
    match.status.toLowerCase().includes("innings")
  );
  
  return hasStarted && notEnded && isLive;
});
```

### Complete Example: Fetching Live Matches
```typescript
export async function getLiveMatches() {
  try {
    const response = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${process.env.CRICKET_API_KEY}&offset=0`
    );
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter for live matches only
    const liveMatches = data.data.filter((match: any) => {
      const hasStarted = match.matchStarted === true;
      const notEnded = match.matchEnded === false;
      const isLive = match.status && (
        match.status.toLowerCase().includes("live") ||
        match.status.toLowerCase().includes("in progress") ||
        match.status.toLowerCase().includes("innings")
      );
      
      return hasStarted && notEnded && isLive;
    });
    
    return liveMatches;
  } catch (error) {
    console.error("Error fetching live matches:", error);
    return [];
  }
}
```

---

## Fetching Completed Matches

### Option 1: Filter from currentMatches (Simple)
```typescript
const completedMatches = data.data.filter((match: any) => {
  return match.matchEnded === true;
});
```

### Option 2: Use Match Info API (Recommended for Details)
If you know the match ID, you can get complete details:

```
GET https://api.cricapi.com/v1/match_info?apikey={YOUR_API_KEY}&id={MATCH_ID}
```

---

## API Response Examples

### Example 1: Upcoming Match Response
```json
{
  "id": "0843e55a-1ff7-4b72-8f45-4fd082412b56",
  "name": "Pretoria Capitals vs Durban Super Giants, 1st Match",
  "matchType": "t20",
  "status": "Match not started",
  "venue": "SuperSport Park, Centurion",
  "date": "2026-01-03",
  "dateTimeGMT": "2026-01-03T16:00:00",
  "teams": ["Pretoria Capitals", "Durban Super Giants"],
  "teamInfo": [
    {
      "name": "Pretoria Capitals",
      "shortname": "PC",
      "img": "https://h.cricapi.com/img/icon512.png"
    },
    {
      "name": "Durban Super Giants",
      "shortname": "DSG",
      "img": "https://h.cricapi.com/img/icon512.png"
    }
  ],
  "score": [],
  "series_id": "series-123",
  "matchStarted": false,
  "matchEnded": false
}
```

### Example 2: Live Match Response
```json
{
  "id": "live-match-456",
  "name": "India vs Australia, 2nd T20I",
  "matchType": "t20",
  "status": "India need 45 runs in 30 balls",
  "venue": "Melbourne Cricket Ground",
  "date": "2026-01-02",
  "dateTimeGMT": "2026-01-02T09:00:00",
  "teams": ["India", "Australia"],
  "teamInfo": [
    {
      "name": "India",
      "shortname": "IND",
      "img": "https://h.cricapi.com/img/icon512.png"
    },
    {
      "name": "Australia",
      "shortname": "AUS",
      "img": "https://h.cricapi.com/img/icon512.png"
    }
  ],
  "score": [
    {
      "r": 165,
      "w": 7,
      "o": 20,
      "inning": "Australia Inning 1"
    },
    {
      "r": 121,
      "w": 4,
      "o": 15,
      "inning": "India Inning 1"
    }
  ],
  "series_id": "series-456",
  "matchStarted": true,
  "matchEnded": false
}
```

### Example 3: Completed Match Response
```json
{
  "id": "completed-match-789",
  "name": "England vs Pakistan, Final",
  "matchType": "odi",
  "status": "England won by 5 wickets",
  "venue": "Lord's, London",
  "date": "2026-01-01",
  "dateTimeGMT": "2026-01-01T10:00:00",
  "teams": ["England", "Pakistan"],
  "teamInfo": [
    {
      "name": "England",
      "shortname": "ENG",
      "img": "https://h.cricapi.com/img/icon512.png"
    },
    {
      "name": "Pakistan",
      "shortname": "PAK",
      "img": "https://h.cricapi.com/img/icon512.png"
    }
  ],
  "score": [
    {
      "r": 245,
      "w": 10,
      "o": 48.3,
      "inning": "Pakistan Inning 1"
    },
    {
      "r": 246,
      "w": 5,
      "o": 45.2,
      "inning": "England Inning 1"
    }
  ],
  "series_id": "series-789",
  "matchStarted": true,
  "matchEnded": true
}
```

---

## Implementation in WHITEHAT Fantasy Cricket

### Current Implementation Location
```
/home/ubuntu/fantasy_cricket_whitehat/server/_core/cricketApi.ts
```

### Backend (tRPC Procedures)

**File:** `server/routers.ts`

```typescript
matches: router({
  getCurrent: publicProcedure.query(async () => {
    const matches = await getCurrentMatches();
    return matches;
  }),
  
  getUpcoming: publicProcedure.query(async () => {
    const allMatches = await getCurrentMatches();
    
    // Filter for upcoming matches
    const upcoming = allMatches.filter((match) => {
      const notStarted = !match.matchStarted;
      const statusCheck = match.status === "Match not started";
      const matchDate = new Date(match.dateTimeGMT);
      const now = new Date();
      const isFuture = matchDate >= now;
      
      return notStarted && statusCheck && isFuture;
    });
    
    // Sort by date
    return upcoming.sort((a, b) => {
      return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
    });
  }),
  
  getLive: publicProcedure.query(async () => {
    const allMatches = await getCurrentMatches();
    
    // Filter for live matches
    const live = allMatches.filter((match) => {
      const hasStarted = match.matchStarted === true;
      const notEnded = match.matchEnded === false;
      const isLive = match.status && (
        match.status.toLowerCase().includes("live") ||
        match.status.toLowerCase().includes("in progress") ||
        match.status.toLowerCase().includes("innings")
      );
      
      return hasStarted && notEnded && isLive;
    });
    
    return live;
  }),
}),
```

---

## Key Takeaways

1. **Single API Endpoint:** Use `currentMatches` for both upcoming and live matches
2. **Filter on Frontend/Backend:** You MUST filter the response based on `matchStarted`, `matchEnded`, and `status` fields
3. **Status Field is Critical:** The `status` field tells you the exact state of the match
4. **Date Filtering:** For upcoming matches, also check that `dateTimeGMT >= now`
5. **Sort by Date:** Always sort upcoming matches by date (earliest first)
6. **Error Handling:** Always wrap API calls in try-catch and return empty arrays on error

---

## Common Issues & Solutions

### Issue: No Upcoming Matches Showing
**Solution:** Check your filter logic - ensure you're checking:
- `!match.matchStarted`
- `match.status === "Match not started"`
- `new Date(match.dateTimeGMT) >= new Date()`

### Issue: Live Matches Not Updating
**Solution:** Implement polling or WebSocket for real-time updates. The API doesn't push updates, you need to fetch periodically (every 30-60 seconds).

### Issue: API Returns 401 Unauthorized
**Solution:** Verify that `CRICKET_API_KEY` environment variable is set correctly in your deployment environment (Railway).

---

**End of Guide**
