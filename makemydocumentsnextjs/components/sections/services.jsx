import {
  Umbrella,
  Plane,
  Home,
  KeyRound,
  FileSignature,
  CreditCard,
  BookUser,
  UserCheck,
  ShieldCheck,
  Award,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

const services = [
  { icon: Umbrella, title: "Insurance", color: "from-violet-500 to-purple-600" },
  { icon: Plane, title: "Tourist Visa", color: "from-amber-500 to-orange-600" },
  {
    icon: Home,
    title: "Rental Agreement",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: KeyRound,
    title: "Lease Agreement",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FileSignature,
    title: "Affidavits / Annexure",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: CreditCard,
    title: "Pan Card",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: BookUser,
    title: "Passport",
    color: "from-cyan-500 to-sky-600",
  },
  {
    icon: UserCheck,
    title: "Senior Citizen Card",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Police Verification Certificate",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: Award,
    title: "MSME Certification",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    icon: ClipboardCheck,
    title: "Police Clearance Certificate",
    color: "from-pink-500 to-rose-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary/30 py-20 md:py-28">
      <div className="container">
        <ScrollReveal animation="fade-up" className="mx-auto max-w-2xl text-center">
          <Badge>Our Services</Badge>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Every Document You Need,
            <br />
            <span className="gradient-text">All in One Place</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick a service, share your details, and we'll handle the drafting,
            verification, and delivery — start to finish.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-6">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.title}
              animation="scale-in"
              delay={i * 60}
              duration={500}
            >
              <a
                href="#contact"
                className="group flex flex-col items-center text-center"
              >
                <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/10">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 md:h-20 md:w-20`}
                  >
                    <s.icon className="h-8 w-8 text-white md:h-10 md:w-10" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="mt-4 font-display text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-base">
                  {s.title}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={150} className="mt-12 flex justify-center">
          <Button variant="gradient" size="lg">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
