import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Users, FileText, TrendingUp, Lightbulb } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PhoneMockup } from "@/components/PhoneMockup";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Smart Attendance Tracking",
      description: "Mark attendance as Present, Half Day, Absent, or Pending with real-time tracking.",
    },
    {
      icon: DollarSign,
      title: "Automatic Salary Calculation",
      description: "Salaries calculated automatically based on attendance records and work shifts.",
    },
    {
      icon: Lightbulb,
      title: "AI Insights",
      description: "Get smart recommendations and insights about your house help management.",
    },
    {
      icon: FileText,
      title: "Payment History",
      description: "Complete salary payment records with detailed transaction history.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track attendance rates, shifts completed, and performance metrics.",
    },
    {
      icon: Users,
      title: "Multi-House Management",
      description: "Manage multiple properties and house helpers from a single app.",
    },
  ];

  const benefits = [
    "Eliminate manual attendance registers and spreadsheets",
    "Zero salary calculation errors with automatic computation",
    "Track Present, Half Day, Absent, and Pending statuses",
    "View attendance rates and shifts completed at a glance",
    "AI-powered insights for better management decisions",
    "Complete payment history at your fingertips",
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">
            househelp
          </h2>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" className="bg-accent text-accent-foreground hover:opacity-90 transition-opacity font-medium">
              Download App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'var(--gradient-hero)',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Manage House Help{" "}
                <span className="text-accent">
                  Attendance & Salary
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track daily attendance, calculate salaries automatically, and get AI-powered insights. 
                Simple, accurate, and built for modern households.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 bg-accent text-accent-foreground hover:opacity-90 transition-all shadow-lg font-medium"
                  style={{ boxShadow: 'var(--shadow-elegant)' }}
                >
                  Download for Free
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  See Features
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-accent/30 border-2 border-background"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">1,000+</span> households managing smarter
                </p>
              </div>
            </div>
            <div className="relative">
              <div 
                className="absolute inset-0 bg-accent/10 blur-3xl rounded-full"
              />
              <div className="relative flex gap-8 items-center justify-center">
                <PhoneMockup
                  image={appScreenshot1}
                  alt="househelp App - Mark Attendance Screen"
                  className="transform hover:scale-105 transition-transform duration-300"
                />
                <PhoneMockup
                  image={appScreenshot2}
                  alt="househelp App - Manage House Help Screen"
                  className="transform hover:scale-105 transition-transform duration-300 mt-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Features That Make a Difference</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track attendance, manage salaries, and stay organized
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-none transition-all hover:translate-y-[-4px] hover:shadow-lg"
                style={{ 
                  boxShadow: 'var(--shadow-card)',
                  transition: 'var(--transition-smooth)' 
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Why Choose househelp?</h2>
              <p className="text-lg text-muted-foreground">
                Say goodbye to messy notebooks and error-prone spreadsheets. Track everything 
                digitally with smart features designed for modern households.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card 
                className="p-8 border-2 border-accent/20 bg-card"
                style={{ boxShadow: 'var(--shadow-elegant)' }}
              >
                <CardContent className="space-y-6 p-0">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Time saved monthly</p>
                    <p className="text-5xl font-bold text-accent">
                      15+ hours
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Salary accuracy</p>
                    <p className="text-5xl font-bold text-accent">
                      100%
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Active users</p>
                    <p className="text-5xl font-bold text-accent">
                      1,000+
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-card border-y border-border">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'var(--gradient-hero)',
          }}
        />
        <div className="container mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Start Managing Smarter Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 1,000+ households using househelp to track attendance and manage salaries effortlessly. 
            Free to download and use.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-accent text-accent-foreground hover:opacity-90 transition-opacity font-medium"
            >
              Download for iOS
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              Download for Android
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">househelp</h3>
              <p className="text-sm text-muted-foreground">
                Smart attendance tracking and salary management for modern households.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 househelp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
