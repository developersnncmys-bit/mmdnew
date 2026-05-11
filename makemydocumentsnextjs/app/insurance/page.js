import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Bike,
  Car,
  Truck,
  HeartPulse,
  HeartHandshake,
  Shield,
  Smile,
  Scale,
  Lock,
  Sparkles,
  Send,
  MessageSquareQuote,
  GitCompareArrows,
  Wallet,
  Download,
  IdCard,
  FileText,
  MapPin,
  Stethoscope,
  Heart,
} from "lucide-react";
import CTA from "@/components/sections/cta";

export const metadata = {
  title:
    "Buy & Renew Insurance Online — Vehicle, Health, Life | Make My Documents",
  description:
    "Buy or renew two-wheeler, four-wheeler, commercial vehicle, health, and life insurance online. Compare quotes from top insurers, instant policy download, claims support.",
};

const insuranceTypes = [
  {
    id: "two-wheeler",
    href: "/insurance/two-wheeler",
    icon: Bike,
    title: "Two-Wheeler",
    sub: "Bike & Scooter",
    color: "from-blue-600 to-indigo-700",
    chipBg: "bg-blue-50",
    chipText: "text-blue-700",
  },
  {
    id: "four-wheeler",
    href: "/insurance/four-wheeler",
    icon: Car,
    title: "Four-Wheeler",
    sub: "Car",
    color: "from-amber-500 to-orange-600",
    chipBg: "bg-amber-50",
    chipText: "text-amber-700",
  },
  {
    id: "commercial",
    href: "/insurance/commercial-vehicle",
    icon: Truck,
    title: "Commercial Vehicle",
    sub: "Truck, Van, Cab",
    color: "from-slate-600 to-slate-800",
    chipBg: "bg-slate-100",
    chipText: "text-slate-700",
  },
  {
    id: "health",
    href: "/insurance/health",
    icon: HeartPulse,
    title: "Health",
    sub: "Individual & Family",
    color: "from-rose-500 to-pink-600",
    chipBg: "bg-rose-50",
    chipText: "text-rose-700",
  },
  {
    id: "life",
    href: "/insurance/life",
    icon: HeartHandshake,
    title: "Life",
    sub: "Term & Investment",
    color: "from-emerald-500 to-teal-600",
    chipBg: "bg-emerald-50",
    chipText: "text-emerald-700",
  },
];

const partners = [
  "Aditya Birla Capital",
  "ICICI Lombard",
  "HDFC ERGO",
  "Bajaj Allianz",
];

const benefits = [
  {
    icon: Shield,
    title: "Financial Protection",
    text: "Insurance is the financial cushion that covers unexpected costs from medical bills, accidental damage to property, or theft of valuables. Comprehensive health, vehicle, and life policies stop sudden financial burdens.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    text: "For an individual, family, or business, a well-chosen insurance plan is a shield that nearly eliminates risk. Vehicle accident, hospitalization, or property damage — bounce back without breaking the bank.",
  },
  {
    icon: Smile,
    title: "Peace of Mind",
    text: "Knowing your car, bike, health, and family are covered under a solid plan, you live and travel with confidence. The right cover for every need eliminates panic and uncertainty.",
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    text: "Indian law makes vehicle insurance mandatory, and businesses must meet regulatory standards. Our platform handles renewals online so you stay compliant — no fines, no legal trouble.",
  },
  {
    icon: Lock,
    title: "Future Security",
    text: "Life and health insurance provide critical financial assistance during emergencies. Health, term, and investment plans keep the family's cash flow going through unprecedented events.",
  },
];

