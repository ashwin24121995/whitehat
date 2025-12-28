import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Fantasy Cricket Tips for Beginners",
      excerpt: "Learn the essential strategies to build winning fantasy cricket teams and climb the leaderboard.",
      author: "WHITEHAT Team",
      date: "December 15, 2024",
      category: "Tips & Strategies",
      image: "/hero-cricket-1.jpg"
    },
    {
      id: 2,
      title: "Understanding Cricket Player Roles: A Complete Guide",
      excerpt: "Master the art of selecting the right mix of batsmen, bowlers, all-rounders, and wicket-keepers.",
      author: "WHITEHAT Team",
      date: "December 10, 2024",
      category: "Education",
      image: "/hero-cricket-2.jpg"
    },
    {
      id: 3,
      title: "How to Analyze Pitch Conditions for Better Team Selection",
      excerpt: "Discover how pitch conditions affect player performance and how to use this knowledge to your advantage.",
      author: "WHITEHAT Team",
      date: "December 5, 2024",
      category: "Advanced Strategies",
      image: "/hero-cricket-1.jpg"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-cricket text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fantasy Cricket Blog</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tips, strategies, and insights to improve your fantasy cricket game
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="glossy-card overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-16 text-center">
              <Card className="glossy-card max-w-2xl mx-auto">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-4">More Content Coming Soon!</h2>
                  <p className="text-muted-foreground mb-6">
                    We're working on creating comprehensive guides, tutorials, and analysis to help you become a better fantasy cricket player. Check back regularly for new content!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Have a topic you'd like us to cover? <a href="/contact" className="text-primary hover:underline">Let us know!</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Blog Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Card className="glossy-card text-center cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold">Tips & Strategies</h3>
                </CardContent>
              </Card>
              <Card className="glossy-card text-center cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold">Player Analysis</h3>
                </CardContent>
              </Card>
              <Card className="glossy-card text-center cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold">Match Previews</h3>
                </CardContent>
              </Card>
              <Card className="glossy-card text-center cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold">Education</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
