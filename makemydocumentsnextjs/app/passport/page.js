import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Plane,
  PlusCircle,
  RefreshCw,
  Pencil,
  AlertTriangle,
  UserPen,
  Baby,
  Zap,
  Send,
  Upload,
  ScanLine,
  CreditCard,
  CalendarCheck2,
  Building2,
  Stamp,
  PackageCheck,
  Globe2,
  IdCard,
  Home,
  GraduationCap,
} from "lucide-react";
import CTA from "@/components/sections/cta";

export const metadata = {
  title:
    "Apply for Passport Online — New, Renewal, Tatkal | Make My Documents",
  description:
    "Apply for Indian passport — fresh, renewal, correction, lost or minor. Tatkal in 5-10 days, normal in 15-20 days. Trusted passport agents, end-to-end assistance, doorstep delivery.",
};

const services = [
  {
    icon: PlusCircle,
    title: "New Passport",
    text: "Submit your first-ever passport application without mistakes.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: RefreshCw,
    title: "Passport Renewals",
    text: "Quick renewal so you can take off as planned — no last-minute stress.",
    color: "from-cyan-500 to-sky-600",
  },
  {
    icon: Pencil,
    title: "Passport Corrections",
    text: "Fix incorrect details on your existing passport, swiftly and accurately.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: AlertTriangle,
    title: "Lost or Stolen Replacement",
    text: "Step-by-step support until you have a fresh passport in hand.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: UserPen,
    title: "Name Change",
    text: "Update your passport with your new name after marriage or legal change.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Baby,
    title: "Child Passport",
    text: "Travelling with kids? We guide you through the minor passport process.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Tatkal / Expedite",
    text: "Need it fast? Rushed passport service so you don't miss your trip.",
    color: "from-fuchsia-500 to-rose-600",
  },
];

const passportTypes = [
  {
    id: "blue",
    name: "Ordinary Passport",
    color: "Blue Passport",
    accentText: "text-blue-700",
    ribbon: "from-blue-700 via-blue-800 to-indigo-900",
    chipBg: "bg-blue-50",
    chipText: "text-blue-700",
    description:
      "Issued to Indian citizens for personal travel — leisure, business, education, and cultural exchanges. The most common passport you'll see at boarding gates.",
    attributes: [
      "Travelling is the main reason it is adopted",
      "Valid for 10 years",
      "Can be renewed when it expires",
      "Most user-friendly for frequent fliers",
    ],
  },
  {
    id: "white",
    name: "Official Passport",
    color: "White Passport",
    accentText: "text-slate-700",
    ribbon: "from-slate-100 via-white to-slate-200",
    chipBg: "bg-slate-100",
    chipText: "text-slate-700",
    description:
      "Issued to representatives of the Indian government travelling abroad on official duty — government employees, ambassadors, or delegates attending international conferences.",
    attributes: [
      "For official government travel only",
      "Validity varies with the duration of the assignment",
      "Application processed through government channels",
      "Not for personal or leisure travel",
    ],
  },
  {
    id: "maroon",
    name: "Diplomatic Passport",
    color: "Maroon Passport",
    accentText: "text-rose-800",
    ribbon: "from-rose-800 via-rose-900 to-red-950",
    chipBg: "bg-rose-50",
    chipText: "text-rose-800",
    description:
      "Issued to Indian diplomats, consular staff, and their immediate family members. Provides certain privileges and immunities while in a foreign country.",
    attributes: [
      "For diplomats and consular officials",
      "Grants diplomatic immunity and privileges",
      "Validity equals the duration of the diplomatic mission",
      "Family members of diplomats are also eligible",
    ],
  },
];

const phaseOnline = [
  {
    icon: Send,
    title: "Register Online",
    text: "Fill the basic details in the application on our secure portal.",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    text: "Submit the required documents via WhatsApp or email.",
  },
  {
    icon: ScanLine,
    title: "Documents Verification",
    text: "Our experts review your documents for accuracy and compliance.",
  },
  {
    icon: CreditCard,
    title: "Payment",
    text: "Make a secure online payment to proceed with the application.",
  },
];

const phaseOffline = [
  {
    icon: CalendarCheck2,
    title: "Get Appointment",
    text: "We schedule your PSK appointment as per your preferred date and time.",
  },
  {
    icon: Building2,
    title: "Visit PSK",
    text: "Visit the designated PSK with your originals for biometric verification.",
  },
  {
    icon: ShieldCheck,
    title: "Police Verification",
    text: "Local police verify your provided address as part of the process.",
  },
  {
    icon: PackageCheck,
    title: "Get Delivered",
    text: "Once approved, your passport is printed and couriered to your doorstep.",
  },
];