const typeDetails = [
  {
    icon: Bike,
    title: "Two-Wheeler Insurance",
    text: "Insure your two-wheeler against mishaps, theft, natural calamities, and third-party liabilities with a comprehensive plan. Generate the duplicate policy in minutes, view the premium amount, and enjoy cashless claim settlement at any of our network garages.",
    highlights: [
      "Comprehensive cover",
      "Cashless network garages",
      "Instant duplicate policy",
    ],
    color: "from-blue-600 to-indigo-700",
  },
  {
    icon: Car,
    title: "Four-Wheeler Insurance",
    text: "Stay safe and secure against accidents, theft, fire, and other calamities. Includes complete comprehensive cover and third-party injury cover. Online buying or renewing with competitive premiums, instant policy downloads, and round-the-clock support.",
    highlights: [
      "Comprehensive + third-party cover",
      "Competitive premiums",
      "24/7 support",
    ],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Insurance",
    text: "Protect business investments and equipment such as trucks, vans, cabs, and delivery vehicles. Coverage against any damage, theft, or accidents — keeping operations smooth and your revenue protected.",
    highlights: [
      "Trucks, vans, cabs, delivery fleets",
      "Damage & theft cover",
      "Business continuity",
    ],
    color: "from-slate-600 to-slate-800",
  },
  {
    icon: Stethoscope,
    title: "Health Insurance",
    text: "Reasonably priced yet comprehensive plans covering hospitalization, surgery, treatment for serious diseases (such as cancer), and medical emergencies. Individual and family plans available so the people you care about get the best treatment without financial strain.",
    highlights: [
      "Hospitalization & surgery",
      "Critical illness cover",
      "Family floater available",
    ],
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: HeartHandshake,
    title: "Life Insurance",
    text: "Term plans, endowment, ULIPs, and child education plans designed to secure your family's future. Pick the plan that fits — pure protection, savings + protection, or wealth creation with insurance benefits.",
    highlights: [
      "Term, ULIP, endowment options",
      "Child & retirement plans",
      "Tax benefits under Sec 80C",
    ],
    color: "from-emerald-500 to-teal-600",
  },
];

const steps = [
  {
    icon: Send,
    title: "Register Online",
    text: "Enter your personal information and the kind of policy you require.",
  },
  {
    icon: MessageSquareQuote,
    title: "Get Quotation",
    text: "Tailored quotes sent via email or WhatsApp.",
  },
  {
    icon: GitCompareArrows,
    title: "Compare Policies",
    text: "Look at coverage, premiums, and benefits of top insurers.",
  },
  {
    icon: Wallet,
    title: "Make Payment",
    text: "Pay securely through our online transaction system.",
  },
  {
    icon: Download,
    title: "Download Policy",
    text: "Instant policy delivered to email or WhatsApp.",
  },
];

const documents = [
  {
    icon: FileText,
    title: "Vehicle Registration Certificate (RC)",
    sub: "For two-wheeler, four-wheeler, and commercial insurance",
  },
  {
    icon: FileText,
    title: "Old Policy Details",
    sub: "If you're renewing an existing policy",
  },
  {
    icon: IdCard,
    title: "Identity Proof",
    sub: "Aadhaar, PAN, Passport, or Driving Licence",
  },
  {
    icon: MapPin,
    title: "Address Proof",
    sub: "Utility bill, Aadhaar, or Passport",
  },
  {
    icon: Heart,
    title: "Medical / Health Records",
    sub: "For health and life insurance plans (if applicable)",
  },
];

const motorSubcategories = [
  "Car Insurance",
  "Second-Hand Car Insurance",
  "Comprehensive Car Insurance",
  "Third-Party Car Insurance",
  "Car Insurance Calculator",
  "Compare Car Insurance",
  "Zero Depreciation Car Insurance",
  "Renew Expired Car Insurance",
  "No Claim Bonus (NCB)",
  "Standalone OD Car Insurance",
  "Return to Invoice Cover",
  "Insured Declared Value (IDV)",
  "Two-Wheeler Insurance",
  "Bike Insurance Calculator",
  "Comprehensive Two-Wheeler Insurance",
  "Third-Party Two-Wheeler Insurance",
  "Compare Two-Wheeler Insurance",
  "Standalone OD Bike Insurance",
  "Vehicle Insurance",
  "Commercial Vehicle Insurance",
  "Multi-Year Two-Wheeler Insurance",
  "Break-In Policy Renewal",
  "Pay As You Drive Car Insurance",
  "Engine Protection Cover",
  "Roadside Assistance Cover",
  "Scooter Insurance",
  "NCB In Bike Insurance",
  "RTI in Bike Insurance",
];

const healthSubcategories = [
  "Individual Health Insurance",
  "Family Health Insurance",
  "Senior Citizen Health Insurance",
  "Parents Health Insurance",
  "Health Insurance Renewal",
  "Cashless Health Insurance",
  "Health Insurance Premium Calculator",
  "Critical Illness Insurance",
  "Top-Up Health Plans",
  "Personal Accident Cover",
  "Health Wallet Insurance",
  "Arogya Sanjeevani Plan",
  "Health Insurance Portability",
  "Diabetes & Hypertension Plans",
  "Cancer Care Insurance",
  "Maternity & Women Health Plans",
  "BMI Calculator",
  "Optima Restore",
  "Optima Secure",
  "Optima Lite",
  "Optima Super Secure Plan",
  "Comprehensive Medical Coverage",
  "Hospital Cash Benefit Plans",
  "Daily Cash Health Cover",
];

