import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  Quote,
  Zap,
  ShieldCheck,
  Eye,
  Truck,
  Sparkles,
  MapPin,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/cta";

const themeMap = {
  amber: {
    heroBg:
      "bg-gradient-to-br from-amber-50 via-amber-50/60 to-orange-50",
    heroBlob1: "bg-amber-300/30",
    heroBlob2: "bg-orange-300/30",
    accentText: "text-amber-600",
    accentBg: "bg-amber-500",
    accentBgHover: "hover:bg-amber-600",
    chipBg: "bg-amber-100",
    chipText: "text-amber-800",
    sectionAccent: "from-amber-500 to-orange-500",
    underline: "bg-amber-400",
    iconBg: "bg-amber-100",
    iconText: "text-amber-700",
    number: "text-amber-500",
  },
  emerald: {
    heroBg:
      "bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-teal-50",
    heroBlob1: "bg-emerald-300/30",
    heroBlob2: "bg-teal-300/30",
    accentText: "text-emerald-600",
    accentBg: "bg-emerald-500",
    accentBgHover: "hover:bg-emerald-600",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-800",
    sectionAccent: "from-emerald-500 to-teal-500",
    underline: "bg-emerald-400",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-700",
    number: "text-emerald-500",
  },
};

const featureIcons = {
  Convenience: Zap,
  Speed: Clock,
  "Legal Accuracy": ShieldCheck,
  Transparency: Eye,
  "Doorstep Delivery": Truck,
  "Long Tenure": TrendingUp,
  Registration: Award,
};

