import {
  HeartHandshake,
  Users,
  Home,
  Sparkles,
  PiggyBank,
  Smile,
  Receipt,
  IdCard,
  FileText,
  MapPin,
  Heart,
  TrendingUp,
} from "lucide-react";
import InsuranceSubPage from "@/components/sections/insurance-sub-page";

export const metadata = {
  title: "Life Insurance Online — Term, ULIP, Endowment | Make My Documents",
  description:
    "Buy or renew life insurance online. Term, whole life, ULIP, endowment, child education, and retirement plans. Tax benefits under 80C, expert advisor support, instant e-policy.",
};

const extraContent = (
  <>
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Tax Benefits
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
            Protect your family{" "}
            <span className="text-emerald-700">and save tax</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground md:text-lg">
            Life insurance not only secures your family's future, it also
            offers attractive tax benefits — making it a dual-purpose
            financial tool.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Receipt className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold">
                Section 80C
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Premiums paid eligible for deduction up to ₹1.5 lakh annually.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold">
                Section 10(10D)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Maturity and death payouts are tax-free, subject to conditions.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <PiggyBank className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold">
                Section 80CCC
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Retirement and pension plans also offer tax deductions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-20 md:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Claim Process
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              How nominees{" "}
              <span className="text-emerald-700">file a claim</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              In the unfortunate event of the policyholder's death, the
              nominee can file a claim. The process is simple and our team
              helps your family every step of the way.
            </p>
            <ol className="mt-6 space-y-3">
              {[
                "Notify the insurer about the death of the policyholder.",
                "Submit a claim form along with death certificate and policy documents.",
                "Provide ID and address proof of the nominee with bank account details.",
                "Insurance company verifies documents and processes the claim.",
                "Claim amount is credited to the nominee's account.",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-display text-xs font-black text-emerald-700">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
              Exclusions
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              What's{" "}
              <span className="text-rose-700">not covered</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              While life insurance provides broad coverage, certain
              exclusions apply. Knowing them upfront keeps your claim process
              smooth and transparent.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Death due to suicide within the first year of policy",
                "Death caused by participation in illegal or hazardous activities",
                "Non-disclosure of medical conditions at the time of application",
                "Death due to war or acts of terrorism (in some policies)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200"
                >
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

const config = {
  breadcrumb: "Life",
  faqTopicName: "life insurance",
  theme: {
    accentText: "text-emerald-700",
    chipBg: "bg-emerald-50",
    chipText: "text-emerald-700",
    gradient: "from-emerald-500 to-teal-600",
    heroBg: "bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-50",
    heroBlob1: "bg-emerald-300/30",
    heroBlob2: "bg-teal-300/30",
    heroBadgeText: "text-emerald-800",
    heroBadge2Text: "text-teal-800",
    heroBtnBg: "bg-emerald-600",
    heroBtnHover: "hover:bg-emerald-700",
    heroGlow: "bg-gradient-to-br from-emerald-300/30 to-teal-300/30",
    heroIconBg: "from-emerald-500 via-emerald-600 to-teal-700",
    starText: "text-emerald-500",
    underline: "bg-emerald-400/60",
    docIconBg: "bg-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    darkSectionBg: "bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900",
    darkAccent: "text-emerald-400",
    darkBlob1: "bg-emerald-500/20",
    darkBlob2: "bg-teal-500/20",
    hoverDarkBorder: "hover:border-emerald-400/40",
    faqOpenBorder: "open:border-emerald-400",
  },
  hero: {
    icon: HeartHandshake,
    badge1: "Family Protection",
    badge2: "Tax Benefits",
    titleA: "Protect Your",
    titleB: "Family's Future",
    titleC: "with Ease",
    subtitle:
      "Life insurance is more than a financial product — it's a promise to safeguard your loved ones. Term plans, savings policies, ULIPs — we guide you to the right fit.",
    chips: [
      { icon: Heart, color: "text-emerald-700", text: "Family secured" },
      { icon: Sparkles, color: "text-teal-600", text: "Tax saver" },
      { icon: TrendingUp, color: "text-emerald-700", text: "Wealth + cover" },
    ],
  },
  about: {
    eyebrow: "Why Life Insurance Matters",
    titleA: "A promise to your",
    titleB: "loved ones",
    paragraphs: [
      "Life is unpredictable, and while we cannot control the uncertainties, we can prepare for them. Life insurance ensures your family's financial needs — from daily living expenses to long-term goals — are met even in your absence.",
      "Whether you're looking for term plans, savings-linked policies, or investment-oriented plans, we guide you through the process so you choose the best option for your needs.",
    ],
  },
  benefits: {
    eyebrow: "Why It Matters",
    titleA: "What life insurance",
    titleB: "really gives you",
    intro:
      "Five reasons life insurance is one of the most important financial decisions you'll make.",
    items: [
      {
        icon: Users,
        title: "Financial Security for Loved Ones",
        text: "Provides a lump sum or regular income to your family after your death. Whatever the future holds, your spouse, children, and parents are not left financially stranded — they have what they need to maintain their lifestyle, fund education, and meet daily expenses.",
      },
      {
        icon: Home,
        title: "Debt Protection",
        text: "Ensures loans like home or personal loans don't become a burden on your family.",
      },
      {
        icon: PiggyBank,
        title: "Wealth Creation",
        text: "Some plans offer maturity benefits — building a financial cushion for your goals.",
      },
      {
        icon: Smile,
        title: "Peace of Mind",
        text: "Live life with the assurance that your family will be protected financially.",
      },
      {
        icon: Receipt,
        title: "Tax Benefits",
        text: "Premiums qualify for deductions under Section 80C and Section 10(10D).",
      },
    ],
  },
  documents: {
    intro:
      "When applying for a life insurance policy, you'll typically need:",
    items: [
      { icon: IdCard, title: "Valid ID Proof", sub: "Aadhaar, Passport, Voter ID, or PAN card" },
      { icon: MapPin, title: "Address Proof", sub: "Utility bill, Aadhaar, Passport, etc." },
      { icon: FileText, title: "Income Proof", sub: "Salary slip, ITR, or bank statement (for certain policies)" },
      { icon: Heart, title: "Medical Reports", sub: "If required by the insurer for higher coverage" },
    ],
  },
  types: {
    eyebrow: "Types of Life Insurance",
    titleA: "Not one-size-fits-all —",
    titleB: "pick yours",
    intro:
      "Seven common life insurance plan structures, each serving a different need.",
    items: [
      {
        title: "Term Life Insurance",
        text: "Pure protection — high coverage at affordable premiums. Pays out only on death.",
      },
      {
        title: "Whole Life Insurance",
        text: "Lifelong coverage, often with savings benefits accrued over the policy term.",
      },
      {
        title: "Endowment Plans",
        text: "Combines insurance with savings, offering maturity benefits if you survive the term.",
      },
      {
        title: "ULIPs",
        text: "Unit Linked Insurance Plans — cover plus investment opportunities in equity and debt.",
      },
      {
        title: "Money-Back Plans",
        text: "Periodic payouts during the policy term plus life cover.",
      },
      {
        title: "Child Plans",
        text: "Helps secure your child's education and future goals through staged payouts.",
      },
    ],
  },
  whyUs: {
    items: [
      "Compare term, ULIP, endowment, and pension plans in one place",
      "Expert advisors explain features and benefits clearly",
      "Tax-saving guidance under 80C and 10(10D)",
      "Transparent premium calculations — no hidden charges",
      "Family claim support — we walk your nominee through the entire process",
      "Renewal reminders so the policy never lapses unintentionally",
    ],
  },
  faqs: [
    {
      q: "What is life insurance?",
      a: "A financial contract where the insurer pays your nominee a defined sum on your death (and sometimes on maturity), in exchange for premiums you pay during the policy term. It's a financial safety net for your family.",
    },
    {
      q: "What are the types of life insurance?",
      a: "Term, Whole Life, Endowment, ULIP, Money-Back, Child, and Retirement / Pension plans. Term is pure protection; the others combine protection with savings or investments.",
    },
    {
      q: "Why should I buy life insurance?",
      a: "To financially protect your family in case of your sudden absence, repay outstanding loans, fund children's education, save tax, and (in certain plans) build long-term wealth — all in one product.",
    },
    {
      q: "What are the tax benefits?",
      a: "Premiums qualify for deductions up to ₹1.5 lakh under Section 80C. Maturity and death benefits are tax-free under Section 10(10D), subject to conditions. Pension plans also qualify under Section 80CCC.",
    },
    {
      q: "How can nominees claim after death?",
      a: "Notify the insurer, submit the claim form with the death certificate and policy documents, share nominee ID and bank details, and the insurer processes payment after document verification. Our team helps your family at every step.",
    },
    {
      q: "Can a claim be denied?",
      a: "Yes — common reasons include non-disclosure of medical conditions, death within the first year by suicide, fraudulent claims, and policy lapses. Honest disclosure during application protects your family from rejection.",
    },
    {
      q: "What are the types of claims in life insurance policies?",
      a: "Death claims (lump sum to nominee), maturity claims (paid to policyholder if alive at policy end), and survival benefits (periodic payouts during the term in money-back / endowment plans).",
    },
    {
      q: "What is not covered under life insurance plans?",
      a: "Suicide in the first year, death from illegal or hazardous activities, undisclosed medical conditions, and (in some policies) war or terrorism-related deaths. Specific exclusions vary — always read the policy document.",
    },
    {
      q: "Do life insurance policies provide loans?",
      a: "Yes — endowment, whole life, and ULIP policies often allow loans against the surrender value after a few years of premium payment. Pure term plans do not, since they don't accumulate cash value.",
    },
    {
      q: "What is the process of making a death claim?",
      a: "Submit the death certificate, policy documents, claim form, nominee ID and bank details, and an FIR / post-mortem report (if accidental death). Insurer verifies, processes, and credits the sum assured to the nominee's account, usually within 30 days.",
    },
  ],
};

export default function LifeInsurancePage() {
  return <InsuranceSubPage config={config} extraSections={extraContent} />;
}
