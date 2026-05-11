import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  ShieldCheck,
  Landmark,
  Banknote,
  Briefcase,
  TrendingDown,
  Shield,
  User,
  Users,
  Building2,
  HandHeart,
  Rocket,
  Send,
  Upload,
  Wallet,
  PackageCheck,
  Infinity as InfinityIcon,
  Award,
  FilePen,
  Globe2,
  Gift,
  TrendingUp,
  Sparkles,
  IdCard,
} from "lucide-react";
import CTA from "@/components/sections/cta";

export const metadata = {
  title:
    "MSME / Udyam Registration Online | Make My Documents",
  description:
    "Get your MSME / Udyam Registration Number (URN) online. Lifetime valid certificate, all-India recognition, delivered in 1-2 working days. Rs. 500 flat — start growing your business today.",
};

const benefits = [
  {
    icon: Landmark,
    title: "Govt Schemes Access",
    text: "Subsidies, tax incentives, and assistance programs available to registered MSMEs.",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    icon: Banknote,
    title: "Bank Loan Priority",
    text: "Easy access to loans at attractive interest rates — often without collateral.",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    icon: Briefcase,
    title: "Tender & Purchase",
    text: "Government portal makes tender applications and procurement straightforward.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: TrendingDown,
    title: "Cost Savings",
    text: "Reduced cost on trademark, patent, and ISO certification fees.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Shield,
    title: "Payments Protection",
    text: "Legal protection that ensures buyers pay you on time — no more bad debt.",
    color: "from-fuchsia-500 to-rose-600",
  },
];

const entities = [
  {
    icon: User,
    title: "Proprietorship",
    text: "Solo business owners can register without any hassles.",
  },
  {
    icon: Users,
    title: "Partnership",
    text: "Businesses with co-owners can register as a group.",
  },
  {
    icon: Building2,
    title: "LLPs & Companies",
    text: "Private and public companies of any type, including LLPs.",
  },
  {
    icon: HandHeart,
    title: "Self-Help Groups",
    text: "Non-profits and societies engaged in commerce can apply.",
  },
  {
    icon: Rocket,
    title: "Startups",
    text: "New businesses looking for growth and funding support.",
  },
];

const tiers = [
  {
    id: "micro",
    label: "Micro",
    subtitle: "Smallest tier",
    investment: "₹ 2.5 crore",
    turnover: "₹ 10 crore",
    cardClass:
      "bg-gradient-to-br from-fuchsia-50 to-purple-50 border-fuchsia-200",
    accent: "text-fuchsia-700",
    badgeBg: "bg-fuchsia-100",
    badgeText: "text-fuchsia-700",
    height: "lg:py-10",
  },
  {
    id: "small",
    label: "Small",
    subtitle: "Mid tier",
    investment: "₹ 25 crore",
    turnover: "₹ 100 crore",
    cardClass:
      "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-300",
    accent: "text-purple-700",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    height: "lg:py-14",
  },
  {
    id: "medium",
    label: "Medium",
    subtitle: "Largest tier",
    investment: "₹ 125 crore",
    turnover: "₹ 500 crore",
    cardClass:
      "bg-gradient-to-br from-violet-100 to-fuchsia-100 border-violet-300",
    accent: "text-violet-700",
    badgeBg: "bg-violet-100",
    badgeText: "text-violet-700",
    height: "lg:py-20",
  },
];

const steps = [
  {
    icon: Send,
    title: "Register Online",
    text: "Enter your business and owner details on our secure portal.",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    text: "Submit scanned copies of Aadhaar Card and PAN Card.",
  },
  {
    icon: Wallet,
    title: "Make Payment",
    text: "Pay securely online to get your application processed.",
  },
  {
    icon: PackageCheck,
    title: "Get Delivered",
    text: "MSME certificate delivered digitally within 1-2 working days.",
  },
];

const features = [
  {
    icon: InfinityIcon,
    title: "Lifetime Validity",
    text: "Register once. No renewal required — ever.",
  },
  {
    icon: Award,
    title: "Digital Certificate",
    text: "MSME e-certificate issued instantly online.",
  },
  {
    icon: FilePen,
    title: "Self-Declaration",
    text: "Simple paperwork and straightforward verification.",
  },
  {
    icon: Globe2,
    title: "All-India Recognition",
    text: "Valid for business use anywhere in India.",
  },
  {
    icon: Gift,
    title: "Zero Govt Fee",
    text: "It's a free government registration process — you only pay our service fee.",
  },
];

const documents = [
  {
    icon: IdCard,
    title: "Aadhaar Card",
    sub: "of the business owner",
  },
  {
    icon: IdCard,
    title: "PAN Card",
    sub: "of the business or proprietor",
  },
];

