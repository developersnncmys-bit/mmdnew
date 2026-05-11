import AgreementPage from "@/components/sections/agreement-page";

export const metadata = {
  title:
    "Online Rental Agreement Services in Bangalore | Make My Documents",
  description:
    "Get your rental agreement online in Bangalore. Draft shared within 60 minutes, doorstep delivery in 1-2 working days. Rs. 300 drafting + Rs. 50 booking. Service available across Karnataka.",
};

const content = {
  theme: "amber",
  breadcrumb: "Rental Agreement",
  eyebrow: "Rental Agreement · Karnataka",
  title: {
    line1: "Rental agreement,",
    line2: "drafted in 60 min.",
  },
  subtitle:
    "Skip the office visits. Share details online, get a legal draft in your inbox in 60 minutes, and have the stamped agreement at your door in 1-2 working days.",
  hero: {
    image: "/illustrations/rental-hero.svg",
    alt: "Rental agreement document with house, key, and signing pen",
  },

  stats: [
    { value: "60 min", label: "Draft on email" },
    { value: "1-2 days", label: "Doorstep delivery" },
    { value: "99%", label: "On-time delivery" },
    { value: "Karnataka", label: "Service area" },
  ],

  howItWorks: [
    {
      title: "Register Online",
      text: "Fill the online form with property, owner & tenant details.",
    },
    {
      title: "Drafting",
      text: "Our legal team prepares a customized draft.",
    },
    {
      title: "Review Draft",
      text: "Receive draft on email within 60 minutes for approval.",
    },
    {
      title: "Payment",
      text: "Pay securely online — Rs. 50 booking + Rs. 300 drafting.",
    },
    {
      title: "Doorstep Delivery",
      text: "Stamped agreement delivered in 1-2 working days.",
    },
  ],

  pricing: {
    title: "Online Rental Agreement",
    items: [
      {
        label: "Application & Drafting",
        sub: "Customized rental agreement, expert reviewed",
        amount: 300,
      },
      {
        label: "Booking / Consulting",
        sub: "Pay while submitting the online form",
        amount: 50,
      },
    ],
    note: "Stamp paper charges are additional and depend on your rent amount and tenure.",
  },

  featuresEyebrow: "Why Online",
  featuresTitle: "Why choose rental agreement",
  features: [
    {
      label: "Convenience",
      text: "Apply online without visiting any office. Everything from form to delivery happens at your doorstep.",
    },
    {
      label: "Speed",
      text: "Draft shared within 60 minutes. Stamped agreement delivered in 1-2 working days.",
    },
    {
      label: "Legal Accuracy",
      text: "Drafted by experts, ensuring full compliance with Karnataka rental laws and stamp duty norms.",
    },
    {
      label: "Transparency",
      text: "No hidden charges — only Rs. 50 booking and Rs. 300 drafting fee, plus stamp paper.",
    },
    {
      label: "Doorstep Delivery",
      text: "Get the finalized, stamped agreement delivered straight to your address — no pickup required.",
    },
  ],

  about: [
    {
      heading: "What we do",
      paragraphs: [
        "<strong>Make My Documents</strong> Online Agreements Service handles the entire rental agreement journey for you — drafting, e-stamping, review, and doorstep delivery. Service is currently available across Karnataka, and your draft lands in your inbox within 60 minutes of submission.",
      ],
    },
    {
      heading: "What is a rental agreement?",
      paragraphs: [
        "A rental agreement is a legally binding contract between a landlord and a tenant that outlines the terms of renting a property. It defines the key aspects that protect both parties:",
      ],
      list: [
        "Monthly rent amount and payment schedule",
        "Security deposit details",
        "Duration of tenancy (commonly 11 months in Bangalore)",
        "Responsibilities of landlord and tenant",
        "Maintenance and utility charges",
        "Termination or renewal clauses",
      ],
      callout:
        "A well-drafted rental agreement protects both parties by providing clarity and preventing disputes. It also serves as valid address proof for tenants — often required for banks, schools, and other formal purposes.",
    },
    {
      heading: "Why online over the traditional way?",
      paragraphs: [
        "Traditionally, rental agreements were made by visiting lawyers, notary offices, or government offices. The process was time-consuming and involved multiple visits, delays, and unnecessary expenses.",
        "With our online service, you skip all of that. The form takes under 2 minutes, the draft arrives in 60, and the stamped hard copy is at your door in 1-2 working days.",
      ],
    },
    {
      heading: "Why Make My Documents in Bangalore?",
      paragraphs: [
        "Bangalore is one of India's fastest-growing cities, with thousands of rental transactions every day — from professionals renting in Whitefield and Koramangala, to students looking for PGs in Jayanagar, to landlords leasing commercial spaces in MG Road.",
        "We understand the city's pace. Our commitment to transparency, accuracy, and customer satisfaction makes us a trusted choice for thousands of clients across Bangalore — and the rest of Karnataka.",
      ],
      list: [
        "Legally valid and accurate agreements",
        "Affordable charges with no hidden costs",
        "Quick turnaround time",
        "Expert legal drafting",
        "Doorstep delivery of final document",
        "Custom clauses for rent, deposit, maintenance, pets",
        "Residential and commercial agreements",
        "Trusted by clients across Karnataka",
      ],
    },
  ],

  reviews: [
    {
      initial: "S",
      name: "Sneha P.",
      text: "Got my rental agreement drafted the next day. Everything was handled smoothly without any hassle.",
    },
    {
      initial: "A",
      name: "Amit S.",
      text: "Excellent service! The team guided me step by step. I didn't have to visit any office, and it was delivered right to my doorstep.",
    },
    {
      initial: "P",
      name: "Priya M.",
      text: "Very reliable and professional. The online process saved me a lot of time. My landlord and I signed digitally without meeting.",
    },
    {
      initial: "R",
      name: "Rahul K.",
      text: "Quick, convenient, and completely hassle-free. Draft within minutes, final agreement in just a couple of days. Highly recommend!",
    },
  ],

  faqs: [
    {
      q: "What is the validity of a rental agreement in Bangalore?",
      a: "In Bangalore, rental agreements are typically drafted for 11 months to avoid the mandatory registration that applies to longer durations. The agreement remains fully legally valid for the entire tenure and is widely accepted as proof of tenancy.",
    },
    {
      q: "Do I need to visit any office to get a rental agreement?",
      a: "No. The entire process is online — share details, review the draft over email, and pay securely. Once finalized, the stamped agreement is delivered to your doorstep within 1-2 working days.",
    },
    {
      q: "What is the value of stamp paper required?",
      a: "In Karnataka, stamp duty depends on the rent amount and the duration of the agreement. For most 11-month residential agreements, a Rs. 100 to Rs. 500 stamp paper is sufficient. We help you choose the correct value.",
    },
    {
      q: "Do I need notarization for a rental agreement?",
      a: "Notarization is not mandatory for an 11-month rental agreement in Karnataka, but it adds an extra layer of authenticity. If you need it for HRA claims or visa documentation, we can arrange it for a small additional fee.",
    },
    {
      q: "How long does it take to get the final agreement?",
      a: "The draft is shared on email within 60 minutes of registering. After your review and payment, the stamped hard copy is delivered to your doorstep within 1-2 working days.",
    },
    {
      q: "Can I make changes to the agreement before it is finalized?",
      a: "Yes. Once you receive the initial draft, you can suggest changes. Our legal team incorporates them and shares an updated draft for your approval before final printing.",
    },
    {
      q: "Is police verification mandatory for tenants in Bangalore?",
      a: "Police verification is strongly recommended in Bangalore for the safety of both landlord and tenant, though not strictly mandatory for every rental agreement. We can guide you through the process.",
    },
    {
      q: "Can I create a rental agreement for commercial properties?",
      a: "Yes. We draft both residential and commercial rental agreements, with clauses appropriate for each type. Just mention the property type when filling out the online form.",
    },
    {
      q: "What documents are required from the landlord and tenant?",
      a: "Both parties need: Aadhaar card or government-issued ID, recent passport-size photograph, and address proof. Property ownership details are needed from the landlord.",
    },
    {
      q: "Can I get a soft copy of the agreement?",
      a: "Yes. A soft copy is shared on email within 60 minutes. The final stamped hard copy is delivered to your address within 1-2 working days.",
    },
  ],
};

export default function RentalAgreementPage() {
  return <AgreementPage content={content} />;
}
