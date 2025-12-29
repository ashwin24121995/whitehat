import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Calendar, MapPin, Clock, Trophy, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Matches() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("recent");

  const { data: matchesData, isLoading, error } = trpc.matches.list.useQuery();

  const upcomingMatches = matchesData?.matches.filter(m => m.status === 'upcoming') || [];
  const liveMatches = matchesData?.matches.filter(m => m.status === 'live') || [];
  const completedMatches = matchesData?.matches.filter(m => m.status === 'completed') || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 gradient-cricket text-white">
          <div className="container text-center">
            <Trophy className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cricket Matches</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              View recent match results, create teams for upcoming matches, and track live scores
            </p>
          </div>
        </section>

        {/* Matches Content */}
        <section className="py-16 md:py-20">
          <div className="container max-w-6xl">
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Failed to load matches. Please try again later.
                </AlertDescription>
              </Alert>
            )}

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="upcoming">
                  Upcoming ({upcomingMatches.length})
                </TabsTrigger>
                <TabsTrigger value="live">
                  Live ({liveMatches.length})
                </TabsTrigger>
                <TabsTrigger value="recent">
                  Recent ({completedMatches.length})
                </TabsTrigger>
              </TabsList>

              {/* Upcoming Matches Tab */}
              <TabsContent value="upcoming">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => (
                      <Skeleton key={i} className="h-64 w-full" />
                    ))}
                  </div>
                ) : upcomingMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingMatches.map(match => (
                      <Card key={match.id} className="glossy-card hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl">{match.name}</CardTitle>
                            {match.matchType && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                {match.matchType}
                              </span>
                            )}
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {match.venue}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {/* Teams */}
                            <div className="flex justify-between items-center py-3 border-y">
                              {match.teams.map((team, idx) => (
                                <div key={idx} className="text-center flex-1">
                                  {match.teamInfo?.[idx]?.img && (
                                    <img 
                                      src={match.teamInfo[idx].img} 
                                      alt={team}
                                      className="h-12 w-12 mx-auto mb-2 object-contain"
                                    />
                                  )}
                                  <p className="font-semibold">{match.teamInfo?.[idx]?.shortname || team}</p>
                                </div>
                              ))}
                            </div>

                            {/* Match Info */}
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{match.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{match.dateTimeGMT}</span>
                              </div>
                            </div>

                            {/* Action Button */}
                            {match.availableForTeamCreation ? (
                              <Button 
                                className="w-full gradient-cricket" 
                                onClick={() => setLocation(`/matches/${match.id}/create-team`)}
                              >
                                Create Fantasy Team
                              </Button>
                            ) : (
                              <Button variant="outline" className="w-full" disabled>
                                {match.hasSquad ? 'Team Creation Locked' : 'Squad Not Available'}
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="glossy-card">
                    <CardContent className="pt-12 pb-12 text-center">
                      <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-xl font-semibold mb-2">No Upcoming Matches</h3>
                      <p className="text-muted-foreground">
                        Check back soon for new matches to create your fantasy teams!
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Live Matches Tab */}
              <TabsContent value="live">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(i => (
                      <Skeleton key={i} className="h-64 w-full" />
                    ))}
                  </div>
                ) : liveMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {liveMatches.map(match => (
                      <Card key={match.id} className="glossy-card hover:shadow-lg transition-shadow border-red-500/20">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl">{match.name}</CardTitle>
                            <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full animate-pulse flex items-center gap-1">
                              <div className="h-2 w-2 bg-white rounded-full"></div>
                              LIVE
                            </span>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {match.venue}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {/* Teams with Scores */}
                            <div className="space-y-3 py-3 border-y">
                              {match.teams.map((team, idx) => (
                                <div key={idx} className="flex justify-between items-center">
                                  <div className="flex items-center gap-3">
                                    {match.teamInfo?.[idx]?.img && (
                                      <img 
                                        src={match.teamInfo[idx].img} 
                                        alt={team}
                                        className="h-10 w-10 object-contain"
                                      />
                                    )}
                                    <span className="font-semibold">{match.teamInfo?.[idx]?.shortname || team}</span>
                                  </div>
                                  {match.score?.[idx] && (
                                    <div className="text-right">
                                      <p className="font-bold text-lg">
                                        {match.score[idx].r}/{match.score[idx].w}
                                      </p>
                                      <p className="text-xs text-muted-foreground">
                                        ({match.score[idx].o} overs)
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* Match Status */}
                            <div className="text-sm text-center text-muted-foreground">
                              {match.status}
                            </div>

                            {/* View Details Button */}
                            <Button 
                              variant="outline" 
                              className="w-full"
                              onClick={() => setLocation(`/matches/${match.id}`)}
                            >
                              View Match Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="glossy-card">
                    <CardContent className="pt-12 pb-12 text-center">
                      <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-xl font-semibold mb-2">No Live Matches</h3>
                      <p className="text-muted-foreground">
                        There are no matches being played right now. Check back during match hours!
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Recent Matches Tab */}
              <TabsContent value="recent">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => (
                      <Skeleton key={i} className="h-64 w-full" />
                    ))}
                  </div>
                ) : completedMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {completedMatches.map(match => (
                      <Card key={match.id} className="glossy-card hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl">{match.name}</CardTitle>
                            <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded-full">
                              Completed
                            </span>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {match.venue}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {/* Teams with Final Scores */}
                            <div className="space-y-3 py-3 border-y">
                              {match.teams.map((team, idx) => (
                                <div key={idx} className="flex justify-between items-center">
                                  <div className="flex items-center gap-3">
                                    {match.teamInfo?.[idx]?.img && (
                                      <img 
                                        src={match.teamInfo[idx].img} 
                                        alt={team}
                                        className="h-10 w-10 object-contain"
                                      />
                                    )}
                                    <span className="font-semibold">{match.teamInfo?.[idx]?.shortname || team}</span>
                                  </div>
                                  {match.score?.[idx] && (
                                    <div className="text-right">
                                      <p className="font-bold text-lg">
                                        {match.score[idx].r}/{match.score[idx].w}
                                      </p>
                                      <p className="text-xs text-muted-foreground">
                                        ({match.score[idx].o} overs)
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* Match Result */}
                            <div className="text-sm text-center font-medium text-primary">
                              {match.status}
                            </div>

                            {/* View Details Button */}
                            <Button 
                              variant="outline" 
                              className="w-full"
                              onClick={() => setLocation(`/matches/${match.id}`)}
                            >
                              View Match Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="glossy-card">
                    <CardContent className="pt-12 pb-12 text-center">
                      <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-xl font-semibold mb-2">No Recent Matches</h3>
                      <p className="text-muted-foreground">
                        Completed matches will appear here once they finish.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
