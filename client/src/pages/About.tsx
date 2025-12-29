import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Heart, Shield, Users, TrendingUp, Award, CheckCircle2, Sparkles, BarChart3, Lock, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/about-hero.webp)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-teal-900/80 to-purple-900/80"></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-semibold tracking-wider uppercase">Est. 2015 • 100% Free to Play</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent">
              About WHITEHAT
            </h1>
            <p className="text-2xl md:text-4xl leading-relaxed font-bold drop-shadow-lg mb-8">
              India's Premier Free-to-Play Fantasy Cricket Platform
            </p>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200">
              Empowering millions of cricket fans with knowledge, strategy, and pure entertainment—without any financial risk. Play smart, play free, play fair.
            </p>
            
            {/* Stats Banner */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-black text-teal-300 mb-2">10+</div>
                <div className="text-sm md:text-base text-gray-200">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-black text-purple-300 mb-2">100%</div>
                <div className="text-sm md:text-base text-gray-200">Free to Play</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-black text-orange-300 mb-2">24/7</div>
                <div className="text-sm md:text-base text-gray-200">Live Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Legal & Company Information</h2>
              <p className="text-lg text-slate-600">Registered and compliant with all Indian regulations</p>
            </div>
            
            <Card className="border-2 border-teal-100 shadow-2xl bg-gradient-to-br from-white to-teal-50/30">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-4">
                  WHITEHAT INFOTECH PRIVATE LIMITED
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-teal-600" />
                      </div>
                      <p className="font-bold text-slate-900 text-lg">Company Registration</p>
                    </div>
                    <p className="text-slate-600 font-mono">CIN: U72300UP2015PTC073049</p>
                  </div>
                  
                  <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Award className="h-5 w-5 text-orange-600" />
                      </div>
                      <p className="font-bold text-slate-900 text-lg">PAN Number</p>
                    </div>
                    <p className="text-slate-600 font-mono">AABCW6952B</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="font-bold text-slate-900 text-lg">Head Office</p>
                  </div>
                  <p className="text-slate-600">308, BAKHTAVAR STREET, HATHRAS, HATHRAS - 204101, Uttar Pradesh, INDIA</p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-pink-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-pink-600" />
                    </div>
                    <p className="font-bold text-slate-900 text-lg">Official Website</p>
                  </div>
                  <p>
                    <a href="https://whitehatinfotech.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-semibold underline text-lg">
                      whitehatinfotech.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Story</h2>
              <p className="text-xl text-slate-600">A decade of passion, innovation, and commitment to cricket fans</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">The Beginning (2015)</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Founded by passionate cricket enthusiasts who believed that fantasy cricket should be about skill and knowledge—not gambling. We started with a simple mission: make fantasy cricket accessible to everyone, completely free.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">The Growth (2016-2020)</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      As fantasy sports exploded in India, we remained committed to our free-to-play model. While others focused on real money gaming, we built a platform that prioritizes education, strategy, and pure cricket enjoyment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Today & Beyond (2021-Present)</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      We continue to innovate with real-time match data, advanced analytics, and a vibrant community of cricket fans. Our platform has become a trusted space for learning cricket strategy without financial pressure.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-teal-500 to-teal-600 border-none shadow-xl text-white">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-black mb-4">Why We're Different</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">100% free—no hidden costs, no real money, no pressure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">Educational focus—learn cricket strategy and player analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">Fully compliant—age-verified, state-compliant, transparent</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">Real-time data—live scores, player stats, match updates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">Fair play—transparent algorithms, no manipulation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-500 to-pink-600 border-none shadow-xl text-white">
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-black mb-4">Our Promise</h3>
                    <p className="text-lg leading-relaxed">
                      We promise to always keep our platform 100% free, safe, and educational. Your trust is our most valuable asset, and we're committed to maintaining the highest standards of integrity and transparency.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-teal-900/30 to-slate-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Mission & Vision</h2>
            <p className="text-xl text-gray-300">Guiding principles that drive everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-teal-500 to-teal-600 border-none shadow-2xl hover:shadow-teal-500/50 transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="h-20 w-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-4xl font-black text-white mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl leading-relaxed text-white/95 font-medium mb-6">
                  To provide a completely free, educational fantasy cricket platform that allows users to enjoy the thrill of fantasy sports without any financial risk or pressure.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Democratize access to fantasy cricket</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Promote cricket knowledge and strategy</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Build a safe, responsible gaming community</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-none shadow-2xl hover:shadow-purple-500/50 transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="h-20 w-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-4xl font-black text-white mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl leading-relaxed text-white/95 font-medium mb-6">
                  To become India's most trusted free-to-play fantasy cricket platform, promoting cricket knowledge and strategic thinking among fans of all ages.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Be the #1 free fantasy cricket platform</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Reach millions of cricket enthusiasts</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Set industry standards for responsible gaming</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values - Enhanced */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">The principles that define who we are and how we operate</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="glossy-card border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50 hover:-translate-y-2 transition-all group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-2">Free to Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  100% free platform with no hidden costs, no real money involved, and no pressure to spend. Cricket enjoyment should never come with a price tag.
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:-translate-y-2 transition-all group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-2">Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  Age-verified (18+) with full state compliance, robust data protection, and transparent privacy policies. Your safety is our priority.
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50 hover:-translate-y-2 transition-all group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-2">Educational</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  Learn cricket strategy, player analysis, and match dynamics without pressure. Improve your cricket knowledge while having fun.
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50 hover:-translate-y-2 transition-all group">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 mb-2">Fair Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  Transparent, fair, and ethical platform for all cricket enthusiasts. No manipulation, no bias—just pure cricket strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Platform Features</h2>
            <p className="text-xl text-slate-600">Advanced technology powering your fantasy cricket experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-2 border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Real-Time Match Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Live scores, ball-by-ball updates, and instant player statistics powered by reliable cricket APIs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Detailed player stats, performance trends, and historical data to help you make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Global Leaderboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Compete with thousands of cricket fans, track your rankings, and climb to the top of the leaderboard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-pink-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Secure Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Bank-grade encryption, secure authentication, and robust data protection for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Community Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Connect with fellow cricket enthusiasts, share strategies, and learn from the community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-purple-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Intuitive Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Clean, modern design with easy navigation—create teams, track matches, and view stats effortlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Commitment to You</h2>
              <p className="text-xl text-slate-600">What you can always expect from WHITEHAT</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Always Free</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We will never charge users to play. No hidden fees, no premium tiers, no real money gaming—ever.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Operations</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Clear rules, open algorithms, and honest communication. No hidden agendas or manipulative practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">User Privacy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Your data is yours. We never sell user information and maintain strict privacy standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Continuous Improvement</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Regular updates, new features, and platform enhancements based on user feedback.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Responsible Gaming</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Age verification, state compliance, and educational resources to promote healthy gaming habits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Dedicated support team ready to help with any questions, issues, or feedback you may have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Play?</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Join thousands of cricket fans already enjoying free fantasy cricket on WHITEHAT. No credit card required, no hidden costs—just pure cricket fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="inline-block px-8 py-4 bg-white text-teal-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl">
                Start Playing Free
              </a>
              <a href="/how-to-play" className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/20 transition-colors">
                Learn How to Play
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
