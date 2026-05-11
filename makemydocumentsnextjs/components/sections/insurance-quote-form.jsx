"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  PlusCircle,
  RefreshCw,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Hash,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export default function InsuranceQuoteForm({ config }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    intent: "",
    regNumber: "",
    regDate: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    pinCode: "",
  });

  const update = (field) => (e) =>
    setData({ ...data, [field]: e.target.value });
  const setIntent = (intent) => setData({ ...data, intent });

  const canProceed1 = data.intent !== "";
  const canProceed2 = data.regNumber.trim() && data.regDate;
  const canSubmit =
    data.name.trim() &&
    /^\d{10}$/.test(data.mobile) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    data.address.trim() &&
    data.state &&
    /^\d{6}$/.test(data.pinCode);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      setSubmitted(true);
    }
  };

  return (
    <main className={`min-h-screen ${config.bgClass} pb-20 pt-24 md:pt-28`}>
      <div className="container">
        <Link
          href={config.backHref}
          aria-label="Back to insurance page"
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div className="mx-auto mt-10 max-w-4xl">
          {submitted ? (
            <SuccessCard data={data} config={config} />
          ) : (
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200/60">
              <div className={`h-2 bg-gradient-to-r ${config.gradient}`} />

              <div className="px-6 pt-8 md:px-12 md:pt-10">
                <Stepper currentStep={step} accentClass={config.accentBg} />
              </div>

              <div className="px-6 pb-10 pt-8 md:px-12 md:pb-12 md:pt-10">
                {step === 1 && (
                  <Step1
                    config={config}
                    intent={data.intent}
                    setIntent={setIntent}
                  />
                )}
                {step === 2 && (
                  <Step2
                    config={config}
                    data={data}
                    update={update}
                  />
                )}
                {step === 3 && (
                  <Step3
                    config={config}
                    data={data}
                    update={update}
                    onSubmit={handleSubmit}
                  />
                )}

                <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-2.5 font-display text-sm font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={
                        (step === 1 && !canProceed1) ||
                        (step === 2 && !canProceed2)
                      }
                      className={`inline-flex items-center gap-2 rounded-xl px-7 py-3 font-display text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-lg ${config.accentBg} ${config.accentBgHover}`}
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                      className={`inline-flex items-center gap-2 rounded-xl px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 ${config.accentBg} ${config.accentBgHover}`}
                    >
                      Submit
                      <Check className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-white/85">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Your data is encrypted and shared only with the insurer you select.</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function Stepper({ currentStep, accentClass }) {
  const steps = [1, 2, 3];
  return (
    <div className="flex items-center justify-between">
      {steps.map((n, i) => {
        const isDone = currentStep > n;
        const isActive = currentStep === n;
        return (
          <Fragment key={n}>
            <div className="relative flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full font-display text-base font-bold shadow-md transition-all md:h-14 md:w-14 md:text-lg ${
                  isDone
                    ? "bg-emerald-500 text-white"
                    : isActive
                    ? `${accentClass} text-white`
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {isDone ? <Check className="h-5 w-5 md:h-6 md:w-6" /> : n}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-2 h-0.5 flex-1 rounded-full transition-colors ${
                  currentStep > n ? "bg-emerald-400" : "bg-slate-200"
                }`}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

function SectionHeading({ tagline, title, accentText }) {
  return (
    <div className="text-center">
      <p className="text-sm font-medium text-slate-500">{tagline}</p>
      <h2 className={`mt-1 font-display text-2xl font-extrabold md:text-3xl ${accentText}`}>
        {title}
        <span className="text-rose-500">*</span>
      </h2>
    </div>
  );
}

function Step1({ config, intent, setIntent }) {
  const options = [
    {
      id: "new",
      title: "Buy New Policy",
      sub: "I'm buying insurance for the first time or for a new vehicle.",
      icon: PlusCircle,
    },
    {
      id: "renew",
      title: "Renew Existing Policy",
      sub: "My current policy is expiring or has just expired.",
      icon: RefreshCw,
    },
  ];

  return (
    <div>
      <SectionHeading
        tagline={`Buy / Renew ${config.vehicleNoun} insurance without inspection or paperwork`}
        title="I Want to"
        accentText={config.accentText}
      />

      <div className="mx-auto mt-8 grid max-w-2xl gap-4 md:grid-cols-2">
        {options.map((o) => {
          const selected = intent === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setIntent(o.id)}
              className={`group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-xl ${
                selected
                  ? `${config.cardBorderActive} ${config.cardBgActive} shadow-lg`
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-transform group-hover:scale-110 ${
                    selected
                      ? `bg-gradient-to-br ${config.gradient} text-white`
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <o.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                    selected
                      ? `${config.accentBg} border-transparent`
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {selected && <Check className="h-3.5 w-3.5 text-white" />}
                </div>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                {o.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{o.sub}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step2({ config, data, update }) {
  return (
    <div>
      <SectionHeading
        tagline="Buy Insurance, the smart way"
        title={`Enter Your ${config.vehicleNounTitle} Details`}
        accentText={config.accentText}
      />

      <div className="mx-auto mt-8 max-w-xl space-y-5">
        <Field
          icon={Hash}
          label="Registration Number"
          required
          accentText={config.accentText}
          accentRing={config.accentRing}
        >
          <input
            type="text"
            value={data.regNumber}
            onChange={update("regNumber")}
            placeholder="e.g. KA 01 AB 1234"
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400"
          />
        </Field>

        <Field
          icon={Calendar}
          label="Registration Date"
          required
          accentText={config.accentText}
          accentRing={config.accentRing}
        >
          <input
            type="date"
            value={data.regDate}
            onChange={update("regDate")}
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all focus:border-slate-400"
          />
        </Field>

        <div className="flex items-start gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-600">
          <Sparkles className={`mt-0.5 h-4 w-4 shrink-0 ${config.accentText}`} />
          <span>
            We use these details only to fetch the best premium options from
            top insurers. Your data is encrypted in transit.
          </span>
        </div>
      </div>
    </div>
  );
}

function Step3({ config, data, update, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <SectionHeading
        tagline="Buy Insurance, the smart way"
        title="Contact Details"
        accentText={config.accentText}
      />

      <div className="mx-auto mt-8 grid max-w-2xl gap-5 md:grid-cols-2">
        <Field icon={User} label="Name" required accentText={config.accentText}>
          <input
            type="text"
            value={data.name}
            onChange={update("name")}
            placeholder="Enter Your Name"
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400"
          />
        </Field>

        <Field icon={Phone} label="Mobile Number" required accentText={config.accentText}>
          <input
            type="tel"
            value={data.mobile}
            onChange={update("mobile")}
            inputMode="numeric"
            maxLength={10}
            placeholder="10-digit mobile"
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400"
          />
        </Field>

        <div className="md:col-span-2">
          <Field icon={Mail} label="Email ID" required accentText={config.accentText}>
            <input
              type="email"
              value={data.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400"
            />
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field icon={MapPin} label="Address" required accentText={config.accentText}>
            <textarea
              value={data.address}
              onChange={update("address")}
              rows={3}
              placeholder="House / flat, street, area, city"
              className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400"
            />
          </Field>
        </div>

        <Field icon={Building2} label="State" required accentText={config.accentText}>
          <select
            value={data.state}
            onChange={update("state")}
            className="w-full appearance-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all focus:border-slate-400"
          >
            <option value="">Select State</option>
            {indianStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field icon={Hash} label="Pin Code" required accentText={config.accentText}>
          <input
            type="text"
            value={data.pinCode}
            onChange={update("pinCode")}
            inputMode="numeric"
            maxLength={6}
            placeholder="6-digit pin"
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400"
          />
        </Field>
      </div>
    </form>
  );
}

function Field({ icon: Icon, label, required, accentText, children }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 font-display text-sm font-bold text-slate-700">
        <Icon className={`h-4 w-4 ${accentText}`} />
        {label}
        {required && <span className="text-rose-500">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function SuccessCard({ data, config }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200/60">
      <div className={`h-2 bg-gradient-to-r ${config.gradient}`} />
      <div className="px-6 py-12 text-center md:px-12 md:py-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Check className="h-10 w-10" strokeWidth={2.5} />
        </div>
        <h2 className="mt-6 font-display text-3xl font-extrabold text-slate-900 md:text-4xl">
          Quote request received!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
          Thanks <span className="font-bold text-slate-900">{data.name}</span> —
          our team will share tailored {config.vehicleNoun} insurance quotes
          on{" "}
          <span className="font-bold text-slate-900">{data.email}</span> and{" "}
          <span className="font-bold text-slate-900">+91 {data.mobile}</span>{" "}
          within minutes.
        </p>

        <div className="mx-auto mt-8 grid max-w-md gap-3 text-left">
          <div className="flex items-start gap-3 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 px-4 py-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <div className="font-display text-sm font-bold text-slate-900">
                Multi-insurer quotes
              </div>
              <div className="text-xs text-slate-600">
                We'll send the best 3-5 options for you to compare.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 px-4 py-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <div className="font-display text-sm font-bold text-slate-900">
                Expert support
              </div>
              <div className="text-xs text-slate-600">
                A specialist will call to help you pick the right plan.
              </div>
            </div>
          </div>
        </div>

        <Link
          href={config.backHref}
          className="mt-10 inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-display text-sm font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to insurance
        </Link>
      </div>
    </div>
  );
}
