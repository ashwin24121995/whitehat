import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Clock, MessageCircle, Globe, Facebook, Twitter, Instagram, Linkedin, Building2, FileText, Calendar, HelpCircle } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate message length
    if (formData.message.length < 20) {
      toast.error("Please provide more details in your message (minimum 20 characters)");
      return;
    }
    
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you within 24-48 hours.");
      setFormData({ name: "", email: "", phone: "", subject: "", category: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["308, BAKHTAVAR STREET", "HATHRAS, HATHRAS - 204101", "Uttar Pradesh, INDIA"],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      gradientFrom: "from-teal-400",
      gradientTo: "to-teal-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@whitehatinfotech.com", "info@whitehatinfotech.com"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      gradientFrom: "from-orange-400",
      gradientTo: "to-orange-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 (Coming Soon)", "Mon-Fri: 10:00 AM - 6:00 PM IST"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradientFrom: "from-purple-400",
      gradientTo: "to-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 10:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      gradientFrom: "from-pink-400",
      gradientTo: "to-pink-600"
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, url: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:bg-sky-500" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:bg-pink-600" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:bg-blue-700" }
  ];

  const faqLinks = [
    { question: "How do I reset my password?", url: "/faq", icon: HelpCircle },
    { question: "How do I create a fantasy team?", url: "/how-to-play", icon: HelpCircle },
    { question: "Is the platform really free?", url: "/faq", icon: HelpCircle },
    { question: "Which states are restricted?", url: "/faq", icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/contact-hero.webp)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-green-900/80 to-teal-900/80"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-semibold tracking-wider uppercase">Support Center</span>
              </div>
              
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-teal-600 rounded-3xl mb-6 shadow-2xl">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-2xl bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              
              <p className="text-2xl md:text-4xl leading-relaxed font-bold drop-shadow-lg mb-4">
                We're Here to Help!
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200">
                Have questions, feedback, or need support? Our friendly team is ready to assist you. Reach out and we'll respond within 24-48 hours!
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links to FAQ */}
        <section className="py-12 bg-gradient-to-b from-white to-slate-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">Looking for Quick Answers?</h2>
                <p className="text-lg text-slate-600">Check out these common questions before reaching out:</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {faqLinks.map((faq, idx) => {
                  const Icon = faq.icon;
                  return (
                    <a
                      key={idx}
                      href={faq.url}
                      className="p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all group"
                    >
                      <Icon className="h-6 w-6 text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-semibold text-slate-700 group-hover:text-teal-600 transition-colors">
                        {faq.question}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 border-slate-200 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-green-50 border-b-2 border-slate-200 pb-6">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-14 w-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Send className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl md:text-4xl font-black text-slate-900">Send Us a Message</CardTitle>
                        <CardDescription className="text-base mt-1">
                          Fill out the form below and our support team will respond within 24-48 hours
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base font-bold text-slate-700">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={isSubmitting}
                            className="h-12 border-2 focus:border-teal-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-bold text-slate-700">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={isSubmitting}
                            className="h-12 border-2 focus:border-teal-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-bold text-slate-700">Phone Number (Optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            disabled={isSubmitting}
                            className="h-12 border-2 focus:border-teal-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-base font-bold text-slate-700">Category *</Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => setFormData({ ...formData, category: value })}
                            required
                            disabled={isSubmitting}
                          >
                            <SelectTrigger className="h-12 border-2 focus:border-teal-500">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="account">Account Issues</SelectItem>
                              <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                              <SelectItem value="bug">Report a Bug</SelectItem>
                              <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-base font-bold text-slate-700">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="Brief subject of your message"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          disabled={isSubmitting}
                          className="h-12 border-2 focus:border-teal-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base font-bold text-slate-700">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide as much detail as possible..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          disabled={isSubmitting}
                          rows={6}
                          className="resize-none border-2 focus:border-teal-500"
                        />
                        <p className="text-sm text-slate-600 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                          Minimum 20 characters. Be specific to help us assist you better.
                        </p>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto text-lg px-10 h-14 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 shadow-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-pulse">Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <Card key={idx} className={`border-2 ${info.borderColor} shadow-lg hover:shadow-xl transition-all`}>
                      <CardHeader className={`${info.bgColor} border-b-2 ${info.borderColor} pb-4`}>
                        <div className="flex items-center gap-3">
                          <div className={`h-12 w-12 bg-gradient-to-br ${info.gradientFrom} ${info.gradientTo} rounded-xl flex items-center justify-center shadow-md`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className={`text-xl font-black ${info.color}`}>{info.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          {info.details.map((detail, dIdx) => (
                            <p key={dIdx} className="text-sm font-medium text-slate-700 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 px-6 py-2 bg-slate-100 rounded-full border-2 border-slate-200">
                  <span className="text-sm font-semibold tracking-wider uppercase text-slate-700">Company Information</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">WHITEHAT INFOTECH PRIVATE LIMITED</h2>
                <p className="text-lg text-slate-600">Registered Company Details & Legal Information</p>
              </div>
              
              <Card className="border-2 border-slate-200 shadow-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border-2 border-teal-200 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Company Registration (CIN)</p>
                      </div>
                      <p className="text-lg font-mono font-bold text-teal-700">U72300UP2015PTC073049</p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">PAN Number</p>
                      </div>
                      <p className="text-lg font-mono font-bold text-orange-700">AABCW6952B</p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Website</p>
                      </div>
                      <a href="https://whitehatinfotech.com" target="_blank" rel="noopener noreferrer" className="text-lg text-purple-600 hover:text-purple-700 hover:underline font-bold">
                        whitehatinfotech.com
                      </a>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border-2 border-pink-200 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Incorporation Year</p>
                      </div>
                      <p className="text-lg font-bold text-pink-700">2015</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Registered Office Address</p>
                        <p className="text-base font-medium text-slate-700 leading-relaxed">
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

        {/* Social Media & Follow */}
        <section className="py-20 bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-sm font-semibold tracking-wider uppercase">Stay Connected</span>
              </div>
              
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6">Connect With Us</h2>
              
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Follow us on social media for the latest updates, cricket tips, and fantasy insights!
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {socialMedia.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-16 w-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all hover:scale-110 shadow-lg ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="h-8 w-8" />
                    </a>
                  );
                })}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-lg opacity-90">
                  Have a question? Check our <a href="/faq" className="font-bold underline hover:text-yellow-300 transition-colors">FAQ page</a> or <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-bold underline hover:text-yellow-300 transition-colors">send us a message</a>
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
