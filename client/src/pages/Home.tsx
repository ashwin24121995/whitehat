import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Zap, Target, CheckCircle2, Trophy, Users, TrendingUp, Shield, 
  Calendar, Clock, Heart, Sparkles, Award, Play, ArrowRight,
  DollarSign, Lock, Smile, BookOpen, Star, BarChart3, Globe,
  FileCheck, UserCheck, Building2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  // Fetch upcoming matches with proper filtering
  const { data: upcomingResponse, isLoading: upcomingLoading } = trpc.matches.upcoming.useQuery(
    undefined,
    {
      refetchInterval: 5 * 60 * 1000, // Refresh every 5 minutes
      refetchOnWindowFocus: false,
    }
  );
  
  // Fetch live matches with auto-refresh
  const { data: liveResponse, isLoading: liveLoading } = trpc.matches.live.useQuery(
    undefined,
    {
      refetchInterval: 30000, // Refresh every 30 seconds for live matches
      refetchOnWindowFocus: false,
    }
  );
  
  // Fetch completed matches
  const { data: completedResponse, isLoading: completedLoading } = trpc.matches.completed.useQuery(
    undefined,
    {
      refetchInterval: 10 * 60 * 1000, // Refresh every 10 minutes
      refetchOnWindowFocus: false,
    }
  );
  
  // Note: Removed leaderboard query as it requires authentication
  // Home page should be accessible to all users without login
  
  const upcomingMatches = upcomingResponse?.matches?.slice(0, 6) || [];
  const liveMatches = liveResponse?.matches || [];
  const recentMatches = completedResponse?.matches?.slice(0, 3) || [];
  
  const matchesLoading = upcomingLoading || liveLoading || completedLoading;
  
  // Real statistics from database (no fake data)
  // Show actual match counts instead of user counts
  const totalUsers = 0; // Will be replaced with real stats from a public endpoint

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/20 to-white">
      <Header />
      
      {/* HERO SECTION */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-stadium-bg.webp)',
        }}
      >
        {/* Light overlay for better text readability while showing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex gap-3">
                <div className="bg-white p-2.5 rounded-xl shadow-lg hover:scale-105 transition-transform border border-gray-100">
                  <img src="/badge-18plus.webp" alt="18+" className="h-12 w-12" />
                </div>
                <div className="bg-white p-2.5 rounded-xl shadow-lg hover:scale-105 transition-transform border border-gray-100">
                  <img src="/badge-fairplay.webp" alt="Fair Play" className="h-12 w-12" />
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  <span className="text-slate-900">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
                  <br />
                  <span className="text-brand-gradient">{t.hero.title.split(' ').slice(2).join(' ')}</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-teal-600">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {t.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/register">
                  <Button size="lg" className="btn-brand text-lg px-8 py-6">
                    <Zap className="mr-2 h-5 w-5" />
                    {t.hero.startPlaying}
                  </Button>
                </Link>
                <Link href="/matches">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold">
                    <Calendar className="mr-2 h-5 w-5" />
                    View Matches
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold">
                    <Target className="mr-2 h-5 w-5" />
                    {t.hero.howItWorks}
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{t.hero.noFees}</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{t.hero.noCharges}</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{t.hero.educational}</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/hero-cricket-1.webp" 
                  alt="Fantasy Cricket" 
                  className="rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 z-20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-teal-600">100%</div>
                    <div className="text-xs font-medium text-slate-600">{t.hero.free}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-teal-600">₹0</div>
                    <div className="text-xs font-medium text-slate-600">{t.hero.cost}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-teal-600">∞</div>
                    <div className="text-xs font-medium text-slate-600">{t.hero.fun}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MATCHES SECTION */}
      {matchesLoading ? (
        <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <Skeleton className="h-9 w-28 rounded-full" />
              <Skeleton className="h-8 w-40" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-2 border-red-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <div className="flex items-center gap-3 mb-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-4 w-6" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                    <Skeleton className="h-10 w-full rounded-md" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : liveMatches.length > 0 ? (
        <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-bold text-sm uppercase">Live Now</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t.matches.liveMatches}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {liveMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-red-200 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-red-600 uppercase bg-red-100 px-2 py-1 rounded">{match.matchType}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-red-600">LIVE</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{match.name}</h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-1">{match.venue}</p>
                    
                    {/* Team Logos */}
                    {match.teamInfo && match.teamInfo.length >= 2 && (
                      <div className="flex items-center justify-center gap-3 mb-4 py-2">
                        <div className="flex flex-col items-center gap-1">
                          <img 
                            src={match.teamInfo[0].img} 
                            alt={match.teamInfo[0].shortname}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-team.png';
                            }}
                          />
                          <span className="text-xs font-semibold text-slate-700">{match.teamInfo[0].shortname}</span>
                        </div>
                        <span className="text-lg font-bold text-slate-400">VS</span>
                        <div className="flex flex-col items-center gap-1">
                          <img 
                            src={match.teamInfo[1].img} 
                            alt={match.teamInfo[1].shortname}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-team.png';
                            }}
                          />
                          <span className="text-xs font-semibold text-slate-700">{match.teamInfo[1].shortname}</span>
                        </div>
                      </div>
                    )}
                    
                    <Link href={`/create-team/${match.id}`}>
                      <Button className="w-full btn-brand">
                        <Trophy className="mr-2 h-4 w-4" />
                        {t.matches.createTeam}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* UPCOMING MATCHES SECTION */}
      {matchesLoading ? (
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-10">
              <Skeleton className="h-10 w-64 mx-auto mb-3" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="border border-gray-200">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Skeleton className="h-5 w-12" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-5 w-24 mb-4" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <div className="flex items-center justify-center gap-3 mb-4 py-2">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <Skeleton className="h-4 w-8" />
                      <Skeleton className="h-12 w-12 rounded-full" />
                    </div>
                    <Skeleton className="h-10 w-full rounded-md" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : upcomingMatches.length > 0 ? (
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-10">
              <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                UPCOMING MATCHES
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Choose Your Match
              </h2>
              <p className="text-lg text-slate-600">
                Build your dream team and compete with players worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-100 hover:border-teal-300 bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-teal-600 uppercase bg-teal-50 px-2 py-1 rounded">
                        {match.matchType}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(match.dateTimeGMT).toLocaleDateString('en-IN')}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{match.name}</h3>
                    
                    <div className="flex items-center gap-1 text-sm text-slate-600 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(match.dateTimeGMT).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-4 line-clamp-1">{match.venue}</p>
                    
                    {/* Team Logos */}
                    {match.teamInfo && match.teamInfo.length >= 2 && (
                      <div className="flex items-center justify-center gap-3 mb-4 py-2">
                        <div className="flex flex-col items-center gap-1">
                          <img 
                            src={match.teamInfo[0].img} 
                            alt={match.teamInfo[0].shortname}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-team.png';
                            }}
                          />
                          <span className="text-xs font-semibold text-slate-700">{match.teamInfo[0].shortname}</span>
                        </div>
                        <span className="text-lg font-bold text-slate-400">VS</span>
                        <div className="flex flex-col items-center gap-1">
                          <img 
                            src={match.teamInfo[1].img} 
                            alt={match.teamInfo[1].shortname}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-team.png';
                            }}
                          />
                          <span className="text-xs font-semibold text-slate-700">{match.teamInfo[1].shortname}</span>
                        </div>
                      </div>
                    )}
                    
                    <Link href={`/create-team/${match.id}`}>
                      <Button className="w-full btn-brand">
                        <Trophy className="mr-2 h-4 w-4" />
                        Create Team
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/matches">
                <Button variant="outline" size="lg" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  View All Matches
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* RECENT MATCHES SECTION */}
      {recentMatches.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="container">
            <div className="text-center mb-10">
              <div className="inline-block bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                RECENTLY COMPLETED
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Recent Match Results
              </h2>
              <p className="text-lg text-slate-600">
                Check out the latest completed matches and results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {recentMatches.map((match) => (
                <Card key={match.id} className="border-2 border-gray-200 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-600 uppercase bg-slate-100 px-2 py-1 rounded">
                        {match.matchType}
                      </span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">COMPLETED</span>
                    </div>
                    
                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{match.name}</h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-1">{match.venue}</p>
                    
                    {/* Team Logos */}
                    {match.teamInfo && match.teamInfo.length >= 2 && (
                      <div className="flex items-center justify-center gap-3 mb-4 py-2 bg-slate-50 rounded-lg">
                        <div className="flex flex-col items-center gap-1">
                          <img 
                            src={match.teamInfo[0].img} 
                            alt={match.teamInfo[0].shortname}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-team.png';
                            }}
                          />
                          <span className="text-xs font-semibold text-slate-700">{match.teamInfo[0].shortname}</span>
                        </div>
                        <span className="text-lg font-bold text-slate-400">VS</span>
                        <div className="flex flex-col items-center gap-1">
                          <img 
                            src={match.teamInfo[1].img} 
                            alt={match.teamInfo[1].shortname}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-team.png';
                            }}
                          />
                          <span className="text-xs font-semibold text-slate-700">{match.teamInfo[1].shortname}</span>
                        </div>
                      </div>
                    )}
                    
                    <Link href={`/matches`}>
                      <Button variant="outline" className="w-full border-2 border-slate-300 hover:border-slate-600">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/matches">
                <Button variant="outline" size="lg" className="border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white font-semibold">
                  View All Results
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PLATFORM STATISTICS - REAL DATA ONLY */}
      {totalUsers > 0 && (
        <section className="py-12 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <Users className="h-10 w-10 mx-auto mb-2 opacity-90" />
                <div className="text-3xl font-black mb-1">{totalUsers}</div>
                <div className="text-sm font-medium opacity-90">Active Players</div>
              </div>
              <div>
                <Trophy className="h-10 w-10 mx-auto mb-2 opacity-90" />
                <div className="text-3xl font-black mb-1">{allMatches.length}</div>
                <div className="text-sm font-medium opacity-90">Available Matches</div>
              </div>
              <div>
                <TrendingUp className="h-10 w-10 mx-auto mb-2 opacity-90" />
                <div className="text-3xl font-black mb-1">{liveMatches.length}</div>
                <div className="text-sm font-medium opacity-90">Live Matches Now</div>
              </div>
              <div>
                <Shield className="h-10 w-10 mx-auto mb-2 opacity-90" />
                <div className="text-3xl font-black mb-1">100%</div>
                <div className="text-sm font-medium opacity-90">Free Forever</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURES SECTION WITH BACKGROUND */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/features-bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              {t.features.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 border-teal-100 hover:border-teal-600 transition-all hover:shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.freeToPlay.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.freeToPlay.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-blue-100 hover:border-blue-600 transition-all hover:shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.learnImprove.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.learnImprove.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-purple-100 hover:border-purple-600 transition-all hover:shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.realTimeUpdates.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.realTimeUpdates.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 border-orange-100 hover:border-orange-600 transition-all hover:shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Trophy className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.compete.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.compete.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 border-green-100 hover:border-green-600 transition-all hover:shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.safeSec.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.safeSec.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 border-pink-100 hover:border-pink-600 transition-all hover:shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Smile className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.entertainment.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.entertainment.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION WITH IMAGES */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/how-it-works-bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 to-teal-50/95"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-100 hover:border-teal-600 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 mx-auto shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{t.howItWorks.step1Title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {t.howItWorks.step1Description}
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-teal-600" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-600 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 mx-auto shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{t.howItWorks.step2Title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {t.howItWorks.step2Description}
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-600 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 mx-auto shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{t.howItWorks.step3Title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {t.howItWorks.step3Description}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Guide with Real Images */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="relative group">
              <img 
                src="/player-batting.jpg" 
                alt="Cricket Player" 
                className="rounded-xl shadow-lg w-full h-48 object-cover border-4 border-white group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4">
                <p className="text-white font-bold text-sm">Select Your Players</p>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="/stadium-night.jpg" 
                alt="Cricket Stadium" 
                className="rounded-xl shadow-lg w-full h-48 object-cover border-4 border-white group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4">
                <p className="text-white font-bold text-sm">Watch Live Matches</p>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="/team-celebration.jpg" 
                alt="Team Celebration" 
                className="rounded-xl shadow-lg w-full h-48 object-cover border-4 border-white group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4">
                <p className="text-white font-bold text-sm">Climb the Leaderboard</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/register">
              <Button size="lg" className="btn-brand text-lg px-10 py-6 shadow-xl">
                <Play className="mr-2 h-5 w-5" />
                Start Playing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & SECURITY SECTION */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              SAFE & LEGAL
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Trusted & Compliant Platform
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your security and legal compliance are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Trust Badge 1 */}
            <Card className="border-2 border-green-100 hover:border-green-600 transition-all text-center bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% Secure</h3>
                <p className="text-sm text-slate-600">
                  Your data is encrypted and protected with industry-standard security
                </p>
              </CardContent>
            </Card>

            {/* Trust Badge 2 */}
            <Card className="border-2 border-blue-100 hover:border-blue-600 transition-all text-center bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Legally Compliant</h3>
                <p className="text-sm text-slate-600">
                  Registered company following all Indian regulations and guidelines
                </p>
              </CardContent>
            </Card>

            {/* Trust Badge 3 */}
            <Card className="border-2 border-purple-100 hover:border-purple-600 transition-all text-center bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <UserCheck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Age Verified</h3>
                <p className="text-sm text-slate-600">
                  Strict 18+ age verification to ensure responsible participation
                </p>
              </CardContent>
            </Card>

            {/* Trust Badge 4 */}
            <Card className="border-2 border-orange-100 hover:border-orange-600 transition-all text-center bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Registered Company</h3>
                <p className="text-sm text-slate-600">
                  WHITEHAT INFOTECH PVT LTD - CIN: U72300UP2015PTC073049
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Info */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-8">
                <div className="text-center">
                  <Globe className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">WHITEHAT INFOTECH PRIVATE LIMITED</h3>
                  <p className="text-slate-600 mb-4">
                    A registered Indian company committed to providing free, educational fantasy cricket experiences
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">CIN Number</p>
                        <p className="text-sm text-slate-600 font-mono">U72300UP2015PTC073049</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Registered Office</p>
                        <p className="text-sm text-slate-600">308, BAKHTAVAR STREET, HATHRAS - 204101, UP, INDIA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY WE'RE 100% FREE SECTION */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              {t.footer.missionLabel}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              {t.whyFree.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.whyFree.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Reason 1 */}
            <Card className="border-2 border-teal-100 bg-gradient-to-br from-teal-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t.whyFree.educationTitle}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t.whyFree.educationDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reason 2 */}
            <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t.whyFree.noPressureTitle}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t.whyFree.noPressureDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reason 3 */}
            <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Pure Entertainment</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Fantasy cricket is meant to be fun! We keep it that way by removing the financial element and focusing on pure enjoyment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reason 4 */}
            <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t.whyFree.skillTitle}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t.whyFree.skillDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="h-16 w-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t.cta.readyTitle}
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              {t.cta.readySubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-10 py-6 font-bold shadow-xl">
                  <Zap className="mr-2 h-5 w-5" />
                  Register Now - It's Free!
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 font-bold">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn How to Play
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>{t.cta.noCreditCard}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>{t.cta.noHiddenFees}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>{t.cta.freeForever}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
