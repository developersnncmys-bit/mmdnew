import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Tenant · Pune",
    avatar: "PS",
    rating: 5,
    text: "Got my rental agreement drafted in under 4 hours, complete with the right stamp duty clauses. Saved me a trip to the lawyer and three days of back-and-forth.",
  },
  {
    name: "Rahul Mehta",
    role: "Founder · Bangalore",
    avatar: "RM",
    rating: 5,
    text: "We used Make My Documents for our founders' agreement and NDA templates. Clean drafting, fast revisions, and the consultant actually understood our cap-table.",
  },
  {
    name: "Aisha Khan",
    role: "Freelancer · Delhi",
    avatar: "AK",
    rating: 5,
    text: "I needed an affidavit and a name-change declaration urgently. The form was simple, the draft was perfect, and pricing was clear from the first click.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <ScrollReveal animation="fade-up" className="mx-auto max-w-2xl text-center">
          <Badge>Testimonials</Badge>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Loved by Clients <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Don't just take our word for it — here's what our clients have to
            say about us.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              animation={
                i === 0 ? "slide-left" : i === 2 ? "slide-right" : "fade-up"
              }
              delay={i * 120}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                  aria-hidden
                />
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10 transition-all duration-500 group-hover:scale-125 group-hover:text-primary/30" />

                <div className="relative flex gap-0.5 text-yellow-500">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-current transition-transform group-hover:scale-110"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    />
                  ))}
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  "{t.text}"
                </p>

                <div className="relative mt-6 flex items-center gap-3 border-t pt-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-bg font-display text-sm font-bold text-white shadow-md transition-transform group-hover:scale-110">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
