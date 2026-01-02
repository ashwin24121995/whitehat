import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Calendar, MapPin, Clock, Trophy, AlertCircle, Play, CheckCircle2, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Matches() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("recent");

  const { data: matchesData, isLoading, error } = trpc.matches.list.useQuery();

  const upcomingMatches = matchesData?.matches.filter(m => m.status === 'upcoming') || [];
  const liveMatches = matchesData?.matches.filter(m => m.status === 'live') || [];
  const completedMatches = matchesData?.matches.filter(m => m.status === 'completed') || [];

  // Helper function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse">🔴 LIVE</Badge>;
      case 'upcoming':
        return <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">📅 Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-gradient-to-r from-gray-500 to-slate-500 text-white">✓ Completed</Badge>;
      default:
        return null;
    }
  };

  // Render match card
  const renderMatchCard = (match: any, showCreateTeam = false) => (
    <Card 
      key={match.id} 
      className="group relative overflow-hidden border-2 hover:border-teal-400 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/30"
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500"></div>
      
      <CardContent className="p-6">
        {/* Header with match name and status */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
              {match.name}
            </h3>
            {match.matchType && (
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
                {match.matchType}
              </span>
            )}
          </div>
          <div>
            {getStatusBadge(match.status)}
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <MapPin className="h-4 w-4 text-teal-600" />
          <span className="font-medium">{match.venue}</span>
        </div>

        {/* Teams Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 mb-4 border border-slate-200">
          <div className="flex justify-between items-center">
            {/* Team 1 */}
            <div className="flex-1 text-center">
              <div className="mb-3">
                {match.teamInfo?.[0]?.img ? (
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-teal-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img 
                      src={match.teamInfo[0].img} 
                      alt={match.teams[0]}
                      className="relative h-16 w-16 object-contain drop-shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 mx-auto bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
              <p className="font-bold text-slate-900 text-sm mb-1">
                {match.teamInfo?.[0]?.shortname || match.teams[0]}
              </p>
              {match.score?.[0] && (
                <div className="text-lg font-black text-teal-600">
                  {match.score[0].r}/{match.score[0].w}
                  <span className="text-xs text-slate-600 ml-1">({match.score[0].o} ov)</span>
                </div>
              )}
            </div>

            {/* VS Divider */}
            <div className="px-4">
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-sm shadow-lg">
                VS
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex-1 text-center">
              <div className="mb-3">
                {match.teamInfo?.[1]?.img ? (
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img 
                      src={match.teamInfo[1].img} 
                      alt={match.teams[1]}
                      className="relative h-16 w-16 object-contain drop-shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
              <p className="font-bold text-slate-900 text-sm mb-1">
                {match.teamInfo?.[1]?.shortname || match.teams[1]}
              </p>
              {match.score?.[1] && (
                <div className="text-lg font-black text-purple-600">
                  {match.score[1].r}/{match.score[1].w}
                  <span className="text-xs text-slate-600 ml-1">({match.score[1].o} ov)</span>
                </div>
              )}
            </div>
          </div>

          {/* Match Result */}
          {match.status === 'completed' && match.matchWinner && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <span className="font-semibold text-slate-900">{match.matchWinner}</span>
              </div>
            </div>
          )}
        </div>

        {/* Match Details */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white rounded-lg p-2 border border-slate-200">
            <Calendar className="h-4 w-4 text-teal-600 flex-shrink-0" />
            <span className="truncate">{match.date || 'Date TBA'}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white rounded-lg p-2 border border-slate-200">
            <Clock className="h-4 w-4 text-purple-600 flex-shrink-0" />
            <span className="truncate">{match.dateTimeGMT ? new Date(match.dateTimeGMT).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'Time TBA'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1 border-2 hover:bg-slate-50"
            onClick={() => setLocation(`/matches/${match.id}`)}
          >
            View Details
          </Button>
          
          {showCreateTeam && match.availableForTeamCreation && (
            <Button 
              className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => setLocation(`/matches/${match.id}/create-team`)}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Create Team
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Enhanced Hero Section with Cricket Stadium Background */}
        <section 
          className="relative py-20 md:py-28 overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
          
          <div className="container relative z-10 text-center">
            {/* Icon */}
            <div className="mb-6 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30"></div>
                <Trophy className="relative h-20 w-20 text-white drop-shadow-2xl mx-auto" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
              Cricket Matches
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              View live scores, create fantasy teams, and track match results
            </p>

            {/* Stats Cards */}
            <div className="flex justify-center gap-4 flex-wrap max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-red-300" />
                  <span className="text-white font-semibold">{liveMatches.length} Live</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-300" />
                  <span className="text-white font-semibold">{upcomingMatches.length} Upcoming</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span className="text-white font-semibold">{completedMatches.length} Recent</span>
                </div>
              </div>
            </div>

            {/* Live Match Score Widget */}
            {liveMatches.length > 0 && (
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border-2 border-white/30 p-6 animate-pulse-slow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-600 font-bold text-sm uppercase tracking-wide">LIVE NOW</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">🔴 LIVE</Badge>
                  </div>
                  
                  {liveMatches.slice(0, 1).map(match => (
                    <div key={match.id}>
                      {/* Match Name */}
                      <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">
                        {match.name}
                      </h3>
                      
                      {/* Teams and Scores */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        {/* Team 1 */}
                        <div className="text-center">
                          {match.teamInfo?.[0]?.img ? (
                            <img 
                              src={match.teamInfo[0].img} 
                              alt={match.teams[0]}
                              className="h-12 w-12 mx-auto object-contain mb-2"
                            />
                          ) : (
                            <div className="h-12 w-12 mx-auto bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mb-2">
                              <Trophy className="h-6 w-6 text-white" />
                            </div>
                          )}
                          <p className="font-bold text-slate-900 text-sm mb-1">
                            {match.teamInfo?.[0]?.shortname || match.teams[0]}
                          </p>
                          {match.score?.[0] && (
                            <div className="text-2xl font-black text-teal-600">
                              {match.score[0].r}/{match.score[0].w}
                              <div className="text-xs text-slate-600">({match.score[0].o} ov)</div>
                            </div>
                          )}
                        </div>

                        {/* VS Divider */}
                        <div className="flex flex-col items-center">
                          <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-black text-sm">VS</span>
                          </div>
                        </div>

                        {/* Team 2 */}
                        <div className="text-center">
                          {match.teamInfo?.[1]?.img ? (
                            <img 
                              src={match.teamInfo[1].img} 
                              alt={match.teams[1]}
                              className="h-12 w-12 mx-auto object-contain mb-2"
                            />
                          ) : (
                            <div className="h-12 w-12 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-2">
                              <Trophy className="h-6 w-6 text-white" />
                            </div>
                          )}
                          <p className="font-bold text-slate-900 text-sm mb-1">
                            {match.teamInfo?.[1]?.shortname || match.teams[1]}
                          </p>
                          {match.score?.[1] && (
                            <div className="text-2xl font-black text-orange-600">
                              {match.score[1].r}/{match.score[1].w}
                              <div className="text-xs text-slate-600">({match.score[1].o} ov)</div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Match Status */}
                      {match.status_note && (
                        <div className="mt-4 text-center">
                          <p className="text-sm font-semibold text-slate-700 bg-yellow-50 rounded-lg px-4 py-2 border border-yellow-200">
                            {match.status_note}
                          </p>
                        </div>
                      )}

                      {/* View Details Button */}
                      <div className="mt-4 text-center">
                        <Button 
                          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold shadow-lg"
                          onClick={() => setLocation(`/matches/${match.id}`)}
                        >
                          View Full Scorecard
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Matches Content */}
        <section className="py-16 md:py-20">
          <div className="container max-w-7xl">
            {error && (
              <Alert variant="destructive" className="mb-8 border-2">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription className="text-base">
                  Failed to load matches. Please try again later.
                </AlertDescription>
              </Alert>
            )}

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Enhanced Tab List */}
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-14 bg-slate-100 p-1 rounded-xl">
                <TabsTrigger 
                  value="upcoming" 
                  className="text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg"
                >
                  📅 Upcoming ({upcomingMatches.length})
                </TabsTrigger>
                <TabsTrigger 
                  value="live"
                  className="text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg"
                >
                  🔴 Live ({liveMatches.length})
                </TabsTrigger>
                <TabsTrigger 
                  value="recent"
                  className="text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white rounded-lg"
                >
                  ✓ Recent ({completedMatches.length})
                </TabsTrigger>
              </TabsList>

              {/* Upcoming Matches Tab */}
              <TabsContent value="upcoming" className="mt-0">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <Skeleton key={i} className="h-96 w-full rounded-xl" />
                    ))}
                  </div>
                ) : upcomingMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingMatches.map(match => renderMatchCard(match, true))}
                  </div>
                ) : (
                  <Card className="border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-blue-50/30">
                    <CardContent className="pt-16 pb-16 text-center">
                      <div className="mb-6 inline-block">
                        <Calendar className="h-20 w-20 text-slate-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">No Upcoming Matches</h3>
                      <p className="text-slate-600 text-lg max-w-md mx-auto">
                        Check back soon for new matches to create your fantasy teams!
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Live Matches Tab */}
              <TabsContent value="live" className="mt-0">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <Skeleton key={i} className="h-96 w-full rounded-xl" />
                    ))}
                  </div>
                ) : liveMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {liveMatches.map(match => renderMatchCard(match))}
                  </div>
                ) : (
                  <Card className="border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-red-50/30">
                    <CardContent className="pt-16 pb-16 text-center">
                      <div className="mb-6 inline-block">
                        <Play className="h-20 w-20 text-slate-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">No Live Matches</h3>
                      <p className="text-slate-600 text-lg max-w-md mx-auto">
                        Live matches will appear here when they start. Check upcoming matches!
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Recent Matches Tab */}
              <TabsContent value="recent" className="mt-0">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <Skeleton key={i} className="h-96 w-full rounded-xl" />
                    ))}
                  </div>
                ) : completedMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {completedMatches.map(match => renderMatchCard(match))}
                  </div>
                ) : (
                  <Card className="border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100">
                    <CardContent className="pt-16 pb-16 text-center">
                      <div className="mb-6 inline-block">
                        <CheckCircle2 className="h-20 w-20 text-slate-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">No Recent Matches</h3>
                      <p className="text-slate-600 text-lg max-w-md mx-auto">
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
