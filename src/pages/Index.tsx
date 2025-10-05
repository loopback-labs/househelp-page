import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, DollarSign, Users, Calendar, FileText } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Mark daily attendance with timestamps. Never miss a day's record.",
    },
    {
      icon: DollarSign,
      title: "Salary Management",
      description: "Calculate and manage monthly salaries automatically based on attendance.",
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "Track leaves, holidays, and absences in one centralized system.",
    },
    {
      icon: Users,
      title: "Staff Profiles",
      description: "Maintain detailed profiles with contact info, documents, and history.",
    },
    {
      icon: FileText,
      title: "Payment History",
      description: "Complete records of all salary payments and deductions.",
    },
    {
      icon: CheckCircle2,
      title: "Reports & Analytics",
      description: "Generate monthly reports and track attendance patterns effortlessly.",
    },
  ];

  const benefits = [
    "Save hours of manual tracking every month",
    "Reduce salary calculation errors",
    "Maintain transparent payment records",
    "Access data anytime, anywhere",
    "Simple interface - no training needed",
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HouseHelp Manager
          </h2>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Download App
          </Button>
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
                Manage Your Househelp{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Effortlessly
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track attendance, calculate salaries, and manage your domestic staff with ease. 
                Everything you need in one simple mobile app.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
                  style={{ boxShadow: 'var(--shadow-elegant)' }}
                >
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">500+</span> households already managing better
                </p>
              </div>
            </div>
            <div className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl"
              />
              <img
                src={heroImage}
                alt="HouseHelp Manager App Interface"
                className="relative rounded-2xl shadow-2xl"
                style={{ boxShadow: 'var(--shadow-elegant)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to simplify household staff management
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
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
              <h2 className="text-4xl font-bold">Why Choose HouseHelp Manager?</h2>
              <p className="text-lg text-muted-foreground">
                Stop using messy notebooks and confusing spreadsheets. Our app makes 
                managing your household staff simple, accurate, and stress-free.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card 
                className="p-8 border-2 border-primary/20"
                style={{ boxShadow: 'var(--shadow-elegant)' }}
              >
                <CardContent className="space-y-6 p-0">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Average time saved per month</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      10+ hours
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Calculation accuracy</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      100%
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">User satisfaction</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      4.8/5
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'var(--gradient-primary)',
          }}
        />
        <div className="container mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to Simplify Staff Management?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join hundreds of households already managing their staff better. 
            Download the app today and get started for free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-white text-primary hover:bg-white/90 transition-colors"
            >
              Download for iOS
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
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
              <h3 className="font-bold text-lg">HouseHelp Manager</h3>
              <p className="text-sm text-muted-foreground">
                Making household staff management simple and efficient.
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
            © 2025 HouseHelp Manager. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
