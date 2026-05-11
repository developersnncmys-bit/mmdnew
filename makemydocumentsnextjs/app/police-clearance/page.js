import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  Plane,
  Home,
  GraduationCap,
  Heart,
  Globe2,
  Send,
  Upload,
  Wallet,
  Search,
  FileBadge,
  Languages,
  CalendarClock,
  Stamp,
  IdCard,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import CTA from "@/components/sections/cta";

export const metadata = {
  title:
    "Police Clearance Certificate (PCC) Online — Visa & Immigration | Make My Documents",
  description:
    "Apply for a Police Clearance Certificate (PCC) online — for foreign visa, immigration, jobs abroad, education, and adoption. 6-month validity, secure online process, doorstep delivery.",
};

const useCases = [
  {
    icon: Briefcase,
    title: "Foreign Employment",
    text: "Most overseas employers require a fresh PCC before issuing a work visa or contract.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Plane,
    title: "Visa Application",
    text: "Tourist, work, study, and long-stay visas often list a PCC as a mandatory document.",
    color: "from-lime-500 to-emerald-600",
  },
  {
    icon: Home,
    title: "Permanent Residency",
    text: "PR and immigration applications need a PCC issued within the last six months.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: GraduationCap,
    title: "Education Abroad",
    text: "Many universities and student-visa programs ask for a PCC to verify clean records.",
    color: "from-emerald-600 to-green-600",
  },
  {
    icon: Heart,
    title: "International Adoption",
    text: "Adoption agencies and foreign authorities require a PCC for each adoptive parent.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Globe2,
    title: "Naturalization",
    text: "Citizenship applications in foreign countries usually require an Indian PCC.",
    color: "from-sky-500 to-blue-600",
  },
];

const steps = [
  {
    icon: Send,
    title: "Apply Online",
    text: "Fill the secure form with passport and contact details.",
    rotate: "-rotate-2",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    text: "Submit passport copy, Aadhaar, and recent photographs.",
    rotate: "rotate-1",
  },
  {
    icon: Wallet,
    title: "Payment",
    text: "Pay the government and service fee securely online.",
    rotate: "-rotate-1",
  },
  {
    icon: Search,
    title: "Police Verification",
    text: "Local police verify your address and background record.",
    rotate: "rotate-2",
  },
  {
    icon: FileBadge,
    title: "Get Certificate",
    text: "Stamped PCC delivered digitally and via courier.",
    rotate: "-rotate-1",
  },
];

const documents = [
  {
    icon: IdCard,
    title: "Passport",
    sub: "Original + photocopy of front and back pages",
  },
  {
    icon: ShieldCheck,
    title: "Aadhaar Card",
    sub: "Used as identity and address proof",
  },
  {
    icon: MapPin,
    title: "Address Proof",
    sub: "Utility bill, rent agreement, or bank statement",
  },
  {
    icon: Stamp,
    title: "Photographs",
    sub: "Two recent passport-size photos",
  },
];

const features = [
  {
    icon: BadgeCheck,
    title: "Officially Stamped",
    text: "Sealed and signed by the issuing authority — accepted worldwide.",
  },
  {
    icon: Globe2,
    title: "International Use",
    text: "Apostille and attestation services available on request.",
  },
  {
    icon: Languages,
    title: "English by Default",
    text: "Issued in English — no translation needed for most foreign authorities.",
  },
  {
    icon: CalendarClock,
    title: "6 Months Validity",
    text: "Stays valid for half a year from the date of issue.",
  },
];

