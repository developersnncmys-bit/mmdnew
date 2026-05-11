import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  Quote,
  ShieldCheck,
  FileText,
  Upload,
  CreditCard,
  Truck,
  Scale,
  Stamp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/cta";
import AffidavitSelector from "@/components/sections/affidavit-selector";

export const metadata = {
  title:
    "Apply for Affidavits Online — Quick & Hassle-Free in Karnataka | Make My Documents",
  description:
    "Apply for legally valid affidavits online — Name Change, Marriage, Minor, One and the Same Person, Change of Signature. Drafted, notarized, and delivered. Rs. 500 + Rs. 50 booking. 1-2 working days.",
};

const easyProcess = [
  {
    icon: FileText,
    title: "Register Online",
    text: "Fill out your details securely.",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    text: "Submit scanned copies of your ID proof.",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    text: "Complete a quick online payment.",
  },
  {
    icon: Truck,
    title: "Get Delivered",
    text: "Receive your legally drafted affidavit digitally or via courier.",
  },
];

const documentsRequired = [
  "Aadhaar Card or any valid government-issued ID",
  "Passport-size photo (if required)",
  "Any additional document supporting the affidavit type",
];

const reviews = [
  {
    initial: "A",
    name: "Anjali Mehta",
    text: "I applied for a name change affidavit online and got it within 24 hours. Very convenient and fast!",
    color: "bg-rose-500",
  },
  {
    initial: "R",
    name: "Rohit Kapoor",
    text: "The process was smooth, and I didn't have to visit any legal office. Excellent service!",
    color: "bg-blue-500",
  },
  {
    initial: "S",
    name: "Sneha Iyer",
    text: "Affordable and reliable. Got my affidavit on time and without hassle.",
    color: "bg-violet-500",
  },
];

const faqs = [
  {
    q: "Are these affidavits legally valid?",
    a: "Yes. All affidavits drafted by Make My Documents are prepared on the appropriate stamp paper and notarized as per Karnataka law. They are accepted by banks, government offices, courts, and other formal authorities.",
  },
  {
    q: "Can I apply for an affidavit online?",
    a: "Absolutely. The entire process — from form submission to document delivery — happens online. You don't need to visit any office in person; we deliver the notarized affidavit to your address.",
  },
  {
    q: "Do I need to visit a notary?",
    a: "No. We coordinate the notarization on your behalf. Your affidavit is drafted, stamped, and notarized by a registered notary, and then delivered to you digitally or by courier.",
  },
  {
    q: "Can I get affidavits in regional languages?",
    a: "Yes. While English is standard, we can provide affidavits in Kannada or other regional languages on request. Just mention your language preference when filling the online form.",
  },
  {
    q: "Is Aadhaar mandatory for all affidavits?",
    a: "Aadhaar is the most widely accepted ID, but any valid government-issued ID — PAN card, voter ID, passport, or driving licence — is acceptable for most affidavit types.",
  },
  {
    q: "How long does it take to get an affidavit?",
    a: "Affidavit processing is quick — typically 1-2 working days after document submission. The soft copy may be shared even sooner depending on the affidavit type.",
  },
  {
    q: "Are affidavits accepted by banks and government offices?",
    a: "Yes. Properly drafted, stamped, and notarized affidavits are accepted by banks, government departments, courts, embassies, and educational institutions across India.",
  },
  {
    q: "Can I apply for multiple affidavits at once?",
    a: "Yes. You can apply for multiple affidavits in a single submission — for example, a name change affidavit along with a one-and-the-same-person affidavit. We offer combined pricing for multi-affidavit orders.",
  },
  {
    q: "Will I get a physical copy of the affidavit?",
    a: "Yes. After payment, the notarized hard copy is couriered to your address. A digital copy is also shared on email so you can use it immediately while the physical copy is in transit.",
  },
  {
    q: "Is my personal data secure?",
    a: "Completely. We follow strict data protection practices — your personal details, ID copies, and affidavit content are stored securely and shared only with the notary handling your case.",
  },
];

