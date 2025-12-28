import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Heart, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-500 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">About WHITEHAT</h1>
            <p className="text-2xl md:text-3xl leading-relaxed font-medium drop-shadow-lg">
              India's Premier Free-to-Play Fantasy Cricket Platform
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-purple-100 shadow-2xl bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-4xl font-black text-slate-900 text-center mb-4">
                  WHITEHAT INFOTECH PRIVATE LIMITED
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-slate-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-teal-500">
                    <p className="font-semibold text-slate-900 mb-2">Company Registration</p>
                    <p className="text-base">CIN: U72300UP2015PTC073049</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-orange-500">
                    <p className="font-semibold text-slate-900 mb-2">PAN Number</p>
                    <p className="text-base">AABCW6952B</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-500">
                  <p className="font-semibold text-slate-900 mb-2">Head Office</p>
                  <p className="text-base">308, BAKHTAVAR STREET, HATHRAS, HATHRAS - 204101, Uttar Pradesh, INDIA</p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-pink-500">
                  <p className="font-semibold text-slate-900 mb-2">Website</p>
                  <p className="text-base">
                    <a href="https://whitehatinfotech.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-semibold underline">
                      whitehatinfotech.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-teal-500 to-teal-600 border-none shadow-2xl hover:shadow-teal-500/50 transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="h-20 w-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-4xl font-black text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl leading-relaxed text-white/95 font-medium">
                  To provide a completely free, educational fantasy cricket platform that allows users to enjoy the thrill of fantasy sports without any financial risk or pressure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-none shadow-2xl hover:shadow-purple-500/50 transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="h-20 w-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-4xl font-black text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl leading-relaxed text-white/95 font-medium">
                  To become India's most trusted free-to-play fantasy cricket platform, promoting cricket knowledge and strategic thinking among fans of all ages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-5xl font-black text-center mb-16 text-slate-900">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="glossy-card border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50 hover:-translate-y-2 transition-all">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Free to Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  100% free platform with no hidden costs or real money involved
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:-translate-y-2 transition-all">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  Age-verified (18+) with full state compliance and data protection
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50 hover:-translate-y-2 transition-all">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Educational</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  Learn cricket strategy and improve your knowledge without pressure
                </p>
              </CardContent>
            </Card>

            <Card className="glossy-card border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50 hover:-translate-y-2 transition-all">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Fair Play</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-slate-600 leading-relaxed">
                  Transparent, fair, and ethical platform for all cricket enthusiasts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8 drop-shadow-lg">Why We're Different</h2>
            <p className="text-2xl leading-relaxed mb-8 font-medium drop-shadow">
              Unlike other fantasy platforms, we're backed by investors who believe in fantasy education. Our goal isn't profit—it's to provide a safe, fun, and educational environment for cricket fans to enjoy fantasy cricket without any financial risk.
            </p>
            <p className="text-xl leading-relaxed font-medium drop-shadow">
              We're committed to responsible gaming, fair play, and creating a community where cricket knowledge and strategy matter more than money.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
