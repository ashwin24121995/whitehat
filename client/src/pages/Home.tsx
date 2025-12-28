import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Zap, Target, CheckCircle2, Trophy, Users, TrendingUp, Shield, 
  Calendar, Clock, Heart, Sparkles, Award, Play, ArrowRight,
  DollarSign, Lock, Smile, BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  // Fetch matches from Cricket API with auto-refresh for live matches
  const { data: matchesResponse, isLoading: matchesLoading } = trpc.matches.list.useQuery(
    undefined,
    {
      // Auto-refresh every 30 seconds if there are live matches
      refetchInterval: (data) => {
        const hasLiveMatches = data?.matches?.some(m => m.status === 'live');
        return hasLiveMatches ? 30000 : false; // 30 seconds for live, no refresh for others
      },
      // Keep previous data while refetching to avoid flickering
      refetchOnWindowFocus: false,
    }
  );
  
  const allMatches = matchesResponse?.matches || [];
  const liveMatches = allMatches.filter(m => m.matchType && m.status === "live") || [];
  const upcomingMatches = allMatches.filter(m => m.matchType && m.status === "upcoming").slice(0, 6) || [];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/20 to-white">
      <Header />
      
      {/* HERO SECTION */}
      <section 
        className="relative pt-24 pb-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-stadium-bg.jpg)',
        }}
      >
        {/* Light overlay for better text readability while showing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex gap-3">
                <div className="bg-white p-2.5 rounded-xl shadow-lg hover:scale-105 transition-transform border border-gray-100">
                  <img src="/badge-18plus.png" alt="18+" className="h-12 w-12" />
                </div>
                <div className="bg-white p-2.5 rounded-xl shadow-lg hover:scale-105 transition-transform border border-gray-100">
                  <img src="/badge-fairplay.png" alt="Fair Play" className="h-12 w-12" />
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
                  src="/hero-cricket-1.jpg" 
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
        <section className="py-12 bg-red-50">
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
        <section className="py-12 bg-red-50">
          <div className="container">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-bold text-sm uppercase">Live Now</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{t.matches.liveMatches}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {liveMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-lg transition-shadow border-2 border-red-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-red-600 uppercase">{match.matchType}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-red-600">LIVE</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{match.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{match.venue}</p>
                    
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
        <section className="py-16">
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
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Upcoming Matches
              </h2>
              <p className="text-lg text-slate-600">
                Choose your match and build your winning team
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200">
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
                  View All Matches
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* QUICK STATS BANNER */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <Users className="h-10 w-10 mx-auto mb-2 opacity-90" />
              <div className="text-3xl font-black mb-1">{t.joinUs.title}</div>
              <div className="text-sm font-medium opacity-90">{t.joinUs.subtitle}</div>
            </div>
            <div>
              <Trophy className="h-10 w-10 mx-auto mb-2 opacity-90" />
              <div className="text-3xl font-black mb-1">{t.joinUs.daily}</div>
              <div className="text-sm font-medium opacity-90">{t.joinUs.dailySubtitle}</div>
            </div>
            <div>
              <TrendingUp className="h-10 w-10 mx-auto mb-2 opacity-90" />
              <div className="text-3xl font-black mb-1">{t.joinUs.live}</div>
              <div className="text-sm font-medium opacity-90">{t.joinUs.liveSubtitle}</div>
            </div>
            <div>
              <Shield className="h-10 w-10 mx-auto mb-2 opacity-90" />
              <div className="text-3xl font-black mb-1">{t.joinUs.secure}</div>
              <div className="text-sm font-medium opacity-90">{t.joinUs.secureSubtitle}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              {t.features.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 border-teal-100 hover:border-teal-600 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.freeToPlay.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.freeToPlay.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-blue-100 hover:border-blue-600 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.learnImprove.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.learnImprove.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-purple-100 hover:border-purple-600 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.realTimeUpdates.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.realTimeUpdates.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 border-orange-100 hover:border-orange-600 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.compete.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.compete.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 border-green-100 hover:border-green-600 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.features.safeSec.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.features.safeSec.description}
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 border-pink-100 hover:border-pink-600 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Smile className="h-7 w-7 text-pink-600" />
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

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-100 hover:border-teal-600 transition-all">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{t.howItWorks.step1Title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {t.howItWorks.step1Description}
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-teal-600" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-600 transition-all">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{t.howItWorks.step2Title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {t.howItWorks.step2Description}
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100 hover:border-purple-600 transition-all">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{t.howItWorks.step3Title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {t.howItWorks.step3Description}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/register">
              <Button size="lg" className="btn-brand text-lg px-10 py-6">
                <Play className="mr-2 h-5 w-5" />
                Start Playing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY WE'RE 100% FREE SECTION */}
      <section className="py-16 bg-white">
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
            <p className="text-lg text-slate-600 max-w-3xl mx-auto d-none">
              We believe fantasy cricket should be accessible to everyone. Our investors share our vision of fantasy education without financial barriers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Reason 1 */}
            <Card className="border-2 border-teal-100 bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
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
            <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
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
            <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
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
            <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t.cta.readyTitle}
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              {t.cta.readySubtitle}
            </p>
            <p className="text-xl md:text-2xl mb-8 opacity-95 d-none">
              Start enjoying free fantasy cricket today. No payment, no risk, just pure fun!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-10 py-6 font-bold">
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

            <div className="mt-10 flex items-center justify-center gap-8 text-sm opacity-90">
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
