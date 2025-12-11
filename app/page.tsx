import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Brain, TrendingUp, Shield, Zap, BarChart3, Bell } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative mt-16 overflow-hidden bg-linear-to-b from-background to-muted/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Your Personal AI Dividend Team
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Build a Dividend Portfolio That Grows{" "}
                <span className="text-primary">Automatically</span>
              </h1>

              <p className="text-pretty text-lg text-muted-foreground leading-relaxed max-w-2xl">
                AIsemble helps you build a dividend portfolio that grows your
                income automatically — with AI doing the research, monitoring,
                and forecasting for you.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 text-lg"
                >
                  <Link href="/auth/sign-up">Start For Free</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg bg-transparent"
                >
                  <Link href="#how-it-works">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-muted-foreground">
                    Active Users
                  </div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-sm text-muted-foreground">
                    Assets Tracked
                  </div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-accent/20 blur-3xl" />
              <Image
                src="/images/aisemble_soft_color_transparent.png"
                alt="AIsemble AI Assistant"
                width={500}
                height={500}
                className="relative mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Powered by AI, Built for Your Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let artificial intelligence handle the complexity while you enjoy
              growing passive income
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI-Powered Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI analyzes thousands of dividend stocks daily to find the
                  best opportunities for your portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Smart Forecasting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Predict future dividend payments and portfolio growth with
                  advanced machine learning models.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Real-Time Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get instant alerts on dividend announcements, cuts, and
                  changes that affect your holdings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Visual Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful dividend charts and dashboards help you understand
                  your income streams at a glance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Risk Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI-driven diversification strategies protect your portfolio
                  from dividend cuts and volatility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Automated Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sync your brokerage accounts and let AI automatically track
                  all your dividend payments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-muted/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three Simple Steps to Dividend Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start building your dividend portfolio in minutes
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="relative space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-2xl font-semibold">Connect Your Portfolio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Link your brokerage account or manually add your holdings. Our
                AI will instantly analyze your current dividend position.
              </p>
            </div>

            <div className="relative space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-2xl font-semibold">Set Your Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us your income targets and risk tolerance. Our AI will
                create a personalized dividend strategy just for you.
              </p>
            </div>

            <div className="relative space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-2xl font-semibold">Watch It Grow</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor your portfolio growth with beautiful charts and receive
                AI-powered recommendations to optimize your income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent p-12 text-center text-primary-foreground">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Your Dividend Empire?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
                Join thousands of investors who trust AIsemble to grow their
                passive income
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link href="/auth/sign-up">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
