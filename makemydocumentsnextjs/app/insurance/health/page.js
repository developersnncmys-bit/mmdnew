import {
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Hospital,
  PiggyBank,
  IdCard,
  FileText,
  Heart,
  Receipt,
  Users,
} from "lucide-react";
import InsuranceSubPage from "@/components/sections/insurance-sub-page";

export const metadata = {
  title: "Health Insurance Online — Individual & Family | Make My Documents",
  description:
    "Buy or renew health insurance online. Individual, family floater, senior citizen, and critical illness plans. Cashless hospital network, instant e-policy, transparent pricing.",
};

const config = {
  breadcrumb: "Health",
  faqTopicName: "health insurance",
  theme: {
    accentText: "text-rose-700",
    chipBg: "bg-rose-50",
    chipText: "text-rose-700",
    gradient: "from-rose-500 to-pink-600",
    heroBg: "bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50",
    heroBlob1: "bg-rose-300/30",
    heroBlob2: "bg-pink-300/30",
    heroBadgeText: "text-rose-800",
    heroBadge2Text: "text-pink-800",
    heroBtnBg: "bg-rose-600",
    heroBtnHover: "hover:bg-rose-700",
    heroGlow: "bg-gradient-to-br from-rose-300/30 to-pink-300/30",
    heroIconBg: "from-rose-500 via-rose-600 to-pink-700",
    starText: "text-rose-500",
    underline: "bg-rose-400/60",
    docIconBg: "bg-rose-100",
    hoverBorder: "hover:border-rose-300",
    darkSectionBg: "bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900",
    darkAccent: "text-rose-400",
    darkBlob1: "bg-rose-500/20",
    darkBlob2: "bg-pink-500/20",
    hoverDarkBorder: "hover:border-rose-400/40",
    faqOpenBorder: "open:border-rose-400",
  },
  hero: {
    icon: HeartPulse,
    badge1: "Cashless Network",
    badge2: "Family Floater",
    titleA: "Protect Your",
    titleB: "Health",
    titleC: "with Ease",
    subtitle:
      "Reasonably priced, comprehensive health plans covering hospitalization, surgery, critical illness, and emergencies. The people you care about always get the best treatment.",
    chips: [
      { icon: Hospital, color: "text-rose-700", text: "Cashless hospitals" },
      { icon: Sparkles, color: "text-pink-600", text: "Critical illness" },
      { icon: Heart, color: "text-rose-700", text: "Family covered" },
    ],
  },
  about: {
    eyebrow: "Why Health Insurance",
    titleA: "Stay protected from rising",
    titleB: "medical costs",
    paragraphs: [
      "Medical bills are unpredictable, and even a single hospital stay can wipe out years of savings. Health insurance is your financial shield — covering hospitalization, surgery, treatment for serious illnesses (such as cancer), and emergency care at reasonable rates.",
      "Whether you need cover just for yourself, a family floater for your spouse and children, or a separate plan for your senior parents — we help you compare and pick the right plan from leading insurers.",
    ],
  },
  benefits: {
    eyebrow: "Why It Matters",
    titleA: "What health insurance",
    titleB: "really gives you",
    intro:
      "Beyond the bills, health insurance is peace of mind for the entire family.",
    items: [
      {
        icon: Hospital,
        title: "Cashless Hospitalization",
        text: "Walk into any of our network hospitals and get treated without paying upfront. The insurer settles directly with the hospital — you focus on recovery, not paperwork. Network covers 5,000+ hospitals across India.",
      },
      {
        icon: Stethoscope,
        title: "Critical Illness Cover",
        text: "Lump-sum payout on diagnosis of cancer, heart attack, kidney failure, and other listed conditions.",
      },
      {
        icon: Users,
        title: "Family Floater",
        text: "One policy, multiple people. Cover your spouse, children, and parents under one sum insured.",
      },
      {
        icon: PiggyBank,
        title: "Tax Savings",
        text: "Premiums qualify for deductions under Section 80D — up to ₹75,000 a year.",
      },
      {
        icon: ShieldCheck,
        title: "Day-Care & OPD",
        text: "Modern plans cover day-care procedures and outpatient consultations too.",
      },
    ],
  },
  documents: {
    intro: "What you'll need to apply:",
    items: [
      { icon: IdCard, title: "Identity Proof", sub: "Aadhaar, PAN, Passport, or Voter ID" },
      { icon: FileText, title: "Address Proof", sub: "Utility bill, Aadhaar, Passport" },
      { icon: Heart, title: "Medical Reports", sub: "Required for high-value covers or pre-existing disclosure" },
      { icon: Receipt, title: "Income Proof", sub: "For some high sum-insured plans" },
    ],
  },
  types: {
    eyebrow: "Types of Health Insurance",
    titleA: "Pick the plan that",
    titleB: "fits you",
    intro: "Six common health insurance plan types to choose from.",
    items: [
      {
        title: "Individual Health Plan",
        text: "Sum insured assigned to a single person — ideal for working professionals or singles.",
      },
      {
        title: "Family Floater",
        text: "One sum insured shared across spouse, children, and dependents — economical for families.",
      },
      {
        title: "Senior Citizen Plan",
        text: "Tailored cover for parents above 60 — higher caps, age-friendly underwriting.",
      },
      {
        title: "Critical Illness Cover",
        text: "Lump-sum payout on diagnosis of pre-listed conditions like cancer or heart disease.",
      },
      {
        title: "Top-Up & Super Top-Up",
        text: "Boost your existing cover affordably — ideal when sum insured is too low.",
      },
      {
        title: "Personal Accident Cover",
        text: "Compensation for accidental injury, disability, or death.",
      },
    ],
  },
  whyUs: {
    items: [
      "Compare plans from top health insurers",
      "Cashless network of 5,000+ hospitals across India",
      "Pre and post-hospitalization expenses included",
      "Tax savings under Section 80D",
      "Claim assistance from initiation to settlement",
      "Hassle-free renewals with no break-in penalty",
    ],
  },
  faqs: [
    {
      q: "What is health insurance?",
      a: "A contract between you and an insurer where the insurer pays for your medical expenses (hospitalization, surgery, treatment) in exchange for an annual premium. It protects you from financially crushing medical bills.",
    },
    {
      q: "What is a family floater plan?",
      a: "A single policy with one sum insured shared across all family members. If one person uses the cover, the rest of the family can still claim from the remaining amount. Usually cheaper than individual policies for everyone.",
    },
    {
      q: "What is cashless hospitalization?",
      a: "When you get treated at a network hospital, the insurer settles bills directly with the hospital so you don't pay upfront. We help you find the nearest cashless hospital from your insurer's network.",
    },
    {
      q: "Are pre-existing diseases covered?",
      a: "Yes — but usually after a waiting period of 2-4 years (varies by insurer and condition). Some premium plans waive this waiting period for an additional premium. Always disclose pre-existing conditions accurately to avoid claim rejection.",
    },
    {
      q: "What is the No Claim Bonus (NCB) in health insurance?",
      a: "If you don't make any claims in a policy year, your sum insured increases (typically 10-50% per claim-free year, up to a cap) without any extra premium. It's a built-in reward for staying healthy.",
    },
    {
      q: "Can I claim tax benefits on health insurance premiums?",
      a: "Yes. Under Section 80D, premiums for self/spouse/children qualify for deduction up to ₹25,000. Premiums for parents below 60 add ₹25,000; for parents above 60, ₹50,000. Maximum benefit can reach ₹75,000 per year.",
    },
    {
      q: "What is the waiting period in health insurance?",
      a: "An initial period (usually 30 days) during which most claims are not honoured, except for accidental injury. Specific illnesses (e.g., maternity) and pre-existing conditions have their own longer waiting periods.",
    },
    {
      q: "What is not covered under health insurance?",
      a: "Cosmetic surgeries, infertility treatments (in basic plans), dental treatment (unless from accidents), self-inflicted injuries, drug or alcohol abuse, and treatment outside India (unless explicitly covered).",
    },
    {
      q: "How do I file a health insurance claim?",
      a: "For cashless: present your card at a network hospital, fill the pre-authorisation form. For reimbursement: pay first, submit bills, prescriptions, discharge summary, and the claim form within 30 days. Our team assists end-to-end.",
    },
    {
      q: "Can senior citizens buy health insurance?",
      a: "Yes — many insurers offer dedicated senior citizen plans (60+). Sum insured may be slightly capped and pre-medical check-ups may be required, but high-quality cover is widely available.",
    },
  ],
};

export default function HealthInsurancePage() {
  return <InsuranceSubPage config={config} />;
}
