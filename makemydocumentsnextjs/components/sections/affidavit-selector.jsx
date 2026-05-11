"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileEdit,
  Baby,
  Heart,
  Users,
  PenLine,
  Stamp,
} from "lucide-react";

const affidavitTypes = [
  {
    id: "annexure-e",
    icon: FileEdit,
    short: "Annexure E",
    title: "Name Change Affidavit",
    sub: "(Annexure E)",
    color: "from-blue-500 to-indigo-600",
    chipBg: "bg-blue-50",
    chipText: "text-blue-700",
    iconText: "text-blue-700",
    image: "/illustrations/services/affidavit.svg",
    description:
      "Officially update your name on IDs, passports, banks, and government records.",
    useCases: [
      "Fix spelling errors in your name",
      "Update Aadhaar, PAN, or passport",
      "Legal proof of a name change",
    ],
  },
  {
    id: "minor",
    icon: Baby,
    short: "Minor",
    title: "Name Change Affidavit",
    sub: "for Minor",
    color: "from-pink-500 to-rose-500",
    chipBg: "bg-pink-50",
    chipText: "text-pink-700",
    iconText: "text-pink-700",
    image: "/illustrations/hero-documents.svg",
    description:
      "Change a child's name on school, government, and ID records — signed by parents.",
    useCases: [
      "Update school or college records",
      "Change birth certificate, Aadhaar, PAN",
      "Required for passport applications",
    ],
  },
  {
    id: "marriage",
    icon: Heart,
    short: "Marriage",
    title: "Name Change Affidavit",
    sub: "after Marriage",
    color: "from-rose-500 to-fuchsia-500",
    chipBg: "bg-rose-50",
    chipText: "text-rose-700",
    iconText: "text-rose-700",
    image: "/illustrations/hero-stamp.svg",
    description:
      "Update your name on passports, banks, and IDs after marriage.",
    useCases: [
      "Change last name or full name",
      "Update bank, Aadhaar, passport",
      "Proof for visa and immigration",
    ],
  },
  {
    id: "same-person",
    icon: Users,
    short: "Same Person",
    title: "One and the Same",
    sub: "Person Affidavit",
    color: "from-violet-500 to-purple-600",
    chipBg: "bg-violet-50",
    chipText: "text-violet-700",
    iconText: "text-violet-700",
    image: "/illustrations/trust-team.svg",
    description:
      "Declare that different name spellings across documents refer to the same person.",
    useCases: [
      "Fix name mismatches in documents",
      "Resolve spelling differences in IDs",
      "Proof in legal or financial checks",
    ],
  },
  {
    id: "signature",
    icon: PenLine,
    short: "Signature",
    title: "Change of",
    sub: "Signature Affidavit",
    color: "from-amber-500 to-orange-500",
    chipBg: "bg-amber-50",
    chipText: "text-amber-700",
    iconText: "text-amber-700",
    image: "/illustrations/cta-callback.svg",
    description:
      "Officially update your signature for banking, property, and government records.",
    useCases: [
      "Change signature on bank accounts",
      "Update government records",
      "Use in legal or court matters",
    ],
  },
];

export default function AffidavitSelector() {
  const [selectedId, setSelectedId] = useState(affidavitTypes[0].id);
  const selected =
    affidavitTypes.find((t) => t.id === selectedId) || affidavitTypes[0];
  const SelectedIcon = selected.icon;

  return (
    <section id="types" className="bg-white py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
            Choose Your Type
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            Pick the affidavit{" "}
            <span className="text-amber-600">you need</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Select a type to see its details.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <label
            htmlFor="affidavit-type"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground md:hidden"
          >
            Affidavit type
          </label>
          <select
            id="affidavit-type"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-display text-base font-semibold text-foreground shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 md:hidden"
          >
            {affidavitTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title} {t.sub}
              </option>
            ))}
          </select>

          <div
            role="tablist"
            aria-label="Affidavit type"
            className="hidden flex-wrap justify-center gap-2 md:flex"
          >
            {affidavitTypes.map((t) => {
              const isActive = t.id === selectedId;
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setSelectedId(t.id)}
                  className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold transition-all ${
                    isActive
                      ? `border-transparent bg-gradient-to-r ${t.color} text-white shadow-md`
                      : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:text-amber-700"
                  }`}
                >
                  <t.icon className="h-4 w-4" strokeWidth={2} />
                  {t.short}
                </button>
              );
            })}
          </div>

          <article
            key={selected.id}
            className="mt-8 overflow-hidden rounded-3xl border-2 border-slate-200 bg-card shadow-sm"
          >
            <div className={`h-2 bg-gradient-to-r ${selected.color}`} />

            <div className="grid gap-0 md:grid-cols-[1fr_minmax(0,260px)]">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${selected.color} shadow-md`}
                  >
                    <SelectedIcon
                      className="h-7 w-7 text-white"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="flex-1">
                    <span
                      className={`inline-block rounded-full ${selected.chipBg} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${selected.chipText}`}
                    >
                      {selected.short}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold leading-tight md:text-2xl">
                      {selected.title}{" "}
                      <span className="text-muted-foreground">
                        {selected.sub}
                      </span>
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground md:text-base">
                  {selected.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {selected.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${selected.iconText}`}
                      />
                      <span className="text-foreground">{u}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${selected.color} px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  Apply for this affidavit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div
                className={`relative flex items-center justify-center bg-gradient-to-br ${selected.color} p-6 md:p-8`}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                <img
                  src={selected.image}
                  alt={`${selected.title} ${selected.sub}`}
                  className="relative h-40 w-auto max-w-full select-none drop-shadow-xl md:h-48"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </article>

          <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg md:p-7">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="relative grid items-center gap-5 md:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 backdrop-blur-sm">
                  <Stamp
                    className="h-6 w-6 text-amber-400"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight md:text-xl">
                    Need a different affidavit?
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">
                    We draft custom affidavits for any legal use case — talk to
                    our experts.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
              >
                Talk to Expert
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
