import addHelpImage from "@/assets/screenshots/add-help-page.jpeg";
import analyticsImage from "@/assets/screenshots/analytics-page.jpeg";
import attendanceImage from "@/assets/screenshots/attendance-page.jpeg";
import manageHouseholdImage from "@/assets/screenshots/manage-household.jpeg";
import paymentHistoryImage from "@/assets/screenshots/payment-history.jpeg";
import salaryImage from "@/assets/screenshots/salary-page.jpeg";
import { EmailSignupForm } from "@/components/EmailSignupForm";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  FileClock,
  Home,
  LayoutGrid,
  NotebookPen,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Helper profiles and records",
    description: "Keep names, roles, contact details, pay terms, and notes in one place you can actually find.",
  },
  {
    icon: CalendarDays,
    title: "Daily attendance made simple",
    description: "Mark who came in, who missed a day, and who worked extra without chasing paper notes later.",
  },
  {
    icon: CircleDollarSign,
    title: "Monthly salary calculation",
    description: "See monthly pay totals come together clearly from attendance, working days, and extra payments.",
  },
  {
    icon: CreditCard,
    title: "Payment logging and history",
    description: "Record salary, advance, bonus, and overtime so every payment has a clean trail behind it.",
  },
  {
    icon: Building2,
    title: "Multi-household management",
    description: "Switch between homes from one account when you manage family properties or multiple residences.",
  },
  {
    icon: BarChart3,
    title: "Monthly insights at a glance",
    description: "Spot spending trends, recurring costs, and payment patterns without building your own spreadsheet.",
  },
  {
    icon: FileClock,
    title: "Schedules and working days",
    description: "Set expected days and routines so you always know what was planned and what actually happened.",
  },
  {
    icon: LayoutGrid,
    title: "Organized household operations",
    description: "Bring attendance, salary, records, and payment history together so the household runs with less friction.",
  },
];

const steps = [
  {
    title: "Add your household and helpers",
    description: "Set up each home, add your helpers, and keep their details organized from the start.",
  },
  {
    title: "Mark attendance in seconds",
    description: "Keep a simple daily record instead of relying on memory, messages, or scattered notebooks.",
  },
  {
    title: "Track salary and payments",
    description: "Log salary, advance, bonus, and overtime as they happen, with the full picture always in view.",
  },
  {
    title: "Review summaries and stay organized",
    description: "See monthly totals, payment history, and household spending clearly whenever you need it.",
  },
];

const showcases = [
  {
    label: "Household overview",
    title: "See every helper and every home without the back-and-forth",
    description: "Start with a clear snapshot of who works where, what needs attention, and what has already been recorded.",
    image: manageHouseholdImage,
  },
  {
    label: "Attendance tracking",
    title: "Mark attendance daily before the small details pile up",
    description: "A quick daily habit gives you cleaner salary records and fewer end-of-month surprises.",
    image: attendanceImage,
  },
  {
    label: "Salary breakdown",
    title: "Know exactly how the month’s salary comes together",
    description: "Attendance, working days, and payment entries turn into a salary view that feels easy to trust.",
    image: salaryImage,
  },
  {
    label: "Payment history",
    title: "Keep every payment in one reliable place",
    description: "Salary, advance, bonus, and overtime stay easy to review whenever questions come up.",
    image: paymentHistoryImage,
  },
  {
    label: "Analytics dashboard",
    title: "Understand spending patterns across your household",
    description: "Monthly summaries help you stay ahead of costs instead of reconstructing them later.",
    image: analyticsImage,
  },
  {
    label: "Helper onboarding",
    title: "Add a new helper without rebuilding your system each time",
    description: "Capture the details that matter so every record starts organized and stays that way.",
    image: addHelpImage,
  },
];

const benefits = [
  "Less manual work every day",
  "Fewer salary mistakes at month end",
  "Clearer visibility into household spending",
  "Better record keeping for each helper",
  "More confidence managing multiple homes",
  "A calmer, more organized household routine",
];

const faqs = [
  {
    question: "Who is HouseHelp for?",
    answer: "HouseHelp is for households and families who want a simpler way to manage domestic staff without relying on notebooks or memory.",
  },
  {
    question: "What can I manage with the app?",
    answer: "You can organize helper records, track attendance, calculate salaries, log payments, and review monthly summaries in one place.",
  },
  {
    question: "Can I manage more than one household?",
    answer: "Yes. HouseHelp is designed for people who need to keep multiple homes and teams of helpers organized from a single account.",
  },
  {
    question: "Is this useful for tracking salaries and payments?",
    answer: "Yes. It is built to make salary totals, advances, bonuses, overtime, and payment history easier to manage and review.",
  },
  {
    question: "Will I be notified when access opens?",
    answer: "Yes. Join the waitlist and you will be among the first to hear when early access is available.",
  },
];

