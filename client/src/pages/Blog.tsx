import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Fantasy Cricket: From Beginner to Pro",
    excerpt: "Everything you need to know about fantasy cricket—from basic rules to advanced strategies that will help you dominate the leaderboard. Learn how to analyze players, understand pitch conditions, and build winning teams consistently.",
    author: "WHITEHAT Team",
    date: "December 28, 2024",
    category: "Featured",
    readTime: "12 min read",
    image: "/blog-hero.webp"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Top 10 Fantasy Cricket Tips for Beginners",
      excerpt: "Starting your fantasy cricket journey? Learn the essential strategies to build winning teams, understand player roles, and make smart selections that will help you climb the leaderboard quickly.",
      author: "WHITEHAT Team",
      date: "December 25, 2024",
      category: "Tips & Strategies",
      readTime: "8 min read",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: 3,
      title: "Understanding Cricket Player Roles: A Complete Guide",
      excerpt: "Master the art of selecting the right mix of batsmen, bowlers, all-rounders, and wicket-keepers. Learn how each role contributes to your team's success and how to balance your squad for maximum points.",
      author: "WHITEHAT Team",
      date: "December 22, 2024",
      category: "Education",
      readTime: "10 min read",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 4,
      title: "How to Analyze Pitch Conditions for Better Team Selection",
      excerpt: "Discover how pitch conditions dramatically affect player performance and learn to use this knowledge to your advantage. Understand batting-friendly vs bowling-friendly pitches and adjust your team accordingly.",
      author: "WHITEHAT Team",
      date: "December 20, 2024",
      category: "Advanced Strategies",
      readTime: "9 min read",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 5,
      title: "The Science of Captain and Vice-Captain Selection",
      excerpt: "Your captain earns 2x points and vice-captain earns 1.5x points—making these choices crucial. Learn data-driven strategies to identify the best captain picks based on form, match-ups, and historical performance.",
      author: "WHITEHAT Team",
      date: "December 18, 2024",
      category: "Tips & Strategies",
      readTime: "7 min read",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      title: "T20 vs ODI vs Test: How to Adapt Your Fantasy Strategy",
      excerpt: "Different match formats require different strategies. Learn how to adjust your player selection, captain choices, and team composition based on whether you're playing T20, ODI, or Test match fantasy cricket.",
      author: "WHITEHAT Team",
      date: "December 15, 2024",
      category: "Education",
      readTime: "11 min read",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 7,
      title: "Common Fantasy Cricket Mistakes and How to Avoid Them",
      excerpt: "Even experienced players make these mistakes! Learn about the most common pitfalls in fantasy cricket—from over-relying on star players to ignoring team news—and how to avoid them for consistent success.",
      author: "WHITEHAT Team",
      date: "December 12, 2024",
      category: "Tips & Strategies",
      readTime: "6 min read",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: 8,
      title: "Reading Player Form: Stats That Actually Matter",
      excerpt: "Not all statistics are created equal. Learn which player stats truly predict fantasy performance—recent form, strike rate, economy rate, and more—and how to use data to make informed decisions.",
      author: "WHITEHAT Team",
      date: "December 10, 2024",
      category: "Advanced Strategies",
      readTime: "10 min read",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 9,
      title: "The Psychology of Fantasy Cricket: Staying Disciplined",
      excerpt: "Success in fantasy cricket isn't just about cricket knowledge—it's also about emotional discipline. Learn how to avoid knee-jerk reactions, stick to your strategy, and maintain consistency over the long term.",
      author: "WHITEHAT Team",
      date: "December 8, 2024",
      category: "Education",
      readTime: "8 min read",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 10,
      title: "Weather and Toss Impact: Hidden Factors in Fantasy Cricket",
      excerpt: "Weather conditions and toss decisions can dramatically impact match outcomes. Learn how to factor in dew, cloud cover, and toss results when finalizing your fantasy team for better predictions.",
      author: "WHITEHAT Team",
      date: "December 5, 2024",
      category: "Advanced Strategies",
      readTime: "9 min read",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length + 1 },
    { name: "Tips & Strategies", count: 3 },
    { name: "Education", count: 3 },
    { name: "Advanced Strategies", count: 3 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-cover bg-center text-white overflow-hidden" style={{backgroundImage: 'url(/blog-hero.webp)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-orange-900/70 to-black/80"></div>
          <div className="container text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-6">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">Fantasy Cricket Blog</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Expert tips, strategies, and insights to elevate your fantasy cricket game
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500">
                  ⭐ Featured Article
                </Badge>
              </div>
              <Card className="overflow-hidden border-2 shadow-2xl hover:shadow-3xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: `url(${featuredPost.image})`}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <Badge variant="outline">{featuredPost.readTime}</Badge>
                    </div>
                    <Button size="lg" className="w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white border-y">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((cat, idx) => (
                  <Button
                    key={idx}
                    variant={idx === 0 ? "default" : "outline"}
                    size="lg"
                    className="text-base"
                  >
                    {cat.name}
                    <Badge variant="secondary" className="ml-2">
                      {cat.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black mb-12 text-center text-slate-900">Latest Articles</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => {
                  const Icon = post.icon;
                  return (
                    <Card key={post.id} className="glossy-card hover:-translate-y-2 transition-all cursor-pointer group">
                      <CardHeader>
                        <div className={`h-14 w-14 rounded-xl ${post.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className={`h-7 w-7 ${post.color}`} />
                        </div>
                        <Badge className="w-fit mb-2" variant="outline">
                          {post.category}
                        </Badge>
                        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {post.readTime}
                          </Badge>
                        </div>
                        <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Stay Updated with Fantasy Cricket Tips</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the latest strategies, player analysis, and match insights delivered to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 text-lg"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 text-white/80">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
