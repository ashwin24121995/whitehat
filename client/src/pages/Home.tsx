import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Trophy, Users, Shield, Zap, TrendingUp, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-cricket-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Play Fantasy Cricket <span className="text-accent">For Free</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Build your dream team, compete with friends, and climb the leaderboard. No real money, just pure cricket fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button size="lg" className="text-lg px-8 py-6 gradient-cricket">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/register">
                    <Button size="lg" className="text-lg px-8 py-6 gradient-cricket">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link href="/how-to-play">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">
                      How It Works
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <div className="mt-8 flex justify-center gap-6">
              <img src="/badge-18plus.png" alt="18+" className="h-16 w-16" />
              <img src="/badge-fairplay.png" alt="Fair Play" className="h-16 w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WHITEHAT Fantasy Cricket?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of fantasy cricket without any financial pressure. Learn, compete, and have fun!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glossy-card">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <CardTitle>100% Free to Play</CardTitle>
                <CardDescription>
                  No deposits, no withdrawals, no real money. Just pure fantasy cricket entertainment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glossy-card">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Build Your Team</CardTitle>
                <CardDescription>
                  Select 11 players from real matches and create your dream cricket team.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glossy-card">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Real-Time Scoring</CardTitle>
                <CardDescription>
                  Watch your points update live as the match progresses. Track every run and wicket!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glossy-card">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Leaderboards</CardTitle>
                <CardDescription>
                  Compete with other players and see your name on the leaderboard. Glory awaits!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glossy-card">
              <CardHeader>
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Fair Play Guaranteed</CardTitle>
                <CardDescription>
                  Transparent scoring system and strict fair play policies ensure everyone has a fair chance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glossy-card">
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Educational Platform</CardTitle>
                <CardDescription>
                  Learn cricket strategy, player analysis, and team building skills without any risk.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Register</h3>
              <p className="text-muted-foreground">Create your free account in seconds</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Select Match</h3>
              <p className="text-muted-foreground">Choose from upcoming cricket matches</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Build Team</h3>
              <p className="text-muted-foreground">Pick 11 players within your budget</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Compete</h3>
              <p className="text-muted-foreground">Watch live and climb the leaderboard</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-to-play">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-stadium text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Fantasy Cricket Journey?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of cricket fans already playing for free!
          </p>
          {!isAuthenticated && (
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100">
                Register Now - It's Free!
              </Button>
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
