import {
  FileSignature,
  Search,
  Lock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export const metadata = {
  title: "About Us — Make My Documents",
  description:
    "Welcome to Make My Documents — your trusted partner for hassle-free document solutions. Learn about our mission, services, and CSC government approval.",
};

const documentsCovered = [
  "PAN Cards",
  "Passports",
  "Travel Visas",
  "Senior Citizen Cards",
  "Police Clearance Certificates (PCC)",
  "Police Verification Certificates (PVC)",
  "Insurance — Bike, Car, Health & Life",
  "Rental & Lease Agreements",
];

const highlights = [
  {
    icon: Sparkles,
    title: "Hassle-Free Process",
    text: "We simplify every step so you never have to deal with the paperwork maze.",
  },
  {
    icon: Lock,
    title: "Reliable & Secure",
    text: "Government-approved partner with end-to-end confidentiality on your data.",
  },
  {
    icon: CheckCircle2,
    title: "All-in-One Solution",
    text: "From PAN to PCC — every essential document handled under one trusted roof.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-16 pt-28 md:pt-36 lg:pb-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="animate-fade-up">
              <Badge>
                <Sparkles className="mr-1.5 h-3 w-3" />
                Our Story
              </Badge>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                About <span className="gradient-text">Us</span>
              </h1>

              <p className="mt-6 max-w-2xl font-display text-lg font-semibold leading-relaxed text-foreground md:text-xl">
                Welcome to Make My Documents — Your Trusted Partner for
                Hassle-Free Document Solutions!
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="gradient" size="lg">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Talk to an Expert
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-amber-300/30 via-orange-200/30 to-yellow-200/30 blur-2xl" />
              <div className="relative rounded-3xl border bg-card p-8 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg shadow-md">
                    <FileSignature className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Verified
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold">
                  Documents we handle
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {documentsCovered.slice(0, 6).map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl bg-primary/5 p-4 text-xs text-muted-foreground">
                  And many more — search for your document on the homepage to
                  get started.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <Badge>Who We Are</Badge>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                Simplifying paperwork, one document at a time.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  At <span className="font-semibold text-foreground">Make My Documents</span>, we
                  understand the challenges and complexities that often come
                  with obtaining essential documents like{" "}
                  <span className="font-medium text-foreground">PAN cards</span>
                  ,{" "}
                  <span className="font-medium text-foreground">passports</span>
                  ,{" "}
                  <span className="font-medium text-foreground">travel visas</span>
                  ,{" "}
                  <span className="font-medium text-foreground">senior citizen cards</span>
                  ,{" "}
                  <span className="font-medium text-foreground">
                    police clearance certificates (PCC)
                  </span>
                  ,{" "}
                  <span className="font-medium text-foreground">
                    police verification certificates (PVC)
                  </span>
                  , and various{" "}
                  <span className="font-medium text-foreground">
                    insurance policies
                  </span>{" "}
                  — including those for bikes, cars, health, and life.
                </p>

                <p>
                  We also assist in securing{" "}
                  <span className="font-medium text-foreground">
                    rental agreements
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-foreground">
                    lease agreements
                  </span>
                  . That's why we are here — to simplify the process for you.
                </p>

                <p>
                  As a dedicated document solutions company, we take pride in
                  being your{" "}
                  <span className="font-semibold text-foreground">
                    reliable and efficient partner
                  </span>{" "}
                  on your journey to acquiring crucial documents — without the
                  stress, queues, or guesswork.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border bg-secondary/30 p-6 md:p-8">
              <h3 className="font-display text-lg font-bold">
                What we cover
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                A comprehensive range of services for individuals and
                businesses.
              </p>

              <ul className="mt-5 grid gap-2.5">
                {documentsCovered.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2.5 rounded-xl border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm"
                  >
                    <Search className="h-4 w-4 shrink-0 text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:gradient-bg group-hover:text-white">
                  <h.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h4 className="mt-4 font-display text-lg font-bold">
                  {h.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
