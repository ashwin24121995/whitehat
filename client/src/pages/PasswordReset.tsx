import { useState } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { KeyRound, Mail, CheckCircle2, Lock } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function PasswordReset() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [devToken, setDevToken] = useState(""); // For development only
  const [step, setStep] = useState<"request" | "reset">("request");

  const requestResetMutation = trpc.auth.requestPasswordReset.useMutation({
    onSuccess: (data) => {
      setSuccess(true);
      // In development, show the token
      if (data.devToken) {
        setDevToken(data.devToken);
      }
    },
    onError: (error) => {
      setError(error.message || "Failed to send reset link. Please try again.");
    },
  });

  const resetPasswordMutation = trpc.auth.resetPassword.useMutation({
    onSuccess: () => {
      // Redirect to login with success message
      navigate("/login?reset=success");
    },
    onError: (error) => {
      setError(error.message || "Failed to reset password. Please try again.");
    },
  });

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    requestResetMutation.mutate({ email });
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    resetPasswordMutation.mutate({ token, newPassword });
  };

  // Success screen after requesting reset
  if (success && step === "request") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <Card className="glossy-card w-full max-w-md">
            <CardContent className="pt-12 pb-8 text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-muted-foreground mb-6">
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your inbox and follow the instructions to reset your password.
              </p>
              {devToken && (
                <Alert className="mb-6">
                  <AlertDescription className="text-left">
                    <strong>Development Mode:</strong> Your reset token is:
                    <code className="block mt-2 p-2 bg-muted rounded text-xs break-all">
                      {devToken}
                    </code>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 w-full"
                      onClick={() => {
                        setToken(devToken);
                        setStep("reset");
                      }}
                    >
                      Use This Token to Reset Password
                    </Button>
                  </AlertDescription>
                </Alert>
              )}
              <Link href="/login">
                <Button className="w-full gradient-cricket">
                  Return to Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Reset password form (when user has token)
  if (step === "reset") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <Card className="glossy-card w-full max-w-md">
            <CardHeader className="text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Set New Password</CardTitle>
              <CardDescription>
                Enter your new password below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleResetPassword} className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="token">Reset Token</Label>
                  <Input
                    id="token"
                    type="text"
                    placeholder="Enter reset token from email"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="At least 8 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-cricket" 
                  disabled={resetPasswordMutation.isPending}
                >
                  {resetPasswordMutation.isPending ? "Resetting..." : "Reset Password"}
                </Button>

                <div className="text-center text-sm">
                  <Button 
                    type="button"
                    variant="link" 
                    onClick={() => setStep("request")}
                  >
                    ← Back to Request Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <Card className="glossy-card w-full max-w-md">
          <CardHeader className="text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <KeyRound className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Reset Password</CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRequestReset} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-cricket" 
                disabled={requestResetMutation.isPending}
              >
                {requestResetMutation.isPending ? "Sending..." : "Send Reset Link"}
              </Button>

              <div className="text-center text-sm">
                <Button 
                  type="button"
                  variant="link" 
                  onClick={() => setStep("reset")}
                >
                  Already have a reset token?
                </Button>
              </div>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Remember your password? </span>
                <Link href="/login">
                  <a className="text-primary hover:underline font-medium">
                    Login
                  </a>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
