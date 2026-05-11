import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  ArrowRight,
  User,
  FileText,
  CheckCircle2,
  Sparkles,
  Facebook,
  Instagram,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AssociatedWith from "@/components/sections/associated-with";

export const metadata = {
  title: "Contact Us — Make My Documents",
  description:
    "Get in touch with Make My Documents. Call, WhatsApp, or visit our Bangalore office for hassle-free document services. We respond within 30 minutes.",
};

const channels = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 94296 90973",
    sub: "Mon–Sat · 9 AM to 8 PM",
    href: "tel:+919429690973",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 94296 90973",
    sub: "Quickest response · 24/7",
    href: "https://wa.me/919429690973",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@makemydocuments.com",
    sub: "We reply within a few hours",
    href: "mailto:hello@makemydocuments.com",
    color: "from-violet-500 to-purple-600",
  },
];

const serviceOptions = [
  "Rental Agreement",
  "Lease Agreement",
  "Passport",
  "Pan Card",
  "Tourist Visa",
  "Insurance",
  "Affidavits / Annexure",
  "Senior Citizen Card",
  "Police Verification Certificate",
  "Police Clearance Certificate",
  "MSME Certification",
  "Other",
];

const faqs = [
  {
    q: "How quickly will I get a response?",
    a: "Most enquiries are answered within 30 minutes during business hours. WhatsApp is usually the fastest channel.",
  },
  {
    q: "Is the consultation free?",
    a: "Yes. Initial consultation, document recommendation, and a transparent quote are all free — no commitments.",
  },
  {
    q: "Do you offer doorstep service?",
    a: "Yes, we provide doorstep collection and delivery across Bangalore, plus pan-India service via courier.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden pb-12 pt-28 md:pt-36 lg:pb-16">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50"
          aria-hidden
        />
        <div
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
          aria-hidden
        />

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>
              <Sparkles className="mr-1.5 h-3 w-3" />
              We're Here to Help
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Have a question, need a custom quote, or ready to get a document
              drafted? Reach out — our team responds within 30 minutes during
              business hours.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.color}`}
                />
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} shadow-md`}
                >
                  <c.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 font-display text-lg font-bold text-foreground">
                  {c.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {c.sub}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                  Reach out <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="rounded-3xl border bg-card p-6 shadow-xl md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg">
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold">
                    Send us a message
                  </div>
                  <div className="text-xs text-muted-foreground">
                    We'll call you within 30 minutes — Mon to Sat, 9 AM to 8 PM.
                  </div>
                </div>
              </div>

              <form className="mt-6 grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="relative">
                  <FileText className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    defaultValue=""
                    className="w-full appearance-none rounded-lg border border-input bg-background py-2.5 pl-10 pr-9 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <textarea
                  placeholder="Tell us about your requirement..."
                  rows={5}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />

                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-primary/30"
                  />
                  <span>
                    I agree to be contacted via call, WhatsApp, or email
                    regarding my enquiry.
                  </span>
                </label>

                <Button
                  variant="gradient"
                  size="lg"
                  className="mt-1 w-full"
                  type="submit"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-center text-[11px] text-muted-foreground">
                  100% confidential · No spam · Free consultation
                </p>
              </form>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl gradient-bg p-6 text-white shadow-2xl shadow-primary/20 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5" />
                  Our Office Location
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                  Visit us in Bangalore
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  No 334, 2nd Main, Dattatreya Nagar,
                  <br />
                  Hosakerehalli, BSK 3rd Stage,
                  <br />
                  Bangalore – 560085, Karnataka, India
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      <Clock className="h-3 w-3" />
                      Working Hours
                    </div>
                    <div className="mt-1 text-sm font-bold">9 AM – 8 PM</div>
                    <div className="text-[11px] text-white/70">Mon to Sat</div>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      <CheckCircle2 className="h-3 w-3" />
                      CSC Approved
                    </div>
                    <div className="mt-1 text-sm font-bold">132254620016</div>
                    <div className="text-[11px] text-white/70">CSC ID</div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dattatreya+Nagar+Hosakerehalli+BSK+3rd+Stage+Bangalore+560085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "mt-5 bg-white text-primary shadow-md hover:bg-white/95"
                  )}
                >
                  Open in Google Maps
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://maps.google.com/maps?q=Dattatreya%20Nagar%20Hosakerehalli%20BSK%203rd%20Stage%20Bangalore%20560085&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Make My Documents office location"
                  />
                </div>
              </div>

              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="font-display text-base font-bold">
                  Follow us
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Stay in the loop on document tips, partner offers, and
                  updates.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#0d63d4]"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#fdc468] via-[#df4996] to-[#7638fa] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge>FAQ</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Quick answers to the questions we hear most often.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border bg-card p-5 shadow-sm transition-all open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AssociatedWith />
    </main>
  );
}
