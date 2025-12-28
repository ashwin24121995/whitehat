import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, Search } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img src="/logo-whitehat.png" alt="WHITEHAT INFOTECH" className="h-10 w-auto" />
              <span className="hidden font-bold text-xl md:inline-block">WHITEHAT Fantasy Cricket</span>
            </a>
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center py-12">
        <Card className="glossy-card w-full max-w-lg mx-4">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
                <AlertCircle className="relative h-20 w-20 text-red-500" />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Page Not Found
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
              Let's get you back on track!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => setLocation("/")}
                className="gradient-cricket"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
              <Button
                variant="outline"
                onClick={() => setLocation("/matches")}
              >
                <Search className="w-4 h-4 mr-2" />
                Browse Matches
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Simple Footer */}
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2025 WHITEHAT INFOTECH PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
