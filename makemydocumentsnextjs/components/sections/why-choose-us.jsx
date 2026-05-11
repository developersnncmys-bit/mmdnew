import { Target, Zap, MessageCircle, Home, MapPin, Building2 } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Expert Guidance, Every Time",
    desc: "Our team knows the exact requirements for every document type. No guesswork — no rejected applications.",
    accent: "bg-blue-600",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "We process documents in the shortest time possible without compromising accuracy or quality.",
    accent: "bg-amber-500",
  },
  {
    icon: MessageCircle,
    title: "Transparent Pricing",
    desc: "No hidden charges. Clear pricing before we begin. What we quote is exactly what you pay.",
    accent: "bg-emerald-500",
  },
  {
    icon: Home,
    title: "Doorstep Delivery",
    desc: "We collect and deliver documents to your home or office. Zero unnecessary trips for you.",
    accent: "bg-rose-500",
  },
];

const offices = [
  {
    city: "Hosakerehalli",
    addr: "344, 2nd Main Rd, Manjunath Nagar, Bangalore 560085",
  },
  {
    city: "Banashankari",
    addr: "3rd Stage, Near Dattatreya Temple, Bangalore",
  },
  {
    city: "JP Nagar",
    addr: "Bangalore South, Karnataka 560078",
  },
  {
    city: "Online",
    addr: "WhatsApp & digital submission available anytime",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-[6%] py-24">
      {/* Top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-50/80 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Why Choose Us
            </div>
            <h2 className="mt-4 font-display text-[clamp(28px,3.4vw,46px)] font-extrabold leading-[1.05] tracking-[-1px] text-slate-900">
              Bangalore's Most Trusted{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Document Partner</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-2 -skew-x-6 bg-amber-200/80" />
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.75] text-slate-500 lg:text-right">
            Founded in 2013. Built on expertise, transparency and a genuine
            commitment to every customer we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* LEFT — Trust visual + features */}
          <div>
            <div className="relative mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-amber-50/60 p-6">
              <div className="grid grid-cols-[1fr_auto] items-center gap-5">
                <div>
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-blue-700">
                    Since 2013 · CSC Approved
                  </div>
                  <div className="mt-2 font-display text-[22px] font-extrabold leading-[1.2] tracking-[-0.5px] text-slate-900">
                    100,000+ documents
                    <br />
                    delivered with care.
                  </div>
                </div>
                <img
                  src="/illustrations/trust-team.svg"
                  alt="Team at Make My Documents"
                  className="h-32 w-32 shrink-0 object-contain sm:h-40 sm:w-40"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="space-y-3">
              {points.map((p, i) => (
                <div
                  key={p.title}
                  className="group relative flex gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-5 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_14px_36px_-14px_rgba(15,23,42,0.18)]"
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 ${p.accent} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition-colors group-hover:bg-blue-600">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-[10px] font-bold tracking-[0.16em] text-slate-400">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <div className="mt-1 font-display text-[15px] font-bold text-slate-900">
                      {p.title}
                    </div>
                    <p className="mt-1 text-[13px] leading-[1.65] text-slate-500">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Offices map card */}
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px] bg-blue-100/60" />
            <div className="relative overflow-hidden rounded-[32px] bg-slate-950 shadow-[0_30px_70px_-20px_rgba(15,23,42,0.45)]">
              {/* Map-style backdrop */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

              <div className="relative px-7 pb-6 pt-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                      <Building2 className="h-3 w-3" />
                      Our Offices
                    </div>
                    <h3 className="mt-3 font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.5px] text-white">
                      Serving Bangalore
                      <br />
                      Since 2013
                    </h3>
                    <div className="mt-2 text-[12.5px] text-white/45">
                      3 offices · WhatsApp & online available
                    </div>
                  </div>
                  <div className="rounded-2xl bg-blue-600 px-4 py-3 text-center shadow-[0_12px_30px_-8px_rgba(37,99,235,0.55)]">
                    <div className="font-display text-[26px] font-extrabold leading-none tracking-[-0.5px] text-white">
                      1L+
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/75">
                      Customers
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-7 h-px bg-white/[0.08]" />

              <div className="relative grid grid-cols-1 gap-3 px-7 py-6 sm:grid-cols-2">
                {offices.map((o, i) => (
                  <div
                    key={o.city}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 transition-colors hover:border-white/15 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20">
                        <MapPin className="h-3.5 w-3.5" />
                      </span>
                      <div className="font-display text-[13px] font-bold text-white">
                        {o.city}
                      </div>
                      <span className="ml-auto font-display text-[10px] font-bold tracking-[0.14em] text-white/30">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="mt-2 text-[11.5px] leading-[1.55] text-white/45">
                      {o.addr}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer trust strip */}
              <div className="relative mx-7 mb-7 mt-1 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="flex -space-x-2">
                  {["bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-950 ${bg} font-display text-[10px] font-bold text-white`}
                      >
                        {["R", "P", "A", "S"][i]}
                      </div>
                    )
                  )}
                </div>
                <div className="text-right">
                  <div className="font-display text-[11.5px] font-bold text-white">
                    Trusted by 1 Lakh+ customers
                  </div>
                  <div className="text-[10.5px] text-white/45">
                    4.8★ on Google · Verified reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