const lifeSubcategories = [
  "Term Life Insurance",
  "Whole Life Insurance",
  "Endowment Plans",
  "Retirement Plans",
  "ULIPs (Unit Linked Insurance Plans)",
  "Child Education Plans",
  "Income Protection Plans",
  "Life Cover with Investment Benefits",
  "Savings & Protection Plans",
  "Guaranteed Return Plans",
];

const faqs = [
  {
    q: "Can I renew my two-wheeler or four-wheeler insurance online?",
    a: "Yes. Renewals happen entirely online — share your existing policy details, pick the renewal plan, pay securely, and download the new policy instantly to your email and WhatsApp.",
  },
  {
    q: "How long does it take to get the insurance policy?",
    a: "Most policies are issued within minutes of payment. The soft copy is delivered immediately via email and WhatsApp; physical documents (when needed) are couriered within 3-5 working days.",
  },
  {
    q: "Do I need to submit physical documents?",
    a: "No. The entire process is paperless. Scanned copies of the required documents (RC, Aadhaar, etc.) uploaded online are enough — no physical submission needed.",
  },
  {
    q: "Can I compare multiple policies before buying?",
    a: "Absolutely. We share tailored quotes from multiple top insurers so you can compare coverage, premiums, deductibles, and add-ons side by side before committing.",
  },
  {
    q: "Do you provide assistance in case of claims?",
    a: "Yes. Our claims team supports you end-to-end — from documentation and FIR filing (if required) to liaising with the insurer and tracking your settlement until it's processed.",
  },
  {
    q: "What if my vehicle insurance has expired?",
    a: "Expired policies can be renewed, but they may need a fresh inspection if the break is over 90 days. We arrange the inspection and process a Break-In policy quickly.",
  },
  {
    q: "Can I buy life or health insurance for my family?",
    a: "Yes. Family floater health plans cover spouse, children, and dependent parents under one policy. Life insurance can also be bought for family members based on their age and eligibility.",
  },
  {
    q: "Are your services available across India?",
    a: "Yes. Our online insurance platform serves customers across India. Specific products vary by state and insurer — we always show only the policies available in your location.",
  },
  {
    q: "Which insurance companies do you work with?",
    a: "We are associated with leading insurers including Aditya Birla Capital, ICICI Lombard, HDFC ERGO, and Bajaj Allianz, among others. Our recommendation is always based on what fits you best — not affiliations.",
  },
  {
    q: "Do you charge extra for your services?",
    a: "No. The premium you pay is set by the insurer; we don't add hidden service fees. Our income comes from the insurer's distribution commission, so the price you see is the price you pay.",
  },
];

