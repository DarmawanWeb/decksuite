"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/lib/auth-client";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-linear-to-br from-background to-muted/40 flex items-center justify-center px-4">
      <div className="pointer-events-none absolute w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full -top-25 -left-25" />
      <div className="pointer-events-none absolute w-100 h-100 bg-purple-500/20 blur-[120px] rounded-full -bottom-25 -right-25" />

      <div className="w-full max-w-md">
        <Card className="relative border border-border/50 ring-0 backdrop-blur-xl bg-background/80 rounded-2xl">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                DeckSuite
              </h1>

              <p className="text-xs sm:text-sm text-muted-foreground">
                Build, manage, and share your decks effortlessly
              </p>
            </div>

            <div className="flex items-center gap-3 my-6">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">SIGN IN</span>
              <Separator className="flex-1" />
            </div>

            <Button
              onClick={handleGoogleLogin}
              disabled={loading}
              variant="outline"
              className="w-full h-11 flex items-center gap-2 text-sm rounded-xl"
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                width={18}
                height={18}
              />
              {loading ? "Redirecting..." : "Continue with Google"}
            </Button>

            <p className="mt-6 text-center text-[11px] sm:text-xs text-muted-foreground leading-relaxed px-2">
              By continuing, you agree to our{" "}
              <a
                href="/"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="/"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Privacy Policy
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="absolute bottom-4 text-[10px] sm:text-xs text-muted-foreground text-center w-full px-4">
        © {new Date().getFullYear()} DeckSuite
      </p>
    </div>
  );
}
