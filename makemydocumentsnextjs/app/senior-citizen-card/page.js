import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Train,
  PiggyBank,
  Landmark,
  IdCard,
  Send,
  Upload,
  Wallet,
  KeyRound,
  PackageCheck,
  MapPin,
  CalendarHeart,
  HandHeart,
  Lock,
  Sparkles,
} from "lucide-react";
import CTA from "@/components/sections/cta";

export const metadata = {
  title:
    "Apply for Senior Citizen Card Online (Karnataka) | Make My Documents",
  description:
    "Apply for the Karnataka Senior Citizen Card online. For residents aged 60+. Healthcare, travel, and government scheme benefits. Rs. 300 flat fee. Delivered in 25-30 working days.",
};

const benefits = [
  {
    icon: Heart,
    title: "Healthcare Benefits",
    text: "Medical prioritization with reduced expense at clinics and hospitals.",
    color: "from-rose-500 to-pink-600",
    chipBg: "bg-rose-50",
    chipText: "text-rose-700",
    featured: true,
  },
  {
    icon: Train,
    title: "Travel Discounts",
    text: "Lower transportation costs for bus, train, and air travel across India.",
    color: "from-amber-500 to-orange-600",
    chipBg: "bg-amber-50",
    chipText: "text-amber-700",
  },
  {
    icon: PiggyBank,
    title: "Financial Concessions",
    text: "Special banking services, pension plans, and senior tax benefits.",
    color: "from-emerald-500 to-teal-600",
    chipBg: "bg-emerald-50",
    chipText: "text-emerald-700",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    text: "Easy access to senior citizen welfare programs and subsidies.",
    color: "from-violet-500 to-purple-600",
    chipBg: "bg-violet-50",
    chipText: "text-violet-700",
  },
  {
    icon: IdCard,
    title: "Official Age Proof",
    text: "An authentic and widely accepted proof of identity and age.",
    color: "from-sky-500 to-blue-600",
    chipBg: "bg-sky-50",
    chipText: "text-sky-700",
  },
];

const steps = [
  {
    icon: Send,
    title: "Register Online",
    text: "Fill the simple online form on our secure portal.",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    text: "Share Aadhaar, blood report, and your photos digitally.",
  },
  {
    icon: Wallet,
    title: "Payment",
    text: "Pay the flat ₹300 application fee securely online.",
  },
  {
    icon: KeyRound,
    title: "Online e-KYC",
    text: "Verify with the mobile number linked to your Aadhaar.",
  },
  {
    icon: PackageCheck,
    title: "Get Delivered",
    text: "Soft copy on email / WhatsApp — print and start using it.",
  },
];

const eligibilityPoints = [
  {
    icon: CalendarHeart,
    text: "Applicant must be at least 60 years of age",
  },
  {
    icon: MapPin,
    text: "Applicant must be a resident of Karnataka",
  },
  {
    icon: ShieldCheck,
    text: "Aadhaar must be linked to a working mobile number",
  },
];

const documents = [
  "Aadhaar Card",
  "Blood Report",
  "Two Passport-size Photos",
];

const whyUs = [
  {
    icon: Sparkles,
    title: "Easy Online Process",
    text: "No standing in queues — fill a quick form at your convenience.",
  },
  {
    icon: HandHeart,
    title: "Professional Help",
    text: "Specialists guide you through paperwork, verification, and tracking.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    text: "Card delivered in 25-30 working days. No multiple office trips.",
  },
  {
    icon: Lock,
    title: "Safe and Private",
    text: "The security of your information is our utmost priority.",
  },
];

