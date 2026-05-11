"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Check,
  Sparkles,
  Clock,
  ShieldCheck,
  Star,
} from "lucide-react";

const primaryServices = [
  {
    title: "Passport Services",
    desc: "Complete end-to-end assistance. New applications, renewals, Tatkal processing, lost passport replacement and corrections.",
    tags: ["New Application", "Renewal", "Tatkal", "Lost Passport"],
    href: "/passport",
    img: "/illustrations/services/passport.svg",
    category: "ID & Travel",
    accent: "blue",
    featured: true,
  },
  {
    title: "PAN Card",
    desc: "Fast PAN card services — new applications, corrections, duplicate issuance and Aadhaar linking for individuals and businesses.",
    tags: ["New PAN", "Correction", "Duplicate"],
    href: "/pan-card",
    img: "/illustrations/services/pan.svg",
    category: "Tax & Identity",
    accent: "emerald",
    tat: "3–5 days",
  },
  {
    title: "Visa Assistance",
    desc: "Expert documentation and guidance for tourist, business and student visa applications to all major countries.",
    tags: ["Tourist Visa", "Work Visa", "Student Visa"],
    href: "/tourist-visa",
    img: "/illustrations/services/visa.svg",
    category: "International Travel",
    accent: "indigo",
    tat: "5–7 days",
  },
  {
    title: "Police Clearance (PCC / PVC)",
    desc: "Clearance and verification certificates processed smoothly for employment abroad, travel and immigration purposes.",
    tags: ["PCC", "PVC", "Background Check"],
    href: "/police-clearance",
    img: "/illustrations/services/police-clearance.svg",
    category: "Verification",
    accent: "slate",
    tat: "7–14 days",
  },
  {
    title: "Rental Agreements",
    desc: "Legally drafted, e-stamped rental and lease agreements prepared and delivered to your doorstep without stepping out.",
    tags: ["Rental Agreement", "Lease Agreement", "e-Stamp"],
    href: "/rental-agreement",
    img: "/illustrations/services/rental.svg",
    category: "Legal & Property",
    accent: "amber",
    tat: "Same day",
  },
  {
    title: "Insurance Policies",
    desc: "Bike, car, health and life insurance issued quickly. Policy delivered in days without any paperwork hassle on your end.",
    tags: ["Bike & Car", "Health", "Life Insurance"],
    href: "/insurance",
    img: "/illustrations/services/insurance.svg",
    category: "Insurance",
    accent: "rose",
    tat: "1–2 days",
  },
];

const moreServices = [
  {
    title: "Lease Agreements",
    desc: "Long-term lease drafting, registration, and stamp duty handling for residential and commercial properties.",
    tags: ["Long-term Lease", "Commercial", "Stamp Duty"],
    href: "/lease-agreement",
    img: "/illustrations/services/lease.svg",
    category: "Legal & Property",
    accent: "teal",
    tat: "2–3 days",
  },
  {
    title: "Affidavits / Annexure",
    desc: "Name change, marriage, minor, signature change, and one-and-the-same affidavits drafted and notarized.",
    tags: ["Name Change", "Marriage", "Minor"],
    href: "/affidavit",
    img: "/illustrations/services/affidavit.svg",
    category: "Legal Documents",
    accent: "purple",
    tat: "1–2 days",
  },
  {
    title: "Senior Citizen Card",
    desc: "Karnataka Senior Citizen Card for citizens aged 60+ — healthcare, travel, and welfare benefits unlocked.",
    tags: ["60+", "Karnataka", "Welfare"],
    href: "/senior-citizen-card",
    img: "/illustrations/services/senior.svg",
    category: "Welfare",
    accent: "orange",
    tat: "10–15 days",
  },
  {
    title: "Police Verification",
    desc: "Police Verification Certificate (PVC) for employment, lease, passport, and visa — fully online application.",
    tags: ["Employment", "Rental", "Visa"],
    href: "/police-verification",
    img: "/illustrations/services/police-verification.svg",
    category: "Verification",
    accent: "sky",
    tat: "5–10 days",
  },
  {
    title: "MSME / Udyam Registration",
    desc: "Get your business officially registered as Micro, Small, or Medium. Lifetime valid certificate, all-India recognition.",
    tags: ["Udyam", "Micro/Small", "Free Govt Cert"],
    href: "/msme-registration",
    img: "/illustrations/services/msme.svg",
    category: "Business",
    accent: "lime",
    tat: "Same day",
  },
];

const totalCount = primaryServices.length + moreServices.length;

