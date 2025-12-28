import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/hooks/useAuth";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Leaderboard() {
  const [, setLocation] = useLocation();
  const { user, loading: authLoading, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [authLoading, isAuthenticated, setLocation]);

  const { data: leaderboardData, isLoading } = trpc.leaderboard.global.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  const { data: myRankData, isLoading: rankLoading } = trpc.leaderboard.myRank.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  if (authLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Award className="h-6 w-6 text-amber-600" />;
    return null;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-amber-600 text-white";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 gradient-cricket text-white">
          <div className="container text-center">
            <Trophy className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Leaderboard</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Top fantasy cricket players ranked by total points
            </p>
          </div>
        </section>

        {/* Leaderboard Content */}
        <section className="py-16 md:py-20">
          <div className="container max-w-5xl">
            {/* My Rank Card */}
            <Card className="glossy-card mb-8 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Your Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                {rankLoading ? (
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-12 w-48" />
                    <Skeleton className="h-12 w-32" />
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg ${getRankBadgeColor(myRankData?.rank || 0)}`}>
                        #{myRankData?.rank || '-'}
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{user?.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {myRankData?.matchesPlayed || 0} matches played
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">{myRankData?.totalPoints || 0}</p>
                      <p className="text-sm text-muted-foreground">Total Points</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Top 3 Podium */}
            {!isLoading && leaderboardData && leaderboardData.leaderboard.length >= 3 && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* 2nd Place */}
                <Card className="glossy-card mt-8">
                  <CardContent className="pt-6 text-center">
                    <Medal className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarFallback className="text-lg bg-gray-400 text-white">
                        {leaderboardData.leaderboard[1].name?.charAt(0) || '2'}
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-semibold truncate">{leaderboardData.leaderboard[1].name}</p>
                    <p className="text-2xl font-bold text-primary mt-2">
                      {leaderboardData.leaderboard[1].totalPoints}
                    </p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </CardContent>
                </Card>

                {/* 1st Place */}
                <Card className="glossy-card border-yellow-500/30">
                  <CardContent className="pt-6 text-center">
                    <Trophy className="h-16 w-16 mx-auto mb-3 text-yellow-500" />
                    <Avatar className="h-20 w-20 mx-auto mb-3 border-4 border-yellow-500">
                      <AvatarFallback className="text-xl bg-yellow-500 text-white">
                        {leaderboardData.leaderboard[0].name?.charAt(0) || '1'}
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-bold text-lg truncate">{leaderboardData.leaderboard[0].name}</p>
                    <p className="text-3xl font-bold text-yellow-500 mt-2">
                      {leaderboardData.leaderboard[0].totalPoints}
                    </p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </CardContent>
                </Card>

                {/* 3rd Place */}
                <Card className="glossy-card mt-8">
                  <CardContent className="pt-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-3 text-amber-600" />
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarFallback className="text-lg bg-amber-600 text-white">
                        {leaderboardData.leaderboard[2].name?.charAt(0) || '3'}
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-semibold truncate">{leaderboardData.leaderboard[2].name}</p>
                    <p className="text-2xl font-bold text-primary mt-2">
                      {leaderboardData.leaderboard[2].totalPoints}
                    </p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Full Leaderboard Table */}
            <Card className="glossy-card">
              <CardHeader>
                <CardTitle>All Rankings</CardTitle>
                <CardDescription>
                  Top 100 players ranked by total fantasy points
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : leaderboardData && leaderboardData.leaderboard.length > 0 ? (
                  <div className="space-y-2">
                    {leaderboardData.leaderboard.map((entry) => (
                      <div 
                        key={entry.userId}
                        className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                          entry.userId === user?.id 
                            ? 'bg-primary/10 border border-primary/20' 
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${getRankBadgeColor(entry.rank)}`}>
                            {getRankIcon(entry.rank) || `#${entry.rank}`}
                          </div>
                          <Avatar>
                            <AvatarFallback>
                              {entry.name?.charAt(0) || 'U'}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-semibold">
                              {entry.name}
                              {entry.userId === user?.id && (
                                <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                                  You
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {entry.matchesPlayed} matches played
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary">{entry.totalPoints}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Trophy className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>No rankings available yet</p>
                    <p className="text-sm mt-2">Be the first to create a team and earn points!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