export default function AffidavitPage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-amber-600 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">Affidavit</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-200 to-orange-100"
          aria-hidden
        />
        <div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-400/40 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-400/30 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 backdrop-blur-sm">
                <Scale className="h-3 w-3" />
                Legally Valid · Karnataka
              </span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Apply for Affidavits
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Online</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-amber-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>{" "}
                <span className="text-slate-900">in 1-2 days.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Skip the long queues, paperwork, and legal jargon. We draft,
                notarize, and deliver legally valid affidavits — recognized by
                banks, courts, and government offices across India.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#types"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  Browse affidavit types →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="font-display text-sm font-bold text-slate-900">
                  99% Delivered on time
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="text-xs font-semibold text-slate-600">
                  1-2 working days
                </span>
              </div>
            </div>

            <div className="relative">
              <img
                src="/illustrations/affidavit-hero.svg"
                alt="Affidavit document with judge's gavel and notarization stamp"
                className="h-auto w-full max-w-xl select-none drop-shadow-2xl animate-float"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <AffidavitSelector />

      <section className="bg-slate-900 py-20 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Our Easy Process
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              4 quick steps from{" "}
              <span className="text-amber-400">form to courier</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {easyProcess.map((s, i) => (
              <div
                key={s.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/10"
              >
                <div className="absolute -right-2 -top-2 font-display text-7xl font-black text-white/5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 shadow-lg">
                    <s.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border bg-card p-8 shadow-sm md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100">
                  <FileText className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Get Ready
                  </div>
                  <h3 className="font-display text-xl font-bold md:text-2xl">
                    Documents Required
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                For most affidavits, you will need:
              </p>
              <ul className="mt-4 space-y-3">
                {documentsRequired.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-xl bg-amber-50/60 px-4 py-3 text-sm font-medium md:text-base"
                  >
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Processing Time
                </div>
              </div>
              <div className="mt-6 font-display text-6xl font-black leading-none md:text-7xl">
                1-2
                <span className="ml-2 font-display text-2xl font-bold opacity-90">
                  days
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/90">
                Affidavit processing is quick and can be completed within 1-2
                working days after document submission.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Drafted", "Stamped", "Notarized", "Delivered"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Charges
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Honest, <span className="text-amber-600">flat pricing</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <div className="relative overflow-hidden rounded-3xl bg-card shadow-2xl">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                      Normal Application
                    </div>
                    <div className="mt-0.5 font-display text-lg font-bold">
                      Affidavit (any type)
                    </div>
                  </div>
                  <Stamp className="h-10 w-10 opacity-90" strokeWidth={1.75} />
                </div>
              </div>

              <div className="space-y-1 px-7 py-6">
                <div className="flex items-baseline justify-between border-b-2 border-dashed border-slate-200 py-3">
                  <div>
                    <div className="font-display text-base font-bold">
                      Application
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Drafting & notarization
                    </div>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-amber-600">
                    ₹ 500
                  </div>
                </div>

                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <div className="font-display text-base font-bold">
                      Booking / Consulting
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Pay while submitting the form
                    </div>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-amber-600">
                    ₹ 50
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 px-7 py-5">
                <div className="flex items-baseline justify-between">
                  <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Total
                  </div>
                  <div className="font-display text-4xl font-black text-slate-900">
                    ₹ 550
                  </div>
                </div>
                <Button
                  variant="gradient"
                  size="lg"
                  className="mt-5 w-full rounded-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="mt-3 text-center text-[11px] text-muted-foreground">
                  Stamp paper and courier charges (if any) are additional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Testimonials
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Our <span className="text-amber-600">client reviews</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Quote className="absolute right-4 top-4 h-8 w-8 text-amber-500/20" />
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  "{r.text}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t pt-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${r.color} font-display text-sm font-bold text-white`}
                  >
                    {r.initial}
                  </div>
                  <div className="font-display text-sm font-semibold">
                    {r.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Got Questions?
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-amber-600">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to our affidavit
              services.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-amber-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition-transform group-open:rotate-180">
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
