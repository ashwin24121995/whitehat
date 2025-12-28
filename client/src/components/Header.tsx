import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Menu, X, User, Settings, LogOut, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  const { t } = useLanguage();
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
              <img src="/logo-whitehat.webp" alt="WHITEHAT" className="h-16 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.home}
              </a>
            </Link>
            <Link href="/about">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.aboutUs}
              </a>
            </Link>
            <Link href="/how-to-play">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.howToPlay}
              </a>
            </Link>
            <Link href="/faq">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.faq}
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.blog}
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-slate-700 hover:text-teal-600 font-medium transition-colors">
                {t.nav.contact}
              </a>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <a className="flex items-center w-full cursor-pointer">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </a>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/settings">
                      <a className="flex items-center w-full cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Profile Settings</span>
                      </a>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                    className="cursor-pointer text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="rounded-full font-semibold hover:text-primary">
                    {t.common.login}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="btn-secondary">
                    {t.common.register}
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
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/profile/settings">
                      <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                        <Settings className="mr-2 h-4 w-4" />
                        Profile Settings
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      disabled={logoutMutation.isPending}
                      className="w-full rounded-full border-2 text-destructive hover:bg-destructive hover:text-white"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
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
