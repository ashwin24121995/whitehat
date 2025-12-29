import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck, FileText, Globe, Bell, Trash2, Download, AlertTriangle, Mail } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: Shield,
      color: "teal",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            WHITEHAT INFOTECH PRIVATE LIMITED ("we", "us", "our", or "WHITEHAT") is committed to protecting and respecting your privacy. This Privacy Policy explains in detail how we collect, use, store, share, and protect your personal information when you access or use our fantasy cricket platform (the "Platform").
          </p>
          <p className="text-slate-700 leading-relaxed">
            This policy applies to all users of our Platform, including visitors, registered users, and participants in our fantasy cricket contests. By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-teal-900 mb-2">Key Points:</p>
            <ul className="text-sm text-teal-800 space-y-1 list-disc pl-5">
              <li>We collect only necessary information to provide our services</li>
              <li>We never sell your personal data to third parties</li>
              <li>We use industry-standard security measures to protect your data</li>
              <li>You have full control over your personal information</li>
              <li>This is a 100% free platform - we never ask for payment information</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 italic">
            <strong>Last Updated:</strong> December 29, 2024 | <strong>Effective Date:</strong> January 1, 2025
          </p>
        </div>
      )
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      color: "orange",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We collect various types of information to provide, maintain, and improve our Platform. The information we collect falls into the following categories:
          </p>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              1.1 Personal Information You Provide
            </h4>
            <p className="text-slate-700">When you register for an account, we collect:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="font-semibold text-orange-900 mb-2">Required Information:</p>
                <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5">
                  <li><strong>Full Name:</strong> To identify your account and display on leaderboards</li>
                  <li><strong>Email Address:</strong> For account verification, login, and communications</li>
                  <li><strong>Password:</strong> Encrypted and stored securely for account access</li>
                  <li><strong>Date of Birth:</strong> To verify you are 18 years or older (legal requirement)</li>
                  <li><strong>State of Residence:</strong> To ensure compliance with state-specific regulations</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Optional Information:</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li><strong>Mobile Number:</strong> For account recovery and optional SMS notifications</li>
                  <li><strong>Profile Picture:</strong> To personalize your account (if feature is enabled)</li>
                  <li><strong>Preferences:</strong> Language, notification settings, and display preferences</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              1.2 Information Collected Automatically
            </h4>
            <p className="text-slate-700">When you use our Platform, we automatically collect:</p>
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Device & Technical Information:</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li>Device type, model, and operating system (e.g., Windows 11, iOS 17)</li>
                  <li>Browser type and version (e.g., Chrome 120, Safari 17)</li>
                  <li>IP address and approximate geographic location (city/state level)</li>
                  <li>Screen resolution and device identifiers</li>
                  <li>Network information and connection type</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Usage & Activity Data:</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li>Pages visited, features used, and time spent on the Platform</li>
                  <li>Fantasy teams created, players selected, and match participation</li>
                  <li>Points earned, rankings achieved, and performance statistics</li>
                  <li>Search queries, filters applied, and navigation patterns</li>
                  <li>Interactions with notifications, emails, and promotional content</li>
                  <li>Error logs, crash reports, and performance metrics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              1.3 Information from Third Parties
            </h4>
            <p className="text-slate-700">We may receive information from:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Cricket Data Providers:</strong> Match schedules, player statistics, and live scores (publicly available data)</li>
              <li><strong>Analytics Services:</strong> Aggregated usage statistics and performance metrics (anonymized)</li>
              <li><strong>Security Services:</strong> Fraud detection and prevention data to protect the Platform</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-orange-900 mb-2">Important Note:</p>
            <p className="text-sm text-orange-800">
              We do NOT collect payment information, bank details, credit card numbers, or any financial data because this is a completely free-to-play platform. If anyone asks for such information claiming to represent us, it is fraudulent—please report it immediately.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Eye,
      color: "purple",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We use the information we collect for specific, legitimate purposes to provide, improve, and protect our Platform. Below is a detailed explanation of how we use your information:
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              2.1 Platform Operations & Service Delivery
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-purple-900 mb-2">Account Management:</p>
                <ul className="text-sm text-purple-800 space-y-1 list-disc pl-5">
                  <li>Create, maintain, and authenticate your account</li>
                  <li>Verify your age (18+ requirement) and state eligibility</li>
                  <li>Process login requests and manage sessions</li>
                  <li>Enable password reset and account recovery</li>
                  <li>Personalize your Platform experience</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-purple-900 mb-2">Gameplay Features:</p>
                <ul className="text-sm text-purple-800 space-y-1 list-disc pl-5">
                  <li>Enable fantasy team creation and management</li>
                  <li>Calculate points based on player performance</li>
                  <li>Display leaderboards and rankings</li>
                  <li>Track match participation and history</li>
                  <li>Provide real-time updates and notifications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              2.2 Communication & Support
            </h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Service Communications:</strong> Send account-related emails (verification, password reset, security alerts)</li>
              <li><strong>Platform Updates:</strong> Notify you of new features, match schedules, and important changes</li>
              <li><strong>Customer Support:</strong> Respond to your inquiries, troubleshoot issues, and provide assistance</li>
              <li><strong>Educational Content:</strong> Share cricket insights, strategy tips, and platform guides</li>
              <li><strong>Promotional Messages:</strong> Send newsletters and updates (you can opt out anytime)</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              2.3 Platform Improvement & Analytics
            </h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Performance Monitoring:</strong> Analyze Platform usage to identify and fix bugs, errors, and performance issues</li>
              <li><strong>Feature Development:</strong> Understand user preferences to develop new features and improve existing ones</li>
              <li><strong>User Experience:</strong> Optimize navigation, layout, and functionality based on usage patterns</li>
              <li><strong>A/B Testing:</strong> Test different versions of features to determine what works best for users</li>
              <li><strong>Statistical Analysis:</strong> Generate aggregated, anonymized reports on Platform usage and trends</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              2.4 Security, Fraud Prevention & Compliance
            </h4>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Security Monitoring:</strong> Detect and prevent unauthorized access, hacking attempts, and security breaches</li>
              <li><strong>Fraud Detection:</strong> Identify suspicious activity, fake accounts, and rule violations</li>
              <li><strong>Legal Compliance:</strong> Ensure adherence to age restrictions, state regulations, and applicable laws</li>
              <li><strong>Dispute Resolution:</strong> Investigate and resolve user complaints, disputes, and policy violations</li>
              <li><strong>Platform Integrity:</strong> Maintain fair play, prevent cheating, and enforce Terms of Service</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-purple-900 mb-2">Legal Basis for Processing (GDPR):</p>
            <p className="text-sm text-purple-800">
              We process your personal data based on: (1) <strong>Contractual Necessity</strong> - to provide the services you requested; (2) <strong>Legitimate Interests</strong> - to improve our Platform and ensure security; (3) <strong>Legal Obligations</strong> - to comply with applicable laws; and (4) <strong>Consent</strong> - for marketing communications (which you can withdraw anytime).
            </p>
          </div>
        </div>
      )
    },
    {
      id: "information-sharing",
      title: "Information Sharing & Disclosure",
      icon: Globe,
      color: "pink",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We respect your privacy and do NOT sell, rent, or trade your personal information to third parties for their marketing purposes. We only share information in the following limited circumstances:
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              3.1 Service Providers & Business Partners
            </h4>
            <p className="text-slate-700">We share information with trusted third-party service providers who help us operate the Platform:</p>
            <div className="space-y-3">
              <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                <p className="font-semibold text-pink-900 mb-2">Infrastructure & Hosting:</p>
                <ul className="text-sm text-pink-800 space-y-1 list-disc pl-5">
                  <li>Cloud hosting providers (e.g., AWS, Google Cloud) for data storage and Platform hosting</li>
                  <li>Content delivery networks (CDNs) for faster page loading and media delivery</li>
                  <li>Database management services for secure data storage</li>
                </ul>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                <p className="font-semibold text-pink-900 mb-2">Analytics & Performance:</p>
                <ul className="text-sm text-pink-800 space-y-1 list-disc pl-5">
                  <li>Analytics platforms (e.g., Google Analytics) for usage statistics and insights</li>
                  <li>Error tracking services (e.g., Sentry) for bug detection and performance monitoring</li>
                  <li>A/B testing tools for feature optimization</li>
                </ul>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                <p className="font-semibold text-pink-900 mb-2">Communication Services:</p>
                <ul className="text-sm text-pink-800 space-y-1 list-disc pl-5">
                  <li>Email service providers for sending transactional and promotional emails</li>
                  <li>SMS providers for optional mobile notifications</li>
                  <li>Customer support platforms for managing inquiries</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-slate-600 italic">
              All service providers are contractually obligated to protect your information and use it only for the purposes we specify.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              3.2 Legal Requirements & Law Enforcement
            </h4>
            <p className="text-slate-700">We may disclose your information when required by law or to protect rights and safety:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Legal Obligations:</strong> To comply with court orders, subpoenas, legal processes, or government requests</li>
              <li><strong>Law Enforcement:</strong> To cooperate with law enforcement agencies investigating illegal activities</li>
              <li><strong>Rights Protection:</strong> To protect our legal rights, property, or safety, and that of our users</li>
              <li><strong>Terms Enforcement:</strong> To enforce our Terms of Service, Fair Play Policy, and other agreements</li>
              <li><strong>Fraud Prevention:</strong> To detect, prevent, or address fraud, security, or technical issues</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              3.3 Business Transfers
            </h4>
            <p className="text-slate-700">
              In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our Platform before your information is transferred and becomes subject to a different privacy policy.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              3.4 Public Information
            </h4>
            <p className="text-slate-700">Certain information is publicly visible on the Platform:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Leaderboards:</strong> Your username, rank, and total points are displayed on public leaderboards</li>
              <li><strong>Team Names:</strong> Your fantasy team names may be visible to other users in contests</li>
              <li><strong>Profile Information:</strong> Any information you choose to make public in your profile settings</li>
            </ul>
            <p className="text-sm text-slate-600 italic mt-2">
              We do NOT publicly display your email address, phone number, date of birth, or other sensitive personal information.
            </p>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-pink-900 mb-2">Your Control:</p>
            <p className="text-sm text-pink-800">
              You can control what information is publicly visible through your account settings. If you prefer not to appear on leaderboards, you can opt out or use a pseudonym.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "data-security",
      title: "Data Security & Protection",
      icon: Lock,
      color: "blue",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security practices include:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Encryption & Data Protection
              </h4>
              <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                <li><strong>Password Encryption:</strong> All passwords are hashed using bcrypt with salt (industry-standard algorithm)</li>
                <li><strong>SSL/TLS Encryption:</strong> All data transmitted between your device and our servers is encrypted using HTTPS</li>
                <li><strong>Database Encryption:</strong> Sensitive data is encrypted at rest in our databases</li>
                <li><strong>Secure Storage:</strong> Data is stored in secure, access-controlled data centers</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Access Controls & Authentication
              </h4>
              <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                <li><strong>Role-Based Access:</strong> Only authorized personnel have access to user data, limited to their job functions</li>
                <li><strong>Multi-Factor Authentication:</strong> Internal systems require MFA for administrative access</li>
                <li><strong>Session Management:</strong> Automatic logout after periods of inactivity</li>
                <li><strong>IP Whitelisting:</strong> Restricted access to sensitive systems from approved IP addresses only</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Monitoring & Incident Response
              </h4>
              <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                <li><strong>24/7 Monitoring:</strong> Continuous monitoring for suspicious activity and security threats</li>
                <li><strong>Intrusion Detection:</strong> Automated systems detect and alert on potential security breaches</li>
                <li><strong>Incident Response Plan:</strong> Documented procedures for responding to security incidents</li>
                <li><strong>Breach Notification:</strong> Commitment to notify affected users within 72 hours of discovering a breach</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Security Best Practices
              </h4>
              <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                <li><strong>Regular Audits:</strong> Periodic security audits and vulnerability assessments</li>
                <li><strong>Software Updates:</strong> Regular updates and patches to address security vulnerabilities</li>
                <li><strong>Secure Development:</strong> Security-first approach in all software development practices</li>
                <li><strong>Employee Training:</strong> Regular security awareness training for all team members</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Important Disclaimer:
            </p>
            <p className="text-sm text-amber-800">
              While we implement industry-standard security measures, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security. However, we continuously work to improve our security practices and promptly address any vulnerabilities.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">Your Responsibility:</p>
            <p className="text-sm text-blue-800 mb-2">You can help protect your account by:</p>
            <ul className="text-sm text-blue-800 space-y-1 list-disc pl-5">
              <li>Using a strong, unique password (at least 8 characters with letters, numbers, and symbols)</li>
              <li>Never sharing your password with anyone</li>
              <li>Logging out after using shared or public devices</li>
              <li>Keeping your email account secure (used for password reset)</li>
              <li>Reporting suspicious activity immediately to support@whitehatinfotech.com</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "cookies-tracking",
      title: "Cookies & Tracking Technologies",
      icon: Database,
      color: "teal",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We use cookies and similar tracking technologies to enhance your experience, analyze Platform usage, and improve our services. This section explains what cookies are, how we use them, and how you can control them.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              5.1 What Are Cookies?
            </h4>
            <p className="text-slate-700">
              Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They help websites remember your preferences, track your activity, and provide personalized experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              5.2 Types of Cookies We Use
            </h4>
            <div className="space-y-3">
              <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                <p className="font-semibold text-teal-900 mb-2">Essential Cookies (Required):</p>
                <p className="text-sm text-teal-800 mb-2">These cookies are necessary for the Platform to function properly. You cannot opt out of these cookies.</p>
                <ul className="text-sm text-teal-800 space-y-1 list-disc pl-5">
                  <li><strong>Authentication:</strong> Keep you logged in as you navigate the Platform</li>
                  <li><strong>Security:</strong> Protect against fraudulent activity and ensure secure connections</li>
                  <li><strong>Load Balancing:</strong> Distribute traffic across servers for optimal performance</li>
                  <li><strong>Session Management:</strong> Remember your actions during a browsing session</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Functional Cookies (Optional):</p>
                <p className="text-sm text-slate-700 mb-2">These cookies enhance functionality and personalization. The Platform will work without them, but some features may be limited.</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li><strong>Preferences:</strong> Remember your language selection, theme, and display settings</li>
                  <li><strong>Personalization:</strong> Customize content based on your interests and usage patterns</li>
                  <li><strong>Form Data:</strong> Remember information you've entered in forms (not passwords)</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Analytics Cookies (Optional):</p>
                <p className="text-sm text-slate-700 mb-2">These cookies help us understand how users interact with the Platform so we can improve it.</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li><strong>Usage Statistics:</strong> Track pages visited, time spent, and navigation paths</li>
                  <li><strong>Performance Metrics:</strong> Monitor page load times, errors, and technical issues</li>
                  <li><strong>A/B Testing:</strong> Compare different versions of features to determine what works best</li>
                  <li><strong>Heatmaps:</strong> Understand where users click and how they interact with pages</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              5.3 Third-Party Cookies
            </h4>
            <p className="text-slate-700">We may use third-party services that set their own cookies:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Google Analytics:</strong> Tracks website usage and generates reports (anonymized data)</li>
              <li><strong>Cricket Data Providers:</strong> May set cookies when displaying live scores and match data</li>
            </ul>
            <p className="text-sm text-slate-600 italic mt-2">
              These third parties have their own privacy policies. We recommend reviewing their policies to understand how they use cookies.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              5.4 How to Control Cookies
            </h4>
            <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-3">You have several options to control cookies:</p>
              <div className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold mb-1">Browser Settings:</p>
                  <p>Most browsers allow you to block or delete cookies through their settings. Instructions vary by browser:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Opt-Out Tools:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Google Analytics Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">tools.google.com/dlpage/gaoptout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
              <strong>Note:</strong> Disabling cookies may affect Platform functionality. Essential cookies cannot be disabled as they are required for basic operations like logging in and maintaining your session.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              5.5 Other Tracking Technologies
            </h4>
            <p className="text-slate-700">In addition to cookies, we may use:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Web Beacons (Pixels):</strong> Small transparent images embedded in emails and web pages to track opens and clicks</li>
              <li><strong>Local Storage:</strong> Browser storage for saving preferences and session data (similar to cookies but with larger capacity)</li>
              <li><strong>Device Fingerprinting:</strong> Collecting device characteristics for fraud prevention and security (does not identify you personally)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "user-rights",
      title: "Your Rights & Choices",
      icon: UserCheck,
      color: "orange",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            You have significant control over your personal information. We respect your rights and provide easy ways to exercise them. Below are the rights available to you under applicable privacy laws (including GDPR and Indian data protection regulations):
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Right to Access
              </h4>
              <p className="text-sm text-orange-800 mb-2">You have the right to request a copy of the personal information we hold about you.</p>
              <p className="text-sm text-orange-800 font-semibold">What you'll receive:</p>
              <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5 mt-1">
                <li>All personal data we have about you</li>
                <li>How we obtained the data</li>
                <li>Purposes of processing</li>
                <li>Categories of data we hold</li>
                <li>Who we've shared it with</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Right to Rectification
              </h4>
              <p className="text-sm text-orange-800 mb-2">You have the right to correct inaccurate or incomplete personal information.</p>
              <p className="text-sm text-orange-800 font-semibold">How to update:</p>
              <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5 mt-1">
                <li>Log in to your account</li>
                <li>Go to Profile Settings</li>
                <li>Update your information</li>
                <li>Or email us at support@whitehatinfotech.com</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Trash2 className="h-5 w-5" />
                Right to Erasure (Right to be Forgotten)
              </h4>
              <p className="text-sm text-orange-800 mb-2">You have the right to request deletion of your personal information.</p>
              <p className="text-sm text-orange-800 font-semibold">What happens:</p>
              <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5 mt-1">
                <li>Your account will be permanently deleted</li>
                <li>Your personal data will be erased from our systems</li>
                <li>Some data may be retained for legal compliance (see Data Retention section)</li>
                <li>Deletion is irreversible</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Right to Data Portability
              </h4>
              <p className="text-sm text-orange-800 mb-2">You have the right to receive your personal data in a structured, machine-readable format.</p>
              <p className="text-sm text-orange-800 font-semibold">Available formats:</p>
              <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5 mt-1">
                <li>JSON (structured data format)</li>
                <li>CSV (for spreadsheet applications)</li>
                <li>Includes: profile data, teams, points, history</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Right to Object & Withdraw Consent
              </h4>
              <p className="text-sm text-orange-800 mb-2">You have the right to object to certain types of processing and withdraw consent.</p>
              <p className="text-sm text-orange-800 font-semibold">You can:</p>
              <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5 mt-1">
                <li>Opt out of marketing emails (unsubscribe link in every email)</li>
                <li>Disable SMS notifications in account settings</li>
                <li>Object to profiling or automated decision-making</li>
                <li>Withdraw consent for optional data processing</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Right to Restrict Processing
              </h4>
              <p className="text-sm text-orange-800 mb-2">You have the right to request that we limit how we use your data.</p>
              <p className="text-sm text-orange-800 font-semibold">When you can restrict:</p>
              <ul className="text-sm text-orange-800 space-y-1 list-disc pl-5 mt-1">
                <li>You contest the accuracy of your data</li>
                <li>Processing is unlawful but you don't want deletion</li>
                <li>We no longer need the data but you need it for legal claims</li>
                <li>You've objected to processing pending verification</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              How to Exercise Your Rights
            </h4>
            <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-3">To exercise any of these rights, you can:</p>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Email Us:</p>
                    <p>Send a request to <a href="mailto:support@whitehatinfotech.com" className="text-orange-600 hover:underline">support@whitehatinfotech.com</a></p>
                    <p className="text-xs text-slate-600 mt-1">Include your full name, email address, and specific request</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UserCheck className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Account Settings:</p>
                    <p>Log in to your account and navigate to Settings → Privacy & Data</p>
                    <p className="text-xs text-slate-600 mt-1">Some actions (like data export and account deletion) can be done directly from settings</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 italic">
              <strong>Response Time:</strong> We will respond to your request within 30 days. If we need more time, we'll let you know and explain why. We may ask you to verify your identity before processing your request to protect your privacy.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-orange-900 mb-2">No Fees:</p>
            <p className="text-sm text-orange-800">
              Exercising your rights is completely free. We will not charge you for accessing your data, correcting it, or deleting your account. However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "data-retention",
      title: "Data Retention & Deletion",
      icon: Trash2,
      color: "purple",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. This section explains how long we keep different types of data and what happens when you delete your account.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              7.1 Retention Periods by Data Type
            </h4>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-purple-900 mb-2">Active Account Data:</p>
                <ul className="text-sm text-purple-800 space-y-1 list-disc pl-5">
                  <li><strong>Profile Information:</strong> Retained as long as your account is active</li>
                  <li><strong>Fantasy Teams & Match History:</strong> Retained indefinitely while account is active (for historical records and statistics)</li>
                  <li><strong>Points & Leaderboard Data:</strong> Retained indefinitely while account is active</li>
                  <li><strong>Login & Activity Logs:</strong> Retained for 90 days for security and troubleshooting</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">After Account Deletion:</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li><strong>Personal Information:</strong> Deleted within 30 days (name, email, phone, date of birth)</li>
                  <li><strong>Password:</strong> Immediately deleted (cannot be recovered)</li>
                  <li><strong>Teams & Match Data:</strong> Anonymized (disconnected from your identity) within 30 days</li>
                  <li><strong>Leaderboard History:</strong> Username replaced with "Deleted User" within 30 days</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Legal & Compliance Data (Retained Longer):</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li><strong>Transaction Logs:</strong> Retained for 7 years (tax and audit requirements)</li>
                  <li><strong>Fraud & Security Incidents:</strong> Retained for 7 years (legal protection and law enforcement)</li>
                  <li><strong>Dispute Records:</strong> Retained for 7 years (legal claims and litigation)</li>
                  <li><strong>Age Verification Records:</strong> Retained for 3 years (regulatory compliance)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              7.2 What Happens When You Delete Your Account
            </h4>
            <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-3">Account Deletion Process:</p>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                  <div>
                    <p className="font-semibold">Immediate Actions (Within 24 hours):</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Your account is deactivated and you can no longer log in</li>
                      <li>Your profile is removed from public view</li>
                      <li>Your password is permanently deleted</li>
                      <li>Active sessions are terminated</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                  <div>
                    <p className="font-semibold">Within 30 Days:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Personal information (name, email, phone, DOB) is permanently deleted from our databases</li>
                      <li>Fantasy teams and match history are anonymized (no longer linked to your identity)</li>
                      <li>Leaderboard entries show "Deleted User" instead of your username</li>
                      <li>Email address is removed from all marketing lists</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                  <div>
                    <p className="font-semibold">Retained for Legal Compliance (Up to 7 years):</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Anonymized transaction logs (for tax and audit purposes)</li>
                      <li>Security incident records (for fraud prevention and legal protection)</li>
                      <li>Dispute resolution records (for potential legal claims)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              7.3 Backup & Disaster Recovery
            </h4>
            <p className="text-slate-700">
              We maintain regular backups of our databases for disaster recovery purposes. When you delete your account, your data is removed from active systems within 30 days. However, it may persist in backup systems for up to 90 days before being permanently purged during the next backup cycle.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Important Note:
            </p>
            <p className="text-sm text-amber-800">
              Account deletion is permanent and irreversible. Once deleted, you cannot recover your account, teams, points, or any other data. If you think you might want to use the Platform again in the future, consider deactivating your account instead of deleting it (contact support for this option).
            </p>
          </div>
        </div>
      )
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      icon: Shield,
      color: "pink",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Our Platform is NOT intended for, and we do NOT knowingly collect personal information from, individuals under the age of 18. We are committed to protecting the privacy of children and complying with all applicable child protection laws.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              8.1 Age Verification
            </h4>
            <p className="text-slate-700">We implement the following measures to prevent underage access:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Registration Requirement:</strong> Users must provide their date of birth during registration</li>
              <li><strong>Automated Verification:</strong> Our system automatically rejects registrations from users under 18</li>
              <li><strong>Clear Messaging:</strong> Age restrictions are prominently displayed on the homepage and registration page</li>
              <li><strong>Legal Disclaimer:</strong> Terms of Service explicitly state that the Platform is for users 18 years and older</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              8.2 If We Discover Underage Users
            </h4>
            <p className="text-slate-700">If we become aware that a user is under 18, we will:</p>
            <div className="p-4 bg-pink-50 rounded-lg border-2 border-pink-200">
              <ol className="text-sm text-pink-800 space-y-2 list-decimal pl-5">
                <li>Immediately deactivate the account</li>
                <li>Delete all personal information associated with the account within 24 hours</li>
                <li>Remove the user from all leaderboards and public displays</li>
                <li>Notify the email address on file (if provided) about the account closure</li>
                <li>Investigate how the underage user bypassed our age verification</li>
                <li>Strengthen our verification processes if necessary</li>
              </ol>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              8.3 Parental Notification
            </h4>
            <p className="text-slate-700">
              If you are a parent or guardian and believe your child under 18 has provided personal information to us, please contact us immediately at <a href="mailto:support@whitehatinfotech.com" className="text-pink-600 hover:underline font-semibold">support@whitehatinfotech.com</a>. We will promptly delete the information and close the account.
            </p>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-pink-900 mb-2">Our Commitment:</p>
            <p className="text-sm text-pink-800">
              We take child safety seriously. We do not knowingly market to, collect data from, or allow participation by individuals under 18. Our Platform is designed exclusively for adults who meet the legal age requirement.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      icon: Globe,
      color: "blue",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Our Platform is operated from India, and your personal information is primarily stored and processed in India. However, we may transfer your data to other countries for specific purposes. This section explains how we protect your data during international transfers.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              9.1 Where Your Data May Be Transferred
            </h4>
            <p className="text-slate-700">Your data may be transferred to and processed in the following locations:</p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900 mb-2">Primary Data Storage:</p>
                <ul className="text-sm text-blue-800 space-y-1 list-disc pl-5">
                  <li><strong>India:</strong> Primary database servers and application hosting</li>
                  <li><strong>Data Centers:</strong> Secure, certified data centers in Mumbai and Bangalore</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Third-Party Service Providers:</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li><strong>United States:</strong> Cloud hosting (AWS, Google Cloud), analytics (Google Analytics), email services</li>
                  <li><strong>European Union:</strong> Backup storage, CDN (content delivery network) for faster page loading</li>
                  <li><strong>Singapore:</strong> Regional data centers for improved performance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              9.2 How We Protect Your Data During Transfers
            </h4>
            <p className="text-slate-700">We implement the following safeguards for international data transfers:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Encryption in Transit:</strong> All data transfers use SSL/TLS encryption (HTTPS)</li>
              <li><strong>Standard Contractual Clauses:</strong> We use EU-approved Standard Contractual Clauses (SCCs) with service providers in countries without adequate data protection laws</li>
              <li><strong>Data Processing Agreements:</strong> All third-party processors sign agreements committing to protect your data</li>
              <li><strong>Privacy Shield Principles:</strong> We follow Privacy Shield principles even though the framework is no longer active</li>
              <li><strong>Regular Audits:</strong> We audit our service providers to ensure compliance with data protection standards</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              9.3 GDPR Compliance (For EU Users)
            </h4>
            <p className="text-slate-700">
              If you are located in the European Union, we comply with GDPR requirements for international data transfers. Your data is transferred to India and other countries only with appropriate safeguards in place, including Standard Contractual Clauses approved by the European Commission.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">Your Rights:</p>
            <p className="text-sm text-blue-800">
              If you have concerns about international data transfers, you can exercise your rights under applicable data protection laws, including the right to object to transfers or request that your data be stored only in specific regions (subject to technical feasibility).
            </p>
          </div>
        </div>
      )
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      icon: Bell,
      color: "teal",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or Platform features. We are committed to keeping you informed about any changes that affect how we handle your personal information.
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              10.1 How We Notify You of Changes
            </h4>
            <div className="space-y-3">
              <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                <p className="font-semibold text-teal-900 mb-2">For Minor Changes (Non-Material):</p>
                <ul className="text-sm text-teal-800 space-y-1 list-disc pl-5">
                  <li>Updated "Last Updated" date at the top of this page</li>
                  <li>Changes posted on this page immediately</li>
                  <li>No additional notification required</li>
                </ul>
                <p className="text-xs text-teal-700 mt-2 italic">
                  Examples: Clarifications, formatting improvements, updated contact information
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border-2 border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">For Material Changes (Significant):</p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                  <li><strong>Email Notification:</strong> We will send an email to the address on file at least 30 days before changes take effect</li>
                  <li><strong>Platform Banner:</strong> Prominent notice displayed on the Platform homepage and dashboard</li>
                  <li><strong>In-App Notification:</strong> Pop-up notification when you log in</li>
                  <li><strong>Consent Request:</strong> For significant changes, we may require you to accept the updated policy before continuing to use the Platform</li>
                </ul>
                <p className="text-xs text-slate-600 mt-2 italic">
                  Examples: Changes to data collection practices, new third-party sharing, changes to retention periods
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              10.2 Your Options
            </h4>
            <p className="text-slate-700">When we make material changes, you have the following options:</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>Accept Changes:</strong> Continue using the Platform under the new policy</li>
              <li><strong>Reject Changes:</strong> If you do not agree with the changes, you can delete your account before the changes take effect</li>
              <li><strong>Contact Us:</strong> Reach out with questions or concerns about the changes</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500"></span>
              10.3 Version History
            </h4>
            <p className="text-slate-700">We maintain a version history of this Privacy Policy. Previous versions are available upon request.</p>
            <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Current Version:</p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li><strong>Version:</strong> 2.0</li>
                <li><strong>Last Updated:</strong> December 29, 2024</li>
                <li><strong>Effective Date:</strong> January 1, 2025</li>
                <li><strong>Major Changes:</strong> Added detailed sections on data retention, international transfers, and user rights</li>
              </ul>
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-teal-900 mb-2">Stay Informed:</p>
            <p className="text-sm text-teal-800">
              We recommend reviewing this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of the Platform after changes are posted constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "contact-us",
      title: "Contact Us",
      icon: Mail,
      color: "orange",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, we're here to help. You can reach us through any of the following channels:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-900">Email Us</h4>
                  <p className="text-sm text-orange-700">Fastest response time</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-orange-800">
                  <strong>Privacy Inquiries:</strong><br />
                  <a href="mailto:support@whitehatinfotech.com" className="text-orange-600 hover:underline font-semibold">support@whitehatinfotech.com</a>
                </p>
                <p className="text-sm text-orange-800">
                  <strong>Data Protection Officer:</strong><br />
                  <a href="mailto:info@whitehatinfotech.com" className="text-orange-600 hover:underline font-semibold">info@whitehatinfotech.com</a>
                </p>
                <p className="text-xs text-orange-700 italic mt-3">
                  We respond to all privacy inquiries within 48 hours (business days)
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mailing Address</h4>
                  <p className="text-sm text-slate-700">For formal requests</p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">WHITEHAT INFOTECH PRIVATE LIMITED</p>
                <p>308, BAKHTAVAR STREET</p>
                <p>HATHRAS, HATHRAS - 204101</p>
                <p>Uttar Pradesh, INDIA</p>
                <p className="mt-3">
                  <strong>CIN:</strong> U72300UP2015PTC073049<br />
                  <strong>PAN:</strong> AABCW6952B
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              When Contacting Us, Please Include:
            </h4>
            <div className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li><strong>Your Full Name:</strong> As registered on the Platform</li>
                <li><strong>Email Address:</strong> Associated with your account</li>
                <li><strong>Subject Line:</strong> "Privacy Policy Inquiry" or "Data Request"</li>
                <li><strong>Detailed Description:</strong> Clear explanation of your question, concern, or request</li>
                <li><strong>Verification Information:</strong> For data requests, we may ask you to verify your identity</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Regulatory Authorities
            </h4>
            <p className="text-slate-700">
              If you are not satisfied with our response to your privacy concerns, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction:
            </p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li><strong>India:</strong> Ministry of Electronics and Information Technology (MeitY)</li>
              <li><strong>European Union:</strong> Your local Data Protection Authority (DPA)</li>
              <li><strong>United Kingdom:</strong> Information Commissioner's Office (ICO)</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-orange-900 mb-2">We're Here to Help:</p>
            <p className="text-sm text-orange-800">
              Your privacy is important to us. We're committed to addressing your concerns promptly and transparently. Don't hesitate to reach out with any questions about how we handle your personal information.
            </p>
          </div>
        </div>
      )
    }
  ];

  const colorClasses = {
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      icon: "from-teal-400 to-teal-600",
      text: "text-teal-900"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "from-orange-400 to-orange-600",
      text: "text-orange-900"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "from-purple-400 to-purple-600",
      text: "text-purple-900"
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      icon: "from-pink-400 to-pink-600",
      text: "text-pink-900"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "from-blue-400 to-blue-600",
      text: "text-blue-900"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/privacy-hero.webp)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-blue-900/80 to-purple-900/80"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-semibold tracking-wider uppercase">Legal Information</span>
              </div>
              
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl mb-6 shadow-2xl">
                <Shield className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              
              <p className="text-2xl md:text-4xl leading-relaxed font-bold drop-shadow-lg mb-4">
                Your Privacy, Our Priority
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200">
                We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data. Read our comprehensive privacy policy below.
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

        {/* Table of Contents */}
        <section className="py-12 bg-gradient-to-b from-white to-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-slate-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
                  <CardTitle className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-slate-700" />
                    Table of Contents
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-3">
                    {sections.map((section, idx) => {
                      const Icon = section.icon;
                      const colors = colorClasses[section.color as keyof typeof colorClasses];
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`p-4 ${colors.bg} border-2 ${colors.border} rounded-xl hover:shadow-lg transition-all group`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 bg-gradient-to-br ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-600">Section {idx + 1}</p>
                              <p className={`text-sm font-bold ${colors.text} group-hover:underline`}>{section.title}</p>
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

        {/* Privacy Policy Content */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-12">
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
                    <CardContent className="pt-8">
                      {section.content}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final Notice */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-semibold tracking-wider uppercase">Important Reminder</span>
              </div>
              
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-6">
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-6">100% Free Platform - No Payment Information Required</h2>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                We never ask for payment information, bank details, credit card numbers, or any financial data because this is a completely free-to-play platform. If anyone asks for such information claiming to represent us, it is fraudulent—please report it immediately to <a href="mailto:support@whitehatinfotech.com" className="underline hover:text-yellow-300 transition-colors font-bold">support@whitehatinfotech.com</a>
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  Contact Us
                </a>
                <a href="/faq" className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-colors">
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