const docsAnyOne = [
  {
    icon: IdCard,
    title: "Proof of Identity",
    sub: "Pick any 01",
    color: "from-teal-500 to-cyan-600",
    items: ["Aadhar Card", "Voter ID", "PAN Card", "Driving Licence"],
  },
  {
    icon: Home,
    title: "Proof of Address",
    sub: "Pick any 01",
    color: "from-cyan-500 to-sky-600",
    items: [
      "Aadhar Card",
      "Voter ID",
      "Bank Account Passbook",
      "Gas / Electricity / Telephone / Water Bill",
      "Parents Passport / Spouse Passport",
    ],
  },
  {
    icon: GraduationCap,
    title: "Proof of Birth",
    sub: "Pick any 01",
    color: "from-sky-500 to-blue-600",
    items: [
      "10th Certificate",
      "12th Certificate",
      "Higher Education Pass Certificate",
      "School Leaving Certificate",
      "Income Tax Assessment Order",
    ],
  },
];

const docsSpecial = [
  {
    icon: RefreshCw,
    title: "For Renewal / Reissue",
    color: "from-violet-500 to-purple-600",
    items: ["Original Old Passport", "ID and Present Address Proof"],
  },
  {
    icon: Baby,
    title: "For Minor Passport",
    color: "from-rose-500 to-pink-600",
    items: ["Birth Certificate", "Both Parents' Passport"],
  },
];

const faqs = [
  {
    q: "Who qualifies for an Indian passport?",
    a: "Any Indian citizen — by birth, descent, registration, or naturalization — qualifies for an Indian passport. Applicants must hold valid Indian citizenship and provide proof of identity, address, and date of birth as part of the application.",
  },
  {
    q: "What is Ordinary, Diplomatic or Official Passport?",
    a: "Ordinary (Blue) is for regular Indian citizens travelling for personal, business, or education purposes. Official (White) is issued to government employees on official duty abroad. Diplomatic (Maroon) is reserved for Indian diplomats, consular officers, and their families.",
  },
  {
    q: "What is the validity of a passport?",
    a: "An ordinary Indian passport is valid for 10 years for adults and 5 years for minors (or until they turn 18, whichever is earlier). Official and diplomatic passports are valid for the duration of the assignment they are issued for.",
  },
  {
    q: "What is the difference between Normal and Tatkal application?",
    a: "Normal applications are processed in 15-20 working days at standard fees (Rs. 2,499). Tatkal is an expedited service that delivers the passport in 5-10 working days at a higher fee (Rs. 4,499) — useful for urgent travel.",
  },
  {
    q: "Within how many days will I get the appointment?",
    a: "Most PSK appointments are available within 3-7 working days for normal applications. For Tatkal applications, slots are usually available within 1-3 working days. We pick the earliest slot that fits your schedule.",
  },
  {
    q: "Is it possible to get the appointment on weekends?",
    a: "PSK centres are generally closed on weekends and government holidays. Some centres open on selected Saturdays for high-volume periods — we will book the nearest available working-day slot for you.",
  },
  {
    q: "What happens if I miss the passport appointment?",
    a: "If you miss your slot, you can usually reschedule within the same application using the Passport Seva portal — typically up to 2 reschedules are allowed. Our team helps you reschedule without losing your fees.",
  },
  {
    q: "Can someone else attend my passport appointment for me?",
    a: "No. The applicant must visit the PSK in person for biometric capture, photo, and signature. The only exception is for minors and senior citizens, where parents or attendants accompany the applicant.",
  },
  {
    q: "When will the police verification happen?",
    a: "Police verification is typically initiated after your PSK visit. The local police station of your address verifies your identity and address — this usually happens within 1-3 weeks of your appointment.",
  },
  {
    q: "How will I get the passport?",
    a: "Once printed, your passport is dispatched via Speed Post to the address mentioned in your application. You can track the delivery using the consignment number shared on your registered mobile and email.",
  },
];

