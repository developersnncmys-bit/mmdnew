import { MessageSquare, FileText, Cog, PackageCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Tell Us What You Need",
    desc: "Call, WhatsApp or fill our form. We advise the best approach for your document instantly.",
    img: "/illustrations/process-search.svg",
    accent: "from-blue-500 to-indigo-600",
    chip: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    num: "02",
    icon: FileText,
    title: "Submit Documents",
    desc: "We tell you exactly what's required. Upload digitally or visit our Bangalore office.",
    img: "/illustrations/process-assist.svg",
    accent: "from-emerald-500 to-teal-600",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    num: "03",
    icon: Cog,
    title: "We Process Everything",
    desc: "Our team handles applications, follows up with authorities and keeps you updated at every stage.",
    img: "/illustrations/hero-stamp.svg",
    accent: "from-amber-500 to-orange-600",
    chip: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    num: "04",
    icon: PackageCheck,
    title: "Delivered to Your Door",
    desc: "Sit back. Your completed document reaches your doorstep. No extra trips needed.",
    img: "/illustrations/process-deliver.svg",
    accent: "from-rose-500 to-pink-600",
    chip: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-950 px-[6%] py-24">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Simple Process
          </div>
          <h2 className="mt-4 font-display text-[clamp(28px,3vw,46px)] font-extrabold leading-[1.05] tracking-[-1px] text-white">
            Done in <span className="text-blue-400">4 Steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[15.5px] leading-[1.7] text-white/55">
            No queues. No stress. A clear, guided path from your first message
            to document in hand.
          </p>
        </div>

        {/* Connecting dashed path on lg */}
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[110px] hidden h-2 w-3/4 lg:block"
            viewBox="0 0 800 8"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="4"
              x2="800"
              y2="4"
              stroke="rgba(96,165,250,0.4)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="group relative"
              style={{ marginTop: idx % 2 === 0 ? "0" : "32px" }}
            >
              {/* Step card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07]">
                {/* Number badge */}
                <div
                  className={`absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} font-display text-[20px] font-extrabold text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)]`}
                >
                  {s.num}
                </div>

                {/* Image */}
                <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/[0.06]">
                  <img
                    src={s.img}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Icon chip */}
                <div
                  className={`mt-5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${s.chip}`}
                >
                  <s.icon className="h-3 w-3" strokeWidth={2.25} />
                  Step {s.num}
                </div>

                <h3 className="mt-3 font-display text-[16px] font-bold leading-[1.25] text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-white/55">
                  {s.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="mt-4 hidden items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-blue-300/70 lg:flex">
                    Next
                    <ArrowRight className="h-3 w-3" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
