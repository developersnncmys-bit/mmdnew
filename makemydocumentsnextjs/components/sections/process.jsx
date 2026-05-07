import { Search, Headphones, PackageCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Select",
    description:
      "Search and select which document you want to get ready — pick from 200+ document types.",
  },
  {
    icon: Headphones,
    step: "02",
    title: "End-to-End Assistance",
    description:
      "Get end-to-end assistance and complete guidance from our experts to get your document ready.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Delivered to Your Doorstep",
    description:
      "Your document gets ready and delivered to your doorstep — sit back and relax.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-300/20 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        <ScrollReveal animation="fade-up" className="mx-auto max-w-3xl text-center">
          <Badge>How It Works</Badge>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Make My Documents is{" "}
            <span className="gradient-text">
              the smartest way to get your documents
            </span>{" "}
            done.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three simple steps. Zero paperwork stress. Real human guidance from
            start to finish.
          </p>
        </ScrollReveal>

        <div className="relative mt-20">
          <svg
            className="absolute left-0 right-0 top-12 hidden h-24 w-full lg:block"
            viewBox="0 0 1200 100"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 100 50 Q 350 -10 600 50 T 1100 50"
              stroke="url(#processGradient)"
              strokeWidth="2"
              strokeDasharray="6 8"
              fill="none"
            />
            <defs>
              <linearGradient
                id="processGradient"
                x1="0"
                y1="0"
                x2="1200"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid gap-10 md:gap-8 lg:grid-cols-3">
            {steps.map((s, i) => (
              <ScrollReveal
                key={s.step}
                animation="fade-up"
                delay={i * 150}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full gradient-bg opacity-20 blur-2xl transition-opacity group-hover:opacity-50" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full gradient-bg shadow-xl shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/40">
                    <s.icon
                      className="h-12 w-12 text-white transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-card font-display text-sm font-bold text-primary shadow-md transition-transform group-hover:scale-110">
                    {s.step}
                  </div>
                </div>

                <h3 className="mt-7 font-display text-xl font-bold md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
