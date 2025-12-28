import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle2, XCircle } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 gradient-cricket text-white">
          <div className="container text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fair Play Policy</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ensuring a level playing field for all users
            </p>
          </div>
        </section>

        {/* Fair Play Content */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <Card className="glossy-card mb-8">
              <CardContent className="pt-8">
                <p className="text-lg text-muted-foreground">
                  At WHITEHAT Fantasy Cricket, we are committed to maintaining a fair, transparent, and enjoyable environment for all users. Our Fair Play Policy ensures that everyone has an equal opportunity to succeed based on their cricket knowledge and strategic skills.
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card">
              <CardContent className="pt-8 prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to Fair Play</h2>
                <p className="text-muted-foreground">
                  We believe that fantasy cricket should be a test of skill, knowledge, and strategy—not luck or unfair advantages. We are dedicated to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
                  <li>Providing equal opportunities for all users</li>
                  <li>Maintaining transparent scoring systems</li>
                  <li>Preventing cheating and manipulation</li>
                  <li>Protecting the integrity of the platform</li>
                  <li>Creating a positive community environment</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Acceptable Behavior</h2>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">One Account Per Person</h3>
                      <p className="text-muted-foreground text-sm">
                        Each user is allowed only one account. Creating multiple accounts is strictly prohibited.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Honest Information</h3>
                      <p className="text-muted-foreground text-sm">
                        Provide accurate and truthful information during registration and gameplay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Respectful Conduct</h3>
                      <p className="text-muted-foreground text-sm">
                        Treat other users, support staff, and the platform with respect and courtesy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Fair Competition</h3>
                      <p className="text-muted-foreground text-sm">
                        Compete based on your cricket knowledge and strategic skills without attempting to gain unfair advantages.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Report Violations</h3>
                      <p className="text-muted-foreground text-sm">
                        Report any suspicious activity or violations of fair play to our support team.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Prohibited Activities</h2>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Multiple Accounts</h3>
                      <p className="text-muted-foreground text-sm">
                        Creating or using multiple accounts to gain unfair advantages or manipulate leaderboards.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Automated Tools</h3>
                      <p className="text-muted-foreground text-sm">
                        Using bots, scripts, or any automated tools to access or interact with the platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">System Exploitation</h3>
                      <p className="text-muted-foreground text-sm">
                        Attempting to exploit bugs, glitches, or vulnerabilities in the platform for personal gain.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Collusion</h3>
                      <p className="text-muted-foreground text-sm">
                        Coordinating with other users to manipulate results or gain unfair advantages.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Account Sharing</h3>
                      <p className="text-muted-foreground text-sm">
                        Sharing your account credentials with others or accessing someone else's account.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Harassment</h3>
                      <p className="text-muted-foreground text-sm">
                        Harassing, threatening, or abusing other users through any means.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">False Information</h3>
                      <p className="text-muted-foreground text-sm">
                        Providing false personal information, especially age and state of residence.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Transparent Scoring System</h2>
                <p className="text-muted-foreground">
                  Our scoring system is completely transparent and based on official cricket data:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Points are calculated automatically from live match data via our Cricket API</li>
                  <li>All scoring rules are publicly available on the "How To Play" page</li>
                  <li>No manual intervention or favoritism in point calculation</li>
                  <li>Real-time updates ensure accuracy and fairness</li>
                  <li>Any scoring errors are investigated and corrected promptly</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Enforcement & Penalties</h2>
                <p className="text-muted-foreground">
                  Violations of this Fair Play Policy will result in appropriate action:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>First Offense:</strong> Warning and removal of unfair advantages</li>
                  <li><strong>Second Offense:</strong> Temporary account suspension (7-30 days)</li>
                  <li><strong>Serious/Repeated Offenses:</strong> Permanent account ban</li>
                  <li><strong>Fraudulent Activity:</strong> Immediate permanent ban and possible legal action</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All enforcement decisions are made at our sole discretion after thorough investigation. Users have the right to appeal decisions by contacting our support team.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Reporting Violations</h2>
                <p className="text-muted-foreground">
                  If you suspect any user of violating our Fair Play Policy, please report it immediately:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Email: support@whitehatinfotech.com</li>
                  <li>Subject: "Fair Play Violation Report"</li>
                  <li>Include: User details, description of violation, and any evidence</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All reports are treated confidentially and investigated thoroughly. We appreciate your help in maintaining a fair platform for everyone.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Our Monitoring Systems</h2>
                <p className="text-muted-foreground">
                  We employ various systems to detect and prevent unfair play:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Automated detection of multiple accounts from same device/IP</li>
                  <li>Pattern analysis to identify suspicious behavior</li>
                  <li>Regular audits of leaderboard rankings</li>
                  <li>User activity monitoring for unusual patterns</li>
                  <li>Community reporting system</li>
                </ul>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Our Promise
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We are committed to maintaining the highest standards of fair play. Every user deserves an equal opportunity to succeed based on their skills and knowledge. By using our platform, you agree to uphold these values and help us create a positive, fair, and enjoyable fantasy cricket community.
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-6">
                  <p className="text-sm">
                    <strong>Questions about Fair Play?</strong><br />
                    Contact us at support@whitehatinfotech.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
