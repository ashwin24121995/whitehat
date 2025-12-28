import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Clock, MessageCircle, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
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
      bgColor: "bg-teal-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@whitehatinfotech.com", "info@whitehatinfotech.com"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 (Coming Soon)", "Mon-Fri: 10:00 AM - 6:00 PM IST"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 10:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, url: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-sky-500" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-700" }
  ];

  const faqLinks = [
    { question: "How do I reset my password?", url: "/faq" },
    { question: "How do I create a fantasy team?", url: "/how-to-play" },
    { question: "Is the platform really free?", url: "/faq" },
    { question: "Which states are restricted?", url: "/faq" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/contact-hero.webp)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/70 to-black/80"></div>
          <div className="container text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-6">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Have questions, feedback, or need support? We're here to help!
            </p>
          </div>
        </section>

        {/* Quick Links to FAQ */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-slate-600 mb-6">
                <strong>Looking for quick answers?</strong> Check out these common questions:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {faqLinks.map((faq, idx) => (
                  <a
                    key={idx}
                    href={faq.url}
                    className="px-4 py-2 bg-white border-2 border-slate-200 rounded-lg hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                  >
                    {faq.question}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="glossy-card border-2 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-3xl font-black">Send Us a Message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and our support team will respond within 24-48 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={isSubmitting}
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={isSubmitting}
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-semibold">Phone Number (Optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            disabled={isSubmitting}
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-base font-semibold">Category *</Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => setFormData({ ...formData, category: value })}
                            required
                            disabled={isSubmitting}
                          >
                            <SelectTrigger className="h-12">
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
                        <Label htmlFor="subject" className="text-base font-semibold">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="Brief subject of your message"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          disabled={isSubmitting}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide as much detail as possible..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          disabled={isSubmitting}
                          rows={6}
                          className="resize-none"
                        />
                        <p className="text-sm text-muted-foreground">
                          Minimum 20 characters. Be specific to help us assist you better.
                        </p>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto text-lg px-8"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Sending...</>
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
                    <Card key={idx} className={`border-2 ${info.bgColor} hover:-translate-y-1 transition-all`}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`h-12 w-12 rounded-xl ${info.bgColor} flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${info.color}`} />
                          </div>
                          <CardTitle className="text-xl">{info.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          {info.details.map((detail, dIdx) => (
                            <p key={dIdx} className="text-sm text-slate-600 leading-relaxed">
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
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-black mb-2">WHITEHAT INFOTECH PRIVATE LIMITED</CardTitle>
                  <CardDescription className="text-base">Registered Company Information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-teal-500">
                      <p className="text-sm font-semibold text-slate-700 mb-1">Company Registration (CIN)</p>
                      <p className="text-base font-mono">U72300UP2015PTC073049</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-orange-500">
                      <p className="text-sm font-semibold text-slate-700 mb-1">PAN Number</p>
                      <p className="text-base font-mono">AABCW6952B</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-purple-500">
                      <p className="text-sm font-semibold text-slate-700 mb-1">Website</p>
                      <a href="https://whitehatinfotech.com" target="_blank" rel="noopener noreferrer" className="text-base text-purple-600 hover:underline font-semibold">
                        whitehatinfotech.com
                      </a>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-pink-500">
                      <p className="text-sm font-semibold text-slate-700 mb-1">Incorporation Year</p>
                      <p className="text-base">2015</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media & Follow */}
        <section className="py-16 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 text-white">
          <div className="container text-center">
            <Globe className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-black mb-4">Connect With Us</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Follow us on social media for updates, tips, and cricket insights!
            </p>
            <div className="flex gap-6 justify-center">
              {socialMedia.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 w-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="h-7 w-7" />
                  </a>
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
