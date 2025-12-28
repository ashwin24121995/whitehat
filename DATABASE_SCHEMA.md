# Fantasy Cricket Database Schema

## Database Connection Details
- **Host:** yamabiko.proxy.rlwy.net
- **Port:** 22867
- **Database:** railway
- **User:** root
- **Connection String:** `mysql://root:erbIuMXJWxaTOaFGJdEsDDJZcUwkAdGx@yamabiko.proxy.rlwy.net:22867/railway`

## Database Tables (8 Total)

### 1. `users` Table
Stores user account information with custom authentication.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key, Auto-increment) | Unique user identifier |
| email | VARCHAR(255) UNIQUE NOT NULL | User email address |
| password | VARCHAR(255) NOT NULL | Hashed password (bcrypt) |
| name | VARCHAR(255) NOT NULL | User's full name |
| phone | VARCHAR(20) | User's phone number (optional) |
| state | VARCHAR(100) NOT NULL | User's state (for restriction validation) |
| age | INT NOT NULL | User's age (must be 18+) |
| role | ENUM('user', 'admin') DEFAULT 'user' | User role |
| is_active | BOOLEAN DEFAULT TRUE | Account active status |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Account creation timestamp |
| updated_at | TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |
| last_login | TIMESTAMP | Last login timestamp |

**Indexes:**
- PRIMARY KEY (id)
- UNIQUE KEY (email)

**Constraints:**
- Age must be >= 18
- State must not be in restricted states (Assam, Odisha, Sikkim, Nagaland, Telangana, Andhra Pradesh)

---

### 2. `password_reset_tokens` Table
Stores password reset tokens for user authentication recovery.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key, Auto-increment) | Unique token identifier |
| user_id | INT NOT NULL | Reference to users table |
| token | VARCHAR(255) UNIQUE NOT NULL | Reset token (hashed) |
| expires_at | TIMESTAMP NOT NULL | Token expiration time (1 hour) |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Token creation timestamp |

**Foreign Keys:**
- user_id → users(id) ON DELETE CASCADE

---

### 3. `matches` Table
Stores cricket match information fetched from Cricket API.

| Column | Type | Description |
|--------|------|-------------|
| id | VARCHAR(100) (Primary Key) | Match ID from Cricket API |
| name | VARCHAR(255) NOT NULL | Match name/title |
| match_type | VARCHAR(50) | Match format (T20, ODI, Test) |
| status | VARCHAR(50) | Match status (live, upcoming, completed) |
| venue | VARCHAR(255) | Match venue/stadium |
| date | TIMESTAMP | Match date and time |
| date_time_gmt | VARCHAR(100) | GMT timestamp from API |
| team1 | VARCHAR(255) | Team 1 name |
| team2 | VARCHAR(255) | Team 2 name |
| team1_img | TEXT | Team 1 logo URL |
| team2_img | TEXT | Team 2 logo URL |
| team1_score | VARCHAR(100) | Team 1 score |
| team2_score | VARCHAR(100) | Team 2 score |
| series | VARCHAR(255) | Series/tournament name |
| series_id | VARCHAR(100) | Series ID from API |
| match_started | BOOLEAN DEFAULT FALSE | Match started flag |
| match_ended | BOOLEAN DEFAULT FALSE | Match ended flag |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| updated_at | TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

---

### 4. `players` Table
Stores cricket player information for team building.

| Column | Type | Description |
|--------|------|-------------|
| id | VARCHAR(100) (Primary Key) | Player ID from Cricket API |
| name | VARCHAR(255) NOT NULL | Player full name |
| role | VARCHAR(50) | Player role (batsman, bowler, all-rounder, wicket-keeper) |
| team | VARCHAR(255) | Player's team |
| image_url | TEXT | Player image URL |
| country | VARCHAR(100) | Player's country |
| batting_style | VARCHAR(100) | Batting style (right-hand, left-hand) |
| bowling_style | VARCHAR(100) | Bowling style |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |

---

### 5. `user_teams` Table
Stores fantasy teams created by users for specific matches.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key, Auto-increment) | Unique team identifier |
| user_id | INT NOT NULL | Reference to users table |
| match_id | VARCHAR(100) NOT NULL | Reference to matches table |
| team_name | VARCHAR(255) | Custom team name |
| captain_id | VARCHAR(100) | Player ID of captain (2x points) |
| vice_captain_id | VARCHAR(100) | Player ID of vice-captain (1.5x points) |
| players | JSON NOT NULL | Array of 11 player IDs |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Team creation timestamp |

