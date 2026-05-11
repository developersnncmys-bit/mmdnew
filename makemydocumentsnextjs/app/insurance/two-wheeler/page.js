import {
  Bike,
  Wallet,
  ScanLine,
  Headset,
  Download,
  FileText,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import InsuranceSubPage from "@/components/sections/insurance-sub-page";

export const metadata = {
  title: "Two-Wheeler Insurance Online — Bike Insurance | Make My Documents",
  description:
    "Buy or renew two-wheeler insurance online. Compare top insurers, get instant quotes, and download your bike e-policy in minutes. Comprehensive, third-party, and multi-year plans.",
};

const config = {
  breadcrumb: "Two-Wheeler",
  faqTopicName: "two-wheeler insurance",
  quoteForm: {
    vehicleNoun: "bike",
    vehicleNounTitle: "Bike",
    gradient: "from-blue-600 to-indigo-700",
    accentBg: "bg-blue-600",
    accentBgHover: "hover:bg-blue-700",
    accentText: "text-blue-700",
    cardBgActive: "bg-blue-50",
    cardBorderActive: "border-blue-500",
  },
  theme: {
    accentText: "text-blue-700",
    chipBg: "bg-blue-50",
    chipText: "text-blue-700",
    gradient: "from-blue-600 to-indigo-700",
    heroBg: "bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-50",
    heroBlob1: "bg-blue-300/30",
    heroBlob2: "bg-indigo-300/30",
    heroBadgeText: "text-blue-800",
    heroBadge2Text: "text-indigo-800",
    heroBtnBg: "bg-blue-700",
    heroBtnHover: "hover:bg-blue-800",
    heroGlow: "bg-gradient-to-br from-blue-300/30 to-indigo-300/30",
    heroIconBg: "from-blue-600 via-blue-700 to-indigo-800",
    starText: "text-blue-500",
    underline: "bg-blue-400/60",
    docIconBg: "bg-blue-100",
    hoverBorder: "hover:border-blue-300",
    darkSectionBg: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900",
    darkAccent: "text-blue-400",
    darkBlob1: "bg-blue-500/20",
    darkBlob2: "bg-indigo-500/20",
    hoverDarkBorder: "hover:border-blue-400/40",
    faqOpenBorder: "open:border-blue-400",
  },
  hero: {
    icon: Bike,
    badge1: "Mandatory in India",
    badge2: "Compare in Minutes",
    titleA: "Protect Your",
    titleB: "Two-Wheeler",
    titleC: "with Ease",
    subtitle:
      "Insurance applications made simple and stress-free. Compare quotes from top insurers, buy or renew online in minutes, and ride worry-free.",
    chips: [
      { icon: ShieldCheck, color: "text-blue-700", text: "Comprehensive cover" },
      { icon: Sparkles, color: "text-indigo-600", text: "Cashless garages" },
      { icon: Bike, color: "text-blue-700", text: "Ride protected" },
    ],
  },
  about: {
    eyebrow: "Simple & Stress-Free",
    titleA: "Protect Your Two-Wheeler with",
    titleB: "Ease",
    paragraphs: [
      "Owning a two-wheeler gives you the freedom to ride anywhere, anytime. But with that freedom comes responsibility — keeping your bike legally protected and financially secure. Two-wheeler insurance isn't just a legal requirement in India; it's your safety net against accidents, theft, damages, and third-party liabilities.",
      "We make two-wheeler insurance applications simple, fast, and hassle-free. With our 100% online service, you can compare policies, get instant quotes, and download your policy — all from the comfort of your home.",
    ],
  },
  benefits: {
    eyebrow: "Why Buy Online",
    titleA: "Why buy bike insurance",
    titleB: "online",
    intro:
      "Buying online with Make My Documents comes with several real benefits.",
    items: [
      {
        icon: ScanLine,
        title: "Instant Comparison",
        text: "View multiple policy options at once and pick the one that fits your budget and needs in minutes — not hours of phone calls or office visits.",
      },
      {
        icon: Wallet,
        title: "Best Premium Rates",
        text: "Save money with competitive quotes from leading insurers.",
      },
      {
        icon: FileText,
        title: "Paperless Process",
        text: "No physical visits, no long forms — entirely digital.",
      },
      {
        icon: Headset,
        title: "24/7 Support",
        text: "We're always available to guide you through the process.",
      },
      {
        icon: Download,
        title: "Instant Policy Download",
        text: "Ride worry-free without waiting for documents to arrive.",
      },
    ],
  },
  documents: {
    intro:
      "That's it — with these simple documents, our team will help you secure the right policy without confusion or delays.",
    items: [
      {
        icon: FileText,
        title: "Registration Copy (RC)",
        sub: "Of your two-wheeler",
      },
      {
        icon: FileText,
        title: "Old Policy Details",
        sub: "Only if you are renewing an existing policy",
      },
    ],
  },
  types: {
    eyebrow: "Types of Two-Wheeler Insurance",
    titleA: "Know your",
    titleB: "options",
    intro:
      "When choosing an insurance plan, it's important to know which option fits you best.",
    items: [
      {
        title: "Third-Party Liability",
        text: "Mandatory by law. Covers damages caused to another person, vehicle, or property — but not your own bike.",
      },
      {
        title: "Comprehensive",
        text: "Complete coverage including damage to your own two-wheeler, theft, fire, natural calamities, and third-party liabilities.",
      },
      {
        title: "Multi-Year Insurance",
        text: "Save time and money by buying coverage for multiple years in one go — no annual renewal hassle.",
      },
    ],
  },
  whyUs: {
    items: [
      "Transparent pricing with no hidden charges",
      "Fast and 100% online process",
      "Wide range of insurers to compare",
      "Expert guidance at every step",
      "Hassle-free claim support when needed",
      "Same-day e-policy delivery on email and WhatsApp",
    ],
  },
  faqs: [
    {
      q: "How many types of two-wheeler insurance are available in India?",
      a: "Three main types — Third-Party Liability (mandatory), Comprehensive (which adds own-damage cover), and Multi-Year Insurance (1-3 year cover bought together for savings).",
    },
    {
      q: "What is the difference between comprehensive and third-party bike insurance?",
      a: "Third-party covers damages you cause to others. Comprehensive covers that plus damage to your own bike from accidents, theft, fire, and natural calamities. Comprehensive costs more but offers significantly higher protection.",
    },
    {
      q: "What is IDV in bike insurance?",
      a: "Insured Declared Value (IDV) is the maximum amount your insurer will pay if your bike is stolen or totally damaged. It's based on your bike's current market value, age, and depreciation.",
    },
    {
      q: "What is not covered under two-wheeler insurance?",
      a: "Common exclusions: regular wear and tear, mechanical breakdown, riding without a valid licence, riding under the influence, consequential damage, and damage when the bike is used outside its declared purpose (e.g., racing).",
    },
    {
      q: "What is Multi-Year Two-Wheeler Insurance?",
      a: "A long-term policy that covers your bike for 2 or 3 years upfront. It locks in the premium, prevents accidental lapses, and is often cheaper than buying yearly policies.",
    },
    {
      q: "What happens if my two-wheeler insurance policy expires?",
      a: "Riding without insurance is illegal and can result in fines or jail time. If your policy lapses for over 90 days, the insurer may need to inspect the bike before reissuing the cover. We help you arrange the inspection and process a Break-In policy quickly.",
    },
    {
      q: "How can I make a bike insurance claim online?",
      a: "Inform the insurer immediately, share photos of damage, file an FIR if there is theft or third-party damage, and submit your policy and ID copies. Our claims team supports you through the entire process until settlement.",
    },
    {
      q: "Is it better to buy two-wheeler insurance online or offline?",
      a: "Online is usually faster, cheaper, and gives you direct access to multiple insurer quotes. Offline only makes sense if you specifically need an in-person walkthrough — most riders prefer the convenience and savings of online buying.",
    },
    {
      q: "What documents are required for making a successful claim?",
      a: "Typically: policy copy, FIR (for theft/third-party), driver's licence, RC, photos of damage, repair estimates, and a duly filled claim form. We share the full checklist when a claim is initiated.",
    },
    {
      q: "What would happen if the policy is not renewed on time?",
      a: "You lose continuity benefits like No-Claim Bonus (NCB), and beyond 90 days the insurer may insist on a fresh inspection. Renewing on time avoids price hikes and keeps you legally compliant.",
    },
  ],
};

export default function TwoWheelerInsurancePage() {
  return <InsuranceSubPage config={config} />;
}
