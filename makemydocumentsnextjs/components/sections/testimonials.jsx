import { Star, Quote } from "lucide-react";

const reviews = [
  {
    initial: "R",
    name: "Ravi Kumar",
    service: "Passport Service",
    text: "They were incredibly quick in booking my passport slot and helped me through every step. My passport arrived within 2 weeks — absolutely brilliant service.",
    accent: "from-blue-500 to-indigo-600",
    bg: "bg-blue-600",
  },
  {
    initial: "P",
    name: "Priya Nair",
    service: "Passport Renewal",
    text: "Very grateful to the team who resolved my passport issue with simple, clear steps. Received my passport well within the promised timeframe. Highly recommend.",
    accent: "from-amber-500 to-orange-600",
    bg: "bg-amber-500",
  },
  {
    initial: "A",
    name: "Anil Sharma",
    service: "PAN Card",
    text: "Efficient, professional and friendly staff who guided me patiently through the entire process. Highly recommend for PAN card and any other document services.",
    accent: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white px-[6%] py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mb-14 grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Client Reviews
            </div>
            <h2 className="mt-4 font-display text-[clamp(28px,3.4vw,46px)] font-extrabold leading-[1.05] tracking-[-1px] text-slate-900">
              What Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Customers Say</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-2 -skew-x-6 bg-amber-200/80" />
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-slate-500">
              Verified reviews from real customers on our Google Business profile.
            </p>
          </div>

          {/* Aggregate rating card */}
          <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm">
            <div>
              <div className="flex gap-0.5 text-amber-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-0.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                Google Verified
              </div>
            </div>
            <div className="h-9 w-px bg-slate-200" />
            <div>
              <div className="font-display text-[24px] font-extrabold leading-none tracking-[-0.5px] text-slate-900">
                4.8
              </div>
              <div className="mt-1 text-[10.5px] font-medium text-slate-500">
                1L+ reviews
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={r.name}
              className="group relative"
              style={{ marginTop: idx === 1 ? "0" : idx === 0 ? "0px" : "0px" }}
            >
              {/* Backplate */}
              <div
                className={`absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-gradient-to-br ${r.accent} opacity-15 transition-all group-hover:translate-x-3 group-hover:translate-y-3 group-hover:opacity-25`}
              />

              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_48px_-18px_rgba(15,23,42,0.25)]">
                {/* Decorative quote */}
                <Quote
                  className="pointer-events-none absolute -top-2 right-4 h-24 w-24 text-slate-100"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    Verified
                  </span>
                </div>

                <p className="relative mt-5 flex-1 text-[14.5px] leading-[1.75] text-slate-700">
                  "{r.text}"
                </p>

                {/* Divider */}
                <div className="relative mt-6 flex items-center gap-3 border-t border-dashed border-slate-200 pt-5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${r.bg} font-display text-[16px] font-bold text-white shadow-md ring-4 ring-white`}
                  >
                    {r.initial}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-[14px] font-bold text-slate-900">
                      {r.name}
                    </div>
                    <div className="mt-0.5 text-[12px] font-medium text-blue-600">
                      {r.service}
                    </div>
                  </div>
                  <span className="inline-flex h-7 items-center gap-1 rounded-md bg-slate-50 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Google
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
