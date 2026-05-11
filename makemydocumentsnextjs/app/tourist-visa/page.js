import Link from "next/link";
import {
  Plane,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Sparkles,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/cta";

export const metadata = {
  title: "Tourist Visa Services — Apply Online | Make My Documents",
  description:
    "Apply for tourist visas online to UAE, Singapore, UK, Australia, Malaysia, Egypt, and more. Fast turnaround, expert guidance, end-to-end support — start to finish.",
};

const countries = [
  {
    name: "United Arab Emirates",
    short: "UAE",
    flag: "🇦🇪",
    gradient: "from-amber-400 via-orange-400 to-amber-500",
    accent: "bg-amber-500",
  },
  {
    name: "Singapore",
    short: "SGP",
    flag: "🇸🇬",
    gradient: "from-rose-500 via-red-500 to-rose-600",
    accent: "bg-rose-500",
  },
  {
    name: "United Kingdom",
    short: "GBR",
    flag: "🇬🇧",
    gradient: "from-blue-500 via-indigo-500 to-blue-700",
    accent: "bg-blue-600",
  },
  {
    name: "Australia",
    short: "AUS",
    flag: "🇦🇺",
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    accent: "bg-cyan-600",
  },
  {
    name: "Malaysia",
    short: "MYS",
    flag: "🇲🇾",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    accent: "bg-yellow-600",
  },
  {
    name: "Egypt",
    short: "EGY",
    flag: "🇪🇬",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    accent: "bg-amber-700",
  },
  {
    name: "Vietnam",
    short: "VNM",
    flag: "🇻🇳",
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    accent: "bg-emerald-600",
  },
  {
    name: "Hong Kong",
    short: "HKG",
    flag: "🇭🇰",
    gradient: "from-fuchsia-500 via-purple-500 to-violet-600",
    accent: "bg-fuchsia-600",
  },
  {
    name: "Indonesia",
    short: "IDN",
    flag: "🇮🇩",
    gradient: "from-red-500 via-rose-500 to-pink-600",
    accent: "bg-red-600",
  },
  {
    name: "Azerbaijan",
    short: "AZE",
    flag: "🇦🇿",
    gradient: "from-teal-500 via-cyan-500 to-sky-600",
    accent: "bg-teal-600",
  },
  {
    name: "Oman",
    short: "OMN",
    flag: "🇴🇲",
    gradient: "from-orange-500 via-red-500 to-rose-600",
    accent: "bg-orange-600",
  },
  {
    name: "Morocco",
    short: "MAR",
    flag: "🇲🇦",
    gradient: "from-emerald-600 via-green-600 to-lime-600",
    accent: "bg-emerald-700",
  },
  {
    name: "Bahrain",
    short: "BHR",
    flag: "🇧🇭",
    gradient: "from-rose-600 via-red-600 to-orange-600",
    accent: "bg-rose-700",
  },
  {
    name: "Qatar",
    short: "QAT",
    flag: "🇶🇦",
    gradient: "from-fuchsia-600 via-purple-600 to-indigo-700",
    accent: "bg-fuchsia-700",
  },
  {
    name: "Russia",
    short: "RUS",
    flag: "🇷🇺",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    accent: "bg-sky-600",
  },
  {
    name: "Uzbekistan",
    short: "UZB",
    flag: "🇺🇿",
    gradient: "from-lime-500 via-green-500 to-emerald-600",
    accent: "bg-lime-600",
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "Govt. Approved" },
  { icon: Clock, label: "Fast Turnaround" },
  { icon: CheckCircle2, label: "End-to-End Support" },
];

function BoardingPassCard({ country }) {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-full">
        <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-2xl bg-foreground/10 blur-md transition-all duration-300 group-hover:translate-y-4" />

        <div className="relative flex overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
          <div className="relative w-2/5 shrink-0">
            <div
              className={`relative h-full min-h-[160px] bg-gradient-to-br ${country.gradient}`}
            >
              <div className="absolute inset-x-0 top-0 flex items-center gap-1 bg-sky-500 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              </div>

              <img
                src="/illustrations/visa-card-skyline.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
                <div className="font-display text-3xl font-extrabold tracking-wider text-white drop-shadow-lg">
                  {country.short}
                </div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Plane className="h-2.5 w-2.5" /> Visit
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col">
            <div className="flex items-center gap-1.5 bg-sky-500 px-3 py-2">
              <Plane className="h-3.5 w-3.5 -rotate-12 text-white" />
              <div className="flex flex-1 items-center gap-1 overflow-hidden">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70"
                  />
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 -left-2 flex flex-col justify-around">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="h-3 w-3 rounded-full bg-secondary"
                />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-15">
              <Globe className="absolute -right-4 top-6 h-32 w-32 text-foreground" strokeWidth={0.6} />
            </div>

            <div className="relative flex flex-1 flex-col items-center justify-center gap-3 px-3 py-5">
              <div className="text-3xl">{country.flag}</div>
              <div className="text-center font-display text-base font-bold leading-tight text-foreground md:text-lg">
                {country.name}
              </div>
              <button
                type="button"
                className="rounded-md bg-amber-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 font-display text-sm font-semibold text-foreground">
        {country.name}
      </div>
    </div>
  );
}

export default function TouristVisaPage() {
  return (
    <main>
      <section className="border-b bg-secondary/40 pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-primary hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">Tourist Visa</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-100 to-orange-50"
          aria-hidden
        />
        <div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-8 py-16 md:py-20 lg:grid-cols-[1.1fr_1fr]">
            <div className="animate-fade-up">
              <Badge>
                <Sparkles className="mr-1.5 h-3 w-3" />
                Visa Assistance
              </Badge>

              <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Tourist Visa Services
                <br />
                <span className="text-slate-800">– Apply Online With Ease</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Plan your next adventure stress-free. We handle the paperwork,
                embassy requirements, and submission for{" "}
                <span className="font-semibold text-slate-900">180+ countries</span>{" "}
                — so you can focus on the trip.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="gradient" size="lg">
                  Start My Application
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 bg-white/60 text-slate-800 backdrop-blur-sm hover:bg-white"
                >
                  Talk to a Visa Expert
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {trustItems.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <t.icon className="h-4 w-4 text-emerald-600" />
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/illustrations/visa-hero-landmarks.svg"
                alt="Airplane with global landmarks — Statue of Liberty, Big Ben, Eiffel Tower, Pisa, St Basil's Cathedral"
                className="h-auto w-full max-w-2xl select-none drop-shadow-2xl animate-float"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>Popular Destinations</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Apply for a{" "}
              <span className="gradient-text">Tourist Visa</span> in minutes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pick your destination, share a few details, and our experts will
              take it from there. End-to-end assistance from application to
              approval.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <BoardingPassCard key={c.name} country={c} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button variant="gradient" size="lg">
              View All 180+ Countries
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>How It Works</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Your visa, in 3 simple steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Pick a Destination",
                text: "Choose your travel country — we'll show you the visa types, fees, and required documents up front.",
              },
              {
                step: "02",
                title: "Share Your Documents",
                text: "Upload passport, photos, and supporting docs. Our experts verify everything and flag missing items before submission.",
              },
              {
                step: "03",
                title: "Track & Receive",
                text: "We submit, follow up with the embassy, and deliver your approved visa straight to your inbox or doorstep.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="font-display text-3xl font-extrabold gradient-text">
                  {s.step}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