const proofItems = ["Messy notebooks", "Missed attendance", "Salary confusion", "Scattered payment records"];
const androidBetaUrl = "https://play.google.com/apps/internaltest/4701549005564270618";

const Index = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveShowcase((current) => (current + 1) % showcases.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="page-shell min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-background/75 backdrop-blur-xl dark:border-white/10">
        <div className="container flex h-18 items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(151_28%_38%))] text-primary-foreground shadow-[var(--shadow-soft)]">
              <Home className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-foreground">HouseHelp</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Waitlist</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">
              How It Works
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              className="rounded-full bg-primary px-5 text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/92"
            >
              <a href="#waitlist">Join the Waitlist</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="section-shell overflow-hidden px-4 pb-20 pt-10 md:pb-28 md:pt-16">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute -left-24 top-20 -z-10 h-64 w-64 rounded-full blur-3xl" style={{ background: "var(--hero-glow)" }} />
          <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl space-y-8">
              <Reveal>
                <div className="section-kicker">
                  <Sparkles className="h-3.5 w-3.5" />
                  Built for modern households
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="space-y-5">
                  <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    Domestic staff management, without the monthly chaos.
                  </h1>
                  <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                    HouseHelp helps households track helpers, attendance, salaries, payments, schedules, and records in one calm, organized place.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="soft-card max-w-xl p-5 sm:p-6">
                  <EmailSignupForm
                    className="max-w-none"
                    buttonLabel="Join the Waitlist"
                    placeholder="Enter your email for early access"
                  />
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">Be the first to get access. Early users get priority access.</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        asChild
                        className="soft-button rounded-full px-5"
                      >
                        <a href="#showcase">
                          Preview Features
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="soft-pill">Attendance clarity</span>
                  <span className="soft-pill">Salary confidence</span>
                  <span className="soft-pill">Records in one place</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="relative mx-auto w-full max-w-[620px] lg:justify-self-end">
              <div className="relative min-h-[560px]">
                <div className="absolute left-20 top-16 h-44 w-44 rounded-full bg-accent/10 blur-3xl dark:bg-accent/8" />
                <div className="absolute right-8 top-24 h-52 w-52 rounded-full bg-primary/10 blur-3xl dark:bg-primary/12" />

                <div className="surface-card floating-card absolute left-8 top-24 z-30 hidden w-44 p-4 md:block">
                  <div className="mb-3 flex items-center justify-between text-sm font-semibold text-foreground">
                    Attendance
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-3xl font-display font-semibold text-foreground">Today</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Marked in seconds, instead of rebuilding the month later.</p>
                </div>

                <div className="surface-card floating-card-slow absolute right-6 top-14 z-10 hidden w-48 p-4 lg:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Monthly salary</p>
                  <p className="mt-3 font-display text-3xl font-semibold text-foreground">Always clear</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Salary, overtime, and advances reflected in one monthly view.</p>
                </div>

                <div className="surface-card floating-card absolute bottom-14 left-12 z-30 hidden w-60 p-5 md:block">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-accent/15 p-3 text-accent-strong">
                      <ClipboardList className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Payments recorded</p>
                      <p className="text-sm text-muted-foreground">Salary, advance, bonus, overtime</p>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto flex max-w-[460px] items-center justify-center pt-10">
                  <PhoneMockup
                    image={manageHouseholdImage}
                    alt="HouseHelp household overview screen"
                    priority
                    className="relative z-20 w-[72%] animate-fade-up"
                  />
                  <PhoneMockup
                    image={attendanceImage}
                    alt="HouseHelp attendance tracking screen"
                    className="absolute right-2 top-20 z-10 w-[42%] rotate-[9deg] opacity-95 shadow-[var(--shadow-hero)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell px-4 pb-10">
          <div className="container">
            <Reveal className="soft-card overflow-hidden p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-4">
                  <p className="section-kicker">From chaos to clarity</p>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Replace scattered records with one clear system for your household.
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                    HouseHelp turns daily household admin into something easier to trust, easier to review, and easier to keep up with.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {proofItems.map((item, index) => (
                    <div
                      key={item}
                      className="surface-card-strong px-5 py-4"
                      style={{ transitionDelay: `${index * 90}ms` }}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Before</p>
                      <p className="mt-2 text-lg font-semibold text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="section-shell px-4 py-16 md:py-24">
          <div className="container space-y-12">
            <Reveal className="max-w-2xl space-y-4">
              <p className="section-kicker">Everything in one place</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Practical features for households that need less effort and more clarity.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Each part of the app is designed to reduce manual follow-up and make household records easier to manage day after day.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 70}>
                  <Card className="surface-card h-full rounded-[30px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                    <CardContent className="space-y-4 p-6">
                      <div className="inline-flex rounded-2xl bg-accent/14 p-3 text-accent-strong">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">{feature.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-shell px-4 py-16 md:py-24">
          <div className="container">
            <div className="soft-card p-6 sm:p-8 lg:p-10">
              <Reveal className="max-w-2xl space-y-4">
                <p className="section-kicker">How it works</p>
                <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  A simpler monthly routine in four clear steps.
                </h2>
                <p className="text-lg leading-8 text-muted-foreground">
                  HouseHelp is built for the real rhythm of running a home, not for adding more process to it.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-5 lg:grid-cols-4">
                {steps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 90}>
                    <div className="surface-card relative h-full p-6 shadow-sm">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="section-shell overflow-hidden px-4 py-16 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal className="space-y-4">
              <p className="section-kicker">Visual showcase</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                See how the app keeps household records calm, clear, and easy to review.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                The app screens are designed to help you move through daily attendance, monthly salary, and payment history without second-guessing what comes next.
              </p>

              <div className="grid gap-3 pt-2">
                {showcases.map((screen, index) => (
                  <button
                    key={screen.label}
                    type="button"
                    onClick={() => setActiveShowcase(index)}
                    className={`rounded-[24px] border px-5 py-4 text-left transition-all duration-300 ${activeShowcase === index
                        ? "border-primary bg-card text-foreground shadow-[var(--shadow-soft)] dark:bg-card/95"
                        : "border-white/70 bg-white/60 text-muted-foreground hover:bg-white/85 dark:border-white/10 dark:bg-card/55 dark:hover:bg-card/80"
                      }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em]">{screen.label}</p>
                    <p className="mt-2 text-base font-semibold sm:text-lg">{screen.title}</p>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="absolute left-12 top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="soft-card relative overflow-hidden p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="relative mx-auto w-full max-w-[260px]">
                    <PhoneMockup
                      image={showcases[activeShowcase].image}
                      alt={showcases[activeShowcase].title}
                      className="animate-showcase-shift"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                      {showcases[activeShowcase].label}
                    </p>
                    <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                      {showcases[activeShowcase].title}
                    </h3>
                    <p className="text-base leading-8 text-muted-foreground">
                      {showcases[activeShowcase].description}
                    </p>
                    <div className="surface-card-strong flex items-center gap-3 px-4 py-4">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <p className="text-sm leading-7 text-muted-foreground">
                        Built to keep helper records, payment details, and monthly follow-up easier to trust at a glance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell px-4 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <Reveal className="space-y-4">
                <p className="section-kicker">Why it matters</p>
                <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  The payoff is less friction, fewer mistakes, and more peace of mind.
                </h2>
                <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                  When attendance, salary, and records live together, the household feels easier to run and easier to explain.
                </p>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <Reveal key={benefit} delay={index * 70}>
                    <div className="surface-card p-6">
                      <div className="inline-flex rounded-2xl bg-primary/12 p-3 text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-lg font-semibold tracking-tight text-foreground">{benefit}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="section-shell px-4 py-16 md:py-24">
          <div className="container">
            <Reveal className="relative overflow-hidden rounded-[36px] border border-white/70 px-6 py-10 shadow-[var(--shadow-hero)] dark:border-white/10 sm:px-10 lg:px-14 lg:py-14">
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
              <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-primary/12 blur-3xl" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div className="max-w-xl space-y-4">
                  <p className="section-kicker">Get early access</p>
                  <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Join the waitlist and bring more order to household management.
                  </h2>
                  <p className="text-lg leading-8 text-muted-foreground">
                    Launching soon. Join now for early access and use the Android beta link if you want to preview the experience sooner.
                  </p>
                </div>

                <div className="soft-card relative z-10 p-5 sm:p-6">
                  <EmailSignupForm
                    buttonLabel="Get Early Access"
                    placeholder="Your email address"
                    className="max-w-none"
                  />
                  <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                    <p>Limited early access. We’ll let you know as soon as your spot opens.</p>
                    <Button
                      variant="outline"
                      asChild
                      className="soft-button h-12 rounded-2xl px-5 font-semibold"
                    >
                      <a href={androidBetaUrl} target="_blank" rel="noopener noreferrer">
                        Try Beta on Android
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="section-shell px-4 py-16 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="space-y-4">
              <p className="section-kicker">FAQ</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Short answers for busy households.
              </h2>
              <p className="max-w-lg text-lg leading-8 text-muted-foreground">
                Everything here is designed to be simple to understand before you join the waitlist.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="soft-card p-4 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question} className="border-border/70">
                      <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-base leading-7 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 px-4 py-10 dark:border-white/10">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(151_28%_38%))] text-primary-foreground shadow-[var(--shadow-soft)]">
                <NotebookPen className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight text-foreground">HouseHelp</p>
                <p className="text-sm text-muted-foreground">One place to manage household staff with clarity.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <a href="mailto:contactus@merchandice.in" className="transition-colors hover:text-foreground">
              Contact
            </a>
            <a href={androidBetaUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
              Android Beta
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