const faqs = [
  {
    q: "What is MSME Registration?",
    a: "MSME Registration is a government-issued recognition certificate for Micro, Small, and Medium Enterprises. It classifies your business based on investment and turnover, and unlocks access to subsidies, loan benefits, tax incentives, and government schemes.",
  },
  {
    q: "Is Udyam Registration different from MSME Registration?",
    a: "No — Udyam Registration is the current online process for MSME Registration, introduced by the Government of India in 2020. Both terms refer to the same registration; the certificate you receive is called the Udyam Registration Certificate.",
  },
  {
    q: "Is Aadhaar mandatory for MSME Registration?",
    a: "Yes. Aadhaar is mandatory — for proprietors it must be the owner's Aadhaar; for partnerships it is the managing partner's; and for companies and LLPs it is the authorised signatory's Aadhaar.",
  },
  {
    q: "How much does MSME Registration cost?",
    a: "The government registration itself is free. Make My Documents charges a flat ₹500 service fee for filing, document verification, and digital delivery. There is also a ₹99 booking fee while submitting the form, adjusted in the total bill.",
  },
  {
    q: "How long does it take to get the MSME Certificate?",
    a: "Once your documents are verified, the Udyam Registration Number (URN) and digital certificate are typically issued within 1-2 working days. We deliver it directly to your email and WhatsApp.",
  },
  {
    q: "Can a startup register under MSME?",
    a: "Yes. New businesses and startups looking for funding support are eligible. In fact, MSME registration helps startups attract investor trust and qualify for government tenders reserved for MSMEs.",
  },
  {
    q: "Do I need to renew my MSME Registration?",
    a: "No. MSME Registration has lifetime validity — register once and you're done. You only need to update the registration if your business turnover or investment crosses your current tier's limit.",
  },
  {
    q: "Is GST mandatory for MSME Registration?",
    a: "GST is required only if your business turnover crosses the GST threshold or if GST is mandatory for your industry. For businesses below the threshold and not in the mandatory list, GST is not needed for MSME registration.",
  },
  {
    q: "What benefits do MSMEs get from banks?",
    a: "Banks offer registered MSMEs preferential interest rates, collateral-free loans up to specified limits under government schemes (CGTMSE), faster loan approval, and easier credit access for working capital and machinery.",
  },
  {
    q: "Can a company outside India apply?",
    a: "MSME / Udyam Registration is meant for Indian businesses operating in India. Companies registered outside India are not eligible. However, an Indian subsidiary or branch of a foreign company that is registered in India can apply.",
  },
];