const accentMap = {
  blue: {
    well: "from-blue-50 via-white to-blue-100/60",
    glow: "bg-blue-500/15",
    dot: "bg-blue-500",
    text: "text-blue-700",
    ring: "ring-blue-100",
    chip: "bg-blue-50 text-blue-700 ring-blue-200",
  },
  emerald: {
    well: "from-emerald-50 via-white to-emerald-100/60",
    glow: "bg-emerald-500/15",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    ring: "ring-emerald-100",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  indigo: {
    well: "from-indigo-50 via-white to-indigo-100/60",
    glow: "bg-indigo-500/15",
    dot: "bg-indigo-500",
    text: "text-indigo-700",
    ring: "ring-indigo-100",
    chip: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  },
  slate: {
    well: "from-slate-100 via-white to-slate-200/60",
    glow: "bg-slate-500/15",
    dot: "bg-slate-500",
    text: "text-slate-700",
    ring: "ring-slate-200",
    chip: "bg-slate-100 text-slate-700 ring-slate-200",
  },
  amber: {
    well: "from-amber-50 via-white to-amber-100/60",
    glow: "bg-amber-500/15",
    dot: "bg-amber-500",
    text: "text-amber-700",
    ring: "ring-amber-100",
    chip: "bg-amber-50 text-amber-700 ring-amber-200",
  },
  rose: {
    well: "from-rose-50 via-white to-rose-100/60",
    glow: "bg-rose-500/15",
    dot: "bg-rose-500",
    text: "text-rose-700",
    ring: "ring-rose-100",
    chip: "bg-rose-50 text-rose-700 ring-rose-200",
  },
  teal: {
    well: "from-teal-50 via-white to-teal-100/60",
    glow: "bg-teal-500/15",
    dot: "bg-teal-500",
    text: "text-teal-700",
    ring: "ring-teal-100",
    chip: "bg-teal-50 text-teal-700 ring-teal-200",
  },
  purple: {
    well: "from-purple-50 via-white to-purple-100/60",
    glow: "bg-purple-500/15",
    dot: "bg-purple-500",
    text: "text-purple-700",
    ring: "ring-purple-100",
    chip: "bg-purple-50 text-purple-700 ring-purple-200",
  },
  orange: {
    well: "from-orange-50 via-white to-orange-100/60",
    glow: "bg-orange-500/15",
    dot: "bg-orange-500",
    text: "text-orange-700",
    ring: "ring-orange-100",
    chip: "bg-orange-50 text-orange-700 ring-orange-200",
  },
  sky: {
    well: "from-sky-50 via-white to-sky-100/60",
    glow: "bg-sky-500/15",
    dot: "bg-sky-500",
    text: "text-sky-700",
    ring: "ring-sky-100",
    chip: "bg-sky-50 text-sky-700 ring-sky-200",
  },
  lime: {
    well: "from-lime-50 via-white to-lime-100/60",
    glow: "bg-lime-500/15",
    dot: "bg-lime-700",
    text: "text-lime-700",
    ring: "ring-lime-100",
    chip: "bg-lime-50 text-lime-700 ring-lime-200",
  },
};

function FeaturedShowcase({ s }) {
  return (
    <Link
      href={s.href}
      className="group relative mt-14 block overflow-hidden rounded-[32px] bg-slate-950 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.45)] transition-all hover:shadow-[0_40px_100px_-25px_rgba(29,78,216,0.4)]"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-blue-600/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-indigo-600/25 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
        }}
      />

      <div className="relative grid grid-cols-1 items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-16">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-blue-300 backdrop-blur">
            <Sparkles className="h-3 w-3" />
            Most Popular · {s.category}
          </div>

          <h3 className="mt-5 font-display text-[clamp(30px,3.4vw,48px)] font-extrabold leading-[1.02] tracking-[-1.5px] text-white">
            {s.title}
          </h3>
          <p className="mt-5 max-w-[480px] text-[15.5px] leading-[1.75] text-white/55">
            {s.desc}
          </p>

          {/* Stat badges */}
          <div className="mt-7 grid max-w-[460px] grid-cols-3 gap-3">
            {[
              { icon: Clock, k: "Avg. TAT", v: "2 weeks" },
              { icon: ShieldCheck, k: "Govt", v: "Approved" },
              { icon: Star, k: "Rating", v: "4.9 / 5" },
            ].map((b) => (
              <div
                key={b.k}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-3 backdrop-blur"
              >
                <b.icon className="h-3.5 w-3.5 text-blue-300" />
                <div className="mt-2 font-display text-[14.5px] font-bold text-white">
                  {b.v}
                </div>
                <div className="text-[10.5px] font-medium uppercase tracking-wider text-white/45">
                  {b.k}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {s.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11.5px] font-medium text-white/65"
              >
                <Check className="h-3 w-3 text-blue-300" strokeWidth={2.5} />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-display text-[14px] font-bold text-slate-950 transition-all group-hover:-translate-y-0.5 group-hover:bg-blue-500 group-hover:text-white">
            Apply for Passport
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-sm">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100/95 via-white to-indigo-100/95">
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              {/* Floating chip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3 shadow-md backdrop-blur">
                <div>
                  <div className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-blue-700">
                    Live Status
                  </div>
                  <div className="mt-0.5 font-display text-[12.5px] font-bold text-slate-900">
                    Avg dispatch · 14 days
                  </div>
                </div>
                <span className="flex h-2.5 w-2.5 animate-blink rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ServiceCard({ s, index, isExtra }) {
  const a = accentMap[s.accent] ?? accentMap.blue;
  return (
    <Link
      href={s.href}
      style={
        isExtra
          ? {
              animation: `service-pop 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 70}ms both`,
            }
          : undefined
      }
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_60px_-20px_rgba(15,23,42,0.18)]"
    >
      {/* Image well */}
      <div className={`relative aspect-[16/11] overflow-hidden bg-gradient-to-br ${a.well}`}>
        {/* Soft glow */}
        <div className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full ${a.glow} blur-3xl`} />

        {/* Number badge */}
        <div className="absolute left-5 top-5 inline-flex items-center gap-2">
          <span className="inline-flex h-7 items-center justify-center rounded-full bg-white px-2.5 font-display text-[11px] font-extrabold tracking-[0.1em] text-slate-700 ring-1 ring-slate-200 shadow-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${a.text} ring-1 ${a.ring} shadow-sm backdrop-blur`}>
            <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
            {s.category}
          </span>
        </div>

        {/* TAT badge */}
        {s.tat && (
          <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
            <Clock className="h-2.5 w-2.5" strokeWidth={2.5} />
            {s.tat}
          </div>
        )}

        {/* Image */}
        <img
          src={s.img}
          alt={s.title}
          className="absolute inset-0 h-full w-full object-contain p-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[2deg]"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[19px] font-bold leading-[1.2] tracking-[-0.3px] text-slate-950 transition-colors group-hover:text-blue-700">
          {s.title}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-[1.65] text-slate-500">
          {s.desc}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {s.tags.map((t) => (
            <span
              key={t}
              className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${a.chip}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
          <span className="font-display text-[12.5px] font-semibold text-slate-700 transition-colors group-hover:text-blue-700">
            Apply now
          </span>
          <span className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-700 ring-1 ring-slate-200 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white group-hover:ring-slate-950 group-hover:rotate-45`}>
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const featured = primaryServices.find((s) => s.featured);
  const restPrimary = primaryServices.filter((s) => !s.featured);
  const visibleRest = showAll ? [...restPrimary, ...moreServices] : restPrimary;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-[6%] py-24 md:py-28"
    >
      {/* Background art */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-amber-50/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <span className="h-px w-10 bg-slate-400" />
              Services Catalog
            </div>
            <h2 className="mt-6 font-display text-[clamp(34px,4.4vw,60px)] font-extrabold leading-[1] tracking-[-2px] text-slate-950">
              Every document,
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                one place.
              </span>
            </h2>
          </div>

          <div className="flex flex-col">
            <p className="text-[15.5px] leading-[1.75] text-slate-600">
              Browse our most-requested services. Each card opens to a dedicated
              page with pricing, requirements, and a fast online application.
            </p>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              {[
                { k: "Services", v: `${totalCount}+` },
                { k: "Avg TAT", v: "5 days" },
                { k: "Rating", v: "4.8★" },
              ].map((m) => (
                <div key={m.k} className="text-center">
                  <div className="font-display text-[18px] font-extrabold tracking-[-0.5px] text-slate-950">
                    {m.v}
                  </div>
                  <div className="mt-0.5 text-[10.5px] font-medium uppercase tracking-wider text-slate-500">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="group mt-5 inline-flex items-center justify-center gap-2 self-start rounded-xl bg-slate-950 px-6 py-3.5 font-display text-[13.5px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_32px_-10px_rgba(29,78,216,0.55)]"
            >
              {showAll ? "Show fewer services" : `View all ${totalCount} services`}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  showAll ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Featured spotlight */}
        {featured && <FeaturedShowcase s={featured} />}

        {/* Section label */}
        <div className="mb-8 mt-16 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-8 bg-slate-300" />
            Explore by Service
          </span>
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-[11.5px] font-medium text-slate-400">
            Showing {visibleRest.length} of {totalCount - 1}
          </span>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRest.map((s, i) => (
            <ServiceCard
              key={s.title}
              s={s}
              index={i}
              isExtra={i >= restPrimary.length}
            />
          ))}
        </div>

        {showAll && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-display text-[13.5px] font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              <ChevronDown className="h-3.5 w-3.5 rotate-180" />
              Show fewer services
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes service-pop {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
