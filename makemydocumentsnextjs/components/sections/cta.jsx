import { ArrowRight, MessageCircle, User, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-10 shadow-2xl md:p-16">
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Need a document? Click it. Get it.
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
                Tell us what you need — rental agreement, affidavit, legal
                notice, NDA. We'll draft, review, and deliver it within 24
                hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-white text-primary shadow-md hover:bg-white/90 hover:-translate-y-0.5"
                >
                  Start My Document <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <form className="rounded-2xl bg-white p-6 shadow-xl md:p-7">
              <div className="font-display text-lg font-bold">
                Quick Enquiry
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                We'll call you within 30 minutes — Mon to Sat, 9 AM to 8 PM.
              </div>

              <div className="mt-5 space-y-3">
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="relative">
                  <FileText className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    defaultValue=""
                    className="w-full appearance-none rounded-lg border border-input bg-background pl-10 pr-9 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                  placeholder="Tell us a bit about your requirement (optional)"
                  rows={3}
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
                  className="w-full"
                  type="submit"
                  size="lg"
                >
                  Request Callback
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-center text-[11px] text-muted-foreground">
                  100% confidential · No spam · Free consultation
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
