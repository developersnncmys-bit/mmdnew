import {
  GraduationCap,
  Zap,
  Layers,
  BadgeCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    text: "Our team consists of experienced professionals who are well-versed in the intricacies of document processing. We guide you through every step so the application process runs smoothly.",
  },
  {
    icon: Zap,
    title: "Efficiency at its Best",
    text: "Time is valuable, and we understand that. Expect prompt, efficient service — we work diligently to expedite your documents and save you time and effort.",
  },
  {
    icon: Layers,
    title: "Comprehensive Services",
    text: "Whether it's PAN cards, passports, visas, or any other essential document — we've got you covered. All your document-related needs, under one roof.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Approach",
    text: "Your satisfaction is our priority. We tailor our services to meet your specific needs, and our friendly support team is always ready to assist you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-secondary/30 py-20 md:py-28"
    >
      <div
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Why Choose Us</Badge>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="gradient-text">Make My Documents?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by individuals and businesses across India for fast,
            accurate, and government-approved document services.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="relative order-2 overflow-hidden rounded-3xl gradient-bg p-8 shadow-2xl shadow-primary/20 md:p-10 lg:order-1 lg:sticky lg:top-28">
            <div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <BadgeCheck className="h-3.5 w-3.5" />
                Government Approved
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                CSC Approved
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                Make My Documents is registered and approved by the{" "}
                <span className="font-semibold text-white">
                  Common Service Center (CSC)
                </span>{" "}
                – e-Governance Services India Limited, Government of India.
              </p>

              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                <div className="text-xs font-medium uppercase tracking-wider text-white/70">
                  Our CSC ID
                </div>
                <div className="mt-1 font-display text-xl font-extrabold tracking-wider text-white md:text-2xl">
                  132254620016
                </div>
                <div className="mt-2 text-xs text-white/70">
                  Verifiable trust — your documents are in safe hands.
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-white text-primary shadow-md hover:bg-white/95 hover:-translate-y-0.5"
                >
                  Verify Our Registration
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 grid gap-5 lg:order-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:gradient-bg group-hover:text-white">
                    <r.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold md:text-xl">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                      {r.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border bg-card/60 p-8 text-center backdrop-blur-sm md:p-10">
          <p className="mx-auto max-w-3xl font-display text-lg font-medium leading-relaxed text-foreground md:text-xl">
            Choose{" "}
            <span className="gradient-text font-bold">Make My Documents</span>{" "}
            for a hassle-free and efficient experience in obtaining your
            essential documents.{" "}
            <span className="text-muted-foreground">
              Let us be your trusted partner on your journey to a document-ready
              future.
            </span>
          </p>
          <div className="mt-6 flex justify-center">
            <Button variant="gradient" size="lg">
              Start Your Application
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
