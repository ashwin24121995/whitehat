import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  UserPlus, 
  Calendar, 
  Users, 
  Trophy, 
  TrendingUp, 
  Award,
  CheckCircle2,
  Info
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/howtoplay-hero.webp)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-teal-900/70 to-black/80"></div>
          <div className="container text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">How To Play Fantasy Cricket</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Master the game in 4 simple steps! Build your dream team, compete with others, and climb the leaderboard—all for free.
            </p>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Quick Start Guide</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Step 1 */}
              <Card className="glossy-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <UserPlus className="h-6 w-6" />
                        Create Your Free Account
                      </CardTitle>
                      <CardDescription>Register in seconds and start your fantasy cricket journey</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Click on the "Register" button in the top right corner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fill in your basic details (name, email, date of birth, state)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>You must be 18+ years old to register</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Verify that you're not from a restricted state</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Create a strong password and agree to our terms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="glossy-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Calendar className="h-6 w-6" />
                        Select an Upcoming Match
                      </CardTitle>
                      <CardDescription>Choose from live and upcoming cricket matches</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Browse through the list of upcoming cricket matches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>View match details including teams, venue, and start time (IST)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>All match formats supported: T20, ODI, and Test matches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Click "Create Team" to start building your fantasy squad</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="glossy-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Users className="h-6 w-6" />
                        Build Your Dream Team
                      </CardTitle>
                      <CardDescription>Select 11 players strategically from both teams</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20">
                  <div className="space-y-4">
                    <p className="text-muted-foreground font-medium">Team Composition Rules:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Total Players:</strong> Select exactly 11 players</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Wicket-keepers:</strong> 1-2 players</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Batsmen:</strong> 3-5 players</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>All-rounders:</strong> 1-3 players</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Bowlers:</strong> 3-5 players</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Team Balance:</strong> Pick players from both competing teams</span>
                      </li>
                    </ul>
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        <strong>Pro Tip:</strong> Choose players based on recent form, pitch conditions, and head-to-head records for better results!
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="glossy-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Trophy className="h-6 w-6" />
                        Watch, Score & Compete
                      </CardTitle>
                      <CardDescription>Track your team's performance and climb the leaderboard</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Watch the live match and see your points update in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Earn points based on your players' actual performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Check the leaderboard to see your rank among all players</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Analyze your performance and improve your strategy for next match</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Scoring System */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Understanding the Scoring System</h2>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-muted-foreground mb-8">
                Points are awarded based on real-time player performance in the actual match. Here's how players earn points:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glossy-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Batting Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Run scored</span>
                        <span className="font-semibold">+1 point</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Boundary (4s)</span>
                        <span className="font-semibold">+1 point</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Over boundary (6s)</span>
                        <span className="font-semibold">+2 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Half-century (50)</span>
                        <span className="font-semibold">+8 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Century (100)</span>
                        <span className="font-semibold">+16 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Duck (out for 0)</span>
                        <span className="font-semibold text-destructive">-2 points</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glossy-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-secondary" />
                      Bowling Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Wicket</span>
                        <span className="font-semibold">+25 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Bonus (LBW/Bowled)</span>
                        <span className="font-semibold">+8 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>3 wicket haul</span>
                        <span className="font-semibold">+4 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>4 wicket haul</span>
                        <span className="font-semibold">+8 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>5 wicket haul</span>
                        <span className="font-semibold">+16 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Maiden over</span>
                        <span className="font-semibold">+12 points</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glossy-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-accent" />
                      Fielding Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Catch</span>
                        <span className="font-semibold">+8 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>3 catches</span>
                        <span className="font-semibold">+4 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Stumping</span>
                        <span className="font-semibold">+12 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Run out</span>
                        <span className="font-semibold">+6 points</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Direct hit run out</span>
                        <span className="font-semibold">+12 points</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-8">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Note:</strong> The scoring system is automatically calculated based on live match data from our Cricket API. All points are updated in real-time as the match progresses.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Tips & Strategies */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pro Tips & Strategies</h2>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle>Research is Key</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Study player statistics, recent form, pitch conditions, and weather forecasts before selecting your team. Knowledge is your biggest advantage!
                  </p>
                </CardContent>
              </Card>

              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle>Balance Your Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Don't pick all batsmen or all bowlers. A balanced team with good all-rounders often performs better across different match situations.
                  </p>
                </CardContent>
              </Card>

              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle>Pick In-Form Players</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Players in good form are more likely to perform well. Check recent match performances and choose players who are consistently scoring or taking wickets.
                  </p>
                </CardContent>
              </Card>

              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle>Consider Match Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Batting-friendly pitches favor batsmen, while bowling-friendly conditions favor bowlers. Adjust your team composition based on the venue and pitch report.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 gradient-stadium text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Play?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of cricket fans and start building your dream team today!
            </p>
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100">
                Register Now - It's Free!
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
