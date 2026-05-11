import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  Home,
  Plane,
  Scale,
  Send,
  CreditCard,
  CalendarCheck2,
  Building2,
  PackageCheck,
  Stamp,
  Lock,
  IdCard,
  MapPin,
  Search,
} from "lucide-react";
import CTA from "@/components/sections/cta";

export const metadata = {
  title:
    "Apply for Police Verification Certificate Online (Karnataka) | Make My Documents",
  description:
    "Apply for a Police Verification Certificate (PVC) in Karnataka — for employment, rental, passport, visa, and legal needs. Online appointment, 10-15 working days, Rs. 750 flat.",
};

const reasons = [
  {
    icon: Briefcase,
    title: "Hiring & Background Checks",
    text: "Government bodies and private employers often require a police report as a hiring pre-condition. Verify your candidacy with a clean record.",
    color: "from-indigo-500 to-blue-600",
    chipBg: "bg-indigo-50",
    chipText: "text-indigo-700",
  },
  {
    icon: Home,
    title: "Rental Verification",
    text: "Landlords and housing societies often require a police-verified identity proof before signing the lease.",
    color: "from-emerald-500 to-teal-600",
    chipBg: "bg-emerald-50",
    chipText: "text-emerald-700",
  },
  {
    icon: Plane,
    title: "Passport & Visa Requests",
    text: "A required attachment for many travel-related documents — passport renewal, foreign visas, work permits.",
    color: "from-cyan-500 to-sky-600",
    chipBg: "bg-cyan-50",
    chipText: "text-cyan-700",
  },
  {
    icon: Scale,
    title: "Legal & Security Needs",
    text: "A trusted source of confidence for personal and business transactions, contracts, and tenders.",
    color: "from-violet-500 to-purple-600",
    chipBg: "bg-violet-50",
    chipText: "text-violet-700",
  },
];

const steps = [
  {
    icon: Send,
    title: "Register Online",
    text: "Enter your details securely on our portal.",
    phase: "Online",
    phaseColor: "from-indigo-500 to-blue-600",
    phaseBg: "bg-indigo-50",
    phaseText: "text-indigo-700",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    text: "Pay online for fast processing of your application.",
    phase: "Online",
    phaseColor: "from-indigo-500 to-blue-600",
    phaseBg: "bg-indigo-50",
    phaseText: "text-indigo-700",
  },
  {
    icon: CalendarCheck2,
    title: "Get Appointment",
    text: "Receive a scheduled date and time for the police visit.",
    phase: "Schedule",
    phaseColor: "from-cyan-500 to-sky-600",
    phaseBg: "bg-cyan-50",
    phaseText: "text-cyan-700",
  },
  {
    icon: Building2,
    title: "Visit Police Station",
    text: "Attend the appointment for identity verification.",
    phase: "At Station",
    phaseColor: "from-violet-500 to-purple-600",
    phaseBg: "bg-violet-50",
    phaseText: "text-violet-700",
  },
  {
    icon: PackageCheck,
    title: "Get Delivered",
    text: "Certificate sent digitally via WhatsApp or Email.",
    phase: "Delivery",
    phaseColor: "from-emerald-500 to-teal-600",
    phaseBg: "bg-emerald-50",
    phaseText: "text-emerald-700",
  },
];

const eligibility = [
  {
    icon: MapPin,
    text: "Resident of Karnataka",
  },
  {
    icon: IdCard,
    text: "Valid proof of address and a government-issued ID",
  },
  {
    icon: Building2,
    text: "Able to attend a police station appointment for verification",
  },
];

const documents = [
  "Aadhaar Card (any one address proof)",
  "Passport-size Photograph",
];