const faqs = [
  {
    q: "Who is eligible for a Senior Citizen Card in India?",
    a: "Any Indian citizen aged 60 years or above is eligible. For the Karnataka Senior Citizen Card specifically, the applicant must also be a resident of Karnataka. We handle the application on your behalf using your Aadhaar and basic age proof.",
  },
  {
    q: "Can I apply online for a Senior Citizen Card?",
    a: "Yes — the entire process is online. You fill a short form, share scanned copies of your Aadhaar and photos, complete OTP-based e-KYC, and pay the flat fee. The soft copy is delivered to your email or WhatsApp.",
  },
  {
    q: "What documents are needed for a Senior Citizen Card?",
    a: "You need an Aadhaar Card (with mobile linked for OTP), a recent blood report, and two passport-size photos. That's it — no complex paperwork or supporting affidavits required.",
  },
  {
    q: "How long does it take to get the Senior Citizen Card?",
    a: "The card is typically issued within 25-30 working days of submitting a complete application. Once approved, we share the soft copy on email and WhatsApp so you can start using it immediately by taking a colour printout.",
  },
  {
    q: "Is the Senior Citizen Card valid across India?",
    a: "The card is issued by the Karnataka Government and is primarily honoured for state-level concessions. Many central benefits (railway concessions, healthcare schemes, banking benefits) are offered to anyone above 60 with valid age proof — your Senior Citizen Card serves as authentic age proof anywhere in India.",
  },
  {
    q: "Can family members apply on behalf of senior citizens?",
    a: "Absolutely. Family members regularly apply on behalf of parents or grandparents. Our customer support team gives extra assistance to elderly applicants and their families through every step of the process.",
  },
  {
    q: "What are the benefits of a Senior Citizen Card?",
    a: "The card unlocks healthcare prioritization, travel discounts on bus/train/air, banking and pension benefits, easy access to welfare schemes, and serves as a widely accepted proof of identity and age.",
  },
  {
    q: "Is there an expiry date for the Senior Citizen Card?",
    a: "The Karnataka Senior Citizen Card is generally lifetime valid once issued — there is no renewal cycle. You only need to update it if your address or contact details change.",
  },
  {
    q: "How can I track my application status?",
    a: "After submission, you receive a tracking reference via email and WhatsApp. Our team also proactively shares status updates and contacts you the moment the card is ready to be delivered.",
  },
  {
    q: "Why choose Make My Documents over direct government application?",
    a: "We remove the queues, paperwork confusion, and multiple office visits. Our specialists verify your documents before submission to avoid rejections, handle the entire follow-up, and deliver the soft copy directly to your email or WhatsApp.",
  },
];