export default function InsurancePage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">Insurance</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-100 via-amber-50 to-blue-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800 backdrop-blur-sm">
                  <Shield className="h-3 w-3" />
                  Trusted Insurers
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 backdrop-blur-sm">
                  <Sparkles className="h-3 w-3" />
                  Compare in Minutes
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Protect Your Future{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">with Ease</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-amber-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Insurance applications made simple and stress-free. Compare
                quotes from top insurers, buy or renew online in minutes, and
                receive your policy instantly on WhatsApp or email.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#picker"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                >
                  Get Quotes
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#types"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  See all insurance types →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-display text-sm font-bold text-slate-900">
                  Top insurers under one roof
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-blue-700" />
                  <span className="text-xs font-bold text-slate-800">
                    Policy in minutes
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Download className="h-3.5 w-3.5 text-blue-700" />
                  <span className="text-xs font-bold text-slate-800">
                    Instant download
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Lock className="h-3.5 w-3.5 text-blue-700" />
                  <span className="text-xs font-bold text-slate-800">
                    Secure payment
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-300/30 to-amber-300/30 blur-2xl"
                aria-hidden
              />

              <div className="absolute -left-3 top-12 z-20 -rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-blue-700" />
                  <span className="text-xs font-bold text-slate-800">
                    Vehicle covered
                  </span>
                </div>
              </div>

              <div className="absolute -right-3 top-32 z-20 rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-rose-500" />
                  <span className="text-xs font-bold text-slate-800">
                    Health protected
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-md">
                <img
                  src="/illustrations/services/insurance.svg"
                  alt="Insurance protection illustration"
                  className="relative h-auto w-full select-none drop-shadow-2xl animate-float"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-700" />
                  <span className="text-xs font-bold text-slate-800">
                    Comprehensive cover · Top insurers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="picker" className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Pick Your Cover
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Pick the type of{" "}
              <span className="text-blue-700">insurance</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Five core categories — tap any one to receive a tailored quote.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {insuranceTypes.map((t) => (
              <Link
                key={t.id}
                href={t.href}
                className="group relative flex flex-col items-center rounded-3xl border-2 border-slate-200 bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${t.color} opacity-0 transition-opacity group-hover:opacity-[0.05]`}
                />
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${t.color} shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <t.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-tight">
                  {t.title}
                </h3>
                <span
                  className={`mt-1 rounded-full ${t.chipBg} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${t.chipText}`}
                >
                  {t.sub}
                </span>
                <span
                  className={`mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r ${t.color} px-3 py-2 text-xs font-bold text-white shadow-md transition-all group-hover:-translate-y-0.5 group-hover:shadow-lg`}
                >
                  Get Quote
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Associated With
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              Top insurers we partner with for the best coverage and pricing.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {partners.map((p) => (
                <div
                  key={p}
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-card px-5 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <ShieldCheck className="h-4 w-4 text-blue-700" />
                  <span className="font-display text-sm font-bold text-foreground">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Buy / Renew Online
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              Insurance is a big step in{" "}
              <span className="text-blue-700">
                securing your future
              </span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground md:text-lg">
              Through challenging situations, the right coverage for your car,
              health, or family gives you monetary safety. We are your fastest
              path to an easy and straightforward insurance plan — obtain
              quotes, evaluate policies, and buy in just a few minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Benefits of Insurance
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Why insurance{" "}
              <span className="text-blue-700">isn't optional</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Insurance isn't just a legal requirement — it's a financial
              instrument that secures your future and brings peace of mind.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <article
                key={b.title}
                className={`group rounded-3xl border-2 border-slate-200 bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-2xl ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 shadow-lg transition-transform group-hover:scale-110 ${
                      i === 0 ? "h-16 w-16" : "h-14 w-14"
                    }`}
                  >
                    <b.icon
                      className={`text-amber-300 ${
                        i === 0 ? "h-8 w-8" : "h-7 w-7"
                      }`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700">
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

      <section id="types" className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Types We Offer
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Five categories,{" "}
              <span className="text-blue-700">every cover</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From bikes and cars to family health and life — pick what fits
              your needs.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl space-y-6">
            {typeDetails.map((t, i) => (
              <article
                key={t.title}
                className={`relative grid items-center gap-8 rounded-3xl border-2 border-slate-200 bg-card p-6 shadow-sm transition-all hover:shadow-xl md:p-10 lg:grid-cols-[auto_1fr] ${
                  i % 2 === 1 ? "lg:grid-cols-[1fr_auto]" : ""
                }`}
              >
                <div
                  className={`flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${t.color} shadow-2xl ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <t.icon
                    className="h-16 w-16 text-white"
                    strokeWidth={1.25}
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
                    {t.text}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {t.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 ring-1 ring-blue-100"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-20 text-white md:py-24">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              5 simple steps to get any{" "}
              <span className="text-amber-400">insurance policy</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10"
              >
                <div className="absolute -right-3 -top-3 font-display text-7xl font-black text-amber-400/[0.08]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">
                    <step.icon
                      className="h-6 w-6 text-blue-950"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-amber-300">
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Get Ready
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Documents{" "}
              <span className="text-blue-700">required</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have these handy before you start — most are quick scans from
              your phone.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((d) => (
              <div
                key={d.title}
                className="flex items-start gap-4 rounded-2xl border-2 border-slate-200 bg-card p-5 transition-all hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-amber-100 text-blue-700">
                  <d.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold leading-tight">
                    {d.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {d.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Full Catalogue
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Every plan,{" "}
              <span className="text-blue-700">categorised</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              The full menu of motor, health, and life insurance plans we
              support.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200">
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      Motor
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Motor Insurance
                    </h3>
                  </div>
                  <Car className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-2">
                {motorSubcategories.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 rounded-md px-2 py-1.5 text-xs leading-tight transition-colors hover:bg-blue-50"
                  >
                    <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-blue-600" />
                    <span className="text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200">
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      Health
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Health Insurance
                    </h3>
                  </div>
                  <HeartPulse className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-2">
                {healthSubcategories.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 rounded-md px-2 py-1.5 text-xs leading-tight transition-colors hover:bg-rose-50"
                  >
                    <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-rose-600" />
                    <span className="text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      Life
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Life Insurance
                    </h3>
                  </div>
                  <HeartHandshake className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-1 p-4">
                {lifeSubcategories.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 rounded-md px-2 py-1.5 text-xs leading-tight transition-colors hover:bg-emerald-50"
                  >
                    <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-600" />
                    <span className="text-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-blue-700">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to insurance
              services.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-blue-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-transform group-open:rotate-180">
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