const faqs = [
  {
    q: "What is a Police Verification Certificate?",
    a: "A Police Verification Certificate (PVC) is an official document issued by the local police that confirms a person has a clean criminal record. It is required for employment, rental, passport / visa, and many other formal processes.",
  },
  {
    q: "Who needs a PVC?",
    a: "PVCs are commonly needed by job applicants (especially for government and security-sensitive roles), tenants signing rental agreements, passport and visa applicants, and people involved in legal or large business transactions.",
  },
  {
    q: "How do I apply through Make My Documents?",
    a: "Register on our portal, pay the application fee online, and we book your police station appointment. You attend the slot for biometric and identity verification, and the certificate is delivered to your email and WhatsApp once approved.",
  },
  {
    q: "What documents are required?",
    a: "Just an Aadhaar Card (used as address proof and ID) and a recent passport-size photograph. Both can be uploaded digitally — no physical document submission needed at the start.",
  },
  {
    q: "Do I have to visit the police station?",
    a: "Yes — a one-time visit to the assigned police station is required for in-person identity verification. We confirm the slot, share the address, and guide you on what to carry. The visit is short and typically takes under 30 minutes.",
  },
  {
    q: "How long does it take to get the certificate?",
    a: "Most certificates are issued within 10-15 working days from the date of your police station appointment. You receive both a digital copy and an SMS / WhatsApp confirmation when ready.",
  },
  {
    q: "Will I get a physical or digital certificate?",
    a: "Make My Documents delivers the official digital certificate via email and WhatsApp. You can take a colour print and use it anywhere a hard copy is required — most employers and authorities accept the digital version directly.",
  },
  {
    q: "Can I track my application?",
    a: "Yes. After payment we share a tracking reference and proactive WhatsApp updates at every stage — appointment confirmed, station visit done, verification in progress, and certificate ready.",
  },
  {
    q: "Is my data safe?",
    a: "Completely. All uploads are encrypted, used only for your application, and never shared with third parties beyond the police authority handling your verification.",
  },
  {
    q: "Is this service available outside Karnataka?",
    a: "This service is currently available only for Karnataka residents. Police Verification rules and processes vary by state — we are expanding to other states and will update applicants as new regions go live.",
  },
];