**Foreign Keys:**
- user_id → users(id) ON DELETE CASCADE
- match_id → matches(id) ON DELETE CASCADE

**Constraints:**
- players JSON must contain exactly 11 player IDs
- Must have 1-4 wicket-keepers, 3-6 batsmen, 3-6 bowlers, 1-4 all-rounders

---

### 6. `player_points` Table
Stores fantasy points earned by players in specific matches.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key, Auto-increment) | Unique record identifier |
| match_id | VARCHAR(100) NOT NULL | Reference to matches table |
| player_id | VARCHAR(100) NOT NULL | Reference to players table |
| points | DECIMAL(10, 2) DEFAULT 0 | Fantasy points earned |
| runs | INT DEFAULT 0 | Runs scored |
| wickets | INT DEFAULT 0 | Wickets taken |

**Foreign Keys:**
- match_id → matches(id) ON DELETE CASCADE
- player_id → players(id) ON DELETE CASCADE

**Indexes:**
- UNIQUE KEY (match_id, player_id) - One record per player per match

---

### 7. `leaderboard` Table
Stores aggregated user rankings and total points.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key, Auto-increment) | Unique leaderboard entry |
| user_id | INT NOT NULL | Reference to users table |
| total_points | DECIMAL(10, 2) DEFAULT 0 | Total fantasy points earned |
| rank | INT | User's current rank |
| teams_created | INT DEFAULT 0 | Total number of teams created |
| matches_played | INT DEFAULT 0 | Total matches participated in |
| updated_at | TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

**Foreign Keys:**
- user_id → users(id) ON DELETE CASCADE

**Indexes:**
- UNIQUE KEY (user_id) - One leaderboard entry per user

---

### 8. `translations` Table
Stores multi-language translations for the platform.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key, Auto-increment) | Unique translation identifier |
| key | VARCHAR(255) NOT NULL | Translation key (e.g., "home.hero.title") |
| language | VARCHAR(10) NOT NULL | Language code (en, hi, mr, bn) |
| value | TEXT NOT NULL | Translated text |
| category | VARCHAR(100) | Translation category (ui, content, error) |
| created_at | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |

**Indexes:**
- UNIQUE KEY (key, language) - One translation per key per language

---

## Database Relationships

```
users (1) ─────< (N) user_teams
users (1) ─────< (N) leaderboard
users (1) ─────< (N) password_reset_tokens

matches (1) ────< (N) user_teams
matches (1) ────< (N) player_points

players (1) ────< (N) player_points
```

## How to Access Database

### Using MySQL CLI
```bash
mysql -h yamabiko.proxy.rlwy.net -P 22867 -u root -perbIuMXJWxaTOaFGJdEsDDJZcUwkAdGx railway
```

### Using Drizzle ORM (in code)
```typescript
import { db } from './server/db';

// Query examples
const users = await db.select().from(usersTable);
const teams = await db.select().from(userTeamsTable).where(eq(userTeamsTable.userId, userId));
```

### Push Schema Changes
```bash
pnpm db:push
```

## State Restrictions
The following states are **restricted** from registration:
1. Assam
2. Odisha
3. Sikkim
4. Nagaland
5. Telangana
6. Andhra Pradesh

## Age Verification
- Minimum age requirement: **18 years**
- Verified during registration
- Cannot be changed after account creation

## Data Flow

1. **User Registration** → `users` table
2. **Match Data Sync** → Cricket API → `matches` table
3. **Player Data Sync** → Cricket API → `players` table
4. **Team Creation** → `user_teams` table (with 11 player IDs)
5. **Points Calculation** → Cricket API → `player_points` table
6. **Leaderboard Update** → Aggregate from `player_points` → `leaderboard` table

## Backup & Maintenance

### Recommended Backup Schedule
- **Daily:** Full database backup
- **Hourly:** Incremental backup during live matches

### Indexes for Performance
- All foreign keys are indexed automatically
- Consider adding indexes on:
  - `matches.status` (for filtering live/upcoming matches)
  - `matches.date` (for date-based queries)
  - `leaderboard.rank` (for ranking queries)
  - `user_teams.match_id` (for match-specific team queries)

## Security Notes
- All passwords are hashed using bcrypt (10 rounds)
- Password reset tokens expire after 1 hour
- Database connection uses SSL (Railway default)
- Never expose database credentials in frontend code
