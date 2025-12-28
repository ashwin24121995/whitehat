import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      toast.success("Logged out successfully");
      window.location.href = "/";
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-50/80 backdrop-blur-xl border-b border-blue-100 shadow-sm"> <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <img src="/logo-whitehat.png" alt="WHITEHAT" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                About Us
              </a>
            </Link>
            <Link href="/how-to-play">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                How To Play
              </a>
            </Link>
            <Link href="/faq">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                FAQ
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                Contact
              </a>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button className="btn-primary">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  disabled={logoutMutation.isPending}
                  className="rounded-full border-2 hover:bg-destructive hover:text-white hover:border-destructive"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="rounded-full font-semibold hover:text-primary">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="btn-secondary">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <Link href="/">
                <a className="text-slate-700 hover:text-teal-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="text-slate-700 hover:text-teal-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </a>
              </Link>
              <Link href="/how-to-play">
                <a className="text-slate-700 hover:text-teal-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  How To Play
                </a>
              </Link>
              <Link href="/faq">
                <a className="text-slate-700 hover:text-teal-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-slate-700 hover:text-teal-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-slate-700 hover:text-teal-600 font-medium py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </Link>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard">
                      <Button className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      disabled={logoutMutation.isPending}
                      className="w-full rounded-full border-2"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="outline" className="w-full rounded-full border-2" onClick={() => setMobileMenuOpen(false)}>
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="btn-secondary w-full" onClick={() => setMobileMenuOpen(false)}>
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
