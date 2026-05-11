import AgreementPage from "@/components/sections/agreement-page";

export const metadata = {
  title:
    "Online Lease Agreement Services in Bangalore | Make My Documents",
  description:
    "Long-term lease agreements drafted online for residential and commercial properties in Karnataka. Expert drafting, registration support, and doorstep delivery.",
};

const content = {
  theme: "emerald",
  breadcrumb: "Lease Agreement",
  eyebrow: "Lease Agreement · Karnataka",
  title: {
    line1: "Lease agreement,",
    line2: "long-term & rock solid.",
  },
  subtitle:
    "For tenancies beyond 11 months — residential or commercial. We draft, e-stamp, and assist with sub-registrar registration so your long-term lease holds up legally.",
  hero: {
    image: "/illustrations/lease-hero.svg",
    alt: "Lease agreement document with commercial building, key, and registered stamp",
  },

  stats: [
    { value: "60 min", label: "Draft on email" },
    { value: "3-5 days", label: "Registration done" },
    { value: "99%", label: "On-time delivery" },
    { value: "Karnataka", label: "Service area" },
  ],

  howItWorks: [
    {
      title: "Register Online",
      text: "Fill the online form with property, lessor & lessee details.",
    },
    {
      title: "Drafting",
      text: "Our legal team prepares a long-tenure lease draft.",
    },
    {
      title: "Review Draft",
      text: "Receive the draft on email within 60 minutes for approval.",
    },
    {
      title: "Payment & E-Stamp",
      text: "Pay online, we arrange the appropriate stamp paper and notarization.",
    },
    {
      title: "Registration",
      text: "We coordinate sub-registrar registration & doorstep delivery.",
    },
  ],

  pricing: {
    title: "Online Lease Agreement",
    items: [
      {
        label: "Application & Drafting",
        sub: "Long-term lease draft, expert reviewed",
        amount: 500,
      },
      {
        label: "Booking / Consulting",
        sub: "Pay while submitting the online form",
        amount: 50,
      },
    ],
    note: "Stamp duty and registration fees are additional and depend on rent value, tenure, and property type. We share the exact estimate before payment.",
  },

  featuresEyebrow: "Why Online",
  featuresTitle: "Why choose lease agreement",
  features: [
    {
      label: "Long Tenure",
      text: "Built for 1, 3, 5+ year leases — with renewal, exit, and lock-in clauses tailored to your terms.",
    },
    {
      label: "Registration",
      text: "We coordinate sub-registrar registration end-to-end — required for leases over 11 months.",
    },
    {
      label: "Legal Accuracy",
      text: "Drafted by experts who know Karnataka stamp duty, escalation clauses, and lease regulations.",
    },
    {
      label: "Convenience",
      text: "Apply online without visiting any office. Form takes 2 minutes, draft arrives in 60.",
    },
    {
      label: "Transparency",
      text: "Clear breakup of drafting, booking, stamp duty, and registration — no last-minute surprises.",
    },
    {
      label: "Doorstep Delivery",
      text: "Stamped, registered lease delivered to your address — landlord and tenant copies both.",
    },
  ],

  about: [
    {
      heading: "What we do",
      paragraphs: [
        "<strong>Make My Documents</strong> Online Lease Service handles the full lease agreement journey — drafting, e-stamping, sub-registrar registration, and doorstep delivery. Service is currently available across Karnataka, and your draft is shared in 60 minutes.",
      ],
    },
    {
      heading: "What is a lease agreement?",
      paragraphs: [
        "A lease agreement is a long-term contract — typically beyond 11 months — between a property owner (lessor) and a tenant (lessee). It locks in the terms of occupancy and is registered with the sub-registrar's office, giving both parties strong legal standing.",
      ],
      list: [
        "Lease tenure (1, 3, 5+ years) with renewal terms",
        "Monthly rent and annual escalation clause",
        "Security deposit and refund conditions",
        "Lock-in period and exit clauses",
        "Maintenance, repairs and utility responsibilities",
        "Use of property — residential or commercial",
        "Sub-letting permissions and restrictions",
        "Termination and notice period",
      ],
      callout:
        "Unlike rental agreements (under 11 months), lease agreements over 11 months require mandatory registration with the sub-registrar's office under the Registration Act, 1908.",
    },
    {
      heading: "Rental vs. Lease — what's the difference?",
      paragraphs: [
        "A <strong>rental agreement</strong> is short-term (typically 11 months) and doesn't require registration. A <strong>lease agreement</strong> is long-term (over 11 months) and must be registered with the sub-registrar.",
        "If you're a homeowner planning to rent out for under a year, choose rental. If you're locking in a commercial space, a 3-5 year apartment lease, or any tenure beyond 11 months, lease is the right choice.",
      ],
    },
    {
      heading: "Why Make My Documents in Bangalore?",
      paragraphs: [
        "Bangalore's commercial and residential lease market is one of the most active in India — IT parks in Whitefield, retail spaces in Koramangala and Indiranagar, co-working setups in HSR. Each requires lease agreements with the right clauses.",
        "We've drafted leases for individuals, startups, and businesses across Karnataka. Our commitment to transparency, legal accuracy, and registration support makes us a trusted partner for serious long-term tenants and landlords.",
      ],
      list: [
        "Long-term residential and commercial leases",
        "Sub-registrar registration support",
        "E-stamp paper & notarization included options",
        "Custom escalation, lock-in, and exit clauses",
        "Affordable pricing with no hidden costs",
        "Expert legal drafting from day one",
        "Doorstep delivery across Karnataka",
        "Trusted by landlords and businesses",
      ],
    },
  ],

  reviews: [
    {
      initial: "V",
      name: "Vikram R.",
      text: "Got our 3-year office lease drafted and registered in under a week. The escalation and lock-in clauses were exactly what we needed.",
    },
    {
      initial: "M",
      name: "Meera J.",
      text: "Leased out my Koramangala apartment for 2 years. The team handled drafting, stamping, and registration end-to-end. Super smooth.",
    },
    {
      initial: "T",
      name: "Tarun B.",
      text: "Moved my retail shop to a new lease — the team explained every clause clearly and got us registered without a single in-person visit.",
    },
    {
      initial: "K",
      name: "Kavya S.",
      text: "Excellent for long-term leases. The lawyer reviewed our terms, suggested protections we hadn't thought of, and registered fast.",
    },
  ],

  faqs: [
    {
      q: "What's the difference between rental and lease agreements?",
      a: "Rental agreements are short-term (typically 11 months) and don't require registration. Lease agreements are long-term (over 11 months) and must be registered with the sub-registrar's office. Lease agreements also typically include escalation clauses and longer lock-in periods.",
    },
    {
      q: "Is registration mandatory for lease agreements?",
      a: "Yes. Under the Registration Act, 1908, any lease over 11 months must be registered with the sub-registrar's office. We coordinate the entire registration process for you, including stamp duty payment and document submission.",
    },
    {
      q: "What is the typical duration of a lease agreement?",
      a: "Lease agreements typically range from 1 to 5+ years. Common durations are 3 years for residential and 5+ years for commercial leases, often with renewal options built in.",
    },
    {
      q: "What is a lock-in period?",
      a: "A lock-in period is the minimum duration during which neither party can terminate the lease without penalty. It's commonly 1 year for residential and 1-3 years for commercial leases. We add lock-in clauses based on what both parties agree.",
    },
    {
      q: "Can I draft a commercial lease agreement?",
      a: "Yes. We draft commercial leases for offices, retail shops, warehouses, and co-working spaces — with clauses for fit-out periods, escalation, security deposit, GST handling, and exit terms.",
    },
    {
      q: "What stamp duty applies to lease agreements in Karnataka?",
      a: "Karnataka stamp duty for lease agreements depends on the lease amount, tenure, and whether it's residential or commercial. Generally, it ranges from 0.5% to 5% of the average annual rent. We calculate the exact figure before you pay.",
    },
    {
      q: "Do both parties need to be present for registration?",
      a: "Yes, both lessor and lessee (or their authorised representatives via Power of Attorney) must be present at the sub-registrar's office for registration. We schedule the appointment and walk you through the process.",
    },
    {
      q: "What documents are required for a lease agreement?",
      a: "Both parties need Aadhaar, PAN, recent passport-size photos, and address proof. The lessor additionally needs property ownership documents (sale deed, khata, latest tax paid receipt) and 2 witnesses for registration.",
    },
    {
      q: "Can I include an annual rent escalation clause?",
      a: "Absolutely. Most lease agreements include an annual escalation clause — typically 5% to 10% per year. We add this in based on what both parties agree, with clear language to avoid future disputes.",
    },
    {
      q: "How long does the entire process take?",
      a: "The draft is shared on email within 60 minutes. After review, payment, and stamp duty arrangement, the registered lease is typically ready in 3-5 working days, including the sub-registrar appointment.",
    },
  ],
};

export default function LeaseAgreementPage() {
  return <AgreementPage content={content} />;
}
