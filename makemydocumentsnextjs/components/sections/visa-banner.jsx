import Link from "next/link";
import { Plane, ArrowRight, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function VisaBanner() {
  return (
    <section id="visa" className="py-16 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 shadow-2xl shadow-blue-500/20">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />

          <div
            className="absolute right-10 top-6 hidden text-white/20 md:block"
            aria-hidden
          >
            <Plane className="h-12 w-12 -rotate-12" strokeWidth={1.5} />
          </div>
          <div
            className="absolute bottom-8 left-12 hidden text-white/20 md:block"
            aria-hidden
          >
            <MapPin className="h-10 w-10" strokeWidth={1.5} />
          </div>

          <div className="relative grid items-center gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:p-12 lg:p-16">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <Plane className="h-3.5 w-3.5" />
                Visa Assistance
              </div>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Ready for your next destination?
              </h2>
              <p className="mt-3 font-display text-lg font-semibold text-white/95 md:text-xl">
                Leave the visa paperwork to us!
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  href="/tourist-visa"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-white text-blue-600 shadow-lg shadow-blue-900/20 hover:bg-white/95 hover:-translate-y-0.5"
                  )}
                >
                  Click Here <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tourist-visa"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  See Eligible Countries
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm" />
              <div className="relative flex items-center justify-center p-4">
                <img
                  src="/illustrations/visa-passport.svg"
                  alt="Passport with visa stamp and boarding pass"
                  className="h-auto w-full max-w-sm select-none drop-shadow-2xl animate-float"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative grid grid-cols-2 gap-2 px-3 pb-4">
                {[
                  { label: "Tourist", value: "180+ countries" },
                  { label: "Avg. TAT", value: "5–7 days" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl bg-white/15 px-3 py-2 backdrop-blur-sm"
                  >
                    <div className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                      {c.label}
                    </div>
                    <div className="font-display text-sm font-bold text-white">
                      {c.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