export default function PoliceVerificationPage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">
                Police Verification
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-slate-50 to-blue-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 backdrop-blur-sm">
                  <ShieldCheck className="h-3 w-3" />
                  Karnataka · Verified
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800 backdrop-blur-sm">
                  <Stamp className="h-3 w-3" />
                  Official PVC
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Police Verification{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Certificate</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-indigo-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Need a PVC for employment, lease, passport, or visa? Skip the
                long queues and frustrating paperwork. Book online, attend one
                short station visit, and receive the certificate on your email
                and WhatsApp.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#why"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  Why it matters →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-indigo-500 text-indigo-500" />
                <span className="font-display text-sm font-bold text-slate-900">
                  99% Delivered on time
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">
                    10-15 working days
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <CreditCard className="h-3.5 w-3.5 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">
                    ₹ 750 flat
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-indigo-300/30 to-blue-300/30 blur-2xl"
                aria-hidden
              />

              <div className="absolute -left-3 top-12 z-20 -rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Background check
                  </span>
                </div>
              </div>

              <div className="absolute -right-3 top-32 z-20 rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Stamp className="h-5 w-5 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Officially verified
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-md">
                <img
                  src="/illustrations/services/police-verification.svg"
                  alt="Police officer reviewing verification documents"
                  className="relative h-auto w-full select-none drop-shadow-2xl animate-float"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-indigo-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Trusted by employers & landlords
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                About the Service
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Apply online —{" "}
                <span className="text-indigo-600">no long queues</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  Need a Police Verification Certificate (PVC) for employment,
                  lease, passport, or any other official process? We handle
                  every step — safely, quickly, and without difficulty for
                  Karnataka residents.
                </p>
                <p>
                  What used to mean long waits and confusing paperwork is now
                  fully online. Book the appointment, attend one station
                  visit, and receive your certificate on email or WhatsApp.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6">
                <div>
                  <div className="font-display text-2xl font-extrabold text-indigo-700 md:text-3xl">
                    99%
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    On-time delivery
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-indigo-700 md:text-3xl">
                    10-15
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Working days
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-indigo-700 md:text-3xl">
                    ₹ 750
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Flat fee
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-100"
                aria-hidden
              />
              <div className="flex items-center justify-center p-6 md:p-8">
                <img
                  src="/illustrations/hero-stamp.svg"
                  alt="Official stamp and verification document"
                  className="h-auto w-full max-w-sm select-none drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Why It Matters
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Where a PVC{" "}
              <span className="text-indigo-600">opens doors</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Four trust scenarios where a Police Verification Certificate is
              expected — or required.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
            {reasons.map((r) => (
              <article
                key={r.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${r.color} opacity-0 transition-opacity group-hover:opacity-[0.05]`}
                />
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${r.color}`}
                />
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${r.color} shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <r.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`rounded-full ${r.chipBg} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${r.chipText}`}
                  >
                    Use Case
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-24">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              From form to{" "}
              <span className="text-indigo-400">final delivery</span>
            </h2>
            <p className="mt-4 text-white/60">
              Five colour-coded phases — online, schedule, station, delivery.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <div className={`h-1.5 bg-gradient-to-r ${step.phaseColor}`} />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.phaseColor} shadow-lg`}
                    >
                      <step.icon
                        className="h-5 w-5 text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="font-display text-2xl font-black text-white/15">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <span
                    className={`mt-4 inline-flex w-fit items-center gap-1 rounded-full ${step.phaseBg} px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${step.phaseText}`}
                  >
                    {step.phase}
                  </span>

                  <h3 className="mt-2 font-display text-base font-bold leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    {step.text}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <ChevronRight
                    className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-white/30 lg:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Get Ready
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Eligibility &{" "}
              <span className="text-indigo-600">documents</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Two short checklists — confirm you qualify, then keep these
              papers ready.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      Step 1
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Eligibility
                    </h3>
                  </div>
                  <ShieldCheck className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="space-y-2 p-6">
                {eligibility.map((e) => (
                  <li
                    key={e.text}
                    className="flex items-start gap-3 rounded-xl bg-indigo-50/60 px-4 py-3 text-sm"
                  >
                    <e.icon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700" />
                    <span className="font-medium text-foreground">
                      {e.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      Step 2
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Documents Required
                    </h3>
                  </div>
                  <IdCard className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="space-y-2 p-6">
                {documents.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-xl bg-cyan-50/60 px-4 py-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                    <span className="font-medium text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t bg-cyan-50/30 px-6 py-3 text-xs text-muted-foreground">
                Aadhaar serves as both ID and address proof — no extra
                paperwork required.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl">
            <div className="relative overflow-hidden rounded-3xl bg-card shadow-2xl">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 px-7 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                      Normal Application
                    </div>
                    <div className="mt-0.5 font-display text-lg font-bold">
                      Police Verification Certificate
                    </div>
                  </div>
                  <Stamp className="h-10 w-10 opacity-90" strokeWidth={1.75} />
                </div>
              </div>

              <div className="space-y-1 px-7 py-6">
                <div className="flex items-baseline justify-between border-b-2 border-dashed border-slate-200 py-3">
                  <div>
                    <div className="font-display text-base font-bold">
                      Application Fee
                    </div>
                    <div className="text-xs text-muted-foreground">
                      End-to-end processing
                    </div>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-indigo-600">
                    ₹ 750
                  </div>
                </div>

                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <div className="font-display text-base font-bold">
                      Booking Fee
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Pay while submitting the form
                    </div>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-indigo-600">
                    ₹ 99
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 px-7 py-5">
                <div className="flex items-baseline justify-between">
                  <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Total
                  </div>
                  <div className="font-display text-4xl font-black text-slate-900">
                    ₹ 750
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-display text-base font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="mt-4 flex items-start gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-white px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
                  <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-600" />
                  <span>
                    The ₹99 booking fee is non-refundable and is adjusted in
                    the total bill.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-indigo-600">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to police
              verification.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-indigo-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 transition-transform group-open:rotate-180">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
