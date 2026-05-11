import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  ShieldCheck,
  IdCard,
  Sparkles,
  PlusCircle,
  Pencil,
  RefreshCw,
  Calendar,
  Send,
  Upload,
  KeyRound,
  PackageCheck,
  Receipt,
} from "lucide-react";
import CTA from "@/components/sections/cta";

export const metadata = {
  title:
    "Apply for PAN Card Online — New, Correction & Reprint | Make My Documents",
  description:
    "Apply for a new PAN card, correct details, or reprint a lost / damaged card online. Aadhaar e-KYC, e-PAN in 24-48 hours, physical card delivered to your doorstep. Rs. 350 flat.",
};

const servicePaths = [
  {
    id: "new",
    icon: PlusCircle,
    title: "New PAN Card",
    text: "First-time PAN application using Aadhaar e-KYC.",
    timeline: "15-20 working days",
    chip: "Most Popular",
    color: "from-sky-500 to-blue-600",
    chipBg: "bg-sky-100",
    chipText: "text-sky-700",
  },
  {
    id: "correct",
    icon: Pencil,
    title: "Correction / Update",
    text: "Fix name, DOB, photo, signature, or address — same PAN number.",
    timeline: "20-30 working days",
    chip: "Same PAN",
    color: "from-indigo-500 to-violet-600",
    chipBg: "bg-indigo-100",
    chipText: "text-indigo-700",
  },
  {
    id: "reprint",
    icon: RefreshCw,
    title: "Lost / Damaged Reprint",
    text: "Get a fresh print of your existing PAN — number stays the same.",
    timeline: "20-30 working days",
    chip: "Replacement",
    color: "from-cyan-500 to-sky-600",
    chipBg: "bg-cyan-100",
    chipText: "text-cyan-700",
  },
];

const howItWorks = [
  {
    icon: Send,
    image: "/illustrations/process-search.svg",
    title: "Register & Pay Online",
    text: "Choose your service and pay securely through our platform.",
  },
  {
    icon: Upload,
    image: "/illustrations/hero-documents.svg",
    title: "Upload Documents",
    text: "Submit your Aadhaar card and other required documents digitally.",
  },
  {
    icon: KeyRound,
    image: "/illustrations/process-assist.svg",
    title: "Online e-KYC",
    text: "Complete your identity verification online in minutes via Aadhaar OTP.",
  },
  {
    icon: PackageCheck,
    image: "/illustrations/process-deliver.svg",
    title: "Get Delivered",
    text: "Receive your e-PAN within 24-48 hours and the physical card at your doorstep.",
  },
];

const documentsForNew = [
  "Aadhaar Card",
  "DOB Proof",
  "Passport-size Photograph",
];

const documentsForCorrection = [
  "Aadhaar Card",
  "Existing PAN copy",
  "DOB Proof",
];

const dobProofs = [
  "Birth Certificate issued by Municipality",
  "Passport",
  "Driving License",
  "Voter ID",
  "Government-issued Photo ID",
  "Pension Payment Order",
  "Marriage Certificate",
  "Matriculation Certificate",
  "Domicile Certificate",
  "Affidavit stating date of birth",
];

const processingTimes = [
  {
    label: "New PAN Card (Physical)",
    value: "15-20 working days",
    icon: IdCard,
  },
  {
    label: "Correction / Lost / Damaged",
    value: "20-30 working days",
    icon: RefreshCw,
  },
  {
    label: "e-PAN (New Applications)",
    value: "24-48 hours",
    icon: Sparkles,
  },
];

const faqs = [
  {
    q: "What is a PAN card and why is it important?",
    a: "A PAN (Permanent Account Number) is a 10-digit alphanumeric identifier issued by the Income Tax Department. It is mandatory for filing income tax returns, opening bank accounts, investing in shares or mutual funds, and high-value purchases like property and vehicles.",
  },
  {
    q: "Can I apply for a PAN card online without visiting an office?",
    a: "Yes. Our process is fully online — share your details, upload documents, complete Aadhaar e-KYC, and pay securely. You won't need to visit any government office. The e-PAN is emailed and the physical card is delivered to your address.",
  },
  {
    q: "How long does it take to get a PAN card?",
    a: "An e-PAN is delivered to your email in 24-48 hours for new applications. The physical PAN card reaches your address in 15-20 working days for new applications and 20-30 working days for corrections, lost, or damaged card requests.",
  },
  {
    q: "What if I have lost my PAN card?",
    a: "Choose the Reprint / Replacement option. Your PAN number stays exactly the same — only a fresh card is printed and dispatched to you. You'll need your Aadhaar and existing PAN details to apply.",
  },
  {
    q: "Is Aadhaar mandatory for PAN card applications?",
    a: "Aadhaar is required because the entire process is built on Aadhaar-based e-KYC, which removes the need for physical paperwork and signatures. Your Aadhaar number must be linked to a working mobile number for OTP verification.",
  },
  {
    q: "How much does it cost to apply for a PAN card online?",
    a: "The application fee is a flat Rs. 350. If you decide to cancel your order after payment, a cancellation fee of Rs. 50 will apply to cover processing costs.",
  },
  {
    q: "Can I update my name or address on the PAN card?",
    a: "Yes. Pick the Correction / Update option and submit valid proof for the updated detail (Aadhaar, marriage certificate, etc.). The PAN number stays the same — only the printed details on the card are refreshed.",
  },
  {
    q: "Can NRI or foreign citizens apply for a PAN card through this service?",
    a: "Yes. NRIs and foreign citizens with valid Indian tax obligations can apply. You'll need to share your passport, overseas address proof, and a recent photograph. International courier charges may apply for delivery abroad.",
  },
  {
    q: "Is e-PAN a valid document?",
    a: "Yes. The e-PAN is a digitally signed PDF issued by the Income Tax Department and is equally valid as the physical card for all official, banking, and tax purposes. Every applicant receives both the e-PAN and the physical card.",
  },
  {
    q: "Can I link my PAN with Aadhaar through this service?",
    a: "Yes. Aadhaar-PAN linking is part of the application flow itself — when you complete e-KYC, your Aadhaar and PAN are automatically seeded. We can also help link an existing PAN with Aadhaar separately if needed.",
  },
];

