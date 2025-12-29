import Header from "@/components/Header";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Scale, UserCheck, Shield, Ban, AlertTriangle, Gavel, RefreshCw, Globe, Mail, Search, X, CheckCircle, XCircle } from "lucide-react";

export default function Terms() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<number>(0);
  const [highlightedText, setHighlightedText] = useState<string>("");

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      setHighlightedText(searchQuery.trim());
      const content = document.getElementById('terms-content');
      if (content) {
        const text = content.innerText.toLowerCase();
        const query = searchQuery.toLowerCase();
        const matches = (text.match(new RegExp(query, 'g')) || []).length;
        setSearchResults(matches);
      }
    } else {
      setHighlightedText("");
      setSearchResults(0);
    }
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setHighlightedText("");
    setSearchResults(0);
  };

  const colorClasses = {
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-900",
      icon: "from-teal-500 to-teal-600"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-900",
      icon: "from-orange-500 to-orange-600"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-900",
      icon: "from-purple-500 to-purple-600"
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-900",
      icon: "from-pink-500 to-pink-600"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-900",
      icon: "from-blue-500 to-blue-600"
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-900",
      icon: "from-red-500 to-red-600"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-900",
      icon: "from-green-500 to-green-600"
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-900",
      icon: "from-indigo-500 to-indigo-600"
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      icon: "from-amber-500 to-amber-600"
    },
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-900",
      icon: "from-cyan-500 to-cyan-600"
    }
  };

  const sections = [
    {
      id: "introduction",
      title: "Introduction & Acceptance",
      icon: FileText,
      color: "teal",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            These Terms and Conditions ("Terms", "Agreement") constitute a legally binding agreement between you ("User", "you", "your") and WHITEHAT INFOTECH PRIVATE LIMITED ("Company", "we", "us", "our") governing your access to and use of the WHITEHAT Fantasy Cricket platform (the "Platform", "Service").
          </p>
          <p className="text-slate-700 leading-relaxed">
            By accessing, browsing, or using the Platform in any manner—including creating an account, participating in fantasy cricket contests, or viewing content—you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations.
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-teal-900 mb-2">Key Agreement Points:</p>
            <ul className="text-sm text-teal-800 space-y-1 list-disc pl-5">
              <li>These Terms form a binding legal contract between you and the Company</li>
              <li>You must accept all terms to use the Platform—partial acceptance is not permitted</li>
              <li>If you do not agree to these Terms, you must immediately cease using the Platform</li>
              <li>Continued use of the Platform constitutes ongoing acceptance of these Terms</li>
              <li>These Terms supplement and do not replace our Privacy Policy, Fair Play Policy, and other policies</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 italic">
            <strong>Last Updated:</strong> December 29, 2024 | <strong>Effective Date:</strong> January 1, 2025
          </p>
        </div>
      )
    },
    {
      id: "eligibility",
      title: "Eligibility Requirements",
      icon: UserCheck,
      color: "orange",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Access to and use of the Platform is subject to strict eligibility criteria. You must meet ALL of the following requirements to register for and use the Platform:
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              1.1 Age Requirement
            </h4>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="font-semibold text-orange-900 mb-2">Minimum Age: 18 Years</p>
              <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5">
                <li>You must be at least <strong>18 years of age</strong> on the date of registration</li>
                <li>You must provide accurate date of birth information for age verification</li>
                <li>The Company reserves the right to request proof of age (government-issued ID) at any time</li>
                <li>Accounts created by users under 18 will be immediately terminated without notice</li>
                <li>Parents/guardians are responsible for ensuring minors do not access the Platform</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              1.2 Geographic Restrictions
            </h4>
            <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300">
              <p className="font-semibold text-red-900 mb-2">❌ Prohibited States (India):</p>
              <p className="text-sm text-red-800 mb-3">
                The Platform is <strong>NOT available</strong> to residents of the following Indian states due to legal restrictions on fantasy sports:
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-red-800">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Andhra Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Assam</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Nagaland</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Odisha</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Sikkim</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Telangana</span>
                </div>
              </div>
              <p className="text-sm text-red-800 mt-3">
                <strong>Important:</strong> If you are a resident of any of these states, you are <strong>prohibited</strong> from registering or using the Platform. Accounts from these states will be terminated immediately.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              1.3 Legal Capacity
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>You must have the legal capacity to enter into binding contracts under applicable law</li>
                <li>You must not be legally prohibited from using the Platform due to court orders, legal restrictions, or regulatory bans</li>
                <li>You must not be an employee, contractor, or affiliate of the Company (unless explicitly authorized)</li>
                <li>You must not be a professional cricket player, coach, umpire, or official involved in matches featured on the Platform</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              1.4 Account Requirements
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>One Account Per Person:</strong> You may create and maintain only ONE account on the Platform</li>
                <li><strong>Accurate Information:</strong> You must provide truthful, accurate, and complete information during registration</li>
                <li><strong>Information Updates:</strong> You must promptly update your account information if it changes</li>
                <li><strong>Account Security:</strong> You are solely responsible for maintaining the confidentiality of your password and account credentials</li>
                <li><strong>Unauthorized Access:</strong> You must immediately notify us of any unauthorized use of your account</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ Eligibility Verification:</p>
            <p className="text-sm text-amber-800">
              The Company reserves the right to verify your eligibility at any time by requesting documentation (government-issued ID, proof of address, etc.). Failure to provide requested documentation within 7 days may result in account suspension or termination.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "platform-nature",
      title: "Platform Nature & Free-to-Play Model",
      icon: CheckCircle,
      color: "green",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            WHITEHAT Fantasy Cricket is a <strong>100% free-to-play</strong> fantasy cricket platform designed exclusively for entertainment, skill development, and educational purposes. This section clarifies the nature of the Platform and what users can and cannot expect.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              2.1 No Real Money Involved
            </h4>
            <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
              <p className="font-semibold text-green-900 mb-3">✓ What This Platform IS:</p>
              <ul className="text-sm text-green-800 space-y-2 list-disc pl-5">
                <li><strong>100% Free:</strong> No registration fees, subscription charges, or hidden costs</li>
                <li><strong>No Payment Required:</strong> You never need to provide credit card, debit card, or any payment information</li>
                <li><strong>Skill-Based:</strong> Success depends entirely on your cricket knowledge and strategic team-building skills</li>
                <li><strong>Educational:</strong> Learn cricket strategies, player analysis, and fantasy sports concepts</li>
                <li><strong>Entertainment:</strong> Enjoy competing with other cricket fans in a fun, friendly environment</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300">
              <p className="font-semibold text-red-900 mb-3">✗ What This Platform IS NOT:</p>
              <ul className="text-sm text-red-800 space-y-2 list-disc pl-5">
                <li><strong>NOT Gambling:</strong> No real money is wagered, staked, or risked</li>
                <li><strong>NO Cash Prizes:</strong> There are no monetary rewards, cash winnings, or financial prizes</li>
                <li><strong>NO Withdrawals:</strong> You cannot withdraw money because no money is involved</li>
                <li><strong>NOT Betting:</strong> This is not a betting platform, sportsbook, or gambling site</li>
                <li><strong>NO Real-World Value:</strong> Leaderboard points and rankings have no monetary value</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              2.2 Leaderboard & Recognition
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-3">
                The Platform features leaderboards that rank users based on fantasy cricket performance:
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Recognition Only:</strong> Leaderboard rankings are for recognition, bragging rights, and personal achievement</li>
                <li><strong>No Prizes:</strong> High rankings do not entitle you to any prizes, rewards, or compensation</li>
                <li><strong>Points System:</strong> Points are calculated based on real cricket player performance using our published scoring rules</li>
                <li><strong>Fair Play:</strong> All users compete on equal terms with the same rules and scoring system</li>
                <li><strong>No Guarantees:</strong> Rankings may change based on match outcomes, and we do not guarantee any specific ranking</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              2.3 Educational & Entertainment Purpose
            </h4>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">Platform Objectives:</p>
              <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                <li><strong>Cricket Knowledge:</strong> Enhance your understanding of cricket strategies, player roles, and match dynamics</li>
                <li><strong>Strategic Thinking:</strong> Develop analytical and decision-making skills through team selection and management</li>
                <li><strong>Community Engagement:</strong> Connect with other cricket enthusiasts and share insights</li>
                <li><strong>Entertainment Value:</strong> Enjoy a fun, engaging way to follow live cricket matches</li>
                <li><strong>Skill Development:</strong> Improve your ability to assess player form, pitch conditions, and match situations</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-red-900 mb-2">🚨 FRAUD WARNING:</p>
            <p className="text-sm text-red-800">
              If anyone contacts you claiming to represent WHITEHAT and asks for payment, credit card information, bank details, or promises cash prizes, it is <strong>FRAUD</strong>. We will NEVER ask for payment or offer monetary rewards. Report such incidents immediately to support@whitehatinfotech.com.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "user-conduct",
      title: "User Conduct & Prohibited Activities",
      icon: Ban,
      color: "red",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            To maintain a fair, safe, and enjoyable environment for all users, you must comply with the following conduct rules. Violation of these rules may result in account suspension, termination, or legal action.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              3.1 Account Integrity
            </h4>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="font-semibold text-red-900 mb-2">You MUST NOT:</p>
              <ul className="text-sm text-red-800 space-y-2 list-disc pl-5">
                <li><strong>Multiple Accounts:</strong> Create more than one account per person (duplicate accounts will be permanently banned)</li>
                <li><strong>Fake Identities:</strong> Use false names, fake email addresses, or impersonate another person</li>
                <li><strong>Account Sharing:</strong> Share your account credentials with others or allow others to use your account</li>
                <li><strong>Account Selling:</strong> Sell, transfer, or trade your account to another person</li>
                <li><strong>False Information:</strong> Provide inaccurate, misleading, or fraudulent information during registration or account updates</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              3.2 Platform Security & Integrity
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">You MUST NOT:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Automated Tools:</strong> Use bots, scripts, scrapers, or any automated means to access the Platform</li>
                <li><strong>Hacking Attempts:</strong> Attempt to gain unauthorized access to the Platform, servers, databases, or other users' accounts</li>
                <li><strong>System Exploitation:</strong> Exploit bugs, glitches, or vulnerabilities to gain unfair advantages</li>
                <li><strong>Reverse Engineering:</strong> Decompile, disassemble, or reverse engineer any part of the Platform</li>
                <li><strong>DDoS Attacks:</strong> Launch denial-of-service attacks or interfere with Platform infrastructure</li>
                <li><strong>Malware Distribution:</strong> Upload viruses, malware, or malicious code</li>
                <li><strong>Data Mining:</strong> Extract, scrape, or harvest user data or Platform content without authorization</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              3.3 Fair Play & Competition
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">You MUST NOT:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Collusion:</strong> Coordinate with other users to manipulate leaderboards or contest outcomes</li>
                <li><strong>Match Fixing:</strong> Attempt to influence real cricket match outcomes (this is illegal and will be reported to authorities)</li>
                <li><strong>Insider Information:</strong> Use non-public information about players, teams, or matches to gain unfair advantages</li>
                <li><strong>Point Manipulation:</strong> Exploit scoring system loopholes or manipulate point calculations</li>
                <li><strong>Cheating:</strong> Engage in any form of cheating, fraud, or dishonest behavior</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              3.4 Community Standards
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">You MUST NOT:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Harassment:</strong> Harass, bully, threaten, or intimidate other users</li>
                <li><strong>Hate Speech:</strong> Post content that promotes hatred, discrimination, or violence based on race, religion, gender, nationality, or other protected characteristics</li>
                <li><strong>Abusive Language:</strong> Use profanity, vulgar language, or offensive content</li>
                <li><strong>Spam:</strong> Send unsolicited messages, advertisements, or promotional content</li>
                <li><strong>Impersonation:</strong> Impersonate Company staff, moderators, or other users</li>
                <li><strong>Privacy Violations:</strong> Share other users' personal information without consent</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              3.5 Legal Compliance
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">You MUST NOT:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Illegal Activities:</strong> Use the Platform for any illegal purpose or in violation of any laws</li>
                <li><strong>Money Laundering:</strong> Attempt to use the Platform for money laundering or financial crimes (even though no money is involved)</li>
                <li><strong>Fraud:</strong> Engage in fraudulent activities, scams, or deceptive practices</li>
                <li><strong>Underage Access:</strong> Allow minors (under 18) to access or use your account</li>
                <li><strong>Prohibited State Access:</strong> Access the Platform from prohibited states (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana)</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ Consequences of Violations:</p>
            <p className="text-sm text-amber-800 mb-2">
              Violations of these conduct rules may result in:
            </p>
            <ul className="text-sm text-amber-800 space-y-1 list-disc pl-5">
              <li>Immediate account suspension or termination without warning</li>
              <li>Permanent ban from the Platform</li>
              <li>Removal from leaderboards and forfeiture of all points</li>
              <li>Legal action and reporting to law enforcement (for serious violations)</li>
              <li>Liability for damages caused to the Company or other users</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "gameplay",
      title: "Gameplay Rules & Team Management",
      icon: Shield,
      color: "purple",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            This section outlines the rules governing fantasy team creation, match participation, scoring, and gameplay mechanics. By participating in contests, you agree to abide by these rules.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              4.1 Team Creation Rules
            </h4>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="font-semibold text-purple-900 mb-2">Team Composition Requirements:</p>
              <ul className="text-sm text-purple-800 space-y-2 list-disc pl-5">
                <li><strong>Team Size:</strong> Each fantasy team must consist of exactly 11 players</li>
                <li><strong>Player Pool:</strong> Players must be selected from the two teams playing in the real cricket match</li>
                <li><strong>Role Distribution:</strong> Teams must include a balanced mix of wicket-keepers, batsmen, all-rounders, and bowlers as specified for each match</li>
                <li><strong>Captain & Vice-Captain:</strong> You must designate one player as Captain (2x points) and one as Vice-Captain (1.5x points)</li>
                <li><strong>One Team Per Match:</strong> You may create only ONE fantasy team per match</li>
                <li><strong>Team Deadline:</strong> Teams must be created and finalized before the match start time (no late entries)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              4.2 Match Participation
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Match Selection:</strong> You may choose to participate in any available match by creating a team</li>
                <li><strong>Team Lock:</strong> Once a match starts, your team is locked and cannot be edited</li>
                <li><strong>Player Substitutions:</strong> If a player is replaced in the real match, your fantasy team remains unchanged (no automatic substitutions)</li>
                <li><strong>Match Cancellations:</strong> If a real match is cancelled or abandoned, the associated fantasy contest may be voided</li>
                <li><strong>Partial Matches:</strong> For rain-affected or shortened matches, points are calculated based on actual performance</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              4.3 Scoring System
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-3">
                Fantasy points are calculated based on real cricket player performance using the following scoring rules:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Batting Points:</p>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                    <li>Run: +1 point per run scored</li>
                    <li>Boundary (4s): +1 bonus point</li>
                    <li>Over Boundary (6s): +2 bonus points</li>
                    <li>Half-century (50 runs): +8 bonus points</li>
                    <li>Century (100 runs): +16 bonus points</li>
                    <li>Dismissal for duck (0 runs): -2 points</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Bowling Points:</p>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                    <li>Wicket: +25 points per wicket</li>
                    <li>Bonus (LBW/Bowled): +8 bonus points</li>
                    <li>3 Wicket Haul: +4 bonus points</li>
                    <li>4 Wicket Haul: +8 bonus points</li>
                    <li>5 Wicket Haul: +16 bonus points</li>
                    <li>Maiden Over: +12 points</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Fielding Points:</p>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                    <li>Catch: +8 points per catch</li>
                    <li>Stumping: +12 points</li>
                    <li>Run Out: +6 points (direct hit: +12 points)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              4.4 Leaderboard Rankings
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Point Calculation:</strong> Your total points are calculated by summing points from all matches you participated in</li>
                <li><strong>Ranking Method:</strong> Users are ranked in descending order of total points (highest points = Rank 1)</li>
                <li><strong>Tie-Breaking:</strong> In case of equal points, the user who reached that score first is ranked higher</li>
                <li><strong>Real-Time Updates:</strong> Leaderboards are updated in real-time as matches progress</li>
                <li><strong>Final Rankings:</strong> Rankings become final after all matches are completed and scores are verified</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              4.5 Rule Changes & Scoring Adjustments
            </h4>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <ul className="text-sm text-amber-800 space-y-2 list-disc pl-5">
                <li>The Company reserves the right to modify scoring rules, team composition requirements, or gameplay mechanics at any time</li>
                <li>Rule changes will be announced on the Platform and will apply to future matches (not retroactively)</li>
                <li>In case of scoring errors or data discrepancies, the Company may adjust points after match completion</li>
                <li>The Company's decision on all scoring and ranking matters is final and binding</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Shield,
      color: "blue",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            All content, materials, features, and intellectual property on the Platform are owned by WHITEHAT INFOTECH PRIVATE LIMITED or our licensors and are protected by copyright, trademark, patent, and other intellectual property laws.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              5.1 Company-Owned Content
            </h4>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">The following are proprietary to the Company:</p>
              <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                <li><strong>Trademarks:</strong> "WHITEHAT", "WHITEHAT INFOTECH", logos, and brand names</li>
                <li><strong>Software:</strong> Platform source code, algorithms, and technical infrastructure</li>
                <li><strong>Content:</strong> Text, graphics, images, videos, and other materials on the Platform</li>
                <li><strong>Design:</strong> User interface, layout, visual design, and user experience elements</li>
                <li><strong>Data:</strong> Scoring systems, player statistics, and proprietary data compilations</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              5.2 Permitted Use
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">You are granted a limited, non-exclusive, non-transferable license to:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Access and use the Platform for personal, non-commercial purposes</li>
                <li>View and interact with Platform content as intended</li>
                <li>Create and manage your fantasy cricket teams</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              5.3 Prohibited Use
            </h4>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="font-semibold text-red-900 mb-2">You MUST NOT:</p>
              <ul className="text-sm text-red-800 space-y-2 list-disc pl-5">
                <li>Copy, reproduce, distribute, or publicly display Platform content without written permission</li>
                <li>Modify, adapt, translate, or create derivative works based on the Platform</li>
                <li>Use Company trademarks, logos, or branding without authorization</li>
                <li>Remove, alter, or obscure copyright notices or proprietary markings</li>
                <li>Use Platform content for commercial purposes or in competing products</li>
                <li>Frame, mirror, or replicate any part of the Platform on other websites</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              5.4 Third-Party Content
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">
                The Platform may display third-party content, including:
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Cricket Data:</strong> Match schedules, player statistics, and scores from licensed data providers</li>
                <li><strong>Team Logos:</strong> Cricket team logos and emblems (used under fair use or license)</li>
                <li><strong>Player Images:</strong> Photographs and images of cricket players (used under license or fair use)</li>
              </ul>
              <p className="text-sm text-slate-700 mt-3">
                All third-party content remains the property of its respective owners. We do not claim ownership of third-party content.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ Copyright Infringement:</p>
            <p className="text-sm text-amber-800">
              If you believe any content on the Platform infringes your copyright, please contact us at support@whitehatinfotech.com with details of the alleged infringement. We will investigate and take appropriate action in accordance with applicable law.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "disclaimers",
      title: "Disclaimers & Warranties",
      icon: AlertTriangle,
      color: "amber",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            The Platform is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied. This section outlines important disclaimers regarding Platform use.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              6.1 No Warranties
            </h4>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="font-semibold text-amber-900 mb-2">The Company DOES NOT warrant or guarantee:</p>
              <ul className="text-sm text-amber-800 space-y-2 list-disc pl-5">
                <li><strong>Availability:</strong> That the Platform will be available at all times, uninterrupted, or error-free</li>
                <li><strong>Accuracy:</strong> That match data, player statistics, or scores will be 100% accurate or up-to-date</li>
                <li><strong>Reliability:</strong> That the Platform will meet your expectations or requirements</li>
                <li><strong>Security:</strong> That the Platform is completely secure or free from viruses or malicious code</li>
                <li><strong>Compatibility:</strong> That the Platform will work on all devices, browsers, or operating systems</li>
                <li><strong>Performance:</strong> That scoring calculations or leaderboard rankings will always be correct</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              6.2 Third-Party Services
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">
                The Platform relies on third-party services for cricket data, hosting, and other functionalities:
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>We are not responsible for errors, delays, or inaccuracies in third-party data</li>
                <li>We do not control or endorse third-party services and are not liable for their performance</li>
                <li>Third-party service interruptions may affect Platform functionality</li>
                <li>You use third-party services at your own risk</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              6.3 No Professional Advice
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                The Platform is for entertainment and educational purposes only. Content on the Platform does not constitute professional advice (financial, legal, or otherwise). You should not rely on Platform content for making important decisions.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              6.4 User Responsibility
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">You acknowledge and agree that:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>You use the Platform entirely at your own risk</li>
                <li>You are responsible for ensuring your device and internet connection are secure</li>
                <li>You are responsible for backing up any data you wish to preserve</li>
                <li>You are responsible for complying with all applicable laws in your jurisdiction</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Shield,
      color: "red",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            To the maximum extent permitted by applicable law, WHITEHAT INFOTECH PRIVATE LIMITED and its directors, officers, employees, agents, and affiliates shall not be liable for any damages arising from your use of the Platform.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              7.1 Types of Damages Excluded
            </h4>
            <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300">
              <p className="font-semibold text-red-900 mb-2">The Company is NOT liable for:</p>
              <ul className="text-sm text-red-800 space-y-2 list-disc pl-5">
                <li><strong>Direct Damages:</strong> Any direct financial losses or damages</li>
                <li><strong>Indirect Damages:</strong> Lost profits, lost revenue, or lost business opportunities</li>
                <li><strong>Consequential Damages:</strong> Damages resulting from Platform use or inability to use</li>
                <li><strong>Incidental Damages:</strong> Unexpected or unintended damages</li>
                <li><strong>Punitive Damages:</strong> Damages intended to punish or deter</li>
                <li><strong>Special Damages:</strong> Unique or extraordinary damages</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              7.2 Specific Scenarios
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">The Company is NOT liable for damages arising from:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Platform downtime, errors, or technical issues</li>
                <li>Inaccurate match data, scores, or player statistics</li>
                <li>Scoring errors or incorrect leaderboard rankings</li>
                <li>Loss of fantasy teams, points, or account data</li>
                <li>Unauthorized access to your account due to your failure to secure credentials</li>
                <li>Actions of other users or third parties</li>
                <li>Changes to Platform features, rules, or Terms</li>
                <li>Account suspension or termination</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              7.3 Maximum Liability Cap
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                In jurisdictions where liability cannot be completely excluded, the Company's total aggregate liability to you for all claims arising from or related to the Platform shall not exceed <strong>₹1,000 (One Thousand Indian Rupees)</strong> or the amount you paid to use the Platform (which is ₹0 since the Platform is free), whichever is greater.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              7.4 Indemnification
            </h4>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800 mb-2">
                You agree to indemnify, defend, and hold harmless the Company and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="text-sm text-amber-800 space-y-1 list-disc pl-5">
                <li>Your violation of these Terms</li>
                <li>Your violation of any laws or regulations</li>
                <li>Your violation of third-party rights (including intellectual property rights)</li>
                <li>Your use or misuse of the Platform</li>
                <li>Your interactions with other users</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "termination",
      title: "Account Termination & Suspension",
      icon: XCircle,
      color: "pink",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            The Company reserves the right to suspend or terminate your account at any time, with or without notice, for any reason or no reason. This section explains termination procedures and consequences.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              8.1 Company-Initiated Termination
            </h4>
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <p className="font-semibold text-pink-900 mb-2">We may suspend or terminate your account for:</p>
              <ul className="text-sm text-pink-800 space-y-2 list-disc pl-5">
                <li><strong>Terms Violation:</strong> Any breach of these Terms and Conditions</li>
                <li><strong>Prohibited Conduct:</strong> Engaging in prohibited activities (cheating, fraud, harassment, etc.)</li>
                <li><strong>False Information:</strong> Providing inaccurate or fraudulent registration information</li>
                <li><strong>Ineligibility:</strong> Discovering you are ineligible to use the Platform (underage, prohibited state, etc.)</li>
                <li><strong>Multiple Accounts:</strong> Creating or using multiple accounts</li>
                <li><strong>Security Threats:</strong> Posing a security risk to the Platform or other users</li>
                <li><strong>Legal Requirements:</strong> Compliance with legal obligations or court orders</li>
                <li><strong>Platform Protection:</strong> Protecting the integrity, security, or reputation of the Platform</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              8.2 User-Initiated Termination
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">
                You may terminate your account at any time by:
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Contacting us at support@whitehatinfotech.com with a termination request</li>
                <li>Using the account deletion feature in your profile settings (if available)</li>
              </ul>
              <p className="text-sm text-slate-700 mt-3">
                Upon termination request, your account will be deactivated within 24 hours and permanently deleted within 30 days as per our Privacy Policy.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              8.3 Consequences of Termination
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Upon account termination:</p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Access Revoked:</strong> You immediately lose access to your account and the Platform</li>
                <li><strong>Data Deletion:</strong> Your personal information is deleted as per our Privacy Policy</li>
                <li><strong>Points Forfeited:</strong> All fantasy points and leaderboard rankings are forfeited</li>
                <li><strong>Teams Deleted:</strong> All fantasy teams and match history are permanently deleted</li>
                <li><strong>No Refunds:</strong> Since the Platform is free, there are no refunds (nothing was paid)</li>
                <li><strong>Surviving Provisions:</strong> Sections of these Terms that should survive termination (liability, indemnification, etc.) remain in effect</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              8.4 Suspension vs. Termination
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-3">
                <strong>Suspension:</strong> Temporary restriction of account access while we investigate potential violations. During suspension:
              </p>
              <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                <li>You cannot log in or use the Platform</li>
                <li>Your account data is preserved</li>
                <li>Suspension may be lifted after investigation</li>
                <li>Suspension may be converted to permanent termination</li>
              </ul>
              <p className="text-sm text-slate-700 mt-3 mb-3">
                <strong>Termination:</strong> Permanent closure of your account. Termination is final and irreversible.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-red-900 mb-2">🚨 Ban Evasion:</p>
            <p className="text-sm text-red-800">
              Attempting to create a new account after termination ("ban evasion") is strictly prohibited and will result in immediate permanent ban of all associated accounts. We use technical measures to detect and prevent ban evasion.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: RefreshCw,
      color: "cyan",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            The Company reserves the right to modify, update, or replace these Terms and Conditions at any time at our sole discretion. This section explains how changes are communicated and when they become effective.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              9.1 Right to Modify
            </h4>
            <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
              <p className="text-sm text-cyan-800 mb-2">
                We may change these Terms for various reasons, including:
              </p>
              <ul className="text-sm text-cyan-800 space-y-1 list-disc pl-5">
                <li>Compliance with new laws or regulations</li>
                <li>Introduction of new features or services</li>
                <li>Changes to Platform functionality or business model</li>
                <li>Clarification of existing terms</li>
                <li>Addressing security or legal concerns</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              9.2 Notification of Changes
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">
                When we update these Terms, we will:
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Update the "Last Updated" date at the top of this page</li>
                <li>Post the revised Terms on the Platform</li>
                <li>For material changes, we may send an email notification to registered users</li>
                <li>Display a notice on the Platform homepage or via a pop-up notification</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              9.3 Effective Date
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                Changes to these Terms become effective immediately upon posting on the Platform, unless otherwise specified. Your continued use of the Platform after changes are posted constitutes your acceptance of the modified Terms.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              9.4 Your Responsibility
            </h4>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800 mb-2">
                It is your responsibility to:
              </p>
              <ul className="text-sm text-amber-800 space-y-1 list-disc pl-5">
                <li>Regularly review these Terms for changes</li>
                <li>Check the "Last Updated" date to see if Terms have been modified</li>
                <li>Discontinue use of the Platform if you do not agree to modified Terms</li>
              </ul>
              <p className="text-sm text-amber-800 mt-3">
                If you do not agree to the modified Terms, you must stop using the Platform and may request account termination.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law & Dispute Resolution",
      icon: Gavel,
      color: "indigo",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            These Terms and any disputes arising from or related to the Platform shall be governed by the laws of India. This section outlines the legal framework and dispute resolution procedures.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              10.1 Governing Law
            </h4>
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <ul className="text-sm text-indigo-800 space-y-2 list-disc pl-5">
                <li>These Terms shall be governed by and construed in accordance with the <strong>laws of India</strong></li>
                <li>The interpretation of these Terms shall follow Indian legal principles and statutes</li>
                <li>Any legal proceedings shall be conducted in accordance with Indian law</li>
                <li>The United Nations Convention on Contracts for the International Sale of Goods does not apply</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              10.2 Jurisdiction
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">
                Any disputes, claims, or legal proceedings arising from these Terms or the Platform shall be subject to the <strong>exclusive jurisdiction</strong> of the courts in:
              </p>
              <div className="p-3 bg-indigo-50 rounded-lg mt-2">
                <p className="text-sm font-semibold text-indigo-900">
                  📍 Hathras, Uttar Pradesh, India
                </p>
              </div>
              <p className="text-sm text-slate-700 mt-3">
                By using the Platform, you irrevocably consent to the exclusive jurisdiction of these courts and waive any objection to venue or inconvenient forum.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              10.3 Dispute Resolution Process
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-3">
                Before initiating legal proceedings, we encourage users to follow this dispute resolution process:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Contact Support:</p>
                    <p className="text-sm text-slate-700">Email support@whitehatinfotech.com with details of your dispute</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Informal Resolution:</p>
                    <p className="text-sm text-slate-700">We will attempt to resolve the dispute informally within 30 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Legal Action:</p>
                    <p className="text-sm text-slate-700">If informal resolution fails, either party may pursue legal remedies in the designated courts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              10.4 Waiver of Class Actions
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                To the extent permitted by law, you agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. You waive any right to participate in class action lawsuits or class-wide arbitration.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "miscellaneous",
      title: "Miscellaneous Provisions",
      icon: FileText,
      color: "teal",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            This section contains additional legal provisions that govern your use of the Platform and the interpretation of these Terms.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              11.1 Entire Agreement
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                These Terms, together with our Privacy Policy, Fair Play Policy, and other policies incorporated by reference, constitute the entire agreement between you and the Company regarding the Platform and supersede all prior agreements, understandings, and communications.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              11.2 Severability
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              11.3 Waiver
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                The Company's failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver must be in writing and signed by an authorized representative of the Company.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              11.4 Assignment
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                You may not assign, transfer, or delegate these Terms or your rights and obligations hereunder without the Company's prior written consent. The Company may freely assign these Terms without restriction. Any attempted assignment in violation of this provision is void.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              11.5 Force Majeure
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                The Company shall not be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including acts of God, natural disasters, war, terrorism, riots, strikes, labor disputes, government actions, internet or telecommunications failures, or other force majeure events.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              11.6 Relationship of Parties
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                These Terms do not create any partnership, joint venture, employment, or agency relationship between you and the Company. You are an independent user of the Platform with no authority to bind the Company.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              11.7 Survival
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700 mb-2">
                The following sections shall survive termination of these Terms or your account:
              </p>
              <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                <li>Intellectual Property Rights</li>
                <li>Disclaimers & Warranties</li>
                <li>Limitation of Liability</li>
                <li>Indemnification</li>
                <li>Governing Law & Dispute Resolution</li>
                <li>Miscellaneous Provisions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: Mail,
      color: "green",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            If you have any questions, concerns, or feedback about these Terms and Conditions, please contact us using the information below. We are committed to addressing your inquiries promptly.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Company Information
            </h4>
            <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border-2 border-green-200 shadow-lg">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-green-900 mb-1">Legal Entity:</p>
                  <p className="text-base font-bold text-green-900">WHITEHAT INFOTECH PRIVATE LIMITED</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-900 mb-1">Registered Address:</p>
                  <p className="text-sm text-green-800">
                    308, BAKHTAVAR STREET<br />
                    HATHRAS, HATHRAS - 204101<br />
                    Uttar Pradesh, INDIA
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-3">
                  <div>
                    <p className="text-sm font-semibold text-green-900 mb-1">Email Support:</p>
                    <a href="mailto:support@whitehatinfotech.com" className="text-sm text-green-700 hover:text-green-900 underline">
                      support@whitehatinfotech.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-900 mb-1">Website:</p>
                    <a href="https://whitehatinfotech.com" className="text-sm text-green-700 hover:text-green-900 underline" target="_blank" rel="noopener noreferrer">
                      whitehatinfotech.com
                    </a>
                  </div>
                </div>
                <div className="pt-3 border-t border-green-300">
                  <p className="text-sm font-semibold text-green-900 mb-1">Corporate Identification Number (CIN):</p>
                  <p className="text-sm font-mono text-green-800">U72300UP2015PTC073049</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-900 mb-1">PAN:</p>
                  <p className="text-sm font-mono text-green-800">AAHCW5661K</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-900 mb-1">Incorporation Year:</p>
                  <p className="text-sm text-green-800">2015</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Response Time
            </h4>
            <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
              <p className="text-sm text-slate-700">
                We strive to respond to all inquiries within <strong>48-72 business hours</strong>. For urgent matters, please mark your email as "Urgent" in the subject line. Please note that response times may be longer during weekends and public holidays.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-red-900 mb-2">⚠️ IMPORTANT STATE RESTRICTION NOTICE:</p>
            <p className="text-sm text-red-800 mb-2">
              This Platform is <strong>NOT available</strong> to residents of the following Indian states:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-red-800 font-semibold">
              <div>• Andhra Pradesh</div>
              <div>• Assam</div>
              <div>• Nagaland</div>
              <div>• Odisha</div>
              <div>• Sikkim</div>
              <div>• Telangana</div>
            </div>
            <p className="text-sm text-red-800 mt-3">
              Only users <strong>18 years and older</strong> are permitted. This is a <strong>100% free-to-play</strong> platform with <strong>NO real money</strong> involved.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/terms-hero.webp)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-indigo-900/80 to-purple-900/80"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-semibold tracking-wider uppercase">Legal Agreement</span>
              </div>
              
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl mb-6 shadow-2xl">
                <Scale className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              
              <p className="text-2xl md:text-4xl leading-relaxed font-bold drop-shadow-lg mb-4">
                User Agreement & Platform Rules
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200">
                Please read these Terms and Conditions carefully before using the WHITEHAT Fantasy Cricket platform. By accessing or using our Platform, you agree to be bound by these Terms.
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-sm">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <span className="font-semibold">Last Updated:</span> December 29, 2024
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <span className="font-semibold">Effective:</span> January 1, 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-gradient-to-b from-white to-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-indigo-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        type="text"
                        placeholder="Search terms & conditions... (e.g., 'eligibility', 'termination', 'liability')"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-10 h-12 text-base border-2 border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      {searchQuery && (
                        <button
                          onClick={clearSearch}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>
                  {searchQuery && (
                    <div className="mt-3 text-sm text-slate-600">
                      {searchResults > 0 ? (
                        <p className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center h-6 w-6 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-xs">
                            {searchResults}
                          </span>
                          <span>
                            {searchResults === 1 ? '1 match found' : `${searchResults} matches found`} for "{searchQuery}"
                          </span>
                        </p>
                      ) : (
                        <p className="text-amber-600">No matches found for "{searchQuery}". Try different keywords.</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-slate-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
                  <CardTitle className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-slate-700" />
                    Table of Contents
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {sections.map((section, idx) => {
                      const Icon = section.icon;
                      const colors = colorClasses[section.color as keyof typeof colorClasses];
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`p-4 ${colors.bg} border-2 ${colors.border} rounded-xl hover:shadow-lg transition-all group`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`h-10 w-10 bg-gradient-to-br ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-600 mb-1">Section {idx + 1}</p>
                              <p className={`text-sm font-bold ${colors.text} group-hover:underline`}>
                                {section.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Content */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div id="terms-content" className="max-w-5xl mx-auto space-y-12">
              {sections.map((section, idx) => {
                const Icon = section.icon;
                const colors = colorClasses[section.color as keyof typeof colorClasses];
                return (
                  <Card key={section.id} id={section.id} className="border-2 border-slate-200 shadow-xl scroll-mt-20">
                    <CardHeader className={`${colors.bg} border-b-2 ${colors.border} pb-6`}>
                      <div className="flex items-center gap-4">
                        <div className={`h-14 w-14 bg-gradient-to-br ${colors.icon} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-600 mb-1">Section {idx + 1}</p>
                          <CardTitle className={`text-2xl md:text-3xl font-black ${colors.text}`}>
                            {section.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      {section.content}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
