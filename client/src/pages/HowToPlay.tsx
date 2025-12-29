import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Target, TrendingUp, CheckCircle2, Play, UserPlus, Calendar, Star, Award, BarChart3, Shield, Zap, Clock, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/howtoplay-hero.webp)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-teal-900/80 to-purple-900/80"></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold tracking-wider uppercase">Complete Beginner's Guide</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent">
              How To Play
            </h1>
            <p className="text-2xl md:text-4xl leading-relaxed font-bold drop-shadow-lg mb-8">
              Master Fantasy Cricket in 5 Simple Steps
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200">
              Learn how to create winning teams, score points, and climb the leaderboard. No experience needed—we'll guide you through everything!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">What is Fantasy Cricket?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Fantasy cricket is a skill-based online game where you create a virtual team of real cricket players. Your team earns points based on how those players perform in actual matches. The better your players perform, the more points you score!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50 hover:-translate-y-2 transition-all">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Create Your Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-slate-600 leading-relaxed">
                    Select 11 players from real cricket teams playing in upcoming matches
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50 hover:-translate-y-2 transition-all">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Earn Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-slate-600 leading-relaxed">
                    Your players earn points based on their real-life performance in the match
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:-translate-y-2 transition-all">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Climb Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-slate-600 leading-relaxed">
                    Compete with other players and climb the rankings to become the champion
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Step-by-Step Guide</h2>
              <p className="text-xl text-slate-600">Follow these simple steps to start playing fantasy cricket</p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center">
                          <UserPlus className="h-6 w-6 text-teal-600" />
                        </div>
                        <CardTitle className="text-3xl text-slate-900">Register & Login</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        Create your free WHITEHAT account in under 2 minutes. No credit card required, no hidden fees—just your basic information to get started.
                      </p>
                      <div className="bg-white rounded-lg p-6 border-l-4 border-teal-500">
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <Info className="h-5 w-5 text-teal-600" />
                          What You'll Need:
                        </h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                            <span>Full name and valid email address</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                            <span>Mobile number for account verification</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                            <span>Date of birth (must be 18+ years old)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                            <span>Select your state (for legal compliance)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <p className="text-sm text-teal-900">
                          <strong>Pro Tip:</strong> Use a strong password and keep your login credentials safe. We never ask for your password via email or phone.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-3xl text-slate-900">Choose a Match</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        Browse through upcoming cricket matches and select one you want to create a fantasy team for. We cover all major cricket tournaments and series!
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                          <h4 className="font-bold text-slate-900 mb-3">Match Information</h4>
                          <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Teams playing</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Match date & time</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Venue details</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Match format (T20, ODI, Test)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500">
                          <h4 className="font-bold text-slate-900 mb-3">What to Consider</h4>
                          <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-pink-600 flex-shrink-0" />
                              <span>Team form & recent performance</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-pink-600 flex-shrink-0" />
                              <span>Pitch conditions & weather</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-pink-600 flex-shrink-0" />
                              <span>Head-to-head records</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-pink-600 flex-shrink-0" />
                              <span>Player availability</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <p className="text-sm text-purple-900">
                          <strong>Pro Tip:</strong> Start with T20 matches—they're shorter, faster-paced, and perfect for beginners to learn fantasy cricket!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6 text-orange-600" />
                        </div>
                        <CardTitle className="text-3xl text-slate-900">Build Your Team</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        Select 11 players from both teams playing in the match. You must choose a balanced team with batsmen, bowlers, all-rounders, and a wicket-keeper.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                        <h4 className="font-bold text-slate-900 mb-4 text-xl">Team Composition Rules</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">1-4 Wicket-Keepers</p>
                              <p className="text-sm text-slate-600">At least one WK required</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">3-6 Batsmen</p>
                              <p className="text-sm text-slate-600">Core run-scorers</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">1-4 All-Rounders</p>
                              <p className="text-sm text-slate-600">Versatile players</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">3-6 Bowlers</p>
                              <p className="text-sm text-slate-600">Wicket-takers</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-orange-600" />
                          Captain & Vice-Captain
                        </h4>
                        <p className="text-slate-700 mb-3">
                          After selecting 11 players, you must choose a Captain and Vice-Captain:
                        </p>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span><strong>Captain</strong> earns <strong>2x points</strong> (double points)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span><strong>Vice-Captain</strong> earns <strong>1.5x points</strong></span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span>Choose players likely to perform well in the match</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <p className="text-sm text-orange-900">
                          <strong>Pro Tip:</strong> Pick players in good form, consider the pitch conditions, and balance your team between both sides. Don't load up on players from just one team!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-pink-600" />
                        </div>
                        <CardTitle className="text-3xl text-slate-900">Watch the Match</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        Once the match starts, sit back and watch your players perform! Your fantasy team will automatically earn points based on their real-life performance.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500">
                        <h4 className="font-bold text-slate-900 mb-3">Live Match Features</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-pink-600 flex-shrink-0" />
                            <span>Real-time score updates</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-pink-600 flex-shrink-0" />
                            <span>Live points tracking for your team</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-pink-600 flex-shrink-0" />
                            <span>Player-by-player performance breakdown</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-pink-600 flex-shrink-0" />
                            <span>Leaderboard position updates</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                        <p className="text-sm text-pink-900">
                          <strong>Pro Tip:</strong> You can't change your team once the match starts, so make sure you're happy with your selections before the first ball is bowled!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-xl">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Trophy className="h-6 w-6 text-teal-600" />
                        </div>
                        <CardTitle className="text-3xl text-slate-900">Check Results & Leaderboard</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        After the match ends, check your final score and see where you rank on the leaderboard. Learn from your performance and improve for the next match!
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-6 border-l-4 border-teal-500">
                          <h4 className="font-bold text-slate-900 mb-3">Your Results</h4>
                          <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                              <span>Total points scored</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                              <span>Player-wise breakdown</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                              <span>Captain/VC performance</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                              <span>Your leaderboard rank</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                          <h4 className="font-bold text-slate-900 mb-3">Learn & Improve</h4>
                          <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Analyze top performers</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Study winning strategies</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Understand player trends</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-purple-600 flex-shrink-0" />
                              <span>Refine your approach</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <p className="text-sm text-teal-900">
                          <strong>Pro Tip:</strong> Don't worry if you don't win your first match! Fantasy cricket is about learning and improving. Analyze what worked and what didn't, then apply those lessons to your next team.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Points System</h2>
              <p className="text-xl text-slate-600">Understand how your players earn points</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Batting Points */}
              <Card className="border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                    <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-teal-600" />
                    </div>
                    Batting Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Run scored</span>
                      <span className="font-bold text-teal-600">+1 point/run</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Boundary (4s)</span>
                      <span className="font-bold text-teal-600">+1 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Six (6s)</span>
                      <span className="font-bold text-teal-600">+2 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Half-century (50 runs)</span>
                      <span className="font-bold text-teal-600">+10 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Century (100 runs)</span>
                      <span className="font-bold text-teal-600">+20 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-700">Duck (out for 0)</span>
                      <span className="font-bold text-red-600">-5 points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bowling Points */}
              <Card className="border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-purple-600" />
                    </div>
                    Bowling Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Wicket taken</span>
                      <span className="font-bold text-purple-600">+25 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">3 wickets bonus</span>
                      <span className="font-bold text-purple-600">+10 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">5 wickets bonus</span>
                      <span className="font-bold text-purple-600">+20 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Maiden over</span>
                      <span className="font-bold text-purple-600">+10 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Economy rate bonus</span>
                      <span className="font-bold text-purple-600">+5 to +15</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-700">Dot ball</span>
                      <span className="font-bold text-purple-600">+1 point</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fielding Points */}
              <Card className="border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                    <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-orange-600" />
                    </div>
                    Fielding Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Catch taken</span>
                      <span className="font-bold text-orange-600">+10 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">3 catches bonus</span>
                      <span className="font-bold text-orange-600">+5 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Stumping</span>
                      <span className="font-bold text-orange-600">+15 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Run out (direct hit)</span>
                      <span className="font-bold text-orange-600">+15 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-700">Run out (assist)</span>
                      <span className="font-bold text-orange-600">+10 points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Points */}
              <Card className="border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                    <div className="h-10 w-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-pink-600" />
                    </div>
                    Other Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Playing 11 (selected)</span>
                      <span className="font-bold text-pink-600">+4 points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Captain bonus</span>
                      <span className="font-bold text-pink-600">2x points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Vice-Captain bonus</span>
                      <span className="font-bold text-pink-600">1.5x points</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                      <span className="text-slate-700">Player of the Match</span>
                      <span className="font-bold text-pink-600">+25 bonus</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-700">Strike rate bonus</span>
                      <span className="font-bold text-pink-600">+5 to +10</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl p-8 border-2 border-teal-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-teal-500 rounded-xl flex items-center justify-center">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Important Note</h3>
                  <p className="text-slate-700 leading-relaxed">
                    The points system may vary slightly based on match format (T20, ODI, Test). Always check the specific rules for each match before creating your team. The system is designed to reward all-round cricket performance—not just runs and wickets!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Strategies */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Pro Tips & Strategies</h2>
              <p className="text-xl text-slate-600">Expert advice to improve your fantasy cricket game</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-teal-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Research is Key</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Study recent form, head-to-head records, pitch conditions, and player injuries before selecting your team. Knowledge wins matches!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Balance Your Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Don't pick all players from one team. A balanced mix from both sides gives you more scoring opportunities throughout the match.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Captain Wisely</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Your captain choice is crucial (2x points!). Pick consistent performers or players in excellent form, not just star names.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Follow Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Track player performance trends, venue statistics, and weather conditions. Patterns often repeat in cricket!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-teal-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Pick All-Rounders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    All-rounders can score points through batting, bowling, and fielding—giving you multiple ways to earn points from one player.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Learn from Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Analyze your past teams—what worked, what didn't. Continuous improvement is the key to becoming a fantasy cricket champion!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold tracking-wider uppercase">Ready to Start?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Start Your Fantasy Cricket Journey Today!</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Now that you know how to play, it's time to create your first team and compete with thousands of cricket fans. 100% free, 100% fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl">
                <Play className="h-5 w-5" />
                Start Playing Now
              </a>
              <a href="/faq" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/20 transition-colors">
                <Info className="h-5 w-5" />
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
