import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is WHITEHAT Fantasy Cricket?",
          a: "WHITEHAT Fantasy Cricket is a completely free-to-play fantasy cricket platform where you can create virtual teams of real cricket players and earn points based on their actual performance in live matches. It's purely for entertainment and education, with no real money involved."
        },
        {
          q: "Is it really free? Are there any hidden charges?",
          a: "Yes, it's 100% free! There are no hidden charges, no deposits, no withdrawals, and no in-app purchases. You can play as much as you want without spending a single rupee. We are backed by investors who believe in cricket education and want users to learn without financial pressure."
        },
        {
          q: "How do I register?",
          a: "Click the 'Register' button in the top right corner, fill in your details (name, email, date of birth, state), create a password, and agree to our terms. You must be 18+ years old and not from a restricted state to register."
        },
        {
          q: "Which states are restricted?",
          a: "Due to government compliance, this platform is NOT available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. Users from these states cannot register or play."
        }
      ]
    },
    {
      category: "Playing the Game",
      questions: [
        {
          q: "How do I create a fantasy team?",
          a: "After logging in, browse upcoming matches, select a match, and click 'Create Team'. Choose 11 players from both competing teams following the composition rules: 1-2 wicket-keepers, 3-5 batsmen, 1-3 all-rounders, and 3-5 bowlers."
        },
        {
          q: "Can I create multiple teams for the same match?",
          a: "Currently, you can create one team per match. This keeps the platform simple and focused on skill development rather than multiple entry strategies."
        },
        {
          q: "When is the deadline to create or edit my team?",
          a: "You can create or edit your team until the match starts. Once the match begins, team changes are locked and points calculation starts based on live player performance."
        },
        {
          q: "How are points calculated?",
          a: "Points are awarded based on real-time player performance: runs scored, wickets taken, catches, stumpings, and more. The scoring system is transparent and automatically updated from live match data. Check our 'How To Play' page for detailed scoring rules."
        },
        {
          q: "Can I see live scores and points during the match?",
          a: "Yes! Once the match starts, you can track your team's performance in real-time. Points are updated automatically as players perform in the actual match."
        }
      ]
    },
    {
      category: "Leaderboard & Rankings",
      questions: [
        {
          q: "How does the leaderboard work?",
          a: "The leaderboard ranks all users based on their total fantasy points for each match. Users with the highest points appear at the top. You can view your rank and compare your performance with other players."
        },
        {
          q: "What do I win if I'm at the top of the leaderboard?",
          a: "Since this is a free-to-play educational platform, there are no cash prizes or rewards. The leaderboard is purely for recognition and bragging rights. Your name and rank are displayed to celebrate your cricket knowledge and strategic skills!"
        },
        {
          q: "Is there a global leaderboard or match-specific leaderboard?",
          a: "We have match-specific leaderboards where you compete with all users who created teams for that particular match. This ensures fair competition based on the same match conditions."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page, enter your registered email address, and you'll receive a password reset link. Follow the instructions in the email to create a new password."
        },
        {
          q: "Is my personal information safe?",
          a: "Absolutely! We use industry-standard security measures to protect your data. We never ask for payment information, bank details, or sensitive financial data. Your email and personal details are stored securely and never shared with third parties."
        },
        {
          q: "Can I delete my account?",
          a: "Yes, you can request account deletion by contacting our support team through the 'Contact Us' page. We'll process your request and permanently delete your account and associated data."
        },
        {
          q: "Why do you need my date of birth and state?",
          a: "We need your date of birth to verify that you're 18+ years old, as required by law. We need your state information to ensure compliance with state regulations that restrict fantasy sports platforms in certain states."
        }
      ]
    },
    {
      category: "Technical Issues",
      questions: [
        {
          q: "The website is not loading properly. What should I do?",
          a: "Try clearing your browser cache and cookies, or use a different browser. Make sure you have a stable internet connection. If the problem persists, contact our support team with details about your browser and device."
        },
        {
          q: "I can't see live scores updating. What's wrong?",
          a: "Live scores are fetched from our Cricket API in real-time. If scores aren't updating, refresh the page. If the issue continues, there might be a temporary API delay or maintenance. Please check back in a few minutes."
        },
        {
          q: "My team selection is not saving. Help!",
          a: "Ensure you've selected exactly 11 players following the composition rules. Make sure you're logged in and have a stable internet connection. If the problem persists, try logging out and logging back in."
        },
        {
          q: "Which browsers are supported?",
          a: "Our platform works best on the latest versions of Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. We recommend keeping your browser updated for the best experience."
        }
      ]
    },
    {
      category: "Rules & Compliance",
      questions: [
        {
          q: "Is fantasy cricket legal in India?",
          a: "Yes, fantasy cricket is recognized as a game of skill in India and is legal in most states. However, some states have specific regulations, which is why we restrict access from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana."
        },
        {
          q: "Why is there no real money involved?",
          a: "We are a free-to-play educational platform focused on helping users learn cricket strategy and team building without financial risk. Our investors support this vision of responsible gaming and cricket education."
        },
        {
          q: "What happens if I violate the fair play policy?",
          a: "Violations of our fair play policy (such as creating multiple accounts, cheating, or manipulating the system) will result in account suspension or permanent ban. We take fair play very seriously to ensure a level playing field for all users."
        },
        {
          q: "Can I play if I'm under 18?",
          a: "No. You must be at least 18 years old to register and play on our platform. This is a strict legal requirement, and we verify age during registration."
        }
      ]
    },
    {
      category: "About the Platform",
      questions: [
        {
          q: "Who runs WHITEHAT Fantasy Cricket?",
          a: "WHITEHAT Fantasy Cricket is operated by WHITEHAT INFOTECH PRIVATE LIMITED, a registered Indian company (CIN: U72300UP2015PTC073049) based in Hathras, Uttar Pradesh."
        },
        {
          q: "How do you make money if everything is free?",
          a: "We are backed by investors who believe in cricket education and want to provide a risk-free platform for users to learn and enjoy fantasy cricket. Our focus is on building a community of cricket enthusiasts, not on monetization."
        },
        {
          q: "Will you add real money games in the future?",
          a: "No. Our commitment is to remain a 100% free-to-play educational platform. We will never introduce real money transactions, deposits, or withdrawals."
        },
        {
          q: "How can I provide feedback or suggestions?",
          a: "We love hearing from our users! Visit our 'Contact Us' page to send us your feedback, suggestions, or report any issues. We're constantly working to improve the platform based on user input."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-cricket text-white">
          <div className="container text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about WHITEHAT Fantasy Cricket
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            {faqs.map((category, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{category.category}</h2>
                <Card className="glossy-card">
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, qIdx) => (
                        <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                          <AccordionTrigger className="text-left">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <a href="/contact">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