const faqs = [
  {
    q: "What is a Police Clearance Certificate (PCC)?",
    a: "A PCC is an official document issued by the police or passport authority confirming you have no criminal record in India. It is primarily used abroad — for visas, foreign employment, residency, and other immigration purposes.",
  },
  {
    q: "Who needs a PCC?",
    a: "Anyone applying for a long-term visa, work permit, permanent residency, foreign citizenship, international adoption, or higher education abroad typically needs a PCC. Tourist visas may not require one — check your destination's rules.",
  },
  {
    q: "How long is a PCC valid?",
    a: "A PCC is generally valid for six months from the date of issue. Some embassies and employers may accept a shorter validity window — if your PCC has expired, you'll need to apply for a fresh one.",
  },
  {
    q: "What documents are required?",
    a: "You'll need your original passport, Aadhaar card, an address proof (utility bill, rent agreement, or bank statement), and two recent passport-size photographs. Additional documents may be needed for specific destinations.",
  },
  {
    q: "Do I need to visit a police station?",
    a: "In most cases the police visit you for address verification rather than the other way around. For some applications you may need to attend the Passport Seva Kendra (PSK) for biometric capture — we confirm and book the slot if needed.",
  },
  {
    q: "How long does the process take?",
    a: "If your address has been previously verified during a recent passport application, the PCC is often issued in 2-7 working days. Fresh verifications can take 15-30 days depending on the local police response time.",
  },
  {
    q: "Is apostille or attestation required for foreign use?",
    a: "Many countries require the PCC to be apostilled (Hague Convention countries) or attested by MEA and the destination embassy. We offer apostille and attestation as an add-on service — just let us know your destination.",
  },
  {
    q: "Can NRIs apply for a PCC?",
    a: "Yes. NRIs can apply through the Indian embassy or consulate in their country of residence. We assist with documentation, application drafting, and follow-up — entirely remotely.",
  },
  {
    q: "What is the difference between PCC and PVC?",
    a: "A PCC (Police Clearance Certificate) is primarily for foreign use — visa, immigration, and overseas employment. A PVC (Police Verification Certificate) is for domestic use — Indian employment, rental, and local verification.",
  },
  {
    q: "Is the PCC issued in English?",
    a: "Yes. The PCC is issued in English by default and is accepted by most foreign authorities without translation. If your destination requires the certificate in another language, we can arrange certified translation.",
  },
];

