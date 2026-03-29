import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { Loader2 } from "lucide-react";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    // Simulate account creation (will be replaced with backend)
    setTimeout(() => {
      localStorage.setItem(
        "partnerAccount",
        JSON.stringify({
          email: formData.email,
          createdAt: new Date().toISOString(),
        })
      );
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <>
      <SEO title="Create Partner Account - Ikara.Club" description="Complete your partnership registration." />
      <Navigation />

      <section className="min-h-screen flex items-center justify-center bg-background pt-32 pb-20">
        <div className="container-editorial">
          <div className="max-w-md mx-auto">
            <div className="glass p-12 rounded-lg space-y-10">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-serif">Create Account</h1>
                <p className="text-sm text-muted-foreground">
                  Complete your partner registration to access the Ikara Portal
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    required
                    className="glass border-ultra"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    placeholder="Minimum 8 characters"
                    required
                    className="glass border-ultra"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                    placeholder="Re-enter password"
                    required
                    className="glass border-ultra"
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Partner Account"
                  )}
                </Button>
              </form>

              {/* Privacy Note */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  By creating an account, you agree to the Ikara.Club Terms of Service and Privacy Policy. All
                  information is confidential and used exclusively for partnership operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}