export default function PanCardPage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-sky-600 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">PAN Card</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-800 backdrop-blur-sm">
                <ShieldCheck className="h-3 w-3" />
                Government Approved · Pan-India
              </span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                PAN Card{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Services</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sky-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                New PAN, corrections, or a reprint for a lost card — apply
                online in minutes. Paperless Aadhaar e-KYC, e-PAN in 24-48
                hours, physical card delivered to your doorstep.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#paths"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  Choose your service →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-sky-500 text-sky-500" />
                <span className="font-display text-sm font-bold text-slate-900">
                  99% Delivered on time
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">
                    15-20 days · New Physical
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">
                    20-30 days · Lost / Correction
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">
                    e-PAN in 24-48 hrs
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-sky-400/20 to-indigo-400/20 blur-2xl"
                aria-hidden
              />
              <div className="relative w-full max-w-md">
                <div className="absolute -right-4 -top-4 z-20 rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                  <IdCard className="h-7 w-7 text-sky-600" />
                </div>
                <div className="relative -rotate-3 transform overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900 p-7 text-white shadow-2xl ring-1 ring-white/10 transition-transform hover:-rotate-1">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                  <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />

                  <div className="relative flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-200/80">
                        Income Tax Department
                      </div>
                      <div className="mt-1 font-display text-lg font-bold">
                        Permanent Account Number
                      </div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                      <ShieldCheck className="h-5 w-5 text-sky-300" />
                    </div>
                  </div>

                  <div className="relative mt-8 flex items-end gap-5">
                    <div className="h-20 w-16 rounded-md bg-gradient-to-br from-slate-700 to-slate-800 ring-1 ring-white/10" />
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-sky-300/70">
                          Name
                        </div>
                        <div className="mt-0.5 font-display text-sm font-bold tracking-wide">
                          YOUR NAME HERE
                        </div>
                      </div>
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-sky-300/70">
                          PAN
                        </div>
                        <div className="mt-0.5 font-mono text-base font-bold tracking-[0.18em]">
                          ABCDE1234F
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="text-[10px] font-medium text-sky-200/70">
                      DOB · 01/01/1990
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-sky-300/60" />
                      <span className="h-1 w-1 rounded-full bg-sky-300/60" />
                      <span className="h-1 w-1 rounded-full bg-sky-300/60" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 z-20 -rotate-12 rounded-xl bg-white px-3 py-2 shadow-xl ring-1 ring-slate-200">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                    <span className="text-[11px] font-bold text-slate-800">
                      e-PAN ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative order-2 lg:order-1">
              <div
                className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100"
                aria-hidden
              />
              <div
                className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-sky-300/40 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-indigo-300/40 blur-3xl"
                aria-hidden
              />
              <div className="flex items-center justify-center p-8 md:p-10">
                <img
                  src="/illustrations/services/pan.svg"
                  alt="PAN card illustration"
                  className="h-auto w-full max-w-sm select-none drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-lg ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Income Tax Department · Government of India
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                About the Service
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Apply for PAN Card Services —{" "}
                <span className="text-sky-600">Make My Documents</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  Need a quick and efficient way to get your PAN card without
                  long waits and stacks of paperwork? We take the hassle out
                  of the entire PAN process — application, correction, and
                  replacement.
                </p>
                <p>
                  Whether it's a new PAN card, updating inaccurate details, or
                  a lost card, our team is committed to a fast, hassle-free,
                  and low-cost solution. Our safe, professionally verified
                  process with doorstep delivery means you never face
                  rejections or avoidable delays.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6">
                <div>
                  <div className="font-display text-2xl font-extrabold text-sky-700 md:text-3xl">
                    99%
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    On-time delivery
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-sky-700 md:text-3xl">
                    24-48 hrs
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    e-PAN turnaround
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-sky-700 md:text-3xl">
                    ₹ 350
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Flat fee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="paths" className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              Choose Your Path
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              What do you need{" "}
              <span className="text-sky-600">today?</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pick the path that fits — every option is fully online with the
              same flat ₹350 fee.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
            {servicePaths.map((p) => (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${p.color} opacity-0 transition-opacity group-hover:opacity-[0.04]`}
                />
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <p.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`rounded-full ${p.chipBg} px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${p.chipText}`}
                  >
                    {p.chip}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>

                <div className="mt-6 flex items-end justify-between border-t pt-5">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Delivered in
                    </div>
                    <div className="mt-0.5 font-display text-base font-extrabold text-slate-900">
                      {p.timeline}
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r ${p.color} px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all group-hover:gap-2.5 group-hover:shadow-lg`}
                  >
                    Start
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-24">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              4 simple steps from{" "}
              <span className="text-sky-400">form to delivery</span>
            </h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-3xl">
            <div
              className="absolute left-7 top-3 bottom-3 w-px bg-gradient-to-b from-sky-400/50 via-indigo-400/30 to-transparent md:left-1/2 md:-translate-x-1/2"
              aria-hidden
            />

            <ol className="space-y-6">
              {howItWorks.map((step, i) => (
                <li key={step.title} className="relative">
                  <div
                    className={`flex items-start gap-5 md:items-center md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg ring-4 ring-slate-900 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <step.icon
                        className="h-6 w-6 text-white"
                        strokeWidth={1.75}
                      />
                    </div>

                    <div
                      className={`flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:max-w-[44%] ${
                        i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10 p-2 ring-1 ring-white/10">
                          <img
                            src={step.image}
                            alt=""
                            aria-hidden
                            className="h-full w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="font-display text-xs font-bold tracking-wider text-sky-300">
                            STEP {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-1 font-display text-lg font-bold">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                Get Ready
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Documents{" "}
                <span className="text-sky-600">required</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Minimal paperwork. Aadhaar e-KYC removes the need for physical
                forms or signatures — share scans, verify with OTP, and your
                application is ready to file.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div
                className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-100 to-indigo-100"
                aria-hidden
              />
              <img
                src="/illustrations/hero-documents.svg"
                alt="Stack of documents ready for upload"
                className="h-auto w-full select-none p-6 drop-shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      For
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      New PAN Card
                    </h3>
                  </div>
                  <PlusCircle className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="space-y-1 p-5">
                {documentsForNew.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-slate-50"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                    <span className="text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                      For
                    </div>
                    <h3 className="mt-0.5 font-display text-lg font-bold">
                      Correction / Lost / Damage
                    </h3>
                  </div>
                  <RefreshCw className="h-7 w-7 opacity-90" />
                </div>
              </div>
              <ul className="space-y-1 p-5">
                {documentsForCorrection.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-slate-50"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600" />
                    <span className="text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border-2 border-dashed border-sky-200 bg-sky-50/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-sky-700">
                  Accepted DOB Proof
                </div>
                <h3 className="font-display text-lg font-bold md:text-xl">
                  Provide any one of the following
                </h3>
              </div>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {dobProofs.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2.5 rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                  <span className="text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border bg-card p-8 shadow-sm md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                  <Clock className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Time Duration
                  </div>
                  <h3 className="font-display text-xl font-bold md:text-2xl">
                    Processing time
                  </h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {processingTimes.map((t) => (
                  <li
                    key={t.label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-sky-50/60 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sky-700 shadow-sm">
                        <t.icon className="h-4 w-4" />
                      </div>
                      <div className="text-sm font-medium">{t.label}</div>
                    </div>
                    <div className="font-display text-sm font-extrabold text-sky-700">
                      {t.value}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                All applicants receive both the e-PAN and the physical PAN
                card.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 p-8 text-white shadow-xl md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Receipt className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/85">
                  Charges
                </div>
              </div>
              <div className="relative mt-6 font-display text-6xl font-black leading-none md:text-7xl">
                ₹ 350
                <span className="ml-2 font-display text-base font-bold opacity-90">
                  flat
                </span>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                One transparent fee for application, e-KYC, and follow-up. No
                hidden charges.
              </p>
              <div className="relative mt-6 rounded-xl border border-white/20 bg-white/10 p-4 text-xs leading-relaxed text-white/85 backdrop-blur-sm">
                <span className="font-bold text-white">Cancellation:</span> If
                you cancel your order after payment, a flat fee of ₹50 will
                apply.
              </div>
              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-display text-base font-bold text-sky-700 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-sky-600">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to PAN card
              services.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-sky-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-transform group-open:rotate-180">
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
