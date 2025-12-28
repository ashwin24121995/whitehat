import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Search, BookOpen, Shield, Trophy, Settings, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "Getting Started",
      icon: BookOpen,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      questions: [
        {
          q: "What is WHITEHAT Fantasy Cricket?",
          a: "WHITEHAT Fantasy Cricket is India's premier free-to-play fantasy cricket platform where you can create virtual teams of real cricket players and earn points based on their actual performance in live matches. It's purely for entertainment and education, with absolutely no real money involved. Our platform is designed to help cricket fans improve their knowledge of the game, understand player statistics, and develop strategic thinking—all without any financial risk or pressure."
        },
        {
          q: "Is it really free? Are there any hidden charges?",
          a: "Yes, it's 100% free—forever! There are no hidden charges, no deposits required, no withdrawal fees, no subscription costs, and absolutely no in-app purchases. You can play as much as you want without spending a single rupee. We are backed by investors who believe passionately in cricket education and want users to learn and enjoy fantasy cricket without any financial pressure. Our revenue model does not depend on user payments, which means you can focus purely on the game."
        },
        {
          q: "How do I register on WHITEHAT?",
          a: "Registration is quick and simple! Click the 'Register' button in the top right corner of the homepage. Fill in your basic details including your full name, email address, date of birth, and state of residence. Create a strong password and agree to our Terms & Conditions and Privacy Policy. You must be 18+ years old and not from a restricted state to complete registration. Once registered, you'll receive a confirmation email and can immediately start creating fantasy teams!"
        },
        {
          q: "Which states are restricted from playing?",
          a: "Due to Indian government compliance and state-specific regulations regarding fantasy sports, this platform is NOT available in the following states: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. Users residing in these states cannot register or play on our platform. This restriction is in place to ensure full legal compliance with state laws. We apologize for any inconvenience and hope regulations change in the future to allow wider access."
        },
        {
          q: "Do I need to download an app?",
          a: "No app download required! WHITEHAT Fantasy Cricket is a fully web-based platform that works seamlessly on any device—desktop, laptop, tablet, or smartphone. Simply visit our website from any browser (Chrome, Firefox, Safari, Edge) and start playing. This means no storage space required, no app updates to worry about, and instant access from anywhere with an internet connection."
        }
      ]
    },
    {
      category: "Playing the Game",
      icon: Trophy,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      questions: [
        {
          q: "How do I create a fantasy team?",
          a: "Creating a fantasy team is easy and fun! After logging in, browse the list of upcoming cricket matches on your dashboard or the 'Matches' page. Select a match that interests you and click 'Create Team'. You'll see the full squad of both competing teams with player roles, recent form, and statistics. Choose exactly 11 players following the composition rules: 1-2 wicket-keepers, 3-5 batsmen, 1-3 all-rounders, and 3-5 bowlers. Make sure to pick players from both teams for a balanced squad. Once satisfied, click 'Save Team' and you're ready to compete!"
        },
        {
          q: "Can I create multiple teams for the same match?",
          a: "Currently, you can create one team per match. This design choice keeps the platform simple, fair, and focused on skill development rather than multiple entry strategies that can overwhelm new users. We want everyone to have an equal opportunity to compete, and limiting to one team per match ensures that success depends purely on cricket knowledge and strategic thinking, not on creating dozens of team variations."
        },
        {
          q: "When is the deadline to create or edit my team?",
          a: "You can create or edit your fantasy team anytime before the match officially starts (first ball bowled). Once the match begins, all team changes are automatically locked to ensure fairness. The platform will show a countdown timer indicating how much time remains before the deadline. We recommend finalizing your team at least 15-30 minutes before the match starts to avoid last-minute technical issues or internet connectivity problems."
        },
        {
          q: "How are fantasy points calculated?",
          a: "Points are awarded based on real-time player performance in the actual cricket match. Batsmen earn points for runs scored (1 point per run), boundaries (4 runs = 1 bonus point, 6 runs = 2 bonus points), and milestones (50 runs = 8 bonus points, 100 runs = 16 bonus points). Bowlers earn points for wickets taken (25 points per wicket), maidens (12 points), and economy rate bonuses. Fielders earn points for catches (8 points), run-outs (12 points), and stumpings (12 points for wicket-keepers). The scoring system is fully transparent and automatically updated from live match data provided by our Cricket API. Check our 'How To Play' page for the complete detailed scoring breakdown."
        },
        {
          q: "Can I see live scores and points during the match?",
          a: "Absolutely! Once the match starts, you can track your team's performance in real-time on your dashboard. Points are updated automatically every 30-60 seconds as players perform in the actual match. You'll see individual player scores, your total team points, and your current rank on the leaderboard. This live tracking makes the experience exciting and engaging, allowing you to cheer for your selected players as they perform!"
        },
        {
          q: "What happens if a player I selected doesn't play in the match?",
          a: "If a player you selected is not included in the playing XI (doesn't play in the match), they will score 0 points. This is why it's important to check team news, injury updates, and probable playing XIs before finalizing your team. We recommend checking official team announcements and cricket news websites close to match time to ensure your selected players are likely to play."
        },
        {
          q: "Can I change my team after the match starts?",
          a: "No, once the match officially begins (first ball bowled), all teams are locked and no changes can be made. This ensures fairness for all participants. Everyone competes with the teams they created before the deadline, making it a true test of pre-match analysis and strategic planning."
        }
      ]
    },
    {
      category: "Leaderboard & Rankings",
      icon: Trophy,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      questions: [
        {
          q: "How does the leaderboard work?",
          a: "The leaderboard ranks all users based on their total fantasy points earned for each match. Users with the highest points appear at the top of the leaderboard. The ranking is updated in real-time as the match progresses and points are calculated. You can view your current rank, total points, and see how you compare with other players. The leaderboard is match-specific, meaning each match has its own separate ranking."
        },
        {
          q: "What do I win if I'm at the top of the leaderboard?",
          a: "Since WHITEHAT is a free-to-play educational platform with no real money involved, there are no cash prizes, monetary rewards, or physical gifts for topping the leaderboard. The leaderboard is purely for recognition, bragging rights, and celebrating your cricket knowledge and strategic skills! Your name and rank are displayed publicly (if you choose), allowing you to showcase your expertise to the community. The real reward is the satisfaction of outsmarting other cricket fans and improving your game analysis skills."
        },
        {
          q: "Is there a global leaderboard or match-specific leaderboard?",
          a: "We have match-specific leaderboards where you compete with all users who created teams for that particular match. This ensures fair competition since everyone is analyzing the same match conditions, pitch, weather, and team combinations. Additionally, we offer time-based filters (All Time, This Week, This Month) so you can see your performance over different periods and track your improvement over time."
        },
        {
          q: "How is my rank calculated if multiple users have the same points?",
          a: "If multiple users have the exact same total points, the tiebreaker is determined by the timestamp of team creation. The user who created their team earlier will be ranked higher. This encourages users to finalize their teams early and rewards decisive strategic thinking."
        },
        {
          q: "Can I see other users' teams?",
          a: "Currently, you can only see your own team and the leaderboard rankings. Other users' team compositions are private to maintain competitive integrity and prevent copying strategies. After the match ends, you can analyze your own performance and learn from your decisions for future matches."
        }
      ]
    },
    {
      category: "Account & Security",
      icon: Shield,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      questions: [
        {
          q: "How do I reset my password if I forget it?",
          a: "If you forget your password, click 'Forgot Password' on the login page. Enter your registered email address, and you'll receive a password reset email within a few minutes. Click the reset link in the email (valid for 1 hour) and you'll be directed to a page where you can create a new password. Make sure to choose a strong password with a mix of uppercase, lowercase, numbers, and special characters. If you don't receive the email, check your spam/junk folder or contact our support team."
        },
        {
          q: "Is my personal information safe and secure?",
          a: "Absolutely! We take data security very seriously. We use industry-standard encryption (SSL/TLS) to protect all data transmitted between your device and our servers. Your password is hashed using bcrypt, meaning even we cannot see your actual password. We never ask for payment information, bank details, credit card numbers, or any sensitive financial data. Your email and personal details are stored securely in our database and are never shared with third parties, sold to advertisers, or used for any purpose other than platform functionality. We comply with all applicable data protection laws and regulations."
        },
        {
          q: "Can I delete my account permanently?",
          a: "Yes, you have the right to delete your account at any time. To request account deletion, contact our support team through the 'Contact Us' page or email us directly. We'll process your request within 7 business days and permanently delete your account and all associated personal data from our systems. Please note that account deletion is irreversible—you will lose all your team history, points, and leaderboard rankings. If you wish to play again in the future, you'll need to create a new account."
        },
        {
          q: "Why do you need my date of birth and state information?",
          a: "We collect your date of birth to verify that you're 18+ years old, as required by Indian law for fantasy sports platforms. This age verification is mandatory to ensure responsible gaming and legal compliance. We need your state information to ensure compliance with state-specific regulations that restrict fantasy sports platforms in certain states (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana). This information is used solely for verification purposes and is never shared publicly or with third parties."
        },
        {
          q: "Can I change my email address or state after registration?",
          a: "Yes, you can update your profile information including name, email, and phone number from the 'Profile Settings' page in your dashboard. However, changing your state is restricted because it's used for legal compliance verification. If you've genuinely relocated to a different state, please contact our support team with proof of residence, and we'll assist you with the update."
        },
        {
          q: "How do I enable two-factor authentication (2FA)?",
          a: "Currently, two-factor authentication is not available on the platform. However, we recommend using a strong, unique password and enabling password managers for added security. We're constantly improving our security features and may introduce 2FA in future updates."
        }
      ]
    },
    {
      category: "Technical Issues",
      icon: Settings,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      questions: [
        {
          q: "The website is loading slowly. What should I do?",
          a: "Slow loading can be caused by several factors. First, check your internet connection speed and stability. Try refreshing the page (Ctrl+R or Cmd+R) or clearing your browser cache and cookies. If the issue persists, try accessing the site from a different browser or device. During live matches, the site may experience higher traffic, which can temporarily slow performance. We continuously optimize our servers to handle peak loads, but occasional delays may occur during major cricket tournaments."
        },
        {
          q: "I'm not receiving emails from WHITEHAT. What should I do?",
          a: "If you're not receiving emails (registration confirmation, password reset, etc.), first check your spam/junk folder—automated emails sometimes get filtered incorrectly. Add our email domain to your safe sender list to ensure future emails reach your inbox. If you still don't receive emails, verify that you entered the correct email address during registration. You can update your email from the 'Profile Settings' page. If the problem continues, contact our support team for assistance."
        },
        {
          q: "My team didn't save properly. What happened?",
          a: "If your team didn't save, it's usually due to one of these reasons: (1) You didn't meet the team composition requirements (11 players total, correct role distribution), (2) The match deadline passed while you were creating your team, or (3) A temporary internet connectivity issue interrupted the save process. Always check for validation error messages on the team builder page. We recommend saving your team well before the match deadline to avoid last-minute issues."
        },
        {
          q: "The live scores aren't updating. Is there a problem?",
          a: "Live scores are automatically updated every 30-60 seconds from our Cricket API. If scores aren't updating, try refreshing the page. Occasionally, there may be delays in the API data feed during live matches, which is beyond our control. If the issue persists for more than 5 minutes, please report it to our support team. We monitor API uptime closely and work to resolve any data feed issues as quickly as possible."
        },
        {
          q: "Which browsers are supported?",
          a: "WHITEHAT Fantasy Cricket works best on modern browsers including Google Chrome (version 90+), Mozilla Firefox (version 88+), Safari (version 14+), and Microsoft Edge (version 90+). We recommend keeping your browser updated to the latest version for the best experience, security, and performance. The platform is fully responsive and works on mobile browsers as well."
        },
        {
          q: "I found a bug or error on the website. How do I report it?",
          a: "We appreciate your help in improving the platform! If you encounter a bug, error, or unexpected behavior, please contact us through the 'Contact Us' page with the following details: (1) Description of the issue, (2) Steps to reproduce the problem, (3) Browser and device you're using, (4) Screenshots if possible. Our technical team will investigate and work on a fix as soon as possible."
        }
      ]
    },
    {
      category: "Rules & Compliance",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      questions: [
        {
          q: "Is fantasy cricket legal in India?",
          a: "Yes, fantasy cricket is legal in most Indian states as it's considered a 'game of skill' rather than a 'game of chance' under Indian law. However, some states have specific regulations or restrictions. WHITEHAT Fantasy Cricket complies with all applicable laws and regulations. Since our platform is 100% free with no real money involved, it falls outside the scope of gambling regulations and is purely educational and recreational."
        },
        {
          q: "Why is the platform not available in certain states?",
          a: "Certain Indian states (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana) have enacted specific laws or regulations that restrict or prohibit fantasy sports platforms, even free-to-play ones. To ensure full legal compliance and avoid any regulatory issues, we have proactively restricted access from these states. We respect state laws and hope that regulations may change in the future to allow wider access."
        },
        {
          q: "Do I need to pay taxes on my fantasy cricket winnings?",
          a: "Since WHITEHAT Fantasy Cricket is a completely free-to-play platform with no cash prizes or monetary rewards, there are no winnings to report or taxes to pay. You're simply playing for fun, learning, and recognition. This is one of the key benefits of our free platform—no financial complications or tax implications whatsoever!"
        },
        {
          q: "What is your responsible gaming policy?",
          a: "Even though our platform involves no real money, we're committed to responsible gaming principles. We enforce an 18+ age restriction to ensure only adults participate. We encourage users to play for fun and education, not obsessively. If you feel you're spending too much time on the platform, we recommend taking breaks and maintaining a healthy balance. Fantasy cricket should enhance your enjoyment of the sport, not become a source of stress or addiction."
        },
        {
          q: "Can I use the platform for commercial purposes or betting?",
          a: "No. WHITEHAT Fantasy Cricket is strictly for personal, non-commercial, educational, and recreational use only. Using the platform for any form of gambling, betting, commercial purposes, or organizing paid contests is strictly prohibited and violates our Terms & Conditions. Any such activity will result in immediate account termination and may be reported to authorities."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/faq-hero.jpg)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/70 to-black/80"></div>
          <div className="container text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Find answers to common questions about WHITEHAT Fantasy Cricket
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="pl-12 h-14 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-12">
              {filteredFaqs.length === 0 ? (
                <Card className="p-12 text-center">
                  <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-xl text-muted-foreground">
                    No questions found matching "{searchQuery}". Try different keywords.
                  </p>
                </Card>
              ) : (
                filteredFaqs.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <Card key={idx} className="overflow-hidden border-2 shadow-lg">
                      <CardHeader className={`${category.bgColor} border-b-2`}>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                          <div className={`h-12 w-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${category.color}`} />
                          </div>
                          <span className={category.color}>{category.category}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, qIdx) => (
                            <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                                {faq.q}
                              </AccordionTrigger>
                              <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-4">
                                {faq.a}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
              Contact Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
