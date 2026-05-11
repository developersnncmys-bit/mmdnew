import {
  Truck,
  ShieldCheck,
  Scale,
  Users,
  Briefcase,
  Sparkles,
  FileText,
  IdCard,
  Building2,
  Award,
} from "lucide-react";
import InsuranceSubPage from "@/components/sections/insurance-sub-page";

export const metadata = {
  title:
    "Commercial Vehicle Insurance Online — Truck, Taxi, Bus | Make My Documents",
  description:
    "Buy or renew commercial vehicle insurance online. Goods carrying, passenger carrying, and special vehicle plans. Compare top insurers, instant quotes, paperless renewals.",
};

const config = {
  breadcrumb: "Commercial Vehicle",
  faqTopicName: "commercial vehicle insurance",
  theme: {
    accentText: "text-slate-700",
    chipBg: "bg-slate-100",
    chipText: "text-slate-700",
    gradient: "from-slate-600 to-slate-800",
    heroBg: "bg-gradient-to-br from-slate-100 via-zinc-50 to-amber-50",
    heroBlob1: "bg-slate-400/30",
    heroBlob2: "bg-amber-300/30",
    heroBadgeText: "text-slate-800",
    heroBadge2Text: "text-amber-800",
    heroBtnBg: "bg-slate-800",
    heroBtnHover: "hover:bg-slate-900",
    heroGlow: "bg-gradient-to-br from-slate-400/30 to-amber-300/30",
    heroIconBg: "from-slate-700 via-slate-800 to-slate-900",
    starText: "text-amber-500",
    underline: "bg-amber-400/60",
    docIconBg: "bg-slate-100",
    hoverBorder: "hover:border-slate-400",
    darkSectionBg: "bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900",
    darkAccent: "text-amber-400",
    darkBlob1: "bg-slate-500/20",
    darkBlob2: "bg-amber-500/20",
    hoverDarkBorder: "hover:border-amber-400/40",
    faqOpenBorder: "open:border-slate-500",
  },
  hero: {
    icon: Truck,
    badge1: "Mandatory in India",
    badge2: "Fleet & Single Vehicle",
    titleA: "Protect Your",
    titleB: "Commercial Vehicle",
    titleC: "with Ease",
    subtitle:
      "Trucks, vans, taxis, buses, delivery vehicles — the lifeline of your business. Insure them with simple, stress-free, 100% online applications.",
    chips: [
      { icon: ShieldCheck, color: "text-slate-700", text: "Business covered" },
      { icon: Briefcase, color: "text-amber-600", text: "Fleet-friendly" },
      { icon: Award, color: "text-slate-700", text: "Top insurers" },
    ],
  },
  about: {
    eyebrow: "Simple & Stress-Free",
    titleA: "Why commercial vehicle insurance is",
    titleB: "essential",
    paragraphs: [
      "Running a business often means relying on commercial vehicles — trucks, vans, taxis, buses, or delivery vehicles. They are not just assets; they are the lifeline of your operations. Protecting them with the right insurance keeps your business running smoothly even when accidents, damages, or liabilities occur.",
      "Unlike private car or bike insurance, commercial vehicle insurance is legally mandatory in India for all vehicles used for business. Beyond compliance, it offers financial protection for accidents, theft, and damage to your business assets.",
    ],
  },
  benefits: {
    eyebrow: "Why It Matters",
    titleA: "Why you should never skip",
    titleB: "this cover",
    intro: "Five reasons commercial vehicle insurance is non-negotiable.",
    items: [
      {
        icon: Scale,
        title: "Legal Compliance",
        text: "Avoid fines and penalties by keeping your insurance valid. Operating without cover can attract hefty fines, vehicle seizure, and even cancellation of permits — risks no business owner can afford. Our renewal reminders make sure you never lapse.",
      },
      {
        icon: ShieldCheck,
        title: "Third-Party Liability",
        text: "Protects you against claims from people, vehicles, or property damaged by your vehicle.",
      },
      {
        icon: Sparkles,
        title: "Own Damage Cover",
        text: "Financial assistance for repairs or replacement if your vehicle is damaged.",
      },
      {
        icon: Briefcase,
        title: "Business Continuity",
        text: "Timely claim settlements so disruptions don't stall your operations.",
      },
      {
        icon: Users,
        title: "Employee & Goods Safety",
        text: "Many policies cover injuries to drivers, passengers, or goods carried.",
      },
    ],
  },
  documents: {
    intro: "To apply or renew, you'll need:",
    items: [
      { icon: FileText, title: "Registration Certificate (RC)", sub: "Of the commercial vehicle" },
      { icon: FileText, title: "Old Policy Details", sub: "Only if it's a renewal" },
      { icon: IdCard, title: "Owner ID Proof", sub: "Aadhaar, PAN, or Driving Licence" },
      { icon: Building2, title: "Business Details", sub: "For company-owned vehicles" },
    ],
  },
  types: {
    eyebrow: "Types of Coverage",
    titleA: "Types of commercial vehicle",
    titleB: "insurance",
    intro:
      "Pick the type that matches your vehicle and business operation.",
    items: [
      {
        title: "Goods Carrying Vehicle",
        text: "For trucks, lorries, and delivery vans transporting goods.",
      },
      {
        title: "Passenger Carrying Vehicle",
        text: "For taxis, buses, and ride-share vehicles carrying passengers.",
      },
      {
        title: "Special Vehicle Insurance",
        text: "For construction, agricultural, and utility vehicles like tractors, cranes, and excavators.",
      },
    ],
  },
  whyUs: {
    items: [
      "100% online — apply, compare, and get your policy without stepping out",
      "Quick & transparent — no hidden costs, instant quotes, clear terms",
      "Wide network of insurers to compare",
      "Affordable premiums with the best coverage",
      "Claim assistance — we guide you through stress-free settlements",
      "Hassle-free renewals with expiry reminders",
    ],
  },
  faqs: [
    {
      q: "What is commercial vehicle insurance?",
      a: "A specialized motor insurance product that covers vehicles used for business purposes — trucks, taxis, buses, vans, and other commercial transport. It includes third-party liability, own-damage cover, and operator-specific add-ons.",
    },
    {
      q: "Who needs commercial vehicle insurance?",
      a: "Any business or individual operating a vehicle for commercial use — fleet owners, transport operators, taxi drivers, logistics companies, and ride-share partners. Even a single goods van or taxi needs it.",
    },
    {
      q: "What is the difference between private and commercial vehicle insurance?",
      a: "Private insurance covers personal-use vehicles. Commercial insurance covers vehicles used for business — like ferrying goods or passengers — and includes additional protections for legal liability, employee injuries, and goods carried.",
    },
    {
      q: "What types of vehicles are covered under commercial vehicle insurance?",
      a: "Trucks, vans, lorries, taxis, buses, ride-share vehicles, tractors, cranes, excavators, ambulances, school buses, and other utility / construction vehicles can all be insured.",
    },
    {
      q: "What is covered under commercial vehicle insurance?",
      a: "Third-party liability, own-damage cover, theft, fire, natural calamities, riots, and accidental damage. Optional add-ons include passenger cover, goods-in-transit cover, and roadside assistance.",
    },
    {
      q: "What documents are required for commercial vehicle insurance renewal?",
      a: "RC, the existing policy, owner's ID proof (Aadhaar/PAN), and updated business details for company-owned vehicles. Photographs of the vehicle may be required for older vehicles or lapsed policies.",
    },
    {
      q: "What happens if my commercial vehicle insurance expires?",
      a: "Operating an uninsured commercial vehicle can result in fines, vehicle seizure, and permit cancellation. If lapsed beyond 90 days, the insurer typically requires a fresh inspection before renewal.",
    },
    {
      q: "Can I buy commercial vehicle insurance online?",
      a: "Yes. The entire process — quote, comparison, payment, and policy download — is online. Our team also assists fleet owners in bulk renewals and bulk claims with dedicated relationship support.",
    },
    {
      q: "What does commercial vehicle insurance typically cover?",
      a: "Damage to your vehicle, third-party injury or property damage, theft, fire, natural disasters, vandalism, and accident-related liabilities. Many policies also cover passenger and driver injury costs.",
    },
    {
      q: "Is commercial vehicle insurance mandatory in India?",
      a: "Yes — third-party liability cover is mandatory under the Motor Vehicles Act for any vehicle used for commercial purposes. Comprehensive cover is optional but strongly recommended for asset protection.",
    },
  ],
};

export default function CommercialVehicleInsurancePage() {
  return <InsuranceSubPage config={config} />;
}