export default function PoliceClearancePage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">
                Police Clearance Certificate
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-lime-50 to-green-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-lime-300/30 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 backdrop-blur-sm">
                  <BadgeCheck className="h-3 w-3" />
                  For International Use
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-800 backdrop-blur-sm">
                  <Globe2 className="h-3 w-3" />
                  Apostille Available
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Police Clearance{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Certificate</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-emerald-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Foreign visa, immigration, education abroad, or international
                job — your PCC, prepared and stamped without the queues. We
                handle paperwork, follow-ups, and apostille if you need it.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#use-cases"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  When you need it →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                <span className="font-display text-sm font-bold text-slate-900">
                  99% Delivered on time
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">
                    7-30 working days
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <CalendarClock className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">
                    6 months validity
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-300/30 to-lime-300/30 blur-2xl"
                aria-hidden
              />

              <div className="absolute -left-3 top-12 z-20 -rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Stamp className="h-5 w-5 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Officially stamped
                  </span>
                </div>
              </div>

              <div className="absolute -right-3 top-32 z-20 rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-lime-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Visa-ready
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-md">
                <img
                  src="/illustrations/services/police-clearance.svg"
                  alt="Police clearance certificate with seal"
                  className="relative h-auto w-full select-none drop-shadow-2xl animate-float"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Issued in English · Globally accepted
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                About PCC
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                A clean record,{" "}
                <span className="text-emerald-600">officially confirmed</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  A Police Clearance Certificate (PCC) is an official document
                  proving you have no criminal record in India. It is required
                  by foreign embassies, employers, and immigration authorities
                  before they issue visas, work permits, or residency.
                </p>
                <p>
                  Generally, a PCC is valid for six months from the day it is
                  issued. If your employer or embassy needs the certificate
                  within a specific window — and yours has expired — apply for
                  a fresh one.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6">
                <div>
                  <div className="font-display text-2xl font-extrabold text-emerald-700 md:text-3xl">
                    6 mo
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Validity
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-emerald-700 md:text-3xl">
                    7-30
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Working days
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-emerald-700 md:text-3xl">
                    Global
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Acceptance
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-100 via-lime-50 to-green-100"
                aria-hidden
              />
              <div className="flex items-center justify-center p-6 md:p-8">
                <img
                  src="/illustrations/hero-stamp.svg"
                  alt="Official stamp on document"
                  className="h-auto w-full max-w-sm select-none drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 py-20 text-white md:py-24">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-lime-500/20 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex justify-center">
              <div
                className="absolute inset-0 -z-10 rounded-full bg-emerald-500/20 blur-3xl"
                aria-hidden
              />

              <div className="relative h-72 w-72 md:h-80 md:w-80">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/40"
                  aria-hidden
                />

                <div
                  className="absolute inset-3 rounded-full border border-emerald-400/30"
                  aria-hidden
                />

                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute left-1/2 top-1/2 -ml-px h-3 w-0.5 origin-bottom bg-emerald-300/40"
                    style={{
                      transform: `translateX(-50%) translateY(-50%) rotate(${
                        i * 30
                      }deg) translateY(-138px)`,
                    }}
                    aria-hidden
                  />
                ))}

                <div className="absolute inset-10 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-700 shadow-2xl ring-4 ring-emerald-400/30">
                  <CalendarClock
                    className="h-10 w-10 text-emerald-50"
                    strokeWidth={1.5}
                  />
                  <div className="mt-1 font-display text-7xl font-black leading-none text-white">
                    6
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100">
                    Months
                  </div>
                  <div className="mt-1 text-[9px] font-medium uppercase tracking-wider text-emerald-200/80">
                    Validity
                  </div>
                </div>

                <div className="absolute -right-3 top-6 rotate-12 rounded-xl bg-white px-3 py-1.5 shadow-xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                    Issue date
                  </span>
                </div>
                <div className="absolute -left-2 bottom-8 -rotate-6 rounded-xl bg-amber-50 px-3 py-1.5 shadow-xl ring-1 ring-amber-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Renew if expired
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Validity
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Valid for{" "}
                <span className="text-emerald-300">six months</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
                A PCC stays valid for six months from the day it is issued.
                Some embassies require a window shorter than six months — if
                yours is close to expiry or already expired, apply for a fresh
                one before submitting your visa or job application.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Within 6 months
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    Accepted by most embassies, employers, and immigration
                    authorities.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <CalendarClock className="h-4 w-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Past 6 months
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    Considered expired — apply for a fresh certificate before
                    submitting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              When You Need One
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Six common{" "}
              <span className="text-emerald-600">situations</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Almost every long-term move outside India asks for a PCC. Here
              are the most common.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <article
                key={u.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-card p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${u.color} opacity-0 transition-opacity group-hover:opacity-[0.05]`}
                />
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${u.color} shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <u.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-tight">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {u.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              5 stamped steps to your{" "}
              <span className="text-emerald-600">certificate</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`group relative ${step.rotate} transition-transform hover:rotate-0 hover:scale-105`}
              >
                <div className="overflow-hidden rounded-2xl border-[3px] border-dashed border-emerald-300 bg-card p-5 shadow-md transition-shadow hover:shadow-2xl">
                  <div className="flex items-start justify-between border-b-2 border-dashed border-emerald-200 pb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-md">
                      <step.icon
                        className="h-5 w-5 text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="rounded-full bg-emerald-100 px-2 py-0.5 font-display text-[10px] font-black uppercase tracking-wider text-emerald-700">
                      Stamp {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                  <div className="mt-4 flex items-center justify-end gap-1 opacity-50">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                      Approved
                    </span>
                    <BadgeCheck className="h-3 w-3 text-emerald-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                Get Ready
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Documents{" "}
                <span className="text-emerald-600">required</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                A short checklist — keep these handy before you start the
                application.
              </p>

              <div className="mt-8 grid gap-3">
                {documents.map((d) => (
                  <div
                    key={d.title}
                    className="flex items-start gap-4 rounded-2xl border-2 border-slate-200 bg-card p-4 transition-all hover:border-emerald-300 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-lime-100 text-emerald-700">
                      <d.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-display text-base font-bold">
                        {d.title}
                      </div>
                      <div className="mt-0.5 text-sm text-muted-foreground">
                        {d.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border-2 border-slate-200 bg-card p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
                    <BadgeCheck className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Why Make My Documents
                    </div>
                    <h3 className="font-display text-lg font-bold md:text-xl">
                      Built for embassies
                    </h3>
                  </div>
                </div>
                <ul className="mt-5 grid gap-2.5">
                  {features.map((f) => (
                    <li
                      key={f.title}
                      className="flex items-start gap-3 rounded-xl bg-emerald-50/50 px-3 py-2.5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-sm">
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

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 p-7 text-white shadow-xl">
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
                  ₹ 1,500
                  <span className="ml-2 font-display text-base font-bold opacity-90">
                    onwards
                  </span>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-white/90">
                  Fee depends on whether police verification is fresh or
                  reused from a recent passport application. Apostille and
                  embassy attestation are extra.
                </p>
                <button
                  type="button"
                  className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-display text-sm font-bold text-emerald-700 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-emerald-600">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to your PCC.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-emerald-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-transform group-open:rotate-180">
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