export default function PassportPage() {
  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-1.5 text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="font-medium text-teal-600 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">Passport</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-teal-100 via-cyan-50 to-sky-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-teal-300/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl"
          aria-hidden
        />

        <div
          className="absolute inset-0 -z-0 opacity-[0.04]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            color: "#0f766e",
          }}
        />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 backdrop-blur-sm">
                <Globe2 className="h-3 w-3" />
                Trusted Passport Agents · India
              </span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Apply for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Passport</span>
                  <span
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-teal-400/60 md:bottom-2 md:h-4"
                    aria-hidden
                  />
                </span>{" "}
                Services
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                Fresh passport, renewal, correction, lost or minor — handled
                end to end by experienced agents. Tatkal in 5-10 days, normal
                in 15-20. PSK appointment booked, documents reviewed,
                passport delivered.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#services"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  See what we handle →
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className="h-4 w-4 fill-teal-500 text-teal-500" />
                <span className="font-display text-sm font-bold text-slate-900">
                  99% Delivered on time
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-teal-600" />
                  <span className="text-xs font-bold text-slate-800">
                    15-20 days · Normal
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Zap className="h-3.5 w-3.5 text-teal-600" />
                  <span className="text-xs font-bold text-slate-800">
                    5-10 days · Tatkal
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-2xl"
                aria-hidden
              />

              <div className="absolute -left-4 top-8 z-20 -rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Stamp className="h-5 w-5 text-teal-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Verified
                  </span>
                </div>
              </div>

              <div className="absolute -right-4 top-32 z-20 rotate-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-cyan-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Ready to fly
                  </span>
                </div>
              </div>

              <div className="relative w-full max-w-md">
                <img
                  src="/illustrations/services/passport.svg"
                  alt="Indian passport with airplane"
                  className="relative h-auto w-full select-none drop-shadow-2xl animate-float"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-xl ring-1 ring-slate-200">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-teal-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Travel-ready · 10 yr validity
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                About the Service
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Comprehensive passport services —{" "}
                <span className="text-teal-600">no worries.</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  Planning to travel abroad and need a trustworthy passport
                  agent to guide the way? Look no further. We're a team of
                  experienced passport agents ready to deliver rapid,
                  effective, and problem-less service.
                </p>
                <p>
                  Holiday, education abroad, career relocation — whatever the
                  reason, get in touch and we'll make your passport the least
                  of your worries.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6">
                <div>
                  <div className="font-display text-2xl font-extrabold text-teal-700 md:text-3xl">
                    99%
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    On-time delivery
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-teal-700 md:text-3xl">
                    5-10
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Days · Tatkal
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-teal-700 md:text-3xl">
                    PAN-India
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Service area
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-teal-100 via-cyan-50 to-sky-100"
                aria-hidden
              />
              <div className="flex items-center justify-center p-6 md:p-8">
                <img
                  src="/illustrations/visa-hero-landmarks.svg"
                  alt="World landmarks travel illustration"
                  className="h-auto w-full max-w-md select-none drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              What We Handle
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Every passport need —{" "}
              <span className="text-teal-600">covered</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Seven specialized passport services to match exactly what you're
              looking for.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-card p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${s.color} opacity-0 transition-opacity group-hover:opacity-[0.05]`}
                />
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-md transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <s.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </article>
            ))}

            <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
              <Plane className="h-10 w-10 text-teal-400" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-base font-bold leading-tight">
                Need something else?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Talk to our experts — we handle every passport scenario you
                can think of.
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-teal-500 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:bg-teal-600"
              >
                Talk to Expert
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              Three Colours, Three Purposes
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Passport types{" "}
              <span className="text-teal-600">in India</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              The colour on the cover tells you who it's for. Here's the full
              picture.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
            {passportTypes.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-3xl border-2 border-slate-200 bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div
                  className={`relative h-44 bg-gradient-to-br ${p.ribbon} ${
                    p.id === "white" ? "ring-1 ring-inset ring-slate-300" : ""
                  } flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-x-6 inset-y-4 rounded-md border border-current" />
                  </div>

                  <div
                    className={`relative w-32 rounded-md border-[3px] p-3 shadow-2xl transition-transform group-hover:scale-105 group-hover:-rotate-2 ${
                      p.id === "white"
                        ? "border-slate-300 bg-white text-slate-700"
                        : p.id === "blue"
                        ? "border-blue-900/40 bg-blue-800 text-white"
                        : "border-rose-950/50 bg-rose-900 text-rose-50"
                    }`}
                  >
                    <div className="text-center">
                      <Globe2
                        className="mx-auto h-7 w-7 opacity-90"
                        strokeWidth={1.5}
                      />
                      <div className="mt-1.5 text-[7px] font-bold uppercase tracking-[0.15em] opacity-80">
                        Republic of India
                      </div>
                      <div className="mt-1 text-[8px] font-bold uppercase tracking-wider opacity-95">
                        Passport
                      </div>
                      <div className="mx-auto mt-1.5 h-px w-12 bg-current opacity-30" />
                      <div className="mt-1 text-[6px] font-medium uppercase tracking-wider opacity-60">
                        पासपोर्ट
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full ${p.chipBg} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${p.chipText}`}
                    >
                      {p.color}
                    </span>
                  </div>
                  <h3 className={`mt-2 font-display text-xl font-bold leading-tight ${p.accentText}`}>
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t pt-4">
                    {p.attributes.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${p.accentText}`}
                        />
                        <span className="text-foreground">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-24">
        <div
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              8 steps from form to{" "}
              <span className="text-teal-400">final delivery</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-teal-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-300 ring-1 ring-teal-500/30">
                Phase 1 · Online with us
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {phaseOnline.map((step, i) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/10"
                >
                  <div className="absolute -right-2 -top-2 font-display text-7xl font-black text-white/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
                      <step.icon
                        className="h-5 w-5 text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-teal-300">
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

            <div className="mb-4 mt-10 flex items-center gap-3">
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-500/30">
                Phase 2 · At PSK & Verification
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {phaseOffline.map((step, i) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
                >
                  <div className="absolute -right-2 -top-2 font-display text-7xl font-black text-white/[0.04]">
                    {String(i + 5).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 shadow-lg">
                      <step.icon
                        className="h-5 w-5 text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="mt-4 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      Step {i + 5}
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
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                Get Ready
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Documents{" "}
                <span className="text-teal-600">required</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Pick any one document from each of the three boxes below.
                Special cases (Renewal, Minor) need a couple of extra papers.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div
                className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-100 to-cyan-100"
                aria-hidden
              />
              <img
                src="/illustrations/hero-documents.svg"
                alt="Documents ready for upload"
                className="h-auto w-full select-none p-6 drop-shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {docsAnyOne.map((g) => (
              <div
                key={g.title}
                className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`bg-gradient-to-r ${g.color} px-6 py-5 text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                        {g.sub}
                      </div>
                      <h3 className="mt-0.5 font-display text-lg font-bold">
                        {g.title}
                      </h3>
                    </div>
                    <g.icon className="h-7 w-7 opacity-90" />
                  </div>
                </div>
                <ul className="space-y-1 p-5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-slate-50"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2">
            {docsSpecial.map((g) => (
              <div
                key={g.title}
                className="overflow-hidden rounded-3xl border-2 border-dashed border-slate-200 bg-card transition-all hover:border-transparent hover:shadow-xl"
              >
                <div className="flex items-center gap-4 px-6 py-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-md`}
                  >
                    <g.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Special case
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {g.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-1 px-5 pb-5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg px-2 py-2 text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-card shadow-xl ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-7 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                      Normal Application
                    </div>
                    <div className="mt-0.5 font-display text-lg font-bold">
                      Standard pace
                    </div>
                  </div>
                  <Clock className="h-9 w-9 opacity-90" strokeWidth={1.75} />
                </div>
              </div>
              <div className="p-7">
                <div className="font-display text-5xl font-black text-slate-900">
                  ₹ 2,499
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Delivered in 15-20 working days
                </div>
                <ul className="mt-6 space-y-2.5 border-t pt-5 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    <span>Document review & PSK appointment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    <span>End-to-end follow-up</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    <span>Doorstep delivery via Speed Post</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-display text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg"
                >
                  Apply Normal
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-card shadow-2xl ring-2 ring-fuchsia-400 transition-all hover:-translate-y-1">
              <div className="absolute right-5 top-5 z-10 rounded-full bg-fuchsia-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                Fastest
              </div>
              <div className="bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-500 px-7 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                      Tatkal Application
                    </div>
                    <div className="mt-0.5 font-display text-lg font-bold">
                      Express pace
                    </div>
                  </div>
                  <Zap className="h-9 w-9 opacity-90" strokeWidth={1.75} />
                </div>
              </div>
              <div className="p-7">
                <div className="font-display text-5xl font-black text-slate-900">
                  ₹ 4,499
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Delivered in 5-10 working days
                </div>
                <ul className="mt-6 space-y-2.5 border-t pt-5 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-600" />
                    <span>Priority PSK slot booking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-600" />
                    <span>Expedited document review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-600" />
                    <span>Pre-verification police support</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-rose-500 px-6 py-3 font-display text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Apply Tatkal
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl rounded-2xl border-2 border-dashed border-slate-200 bg-white px-6 py-4 text-center text-sm text-muted-foreground">
            <span className="font-bold text-slate-900">Booking fee:</span> ₹99
            payable while submitting the online form. This amount is adjusted
            in the total bill.
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className="text-teal-600">questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to passport
              services.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all open:border-teal-400 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-transform group-open:rotate-180">
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