export default function MsmePage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-fuchsia-600 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">MSME Registration</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-fuchsia-100 via-purple-50 to-violet-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-fuchsia-800 backdrop-blur-sm">
                  <Sparkles className="h-3 w-3" />
                  Udyam · Lifetime Valid
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-800 backdrop-blur-sm">
                  <ShieldCheck className="h-3 w-3" />
                  Govt of India
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                MSME / Udyam{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Registration</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-fuchsia-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Get your business officially recognised as Micro, Small, or
                Medium. Unlock subsidies, priority bank loans, and government
                tenders — all with a free government certificate that lasts a
                lifetime.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-fuchsia-600 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-fuchsia-700 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#tiers"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  See classification →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-fuchsia-500 text-fuchsia-500" />
                <span className="font-display text-sm font-bold text-slate-900">
                  99% Delivered on time
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-fuchsia-600" />
                  <span className="text-xs font-bold text-slate-800">
                    1-2 working days
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Wallet className="h-3.5 w-3.5 text-fuchsia-600" />
                  <span className="text-xs font-bold text-slate-800">
                    ₹ 500 flat
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Gift className="h-3.5 w-3.5 text-fuchsia-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Zero govt fee
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-fuchsia-300/30 to-purple-300/30 blur-2xl"
                aria-hidden
              />

              <div className="absolute -left-3 top-12 z-20 -rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-fuchsia-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Business growth
                  </span>
                </div>
              </div>

              <div className="absolute -right-3 top-32 z-20 rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Banknote className="h-5 w-5 text-purple-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Loan priority
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-md">
                <img
                  src="/illustrations/services/msme.svg"
                  alt="MSME business owner with growth charts"
                  className="relative h-auto w-full select-none drop-shadow-2xl animate-float"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-fuchsia-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Udyam Registration Number (URN)
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">
                An Overview
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                What is{" "}
                <span className="text-fuchsia-600">MSME / Udyam?</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  Udyam Registration is the official online process to
                  register a Micro, Small, or Medium business with the
                  Government of India. You receive a unique Udyam Registration
                  Number (URN) and an e-certificate.
                </p>
                <p>
                  With this recognition, credit, subsidies, and government
                  assistance become easy to access — so you can spend more
                  time growing the business instead of chasing paperwork.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6">
                <div>
                  <div className="font-display text-2xl font-extrabold text-fuchsia-700 md:text-3xl">
                    1-2
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Working days
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-fuchsia-700 md:text-3xl">
                    Lifetime
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Validity
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-fuchsia-700 md:text-3xl">
                    ₹ 500
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Flat service fee
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-100 via-purple-50 to-violet-100"
                aria-hidden
              />
              <div className="flex items-center justify-center p-6 md:p-8">
                <img
                  src="/illustrations/trust-team.svg"
                  alt="Business team and growth"
                  className="h-auto w-full max-w-md select-none drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tiers" className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              Classification
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Micro, Small, or{" "}
              <span className="text-fuchsia-600">Medium?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your business tier is decided by investment and annual turnover.
              Find where you fit.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl items-end gap-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <article
                key={t.id}
                className={`group relative overflow-hidden rounded-3xl border-2 ${t.cardClass} ${t.height} px-6 py-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`rounded-full ${t.badgeBg} px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${t.badgeText}`}
                  >
                    Tier {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-5xl font-black text-white drop-shadow-sm opacity-30">
                    {String(i + 1)}
                  </div>
                </div>

                <h3
                  className={`mt-5 font-display text-3xl font-black leading-tight ${t.accent} md:text-4xl`}
                >
                  {t.label}
                </h3>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  {t.subtitle}
                </div>

                <div className="mt-6 space-y-3 border-t border-current/10 pt-5">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Investment up to
                    </div>
                    <div
                      className={`mt-0.5 font-display text-xl font-extrabold ${t.accent}`}
                    >
                      {t.investment}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Turnover up to
                    </div>
                    <div
                      className={`mt-0.5 font-display text-xl font-extrabold ${t.accent}`}
                    >
                      {t.turnover}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              Benefits
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              What you{" "}
              <span className="text-fuchsia-600">unlock</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Five everyday wins MSME registration brings to your business.
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
                    className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${b.color} shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3 ${
                      i === 0 ? "h-16 w-16" : "h-14 w-14"
                    }`}
                  >
                    <b.icon
                      className={`text-white ${i === 0 ? "h-8 w-8" : "h-7 w-7"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="rounded-full bg-fuchsia-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-fuchsia-700">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-24">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-400">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              4 easy steps to your{" "}
              <span className="text-fuchsia-400">URN</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/10"
              >
                <div className="absolute -right-3 -top-3 font-display text-7xl font-black text-white/[0.05]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-lg">
                    <step.icon
                      className="h-6 w-6 text-white"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-fuchsia-300">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              Who Can Register
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Eligible{" "}
              <span className="text-fuchsia-600">entities</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From solo founders to large companies — five entity types are
              welcome.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {entities.map((e) => (
              <div
                key={e.title}
                className="group rounded-2xl border-2 border-slate-200 bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-fuchsia-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-50 to-purple-50 text-fuchsia-700 transition-transform group-hover:scale-110">
                  <e.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold">
                  {e.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border bg-card p-8 shadow-sm md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">
                Features
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                What makes Udyam{" "}
                <span className="text-fuchsia-600">special</span>
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li
                    key={f.title}
                    className="flex items-start gap-3 rounded-xl bg-fuchsia-50/50 px-4 py-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-fuchsia-700 shadow-sm">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-foreground">
                        {f.title}
                      </div>
                      <div className="text-xs leading-relaxed text-muted-foreground">
                        {f.text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200">
                <div className="bg-gradient-to-r from-violet-500 to-fuchsia-600 px-6 py-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Upload className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                        Get Ready
                      </div>
                      <h3 className="font-display text-lg font-bold">
                        Documents Required
                      </h3>
                    </div>
                  </div>
                </div>
                <ul className="space-y-1 p-5">
                  {documents.map((d) => (
                    <li
                      key={d.title}
                      className="flex items-start gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors hover:bg-slate-50"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fuchsia-100 text-fuchsia-700">
                        <d.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground">
                          {d.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {d.sub}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-700 p-7 text-white shadow-xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/85">
                    Charges
                  </div>
                </div>
                <div className="relative mt-5 font-display text-5xl font-black leading-none md:text-6xl">
                  ₹ 500
                  <span className="ml-2 font-display text-base font-bold opacity-90">
                    flat
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-white/90">
                  Service fee for application & digital delivery. Government
                  registration itself is free.
                </p>
                <div className="relative mt-5 rounded-xl border border-white/20 bg-white/10 p-3 text-xs leading-relaxed text-white/85 backdrop-blur-sm">
                  <span className="font-bold text-white">Booking fee:</span>{" "}
                  ₹99 while submitting the form, adjusted in the total bill.
                </div>
                <button
                  type="button"
                  className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-display text-sm font-bold text-fuchsia-700 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-fuchsia-600">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to MSME / Udyam
              registration.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-fuchsia-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700 transition-transform group-open:rotate-180">
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