function Breadcrumb({ label, theme }) {
  const t = themeMap[theme];
  return (
    <section className="border-b bg-white pb-3 pt-24 md:pt-28">
      <div className="container">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex items-center gap-1.5 text-muted-foreground">
            <li>
              <Link
                href="/"
                className={`font-medium ${t.accentText} hover:underline`}
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="font-medium text-foreground">{label}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

function Hero({ content, theme }) {
  const t = themeMap[theme];
  return (
    <section className="relative overflow-hidden">
      <div className={`absolute inset-0 ${t.heroBg}`} aria-hidden />
      <div
        className={`absolute -left-24 top-10 h-72 w-72 rounded-full ${t.heroBlob1} blur-3xl`}
        aria-hidden
      />
      <div
        className={`absolute -right-32 bottom-0 h-80 w-80 rounded-full ${t.heroBlob2} blur-3xl`}
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <span
              className={`inline-flex items-center gap-2 rounded-full ${t.chipBg} px-3 py-1 text-xs font-bold uppercase tracking-wider ${t.chipText}`}
            >
              <Sparkles className="h-3 w-3" />
              {content.eyebrow}
            </span>

            <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-slate-900 md:text-6xl lg:text-[4.5rem]">
              {content.title.line1}
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">{content.title.line2}</span>
                <span
                  className={`absolute inset-x-0 bottom-1 -z-0 h-3 ${t.underline} opacity-50 md:bottom-2 md:h-4`}
                  aria-hidden
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              {content.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                variant="gradient"
                size="lg"
                className="rounded-full px-7"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href="#charges"
                className="text-sm font-semibold text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                See pricing →
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm">
              <div className="flex -space-x-2">
                {["P", "A", "R", "S"].map((c, i) => (
                  <div
                    key={i}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white ${
                      ["bg-violet-500", "bg-blue-500", "bg-emerald-500", "bg-amber-500"][i]
                    }`}
                  >
                    {c}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-700">
                <span className="font-bold text-slate-900">99%</span> on-time delivery
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={content.hero.image}
              alt={content.hero.alt}
              className="relative z-10 h-auto w-full max-w-xl select-none drop-shadow-2xl animate-float"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar({ stats, theme }) {
  const t = themeMap[theme];
  return (
    <section className="border-y bg-white">
      <div className="container">
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center px-4 py-6 text-center md:py-8"
            >
              <div
                className={`font-display text-3xl font-extrabold ${t.number} md:text-4xl`}
              >
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ steps, theme }) {
  const t = themeMap[theme];
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Process
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            How It <span className={t.accentText}>Works</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div
            className={`absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-gradient-to-r ${t.sectionAccent} opacity-30 lg:block`}
            aria-hidden
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.sectionAccent} font-display text-base font-extrabold text-white shadow-lg`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                {s.text && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ pricing, theme }) {
  const t = themeMap[theme];
  const total = pricing.items.reduce((sum, x) => sum + x.amount, 0);

  return (
    <section id="charges" className="bg-white py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Charges
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            Transparent <span className={t.accentText}>pricing</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            What you see is what you pay — no hidden fees.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-card shadow-xl">
            <div
              className={`flex items-center justify-between bg-gradient-to-r ${t.sectionAccent} px-7 py-5 text-white`}
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
                  Estimate
                </div>
                <div className="font-display text-lg font-bold">
                  {pricing.title}
                </div>
              </div>
              <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                #MMD-INV
              </div>
            </div>

            <div className="divide-y divide-dashed">
              {pricing.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-7 py-4"
                >
                  <div>
                    <div className="font-display text-base font-semibold">
                      {item.label}
                    </div>
                    {item.sub && (
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {item.sub}
                      </div>
                    )}
                  </div>
                  <div className="font-display text-lg font-bold">
                    ₹ {item.amount}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 px-7 py-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Total
                </div>
                <div className={`font-display text-3xl font-extrabold ${t.accentText}`}>
                  ₹ {total}
                </div>
              </div>
              <div className="mt-3 rounded-xl bg-amber-50 px-4 py-2.5 text-xs font-medium text-amber-900">
                <span className="font-bold">Note:</span> {pricing.note}
              </div>
              <Button
                variant="gradient"
                size="lg"
                className="mt-5 w-full rounded-xl"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features({ features, eyebrow, title, theme }) {
  const t = themeMap[theme];
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            {title} <span className={t.accentText}>online?</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = featureIcons[f.label] || CheckCircle2;
            return (
              <div
                key={f.label}
                className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${t.iconBg} ${t.iconText} transition-all group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {f.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutContent({ about, theme }) {
  const t = themeMap[theme];
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {about.map((section, i) => (
            <article key={section.heading} className={i > 0 ? "mt-14" : ""}>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-1 rounded-full ${t.accentBg}`} />
                <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                  {section.heading}
                </h2>
              </div>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground md:text-[17px]">
                {section.paragraphs?.map((p, j) => (
                  <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              {section.list && (
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-lg bg-slate-50 px-4 py-2.5 text-sm font-medium"
                    >
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${t.accentText}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.callout && (
                <div className={`mt-5 rounded-2xl border-l-4 ${t.accentBg.replace("bg-", "border-")} bg-slate-50 px-5 py-4 text-sm italic leading-relaxed text-slate-700`}>
                  {section.callout}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews({ reviews }) {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            What our <span className="gradient-text">clients say</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote className="absolute right-4 top-4 h-7 w-7 text-primary/10" />
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                "{r.text}"
              </p>
              <div className="mt-5 flex items-center gap-3 border-t pt-4">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold text-white ${
                    [
                      "bg-violet-500",
                      "bg-emerald-500",
                      "bg-blue-500",
                      "bg-amber-500",
                    ][i % 4]
                  }`}
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
  );
}

function FAQ({ faqs, theme }) {
  const t = themeMap[theme];
  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  const renderItem = (f) => (
    <details
      key={f.q}
      className={`group rounded-xl border bg-card px-5 py-4 transition-all open:shadow-md hover:border-slate-300 ${t.accentBg.replace("bg-", "open:border-")}`}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <span className="font-display text-sm font-semibold leading-snug text-foreground md:text-base">
          {f.q}
        </span>
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${t.iconBg} ${t.iconText} transition-transform group-open:rotate-180`}>
          <svg
            className="h-3.5 w-3.5"
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
  );

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Got Questions?
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
            Frequently asked{" "}
            <span className={t.accentText}>questions</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know — in one place.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-3 md:grid-cols-2 md:gap-4">
          <div className="space-y-3 md:space-y-4">{left.map(renderItem)}</div>
          <div className="space-y-3 md:space-y-4">{right.map(renderItem)}</div>
        </div>
      </div>
    </section>
  );
}

export default function AgreementPage({ content }) {
  const theme = content.theme || "amber";
  return (
    <main>
      <Breadcrumb label={content.breadcrumb} theme={theme} />
      <Hero content={content} theme={theme} />
      <StatsBar stats={content.stats} theme={theme} />
      <HowItWorks steps={content.howItWorks} theme={theme} />
      <Pricing pricing={content.pricing} theme={theme} />
      <Features
        features={content.features}
        eyebrow={content.featuresEyebrow}
        title={content.featuresTitle}
        theme={theme}
      />
      <AboutContent about={content.about} theme={theme} />
      <Reviews reviews={content.reviews} />
      <FAQ faqs={content.faqs} theme={theme} />
      <CTA />
    </main>
  );
}