export default function SeniorCitizenCardPage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-rose-600 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">
                Senior Citizen Card
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-amber-300/40 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-800 backdrop-blur-sm">
                  <HandHeart className="h-3 w-3" />
                  Karnataka · 60+
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 backdrop-blur-sm">
                  <ShieldCheck className="h-3 w-3" />
                  Govt-issued ID
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Senior Citizen{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Card</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-rose-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>{" "}
                Services
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Healthcare, travel, banking, and welfare benefits for citizens
                aged 60 and above. We handle the paperwork — you receive the
                soft copy on email and WhatsApp.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#benefits"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  See the benefits →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-rose-500 text-rose-500" />
                <span className="font-display text-sm font-bold text-slate-900">
                  99% Delivered on time
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-rose-600" />
                  <span className="text-xs font-bold text-slate-800">
                    25-30 working days
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Wallet className="h-3.5 w-3.5 text-rose-600" />
                  <span className="text-xs font-bold text-slate-800">
                    ₹ 300 flat
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-rose-300/30 to-amber-300/30 blur-2xl"
                aria-hidden
              />

              <div className="absolute -left-3 top-12 z-20 -rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Healthcare priority
                  </span>
                </div>
              </div>

              <div className="absolute -right-3 top-32 z-20 rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Train className="h-5 w-5 text-amber-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Travel concessions
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-md">
                <img
                  src="/illustrations/services/senior.svg"
                  alt="Senior citizen with ID card"
                  className="relative h-auto w-full select-none drop-shadow-2xl animate-float"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <CalendarHeart className="h-4 w-4 text-rose-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Lifetime valid · Once issued
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
                About the Service
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Apply with{" "}
                <span className="text-rose-600">ease and dignity</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  Are you or a family member over 60 and looking for a Senior
                  Citizen Card to access government benefits, travel
                  concessions, and healthcare perks? We make it quick and
                  hassle-free.
                </p>
                <p>
                  Whether it's age declaration, security benefits, or identity
                  verification — our team of professionals handles your
                  application the right way and on time.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6">
                <div>
                  <div className="font-display text-2xl font-extrabold text-rose-700 md:text-3xl">
                    60+
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Eligible age
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-rose-700 md:text-3xl">
                    25-30
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Working days
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-rose-700 md:text-3xl">
                    ₹ 300
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Flat fee
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100"
                aria-hidden
              />
              <div className="flex items-center justify-center p-6 md:p-8">
                <img
                  src="/illustrations/trust-team.svg"
                  alt="Caring senior support team"
                  className="h-auto w-full max-w-md select-none drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
              Why You Need It
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              What the card{" "}
              <span className="text-rose-600">unlocks</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Five everyday benefits the Senior Citizen Card opens up for
              people aged 60 and above.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <article
                key={b.title}
                className={`group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-card p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2 lg:p-8" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${b.color} opacity-0 transition-opacity group-hover:opacity-[0.05]`}
                />
                <div className="flex items-start justify-between">
                  <div
                    className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${
                      b.color
                    } shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3 ${
                      i === 0 ? "h-16 w-16" : "h-14 w-14"
                    }`}
                  >
                    <b.icon
                      className={`text-white ${i === 0 ? "h-8 w-8" : "h-7 w-7"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span
                    className={`rounded-full ${b.chipBg} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${b.chipText}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-display font-bold leading-tight ${
                    i === 0 ? "text-2xl md:text-3xl" : "text-lg"
                  }`}
                >
                  {b.title}
                </h3>
                <p
                  className={`mt-3 leading-relaxed text-muted-foreground ${
                    i === 0 ? "text-base md:text-lg" : "text-sm"
                  }`}
                >
                  {b.text}
                </p>

                {i === 0 && (
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-rose-600">
                    <Sparkles className="h-4 w-4" />
                    Most-used benefit by seniors
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-24">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              5 simple steps from{" "}
              <span className="text-rose-400">form to delivery</span>
            </h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-7xl">
            <div
              className="absolute left-1/2 top-7 hidden h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent lg:block"
              aria-hidden
            />

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-amber-500 text-white shadow-xl ring-4 ring-slate-900">
                      <step.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white font-display text-xs font-black text-rose-600 shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-rose-400/40 hover:bg-white/10">
                    <h3 className="font-display text-base font-bold leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
              Get Ready
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Eligibility &{" "}
              <span className="text-rose-600">documents</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Two short checklists — confirm you qualify, then keep these
              papers ready.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      Step 1
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Eligibility
                    </h3>
                  </div>
                  <CalendarHeart className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="space-y-2 p-6">
                {eligibilityPoints.map((e) => (
                  <li
                    key={e.text}
                    className="flex items-start gap-3 rounded-xl bg-rose-50/60 px-4 py-3 text-sm"
                  >
                    <e.icon className="mt-0.5 h-4 w-4 shrink-0 text-rose-700" />
                    <span className="font-medium text-foreground">
                      {e.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      Step 2
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Documents Required
                    </h3>
                  </div>
                  <Upload className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="space-y-2 p-6">
                {documents.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-xl bg-amber-50/60 px-4 py-3 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span className="font-medium text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t bg-amber-50/30 px-6 py-3 text-xs text-muted-foreground">
                Once approved, the soft copy is shared on email / WhatsApp —
                take a colour printout and start using.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border bg-card p-8 shadow-sm md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100">
                  <HandHeart className="h-5 w-5 text-rose-700" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Why Make My Documents
                  </div>
                  <h3 className="font-display text-xl font-bold md:text-2xl">
                    Built around comfort
                  </h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {whyUs.map((w) => (
                  <li key={w.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
                      <w.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-foreground">
                        {w.title}
                      </div>
                      <div className="text-sm leading-relaxed text-muted-foreground">
                        {w.text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-600 p-8 text-white shadow-xl md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Wallet className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/85">
                  Charges
                </div>
              </div>
              <div className="relative mt-6 font-display text-6xl font-black leading-none md:text-7xl">
                ₹ 300
                <span className="ml-2 font-display text-base font-bold opacity-90">
                  flat
                </span>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                One transparent fee for the entire application — drafting,
                e-KYC, and follow-up included. No surprises.
              </p>
              <div className="relative mt-6 rounded-xl border border-white/20 bg-white/10 p-4 text-xs leading-relaxed text-white/85 backdrop-blur-sm">
                <span className="font-bold text-white">Cancellation:</span> If
                you cancel after payment, a flat ₹50 fee applies to cover
                processing.
              </div>
              <button
                type="button"
                className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-display text-base font-bold text-rose-700 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-rose-600">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to senior citizen
              card services.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-rose-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 transition-transform group-open:rotate-180">
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
