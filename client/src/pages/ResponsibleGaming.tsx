import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, AlertCircle } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 gradient-cricket text-white">
          <div className="container text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Responsible Gaming</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Play smart, play safe, play for fun
            </p>
          </div>
        </section>

        {/* Responsible Gaming Content */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <Card className="glossy-card mb-8">
              <CardContent className="pt-8">
                <p className="text-lg text-muted-foreground">
                  At WHITEHAT Fantasy Cricket, we are committed to promoting responsible gaming practices. While our platform is completely free-to-play with no real money involved, we believe in fostering healthy gaming habits and ensuring that fantasy cricket remains a fun, educational, and positive experience for all users.
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card">
              <CardContent className="pt-8 prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  We are dedicated to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
                  <li>Providing a safe and healthy gaming environment</li>
                  <li>Promoting balanced and moderate platform usage</li>
                  <li>Educating users about responsible gaming practices</li>
                  <li>Preventing excessive or compulsive gaming behavior</li>
                  <li>Supporting users who may need help</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">What is Responsible Gaming?</h2>
                <p className="text-muted-foreground">
                  Responsible gaming means enjoying fantasy cricket in a balanced, controlled manner that doesn't negatively impact your daily life, relationships, work, or well-being. It's about:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Playing for entertainment and skill development, not as an escape</li>
                  <li>Setting time limits and sticking to them</li>
                  <li>Maintaining a healthy balance between gaming and other activities</li>
                  <li>Being aware of your gaming habits and their impact</li>
                  <li>Knowing when to take a break</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Guidelines for Healthy Gaming</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">1. Set Time Limits</h3>
                <p className="text-muted-foreground">
                  Decide in advance how much time you'll spend on the platform each day or week. Use timers or reminders to help you stick to your limits. Fantasy cricket should be one of many activities in your life, not the only one.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">2. Take Regular Breaks</h3>
                <p className="text-muted-foreground">
                  Step away from the platform regularly. Take breaks during long gaming sessions. Use break time to stretch, move around, or engage in other activities. Your eyes, body, and mind will thank you.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">3. Keep Perspective</h3>
                <p className="text-muted-foreground">
                  Remember that this is a game for entertainment and learning. Winning or losing doesn't define your worth. Don't let leaderboard rankings affect your mood or self-esteem. It's just for fun!
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">4. Balance Your Life</h3>
                <p className="text-muted-foreground">
                  Maintain a healthy balance between fantasy cricket and other important aspects of your life: family, friends, work, education, exercise, and hobbies. If gaming starts interfering with these, it's time to reassess.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">5. Play for the Right Reasons</h3>
                <p className="text-muted-foreground">
                  Play because you enjoy cricket, want to learn strategy, and have fun—not to escape problems or cope with stress. If you find yourself using gaming as an escape mechanism, consider seeking support.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Warning Signs</h2>
                <p className="text-muted-foreground">
                  Be aware of these warning signs that may indicate unhealthy gaming habits:
                </p>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-4">
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Spending excessive time on the platform (several hours daily)</li>
                    <li>Neglecting work, studies, or personal responsibilities</li>
                    <li>Losing sleep or changing sleep patterns to play</li>
                    <li>Feeling irritable or restless when not playing</li>
                    <li>Lying to family or friends about time spent gaming</li>
                    <li>Using gaming to escape from real-life problems</li>
                    <li>Experiencing mood swings based on game performance</li>
                    <li>Withdrawing from social activities or relationships</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  If you recognize these signs in yourself or someone you know, it may be time to seek help or take a break from the platform.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Self-Assessment Questions</h2>
                <p className="text-muted-foreground mb-4">
                  Ask yourself these questions honestly:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Do I play more than I initially intended?</li>
                  <li>Have I neglected important tasks to play?</li>
                  <li>Do I feel anxious or upset when I can't play?</li>
                  <li>Has my gaming affected my relationships?</li>
                  <li>Do I play to avoid dealing with problems?</li>
                  <li>Have friends or family expressed concern about my gaming?</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  If you answered "yes" to several of these questions, consider taking a break and reassessing your gaming habits.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Taking Control</h2>
                <p className="text-muted-foreground">
                  If you're concerned about your gaming habits, here are steps you can take:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Take a Break:</strong> Step away from the platform for a few days or weeks</li>
                  <li><strong>Set Strict Limits:</strong> Use app timers or website blockers to enforce time limits</li>
                  <li><strong>Find Alternatives:</strong> Engage in other hobbies and activities</li>
                  <li><strong>Talk to Someone:</strong> Share your concerns with trusted friends or family</li>
                  <li><strong>Seek Professional Help:</strong> Contact a counselor or therapist if needed</li>
                  <li><strong>Delete Your Account:</strong> If necessary, request account deletion through our support team</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">For Parents & Guardians</h2>
                <p className="text-muted-foreground">
                  While our platform requires users to be 18+, we encourage parents and guardians to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Monitor your adult children's gaming habits</li>
                  <li>Have open conversations about responsible gaming</li>
                  <li>Encourage balanced lifestyle with varied activities</li>
                  <li>Watch for warning signs of excessive gaming</li>
                  <li>Provide support if gaming becomes problematic</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Our Platform Features</h2>
                <p className="text-muted-foreground">
                  To support responsible gaming, our platform:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Is completely free with no financial risk</li>
                  <li>Requires age verification (18+ only)</li>
                  <li>Complies with state regulations</li>
                  <li>Provides educational content about cricket strategy</li>
                  <li>Offers easy account deletion options</li>
                  <li>Does not encourage excessive play or competition</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Getting Help</h2>
                <p className="text-muted-foreground">
                  If you or someone you know needs help with gaming-related issues:
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                  <h3 className="font-semibold mb-3">Support Resources</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>National Helpline for Mental Health:</strong> 1800-599-0019 (India)</li>
                    <li><strong>NIMHANS Helpline:</strong> 080-46110007 (India)</li>
                    <li><strong>Our Support Email:</strong> support@whitehatinfotech.com</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Don't hesitate to reach out. Seeking help is a sign of strength, not weakness.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg mt-8">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Remember
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fantasy cricket is meant to be fun, educational, and entertaining. It should enhance your life, not control it. Play responsibly, stay balanced, and enjoy the game in a healthy way. If at any point you feel that gaming is negatively affecting your life, take a step back and seek support.
                  </p>
                </div>

                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
                  <p className="text-sm flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Important:</strong> This platform is for entertainment and education only. It is not a substitute for professional advice, diagnosis, or treatment of any health condition. If you're experiencing serious mental health issues, please consult a qualified healthcare professional.
                    </span>
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
