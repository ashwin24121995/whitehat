import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/hooks/useAuth";
import { Trophy, Users, Target, TrendingUp, Calendar, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, loading: authLoading, isAuthenticated } = useAuth();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [authLoading, isAuthenticated, setLocation]);

  // Fetch user's teams
  const { data: teamsData, isLoading: teamsLoading } = trpc.teams.myTeams.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  // Fetch user's rank
  const { data: rankData, isLoading: rankLoading } = trpc.leaderboard.myRank.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  // Fetch current matches
  const { data: matchesData, isLoading: matchesLoading } = trpc.matches.list.useQuery();

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

  const upcomingMatches = matchesData?.matches.filter(m => m.status === 'upcoming') || [];
  const liveMatches = matchesData?.matches.filter(m => m.status === 'live') || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, {user?.name}! 🏏
            </h1>
            <p className="text-muted-foreground">
              Ready to build your winning fantasy cricket team?
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glossy-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {rankLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <div className="text-2xl font-bold">{rankData?.totalPoints || 0}</div>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Across all matches
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Global Rank</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {rankLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <div className="text-2xl font-bold">#{rankData?.rank || '-'}</div>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Out of all players
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Teams Created</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {teamsLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <div className="text-2xl font-bold">{teamsData?.teams.length || 0}</div>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Fantasy teams
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Matches Played</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {rankLoading ? (
                  <Skeleton className="h-8 w-20" />
                ) : (
                  <div className="text-2xl font-bold">{rankData?.matchesPlayed || 0}</div>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Total matches
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Matches */}
            <div className="lg:col-span-2">
              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                    Live Matches
                  </CardTitle>
                  <CardDescription>
                    Matches currently in progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {matchesLoading ? (
                    <div className="space-y-4">
                      {[1, 2].map(i => (
                        <Skeleton key={i} className="h-24 w-full" />
                      ))}
                    </div>
                  ) : liveMatches.length > 0 ? (
                    <div className="space-y-4">
                      {liveMatches.map(match => (
                        <div key={match.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold">{match.name}</h3>
                              <p className="text-sm text-muted-foreground">{match.venue}</p>
                            </div>
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                              LIVE
                            </span>
                          </div>
                          <div className="flex gap-4 text-sm">
                            {match.teams.map((team, idx) => (
                              <div key={idx}>
                                <span className="font-medium">{team}</span>
                                {match.score?.[idx] && (
                                  <span className="text-muted-foreground ml-2">
                                    {match.score[idx].r}/{match.score[idx].w} ({match.score[idx].o})
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No live matches at the moment</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Matches */}
              <Card className="glossy-card mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Matches
                  </CardTitle>
                  <CardDescription>
                    Create your fantasy teams for these matches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {matchesLoading ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <Skeleton key={i} className="h-24 w-full" />
                      ))}
                    </div>
                  ) : upcomingMatches.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingMatches.slice(0, 5).map(match => (
                        <div key={match.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold">{match.name}</h3>
                              <p className="text-sm text-muted-foreground">{match.venue}</p>
                              <p className="text-xs text-muted-foreground mt-1">{match.date}</p>
                            </div>
                            {match.availableForTeamCreation && (
                              <Button size="sm" onClick={() => setLocation(`/matches/${match.id}/create-team`)}>
                                Create Team
                              </Button>
                            )}
                          </div>
                          <div className="flex gap-4 text-sm">
                            {match.teams.map((team, idx) => (
                              <span key={idx} className="font-medium">{team}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No upcoming matches available</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - My Teams & Quick Actions */}
            <div className="space-y-6">
              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full gradient-cricket" onClick={() => setLocation("/matches")}>
                    Browse Matches
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setLocation("/leaderboard")}>
                    View Leaderboard
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setLocation("/how-to-play")}>
                    How To Play
                  </Button>
                </CardContent>
              </Card>

              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle>My Recent Teams</CardTitle>
                  <CardDescription>Your latest fantasy teams</CardDescription>
                </CardHeader>
                <CardContent>
                  {teamsLoading ? (
                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <Skeleton key={i} className="h-16 w-full" />
                      ))}
                    </div>
                  ) : teamsData && teamsData.teams.length > 0 ? (
                    <div className="space-y-3">
                      {teamsData.teams.slice(0, 5).map(team => (
                        <div key={team.id} className="border rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-sm">Match #{team.matchId.slice(0, 8)}</p>
                              <p className="text-xs text-muted-foreground">
                                {team.totalPoints || 0} points
                              </p>
                            </div>
                            <Button size="sm" variant="ghost" onClick={() => setLocation(`/teams/${team.id}`)}>
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-muted-foreground text-sm">
                      <p>No teams created yet</p>
                      <p className="mt-2">Start by creating your first team!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
