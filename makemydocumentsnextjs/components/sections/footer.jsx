import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "app/public/logo.jpeg";

const footerLinks = {
  "About Company": [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/#blogs" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

const socials = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
    className: "bg-[#1877F2] text-white hover:bg-[#0d63d4]",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    className:
      "bg-gradient-to-br from-[#fdc468] via-[#df4996] to-[#7638fa] text-white hover:opacity-90",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Make My Documents — Home"
            >
              <Image
                src={logo}
                alt="Make My Documents"
                width={240}
                height={70}
                className="h-12 w-auto md:h-14"
              />
            </Link>

            <div className="mt-6 rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-foreground">
                    Our Office Location
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    No 334, 2nd Main, Dattatreya Nagar,
                    <br />
                    Hosakerehalli, BSK 3rd Stage,
                    <br />
                    Bangalore – 560085
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <a
                href="tel:+919429690973"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 94296 90973</span>
              </a>
              <a
                href="mailto:hello@makemydocuments.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@makemydocuments.com</span>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Follow Us
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition-all hover:-translate-y-0.5 ${s.className}`}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Stay updated with our latest services, document tips, and
              partner offers.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()} Make My Documents™. All rights
            reserved.
          </div>
          <div className="text-xs">
            CSC Approved · CSC ID:{" "}
            <span className="font-semibold text-foreground">132254620016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
