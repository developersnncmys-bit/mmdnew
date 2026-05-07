"use client";

import { useState } from "react";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Clock,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/ui/animated-counter";

const popularDocs = [
  "Rental Agreement",
  "Lease Agreement",
  "Passport",
  "Pan Card",
  "Tourist Visa",
  "Insurance",
  "Affidavits / Annexure",
  "Senior Citizen Card",
  "Police Verification Certificate",
  "Police Clearance Certificate",
  "MSME Certification",
];

const stats = [
  { value: 100000, suffix: "+", display: "1L+", label: "Documents Drafted" },
  { value: 200, suffix: "+", label: "Document Types" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: null, display: "24/7", label: "Customer Support" },
];

export default function Hero() {
  const [query, setQuery] = useState("");

  const filtered = query
    ? popularDocs.filter((d) =>
        d.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 md:pt-36 lg:pb-24"
    >
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div
        className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="absolute -right-40 top-40 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob animation-delay-2000"
        aria-hidden
      />
      <div
        className="absolute left-1/3 bottom-10 h-64 w-64 rounded-full bg-violet-300/20 blur-3xl animate-blob animation-delay-4000"
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <Badge>
              <Sparkles className="mr-1.5 h-3 w-3" />
              India's #1* Online Documents Consultancy
            </Badge>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              We are India's
              <br />
              <span className="gradient-text">#1* Online Documents</span>
              <br />
              Consultancy.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="font-semibold text-foreground">
                Efficiently Organized, Expertly Delivered.
              </span>
              <br />
              Accurate Drafting, Fast Turnaround, Hassle-Free Execution.
            </p>

            <div className="relative mt-8 max-w-xl">
              <div className="flex items-center rounded-full border bg-card shadow-lg shadow-primary/5 transition-all focus-within:border-primary focus-within:shadow-primary/15">
                <Search className="ml-5 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search and select which documents you want to get ready!"
                  className="flex-1 bg-transparent px-3 py-3 text-sm outline-none md:py-4 md:text-base"
                />
                <Button
                  variant="gradient"
                  size="sm"
                  className="mr-1.5 shrink-0 rounded-full md:mr-2"
                >
                  <span className="hidden md:inline">Search</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {filtered.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border bg-card shadow-xl">
                  {filtered.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setQuery(d)}
                      className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm transition-colors hover:bg-primary/5"
                    >
                      <FileText className="h-4 w-4 text-primary" />
                      <span>{d}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-muted-foreground">Popular:</span>
              {popularDocs.slice(0, 4).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setQuery(d)}
                  className="rounded-full border bg-card px-3 py-1.5 font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                100% Confidential
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Same-Day Drafting
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Expert Reviewed
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-blue-400/10 to-accent/20 blur-2xl" />
            <div className="relative rounded-3xl border bg-card p-6 shadow-2xl md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-muted-foreground">
                    APPLICATION
                  </div>
                  <div className="font-display text-lg font-bold">
                    #MMD-2026-0489
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  In Progress
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { step: "Service Selected", done: true },
                  { step: "Details Submitted", done: true },
                  { step: "Documents Verified", done: true },
                  { step: "Processing", done: false, active: true },
                  { step: "Ready & Delivered", done: false },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        s.done
                          ? "bg-primary text-white"
                          : s.active
                          ? "gradient-bg text-white animate-pulse"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s.done ? "✓" : i + 1}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`text-sm font-medium ${
                          s.done || s.active
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {s.step}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-primary/5 p-4">
                <div className="text-xs text-muted-foreground">
                  Estimated completion
                </div>
                <div className="mt-1 font-display text-xl font-bold text-primary">
                  Fast turnaround
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border bg-card p-4 shadow-xl md:flex animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Verified</div>
                  <div className="text-sm font-semibold">CSC Approved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border bg-card/50 p-6 backdrop-blur-sm md:grid-cols-4 md:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold gradient-text md:text-4xl">
                {s.value != null && !s.display ? (
                  <AnimatedCounter value={s.value} suffix={s.suffix ?? ""} />
                ) : (
                  s.display ?? s.value
                )}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
