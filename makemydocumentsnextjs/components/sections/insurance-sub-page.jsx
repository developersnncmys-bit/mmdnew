import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquareQuote,
  GitCompareArrows,
  Wallet,
  Download,
  Sparkles,
} from "lucide-react";
import CTA from "@/components/sections/cta";
import QuoteModal from "@/components/sections/insurance-quote-modal";

const defaultSteps = [
  { icon: Send, title: "Register Online", text: "Enter your basic details on our website." },
  { icon: MessageSquareQuote, title: "Get Quotation", text: "Receive instant quotes via email or WhatsApp." },
  { icon: GitCompareArrows, title: "Compare Policies", text: "Pick the plan that fits your budget and needs." },
  { icon: Wallet, title: "Make Payment", text: "Pay securely online through our trusted gateway." },
  { icon: Download, title: "Download Policy", text: "Get your e-policy instantly — no waiting." },
];

export default function InsuranceSubPage({ config, extraSections = null }) {
  const t = config.theme;
  const HeroIcon = config.hero.icon;
  const steps = config.steps || defaultSteps;

  return (
    <main>
      <section className="border-b bg-white pb-3 pt-24 md:pt-28">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
              <li>
                <Link href="/" className={`font-medium ${t.accentText} hover:underline`}>
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link href="/insurance" className={`font-medium ${t.accentText} hover:underline`}>
                  Insurance
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground">{config.breadcrumb}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${t.heroBg}`} aria-hidden />
        <div className={`absolute -left-32 top-10 h-96 w-96 rounded-full ${t.heroBlob1} blur-3xl`} aria-hidden />
        <div className={`absolute -right-32 bottom-10 h-96 w-96 rounded-full ${t.heroBlob2} blur-3xl`} aria-hidden />

        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider ${t.heroBadgeText} backdrop-blur-sm`}>
                  <ShieldCheck className="h-3 w-3" />
                  {config.hero.badge1}
                </span>
                <span className={`inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-wider ${t.heroBadge2Text} backdrop-blur-sm`}>
                  <Sparkles className="h-3 w-3" />
                  {config.hero.badge2}
                </span>
              </div>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {config.hero.titleA}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">{config.hero.titleB}</span>
                  <span className={`absolute inset-x-0 bottom-1 -z-0 h-3 ${t.underline} md:bottom-2 md:h-4`} aria-hidden />
                </span>{" "}
                {config.hero.titleC}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                {config.hero.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                {config.quoteForm ? (
                  <QuoteModal
                    config={config.quoteForm}
                    triggerClassName={`inline-flex items-center gap-2 rounded-md ${t.heroBtnBg} px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 ${t.heroBtnHover} hover:shadow-xl`}
                  />
                ) : config.getQuotesHref ? (
                  <Link
                    href={config.getQuotesHref}
                    className={`inline-flex items-center gap-2 rounded-md ${t.heroBtnBg} px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 ${t.heroBtnHover} hover:shadow-xl`}
                  >
                    Get Quotes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 rounded-md ${t.heroBtnBg} px-6 py-3 font-display text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 ${t.heroBtnHover} hover:shadow-xl`}
                  >
                    Get Quotes
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
                <Link
                  href="/insurance"
                  className="text-sm font-bold text-slate-800 underline-offset-4 hover:underline"
                >
                  Other insurance types →
                </Link>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 shadow-md">
                <Star className={`h-4 w-4 fill-current ${t.starText}`} />
                <span className="font-display text-sm font-bold text-slate-900">
                  Top insurers · Instant comparison
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Clock className={`h-3.5 w-3.5 ${t.accentText}`} />
                  <span className="text-xs font-bold text-slate-800">Policy in minutes</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm">
                  <Download className={`h-3.5 w-3.5 ${t.accentText}`} />
                  <span className="text-xs font-bold text-slate-800">Instant e-policy</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className={`absolute inset-0 -z-10 rounded-[3rem] ${t.heroGlow} blur-2xl`} aria-hidden />

              {config.hero.chips?.map((c, i) => {
                const Icon = c.icon;
                const positionClasses = [
                  "absolute -left-3 top-12 -rotate-6",
                  "absolute -right-3 top-32 rotate-6",
                  "absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-0",
                ];
                return (
                  <div
                    key={c.text}
                    className={`${positionClasses[i]} z-20 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${c.color}`} />
                      <span className="text-xs font-bold text-slate-800">{c.text}</span>
                    </div>
                  </div>
                );
              })}

              <div className="relative w-full max-w-md">
                <div className={`relative aspect-square w-full rounded-[3rem] bg-gradient-to-br ${t.heroIconBg} p-12 shadow-2xl`}>
                  <div className="absolute inset-6 rounded-[2.5rem] border-2 border-dashed border-white/30" aria-hidden />
                  <div className="flex h-full w-full items-center justify-center">
                    <HeroIcon className="h-44 w-44 text-white drop-shadow-2xl md:h-48 md:w-48" strokeWidth={1.25} />
                  </div>
                  <div className="absolute right-6 top-6 rounded-full bg-white/20 p-2 backdrop-blur-sm">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.accentText}`}>
              {config.about.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              {config.about.titleA}{" "}
              <span className={t.accentText}>{config.about.titleB}</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground md:text-lg">
              {config.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.accentText}`}>
              {config.benefits.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              {config.benefits.titleA}{" "}
              <span className={t.accentText}>{config.benefits.titleB}</span>
            </h2>
            {config.benefits.intro && (
              <p className="mt-4 text-muted-foreground">{config.benefits.intro}</p>
            )}
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {config.benefits.items.map((b, i) => {
              const Icon = b.icon;
              return (
                <article
                  key={b.title}
                  className={`group rounded-3xl border-2 border-slate-200 bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 ${t.hoverBorder} hover:shadow-2xl ${
                    i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${t.gradient} shadow-lg transition-transform group-hover:scale-110 ${
                        i === 0 ? "h-16 w-16" : "h-14 w-14"
                      }`}
                    >
                      <Icon
                        className={`text-white ${i === 0 ? "h-8 w-8" : "h-7 w-7"}`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className={`rounded-full ${t.chipBg} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${t.chipText}`}>
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
              );
            })}
          </div>
        </div>
      </section>

      <section className={`relative overflow-hidden ${t.darkSectionBg} py-20 text-white md:py-24`}>
        <div className={`absolute -left-20 top-10 h-72 w-72 rounded-full ${t.darkBlob1} blur-3xl`} aria-hidden />
        <div className={`absolute -right-20 bottom-10 h-80 w-80 rounded-full ${t.darkBlob2} blur-3xl`} aria-hidden />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.darkAccent}`}>
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              5 simple steps to your{" "}
              <span className={t.darkAccent}>policy</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 ${t.hoverDarkBorder} hover:bg-white/10`}
                >
                  <div className="absolute -right-3 -top-3 font-display text-7xl font-black text-white/[0.05]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <div className={`mt-4 text-[10px] font-bold uppercase tracking-wider ${t.darkAccent}`}>
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.accentText}`}>
              Get Ready
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Documents{" "}
              <span className={t.accentText}>required</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              {config.documents.intro || "Have these handy before you start."}
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {config.documents.items.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className={`flex items-start gap-4 rounded-2xl border-2 border-slate-200 bg-card p-5 transition-all ${t.hoverBorder} hover:shadow-md`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${t.docIconBg} ${t.accentText}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold leading-tight">{d.title}</div>
                    {d.sub && (
                      <div className="mt-1 text-xs text-muted-foreground">{d.sub}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {config.types && config.types.items.length > 0 && (
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.accentText}`}>
                {config.types.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                {config.types.titleA}{" "}
                <span className={t.accentText}>{config.types.titleB}</span>
              </h2>
              <p className="mt-4 text-muted-foreground">{config.types.intro}</p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
              {config.types.items.map((t2, i) => (
                <article
                  key={t2.title}
                  className="group overflow-hidden rounded-3xl border-2 border-slate-200 bg-card p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} shadow-md`}>
                    <span className="font-display text-base font-black text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-tight">
                    {t2.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t2.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {config.whyUs && config.whyUs.items.length > 0 && (
        <section className="bg-white py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.accentText}`}>
                Why Make My Documents
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
                Why thousands{" "}
                <span className={t.accentText}>trust us</span>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2">
              {config.whyUs.items.map((w) => (
                <div
                  key={w}
                  className={`flex items-start gap-3 rounded-2xl border bg-card p-5 ${t.hoverBorder}`}
                >
                  <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${t.accentText}`} />
                  <span className="text-sm font-medium text-foreground md:text-base">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {extraSections}

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.accentText}`}>
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
              Frequently asked{" "}
              <span className={t.accentText}>questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Need help? Contact us for any queries related to {config.faqTopicName}.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {config.faqs.map((f) => (
              <details
                key={f.q}
                className={`group rounded-xl border-2 border-slate-200 bg-card px-5 py-4 transition-all ${t.faqOpenBorder} open:shadow-md`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${t.docIconBg} ${t.accentText} transition-transform group-open:rotate-180`}>
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
