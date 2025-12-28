# WHITEHAT Fantasy Cricket - Free to Play Platform

A comprehensive, free-to-play fantasy cricket platform built for educational and entertainment purposes. No real money involved, no winnings - purely for learning and fun!

## 🏏 About

**Company**: WHITEHAT INFOTECH PRIVATE LIMITED  
**Domain**: whitehatinfotech.com  
**CIN**: U72300UP2015PTC073049  
**PAN**: AABCW6952B  
**Head Office**: 308, BAKHTAVAR STREET, HATHRAS, HATHRAS - 204101, Uttar Pradesh, INDIA

## ✨ Features

### Core Functionality
- ✅ **Free-to-Play**: No real money, no winnings - purely educational
- ✅ **Custom Authentication**: Secure JWT-based login system (no third-party OAuth)
- ✅ **Age Verification**: 18+ only platform
- ✅ **State Compliance**: Restricted in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana
- ✅ **Real-time Cricket Data**: Live match scores and updates from Cricket Data API
- ✅ **Team Building**: Select 11 players with role-based composition validation
- ✅ **Global Leaderboard**: Compete with other players (no prizes, just bragging rights!)
- ✅ **Multi-language Support**: English, Hindi, Marathi, Bengali (coming soon)

### Pages & Features
- **Homepage**: Hero section with call-to-action
- **Authentication**: Login, Register, Password Reset
- **Dashboard**: User stats, upcoming matches, live scores
- **Matches**: Browse upcoming and live cricket matches
- **Team Builder**: Select 11 players with role validation
- **Leaderboard**: Global rankings and user performance
- **Static Pages**: About Us, How To Play, FAQ, Terms, Privacy, Fair Play, Responsible Gaming, Blog, Contact

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript + TailwindCSS 4
- **Backend**: Node.js + Express + tRPC
- **Database**: MySQL (via Drizzle ORM)
- **Authentication**: Custom JWT-based system
- **API**: Cricket Data API (cricapi.com)
- **Deployment**: Railway (recommended)

## 📋 Prerequisites

- Node.js 22+
- MySQL database
- Cricket Data API key from https://cricketdata.org

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd fantasy_cricket_whitehat
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

The following environment variables are required:

```env
# Database (provided by Railway or your MySQL host)
DATABASE_URL=mysql://user:password@host:port/database

# JWT Secret (generate a secure random string)
JWT_SECRET=your_secure_jwt_secret_here

# Cricket Data API
CRICKET_API_KEY=your_cricket_api_key_here
CRICKET_API_URL=https://api.cricapi.com/v1/
```

### 4. Setup Database

```bash
pnpm db:push
```

This will create all necessary tables:
- `users` - User accounts with age and state verification
- `password_reset_tokens` - Password reset functionality
- `matches` - Cricket match data from API
- `players` - Player information
- `user_teams` - User's fantasy team selections
- `player_points` - Fantasy points for each player
- `leaderboard` - Global rankings
- `translations` - Multi-language support

### 5. Run Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### 6. Run Tests

```bash
pnpm test
```

## 🏗️ Project Structure

```
fantasy_cricket_whitehat/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (logos, images)
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Page components
│       ├── hooks/         # Custom React hooks
│       └── lib/           # Utilities and tRPC client
├── server/                # Backend Node.js application
│   ├── _core/            # Core server infrastructure
│   ├── auth.ts           # Custom authentication router
│   ├── matches.ts        # Cricket matches API router
│   ├── teams.ts          # Fantasy teams router
│   ├── leaderboard.ts    # Leaderboard router
│   ├── cricket-api.ts    # Cricket Data API service
│   └── db.ts             # Database helpers
├── drizzle/              # Database schema and migrations
│   └── schema.ts         # MySQL table definitions
└── shared/               # Shared types and constants
```

## 🎮 How It Works

### User Journey

1. **Visit Homepage** → Learn about the platform
2. **Register** → Create account with age and state verification
3. **Login** → Access dashboard
4. **Browse Matches** → View upcoming and live cricket matches
5. **Create Team** → Select 11 players for a match
6. **Earn Points** → Points calculated based on player performance
7. **Check Leaderboard** → See your ranking (no prizes, just glory!)

### Team Composition Rules

- **Total Players**: Exactly 11
- **Wicket-keepers**: 1-2
- **Batsmen**: 3-5
- **All-rounders**: 1-3
- **Bowlers**: 3-5

### Points System

Points are fetched from the Cricket Data API based on actual player performance:
- Runs scored
- Wickets taken
- Catches, run-outs, stumpings
- Strike rate bonuses
- Economy rate bonuses

## 🔒 Compliance & Legal

### Age Restriction
- Platform is restricted to users 18 years and older
- Age verification during registration

### State Restrictions
The platform is NOT available in the following states due to government compliance:
- Andhra Pradesh
- Assam
- Nagaland
- Odisha
- Sikkim
- Telangana

### Legal Disclaimer
This is a skill-based, free-to-play platform with no real money involved. No winnings, prizes, or monetary rewards are offered. This platform is purely for educational and entertainment purposes.

## 🌐 Deployment

### Deploy to Railway

1. Create a new project on Railway
2. Add MySQL database addon
3. Connect your GitHub repository
4. Add environment variables:
   - `DATABASE_URL` (auto-provided by Railway MySQL)
   - `JWT_SECRET`
   - `CRICKET_API_KEY`
   - `CRICKET_API_URL`
5. Deploy!

Railway will automatically:
- Install dependencies
- Run database migrations
- Build the application
- Start the server

## 📝 API Documentation

### Cricket Data API

The platform uses Cricket Data API for real-time match data:

**Base URL**: `https://api.cricapi.com/v1/`

**Key Endpoints Used**:
- `GET /currentMatches` - Fetch current and upcoming matches
- `GET /match_info` - Get detailed match information
- `GET /fantasysquad` - Get player squad for a match
- `GET /fantasy_match_points` - Get fantasy points for players

**Timezone Handling**:
- All API data comes in GMT
- Automatically converted to IST (GMT +5:30) for display

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test auth.test.ts

# Run Cricket API test
pnpm test cricket-api.test.ts
```

## 🎨 Design System

- **Colors**: Cricket-themed green, blue, and gold
- **Fonts**: Inter (body), Poppins (headings)
- **Style**: Glossy cards with smooth animations
- **Responsive**: Mobile-first design

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a private project for WHITEHAT INFOTECH PRIVATE LIMITED.

## 📄 License

Copyright © 2025 WHITEHAT INFOTECH PRIVATE LIMITED. All rights reserved.

## 📞 Support

For support or inquiries, please contact through the website's Contact Us page.

---

**Built with ❤️ by WHITEHAT INFOTECH PRIVATE LIMITED**

**Disclaimer**: This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
