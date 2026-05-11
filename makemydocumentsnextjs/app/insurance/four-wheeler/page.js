import {
  Car,
  ShieldCheck,
  Wallet,
  Sparkles,
  FileText,
  IdCard,
  PencilLine,
  Lock,
  Award,
} from "lucide-react";
import InsuranceSubPage from "@/components/sections/insurance-sub-page";

export const metadata = {
  title: "Four-Wheeler Insurance Online — Car Insurance | Make My Documents",
  description:
    "Buy or renew car insurance online. Compare top insurers, instant quotes, comprehensive and third-party plans, cashless garage network, and instant e-policy download.",
};

const config = {
  breadcrumb: "Four-Wheeler",
  faqTopicName: "four-wheeler insurance",
  quoteForm: {
    vehicleNoun: "car",
    vehicleNounTitle: "Car",
    gradient: "from-amber-500 to-orange-600",
    accentBg: "bg-amber-600",
    accentBgHover: "hover:bg-amber-700",
    accentText: "text-amber-700",
    cardBgActive: "bg-amber-50",
    cardBorderActive: "border-amber-500",
  },
  theme: {
    accentText: "text-amber-700",
    chipBg: "bg-amber-50",
    chipText: "text-amber-700",
    gradient: "from-amber-500 to-orange-600",
    heroBg: "bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50",
    heroBlob1: "bg-amber-300/40",
    heroBlob2: "bg-orange-300/30",
    heroBadgeText: "text-amber-800",
    heroBadge2Text: "text-orange-800",
    heroBtnBg: "bg-amber-600",
    heroBtnHover: "hover:bg-amber-700",
    heroGlow: "bg-gradient-to-br from-amber-300/30 to-orange-300/30",
    heroIconBg: "from-amber-500 via-orange-500 to-orange-700",
    starText: "text-amber-500",
    underline: "bg-amber-400/60",
    docIconBg: "bg-amber-100",
    hoverBorder: "hover:border-amber-300",
    darkSectionBg: "bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900",
    darkAccent: "text-amber-400",
    darkBlob1: "bg-amber-500/20",
    darkBlob2: "bg-orange-500/20",
    hoverDarkBorder: "hover:border-amber-400/40",
    faqOpenBorder: "open:border-amber-400",
  },
  hero: {
    icon: Car,
    badge1: "Mandatory in India",
    badge2: "Instant E-Policy",
    titleA: "Protect Your",
    titleB: "Four-Wheeler",
    titleC: "with Ease",
    subtitle:
      "Owning a car is more than convenience — it's a responsibility. We make protecting your four-wheeler simple, fast, and stress-free, from documents to compliance.",
    chips: [
      { icon: ShieldCheck, color: "text-amber-700", text: "Compliance covered" },
      { icon: Sparkles, color: "text-orange-600", text: "Cashless garages" },
      { icon: Award, color: "text-amber-700", text: "Top insurers" },
    ],
  },
  about: {
    eyebrow: "Smart Car Protection",
    titleA: "Why protecting your",
    titleB: "car matters",
    paragraphs: [
      "Your car is a valuable asset, and protecting it brings peace of mind. With the right documents and services, you stay legally compliant on the road, get insurance support for accidents and theft, avoid penalties for missing papers, and ensure smooth resale or transfer of ownership.",
      "We assist you in preparing, verifying, and managing all essential four-wheeler documents — from RC and Insurance Papers to PUC, Loan/Lease Agreement, and Driving Licence.",
    ],
  },
  benefits: {
    eyebrow: "Why Insure",
    titleA: "What car insurance",
    titleB: "covers you against",
    intro:
      "Comprehensive car insurance protects you across multiple risks — not just accidents.",
    items: [
      {
        icon: ShieldCheck,
        title: "Accident & Damage Cover",
        text: "Comprehensive policies cover repair or replacement for damage caused by accidents, fire, floods, or theft. You stay financially protected even when life takes an unexpected turn — and the cashless garage network keeps repairs hassle-free.",
      },
      {
        icon: Lock,
        title: "Theft Protection",
        text: "Full payout up to your IDV if the car is stolen and not recovered.",
      },
      {
        icon: PencilLine,
        title: "Third-Party Liability",
        text: "Legally mandatory cover against damage your car causes to others.",
      },
      {
        icon: Sparkles,
        title: "Add-on Riders",
        text: "Zero depreciation, engine protection, roadside assistance, and more.",
      },
      {
        icon: Wallet,
        title: "Tax & Resale Benefits",
        text: "Insured cars resell at higher prices and qualify for finance more easily.",
      },
    ],
  },
  documents: {
    intro: "Documents we help you prepare, verify, and manage:",
    items: [
      { icon: FileText, title: "Vehicle Registration Certificate (RC)", sub: "Original or photocopy" },
      { icon: FileText, title: "Insurance Papers", sub: "Existing policy if renewing" },
      { icon: FileText, title: "Pollution Under Control (PUC)", sub: "Mandatory for renewal" },
      { icon: FileText, title: "Loan / Lease Agreement", sub: "If applicable" },
      { icon: IdCard, title: "Driving Licence & ID Proof", sub: "Aadhaar / PAN / Passport" },
    ],
  },
  types: {
    eyebrow: "How We Help",
    titleA: "How Make My Documents",
    titleB: "makes it easy",
    intro: "Four simple touchpoints — from your phone to your inbox.",
    items: [
      { title: "Register Online", text: "Fill in your basic details in just a few clicks." },
      { title: "Upload Documents", text: "Securely share your car papers for verification." },
      { title: "Expert Support", text: "Our team ensures accuracy and compliance." },
      { title: "Get Delivered", text: "Receive your processed documents online or at your doorstep." },
    ],
  },
  whyUs: {
    items: [
      "Trusted brand for fast and reliable documentation",
      "100% online convenience — no need to visit offices",
      "Secure handling of your documents",
      "Karnataka-focused expertise with nationwide expansion underway",
      "Transparent pricing — no hidden fees",
      "Best value across reliable service options",
    ],
  },
  faqs: [
    {
      q: "What documents are mandatory for protecting my four-wheeler?",
      a: "RC, valid insurance, PUC certificate, and a Driving Licence are mandatory. Loan or lease agreements apply if your car is financed. Keep digital copies on your phone for easy access during claims or checks.",
    },
    {
      q: "Can I apply for four-wheeler insurance online through Make My Documents?",
      a: "Yes — the entire process is online. Share details, upload scanned documents, compare quotes from top insurers, pay securely, and download your e-policy in minutes.",
    },
    {
      q: "How does Make My Documents ensure the safety of my car documents?",
      a: "All uploads are encrypted in transit and at rest. Documents are used only for your application and shared only with the insurer you select — never with third parties.",
    },
    {
      q: "How long does it take to get my four-wheeler insurance processed?",
      a: "Most renewals are issued in minutes. New policies can take a few hours if a vehicle inspection is needed (usually for older cars or lapsed policies). The e-policy is sent on email and WhatsApp instantly after issuance.",
    },
    {
      q: "What are the benefits of buying car insurance plans?",
      a: "Legal compliance, financial protection from accidents and theft, third-party liability cover, cashless garage access, and add-on riders like Zero Depreciation, Engine Protection, and Roadside Assistance for complete peace of mind.",
    },
    {
      q: "How much will I get paid for a car damage claim?",
      a: "It depends on the IDV (Insured Declared Value) of your car, the policy type, and add-ons. Comprehensive policies pay the cost of repairs (less depreciation, deductibles, and policy terms). Add-ons like Zero Depreciation pay full cost without depreciation cuts.",
    },
    {
      q: "What is IDV?",
      a: "Insured Declared Value — the maximum payout if your car is stolen or written off. It's based on the car's current market value adjusted for age and depreciation, not your purchase price.",
    },
    {
      q: "How many times can I claim for roadside assistance cover?",
      a: "Roadside assistance is generally available for 4-6 calls per policy year, depending on the insurer. Common services include towing, fuel delivery, jump starts, flat tyre help, and key lockout assistance.",
    },
    {
      q: "What is CTL?",
      a: "Constructive Total Loss — when the cost of repairing a damaged car exceeds 75% of its IDV. The insurer treats it as a total loss and pays the IDV instead of repairing.",
    },
    {
      q: "Can the car insurance policy be transferred to another individual?",
      a: "Yes. When you sell your car, the policy can be transferred to the new owner within 14 days of the sale. The buyer pays a small transfer fee and updates the policy with the new RC.",
    },
  ],
};

export default function FourWheelerInsurancePage() {
  return <InsuranceSubPage config={config} />;
}
