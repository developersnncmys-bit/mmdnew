import Link from "next/link";
import {
  Sparkles,
  Plane,
  IdCard,
  Globe2,
  Home,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

const heroStats = [
  { num: "1L+", label: "Customers" },
  { num: "10+", label: "Years Active" },
  { num: "4.8★", label: "Google Rating" },
  { num: "CSC", label: "Gov. Approved" },
];

const floatingChips = [
  {
    icon: Plane,
    title: "Passport",
    sub: "Tatkal · 2 weeks",
    iconBg: "bg-blue-600 text-white",
    pos: "left-[-14px] top-[10%]",
    delay: "0s",
    duration: "5.4s",
  },
  {
    icon: IdCard,
    title: "PAN Card",
    sub: "New · Correction",
    iconBg: "bg-emerald-500 text-white",
    pos: "right-[-12px] top-[28%]",
    delay: "0.6s",
    duration: "6.2s",
  },
  {
    icon: Globe2,
    title: "Visa",
    sub: "180+ countries",
    iconBg: "bg-indigo-600 text-white",
    pos: "left-[-8px] bottom-[24%]",
    delay: "1.1s",
    duration: "5.8s",
  },
  {
    icon: Home,
    title: "Rental",
    sub: "e-Stamped",
    iconBg: "bg-amber-500 text-white",
    pos: "right-[-6px] bottom-[8%]",
    delay: "0.3s",
    duration: "6.6s",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-[6%] pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Background art */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-amber-50/40" />
        <div className="absolute -top-32 right-[-120px] h-[620px] w-[620px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-amber-100/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* LEFT — copy */}
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-blue-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            India's #1* Online Documents Consultancy
          </span>

          <h1 className="mt-6 font-display text-[clamp(40px,5.4vw,76px)] font-extrabold leading-[1] tracking-[-2.5px] text-slate-950">
            We are India's
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                #1* Online
              </span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 -skew-x-6 bg-amber-200/70" />
            </span>
            <br />
            Documents
            <span className="ml-3 inline-block align-middle">
              <span className="block h-1.5 w-12 rounded-full bg-blue-600" />
              <span className="mt-1 block h-1.5 w-7 rounded-full bg-amber-400" />
            </span>
            <br />
            Consultancy.
          </h1>

          <div className="mt-7 max-w-[520px] rounded-2xl border-l-[3px] border-blue-600 bg-white/70 px-5 py-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] backdrop-blur">
            <p className="font-display text-[18px] font-bold text-slate-900">
              Efficiently Organized, Expertly Delivered.
            </p>
            <p className="mt-1 text-[14.5px] leading-[1.65] text-slate-500">
              Accurate Drafting, Fast Turnaround, Hassle-Free Execution.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-slate-950 px-7 py-3.5 font-display text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.6)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_36px_-8px_rgba(29,78,216,0.55)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Apply for a Document
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://wa.me/919429690973"
              className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-slate-200 bg-white px-7 py-3.5 font-display text-[15px] font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-blue-600", "bg-emerald-500", "bg-amber-500", "bg-indigo-600"].map(
                (bg, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white ${bg} font-display text-[11px] font-bold text-white shadow-sm`}
                  >
                    {["R", "P", "A", "S"][i]}
                  </div>
                )
              )}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5 text-amber-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="ml-1 text-[12.5px] font-semibold text-slate-700">
                4.8 · 1L+ happy customers
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-7 grid max-w-[560px] grid-cols-4 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 backdrop-blur">
            {heroStats.map((s) => (
              <div key={s.label} className="px-3 py-3.5 text-center">
                <div className="font-display text-[19px] font-extrabold tracking-[-0.5px] text-slate-900">
                  {s.num}
                </div>
                <div className="mt-0.5 text-[10.5px] font-medium uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — visual collage */}
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Backplate */}
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[36px] bg-gradient-to-br from-blue-100 to-indigo-100" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)]">
            {/* Browser-style top bar */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="rounded-md bg-white px-3 py-1 text-[10px] font-semibold tracking-wide text-slate-400 shadow-sm">
                makemydocuments.in
              </div>
              <div className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                <ShieldCheck className="h-3 w-3" />
                Secure
              </div>
            </div>

            {/* Illustration */}
            <div className="relative aspect-[5/5] bg-gradient-to-br from-blue-50 via-white to-amber-50/60">
              <img
                src="/illustrations/hero-documents.svg"
                alt="Documents handled by Make My Documents"
                className="absolute inset-0 h-full w-full object-contain p-6 animate-float-y"
                style={{ animationDuration: "7s" }}
                loading="eager"
                decoding="async"
              />
              {/* Stamp accent */}
              <img
                src="/illustrations/hero-stamp.svg"
                alt=""
                aria-hidden="true"
                className="absolute right-4 top-4 h-20 w-20 opacity-90"
              />
            </div>

            {/* Footer ribbon */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-white px-5 py-3.5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                  Today's Update
                </div>
                <div className="mt-0.5 font-display text-[13px] font-bold text-slate-900">
                  3 passports dispatched · 12 in process
                </div>
              </div>
              <span className="flex h-2.5 w-2.5 animate-blink rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Floating service chips */}
          {floatingChips.map((c) => (
            <div
              key={c.title}
              className={`absolute ${c.pos} hidden animate-float-y items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2.5 shadow-[0_12px_30px_-8px_rgba(15,23,42,0.18)] backdrop-blur md:inline-flex`}
              style={{
                animationDuration: c.duration,
                animationDelay: c.delay,
              }}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.iconBg}`}
              >
                <c.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <div className="font-display text-[12.5px] font-bold text-slate-900">
                  {c.title}
                </div>
                <div className="text-[10.5px] text-slate-500">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
