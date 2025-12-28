import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 gradient-cricket text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-200">
              Last Updated: December 2024
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl">
            <Card className="glossy-card">
              <CardContent className="pt-8 prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-8">
                  WHITEHAT INFOTECH PRIVATE LIMITED ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fantasy cricket platform.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
                <p className="text-muted-foreground">
                  When you register on our platform, we collect:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Mobile number (optional)</li>
                  <li>Date of birth (for age verification)</li>
                  <li>State of residence (for compliance purposes)</li>
                  <li>Password (encrypted)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Usage Information</h3>
                <p className="text-muted-foreground">
                  We automatically collect certain information when you use our platform:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and location data</li>
                  <li>Pages visited and time spent on the platform</li>
                  <li>Fantasy teams created and match participation</li>
                  <li>Points earned and leaderboard rankings</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground">We use the collected information to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Create and manage your account</li>
                  <li>Verify your age (18+ requirement)</li>
                  <li>Ensure compliance with state restrictions</li>
                  <li>Provide fantasy cricket gameplay features</li>
                  <li>Calculate points and display leaderboards</li>
                  <li>Send important platform updates and notifications</li>
                  <li>Improve our platform and user experience</li>
                  <li>Prevent fraud and ensure platform security</li>
                  <li>Respond to your inquiries and support requests</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do NOT sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate the platform (e.g., hosting, analytics).</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government authorities.</li>
                  <li><strong>Platform Safety:</strong> To protect the rights, property, or safety of our users and the platform.</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Passwords are encrypted using secure hashing algorithms</li>
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure database storage with backup systems</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Maintain your login session</li>
                  <li>Remember your preferences</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Improve user experience</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can control cookies through your browser settings, but disabling cookies may affect platform functionality.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us at support@whitehatinfotech.com
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as your account is active or as needed to provide services. After account deletion, we may retain certain information for legal compliance, dispute resolution, and platform security purposes.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our platform is NOT intended for users under 18 years of age. We do not knowingly collect personal information from children. If we discover that a child under 18 has provided personal information, we will delete it immediately.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the platform after changes constitutes acceptance of the updated policy.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>WHITEHAT INFOTECH PRIVATE LIMITED</strong><br />
                    308, BAKHTAVAR STREET<br />
                    HATHRAS, HATHRAS - 204101<br />
                    Uttar Pradesh, INDIA<br />
                    <br />
                    Email: support@whitehatinfotech.com<br />
                    CIN: U72300UP2015PTC073049
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-8">
                  <p className="text-sm">
                    <strong>Important Note:</strong> We never ask for payment information, bank details, or credit card numbers because this is a completely free-to-play platform. If anyone asks for such information claiming to represent us, please report it immediately.
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
