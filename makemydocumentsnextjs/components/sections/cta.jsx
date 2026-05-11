import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, Sparkles, ShieldCheck, Clock } from "lucide-react";

const trust = [
  { icon: ShieldCheck, label: "CSC Approved" },
  { icon: Clock, label: "Fast Turnaround" },
  { icon: Sparkles, label: "1L+ Customers" },
];

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 px-[6%] py-20">
      <div className="relative mx-auto max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[36px] bg-slate-950 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.6)]">
          {/* Background art */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-32 h-[460px] w-[460px] rounded-full bg-blue-600/35 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-600/25 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
              }}
            />
          </div>

          <div className="relative grid grid-cols-1 items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:p-16">
            {/* LEFT — copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300 backdrop-blur">
                <Sparkles className="h-3 w-3" />
                Let's Get Started
              </div>

              <h2 className="mt-5 font-display text-[clamp(28px,3.6vw,48px)] font-extrabold leading-[1.05] tracking-[-1px] text-white">
                Ready to Get Your
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                    Documents Sorted?
                  </span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-2 -skew-x-6 bg-blue-500/30" />
                </span>
              </h2>
              <p className="mt-4 max-w-[540px] text-[15.5px] leading-[1.75] text-white/55">
                Talk to our team today. We'll guide you through the entire process —
                from requirements to doorstep delivery.
              </p>

              {/* Trust pills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {trust.map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-semibold text-white/70"
                  >
                    <t.icon className="h-3.5 w-3.5 text-blue-300" />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — action card */}
            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-blue-600/30 blur-md" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                {/* Illustration accent */}
                <div className="absolute -right-6 -top-6 h-32 w-32 opacity-30">
                  <img
                    src="/illustrations/cta-callback.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="relative">
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-blue-300">
                    Talk to a specialist
                  </div>
                  <div className="mt-1 font-display text-[22px] font-extrabold leading-tight tracking-[-0.5px] text-white">
                    Free Consultation
                    <br />
                    in 60 Seconds
                  </div>
                </div>

                <div className="relative mt-6 space-y-2.5">
                  <Link
                    href="tel:+919429690973"
                    className="group flex items-center justify-between rounded-2xl bg-blue-600 px-5 py-4 transition-all hover:bg-blue-500 hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.55)]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                        <Phone className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-white/70">
                          Call Now
                        </span>
                        <span className="block font-display text-[15px] font-bold text-white">
                          +91 9429 690 973
                        </span>
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="https://wa.me/919429690973"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 transition-all hover:border-emerald-400/40 hover:bg-emerald-500/[0.08]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                        <MessageCircle className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-white/55">
                          Chat on WhatsApp
                        </span>
                        <span className="block font-display text-[14px] font-bold text-white">
                          Reply within 5 minutes
                        </span>
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-emerald-300" />
                  </Link>
                </div>

                <div className="relative mt-5 flex items-center gap-2 text-[11.5px] text-white/50">
                  <span className="flex h-2 w-2 animate-blink rounded-full bg-emerald-400" />
                  Available now · Mon–Sat · 9 AM to 8 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
