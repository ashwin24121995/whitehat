import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Heart, Shield, TrendingUp, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-stadium text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About WHITEHAT Fantasy Cricket</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              India's premier free-to-play fantasy cricket platform, dedicated to cricket education and entertainment without any financial pressure.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  WHITEHAT Fantasy Cricket was born from a simple yet powerful vision: to make fantasy cricket accessible to everyone, regardless of their financial situation. We believe that the thrill of building dream teams, analyzing player performances, and competing with fellow cricket enthusiasts should be available to all without the pressure of real money transactions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Founded by WHITEHAT INFOTECH PRIVATE LIMITED, we are backed by investors who share our passion for cricket education and responsible gaming. Our platform serves as a learning ground where users can develop strategic thinking, understand cricket analytics, and enjoy the game they love in a completely risk-free environment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our inception, we have been committed to maintaining the highest standards of fair play, transparency, and user safety. We operate in full compliance with Indian laws and regulations, ensuring that our platform remains a safe and enjoyable space for cricket fans aged 18 and above.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="glossy-card">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize fantasy cricket by providing a completely free platform where users can learn, compete, and enjoy the strategic aspects of cricket without any financial risk. We aim to educate cricket enthusiasts about player analysis, team building, and match strategy while promoting responsible gaming practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="glossy-card">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted and loved free-to-play fantasy cricket platform, where millions of cricket fans can experience the joy of fantasy sports purely for entertainment and skill development. We envision a community where cricket knowledge and strategic thinking are celebrated without monetary incentives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fair Play</h3>
                <p className="text-muted-foreground">
                  We maintain strict fair play policies and transparent scoring systems to ensure every user has an equal opportunity to succeed based on their cricket knowledge and strategic skills.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Responsibility</h3>
                <p className="text-muted-foreground">
                  We are committed to responsible gaming practices, ensuring our platform remains purely educational and entertaining without encouraging any form of gambling or financial risk-taking.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster a vibrant community of cricket enthusiasts who share their passion for the game, learn from each other, and celebrate cricket together in a positive environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose WHITEHAT Fantasy Cricket?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">100% Free Forever</h3>
                  <p className="text-muted-foreground">
                    No hidden charges, no deposits, no withdrawals. Play as much as you want without spending a single rupee.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Safe & Secure</h3>
                  <p className="text-muted-foreground">
                    Your data is protected with industry-standard security measures. We never ask for payment information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Educational Focus</h3>
                  <p className="text-muted-foreground">
                    Learn cricket strategy, player analysis, and team building skills in a risk-free environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Active Community</h3>
                  <p className="text-muted-foreground">
                    Join thousands of cricket fans who share your passion and compete in a friendly environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Company Information</h2>
              <Card className="glossy-card">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-center mb-6">
                      <img src="/logo-whitehat.png" alt="WHITEHAT INFOTECH" className="h-16 w-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-foreground mb-1">Company Name</p>
                        <p className="text-muted-foreground">WHITEHAT INFOTECH PRIVATE LIMITED</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">CIN</p>
                        <p className="text-muted-foreground">U72300UP2015PTC073049</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">PAN</p>
                        <p className="text-muted-foreground">AABCW6952B</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Website</p>
                        <p className="text-muted-foreground">
                          <a href="https://whitehatinfotech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            whitehatinfotech.com
                          </a>
                        </p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="font-semibold text-foreground mb-1">Registered Office</p>
                        <p className="text-muted-foreground">
                          308, BAKHTAVAR STREET<br />
                          HATHRAS, HATHRAS - 204101<br />
                          Uttar Pradesh, INDIA
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance Notice */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-destructive" />
                  Legal Compliance & Restrictions
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  WHITEHAT Fantasy Cricket operates in strict compliance with Indian laws and regulations. We are committed to maintaining a safe, fair, and legal platform for all our users.
                </p>
                <p className="text-sm font-semibold text-destructive">
                  ⚠️ This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim due to state regulations. Only users 18 years and older are permitted to register and play.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
