"use client";

import { Fragment, useEffect, useState } from "react";
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
  X,
  Bike,
  Car,
  Truck,
  Zap,
  HeartHandshake,
  Wallet,
  HeadphonesIcon,
  Star,
} from "lucide-react";

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands",
  "Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi",
  "Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

const VEHICLE_ICONS = {
  bike: Bike,
  car: Car,
  commercial: Truck,
};

const initialData = {
  intent: "",
  regNumber: "",
  regDate: "",
  name: "",
  mobile: "",
  email: "",
  address: "",
  state: "",
  pinCode: "",
};

const STEP_LABELS = ["Your Choice", "Vehicle Details", "Contact Info"];

export default function QuoteModal({
  config,
  triggerLabel = "Get Quotes",
  triggerClassName = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState(initialData);

  const VehicleIcon =
    VEHICLE_ICONS[config.vehicleType || config.vehicleNoun] || Bike;

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setData(initialData);
    }, 250);
  };

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

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
    if (e?.preventDefault) e.preventDefault();
    if (canSubmit) setSubmitted(true);
  };

  const progressPercent = ((step - 1) / 2) * 100;

  return (
    <>
      <button type="button" onClick={open} className={triggerClassName}>
        {triggerLabel}
        <ArrowRight className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <button
            type="button"
            aria-label="Close quote form"
            onClick={close}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md qm-fade-in"
          />

          <div className="relative z-10 flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl ring-1 ring-white/20 sm:rounded-3xl qm-pop">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg ring-1 ring-slate-200 backdrop-blur-sm transition-all hover:rotate-90 hover:bg-white hover:text-slate-900"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid flex-1 grid-cols-1 overflow-hidden lg:grid-cols-[5fr_7fr]">
              <BrandPanel
                config={config}
                VehicleIcon={VehicleIcon}
                step={step}
                submitted={submitted}
              />

              <div className="relative flex flex-col overflow-hidden bg-white">
                {!submitted && (
                  <div className="border-b border-slate-100 px-6 pb-4 pt-6 md:px-10 md:pt-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Step {step} of 3
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.cardBgActive} ${config.accentText}`}
                      >
                        {STEP_LABELS[step - 1]}
                      </span>
                    </div>

                    <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`qm-progress absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${config.gradient}`}
                        style={{ width: `${progressPercent + 33.33}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 overflow-y-auto px-6 py-7 md:px-10 md:py-8">
                  {submitted ? (
                    <SuccessView data={data} config={config} onClose={close} />
                  ) : (
                    <div key={step} className="qm-step-in">
                      {step === 1 && (
                        <Step1
                          config={config}
                          intent={data.intent}
                          setIntent={setIntent}
                        />
                      )}
                      {step === 2 && (
                        <Step2 config={config} data={data} update={update} />
                      )}
                      {step === 3 && (
                        <Step3
                          config={config}
                          data={data}
                          update={update}
                          onSubmit={handleSubmit}
                        />
                      )}
                    </div>
                  )}
                </div>

                {!submitted && (
                  <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-4 md:px-10">
                    <div className="flex items-center justify-between gap-3">
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
                        <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          <span>Encrypted · No spam · No commitment</span>
                        </div>
                      )}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={next}
                          disabled={
                            (step === 1 && !canProceed1) ||
                            (step === 2 && !canProceed2)
                          }
                          className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${config.gradient} px-7 py-3 font-display text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-lg`}
                        >
                          <span className="relative z-10">Continue</span>
                          <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={!canSubmit}
                          className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${config.gradient} px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40`}
                        >
                          <span className="relative z-10">Get My Quotes</span>
                          <Sparkles className="relative z-10 h-4 w-4" />
                          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes qm-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes qm-pop-in {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes qm-step-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes qm-progress-shimmer {
          0% { background-position: 0 0; }
          100% { background-position: 200% 0; }
        }
        :global(.qm-fade-in) { animation: qm-fade 220ms ease-out; }
        :global(.qm-pop) { animation: qm-pop-in 280ms cubic-bezier(0.16, 1, 0.3, 1); }
        :global(.qm-step-in) { animation: qm-step-fade 280ms ease-out; }
        :global(.qm-progress) {
          background-size: 200% 100%;
          animation: qm-progress-shimmer 2.4s linear infinite;
        }
      `}</style>
    </>
  );
}

function BrandPanel({ config, VehicleIcon, step, submitted }) {
  const points = [
    { icon: Zap, text: "Quotes in under 2 minutes" },
    { icon: Wallet, text: "Save up to 40% on premiums" },
    { icon: HeartHandshake, text: "Cashless network garages" },
    { icon: HeadphonesIcon, text: "Expert support, every step" },
  ];

  return (
    <div
      className={`relative hidden overflow-hidden bg-gradient-to-br ${config.gradient} text-white lg:flex lg:flex-col`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute right-10 top-32 h-32 w-32 rounded-full border border-white/10"
        aria-hidden
      />
      <div
        className="absolute right-20 top-40 h-20 w-20 rounded-full border border-white/15"
        aria-hidden
      />

      <div className="relative flex flex-col p-10">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ring-1 ring-white/20">
            <Star className="h-3 w-3 fill-current" />
            Top Insurers
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ring-1 ring-white/20">
            <ShieldCheck className="h-3 w-3" />
            Secure
          </span>
        </div>

        <div className="relative mt-8 flex h-44 items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-44 w-44 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 qm-float" />
          </div>
          <div className="relative">
            <VehicleIcon
              className="h-32 w-32 drop-shadow-2xl qm-float-slow"
              strokeWidth={1.25}
            />
          </div>
        </div>

        <h2
          id="quote-modal-title"
          className="mt-8 font-display text-3xl font-extrabold leading-tight"
        >
          {submitted ? (
            <>You're all set <span className="text-white/80">·</span> 🎉</>
          ) : (
            <>
              Get instant <br />
              {config.vehicleNoun} insurance quotes
            </>
          )}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/85">
          {submitted
            ? "Our team is already on it. Quotes will arrive in your inbox within minutes."
            : "Compare top insurers, get the best premium, and download your e-policy — all without lifting a paper."}
        </p>

        {!submitted && (
          <ul className="mt-6 space-y-2.5">
            {points.map((p) => (
              <li
                key={p.text}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm ring-1 ring-white/15"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
                  <p.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">{p.text}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center gap-3 border-t border-white/15 pt-5">
          <div className="flex -space-x-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm"
              />
            ))}
          </div>
          <div className="text-xs">
            <div className="font-bold">10,000+ riders insured</div>
            <div className="text-white/70">99% on-time delivery</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes qm-float-anim {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes qm-float-anim-slow {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        :global(.qm-float) { animation: qm-float-anim 4s ease-in-out infinite; }
        :global(.qm-float-slow) { animation: qm-float-anim-slow 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

function MobileBrandStrip({ config, VehicleIcon }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${config.gradient} px-6 pb-4 pt-7 text-white lg:hidden`}
    >
      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl"
        aria-hidden
      />
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
          <VehicleIcon className="h-8 w-8" strokeWidth={1.25} />
        </div>
        <div>
          <h2 className="font-display text-base font-extrabold leading-tight">
            Get instant {config.vehicleNoun} insurance quotes
          </h2>
          <p className="mt-0.5 text-xs text-white/85">
            3 quick steps · No paperwork · No inspection
          </p>
        </div>
      </div>
    </div>
  );
}

function StepHeading({ tagline, title, accentText }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {tagline}
      </p>
      <h3
        className={`mt-1 font-display text-2xl font-extrabold leading-tight ${accentText} md:text-3xl`}
      >
        {title}
      </h3>
    </div>
  );
}

function Step1({ config, intent, setIntent }) {
  const VehicleIcon =
    VEHICLE_ICONS[config.vehicleType || config.vehicleNoun] || Bike;
  const options = [
    {
      id: "new",
      title: "Buy New Policy",
      sub: "First time, or for a new vehicle",
      icon: PlusCircle,
    },
    {
      id: "renew",
      title: "Renew Existing Policy",
      sub: "Current policy is expiring or expired",
      icon: RefreshCw,
    },
  ];
  return (
    <>
      <MobileBrandStrip config={config} VehicleIcon={VehicleIcon} />
      <StepHeading
        tagline="Let's start"
        title="What do you need today?"
        accentText="text-slate-900"
      />

      <div className="mt-6 grid gap-3">
        {options.map((o) => {
          const selected = intent === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setIntent(o.id)}
              className={`group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                selected
                  ? `${config.cardBorderActive} ${config.cardBgActive} shadow-lg`
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {selected && (
                <span
                  className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${config.gradient} opacity-[0.04]`}
                />
              )}
              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md transition-all group-hover:scale-110 ${
                    selected
                      ? `bg-gradient-to-br ${config.gradient} text-white`
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <o.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-base font-bold text-slate-900">
                    {o.title}
                  </h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    {o.sub}
                  </p>
                </div>
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                    selected
                      ? `${config.accentBg} border-transparent`
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {selected && <Check className="h-3.5 w-3.5 text-white" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function Step2({ config, data, update }) {
  const VehicleIcon =
    VEHICLE_ICONS[config.vehicleType || config.vehicleNoun] || Bike;
  return (
    <>
      <MobileBrandStrip config={config} VehicleIcon={VehicleIcon} />
      <StepHeading
        tagline="Tell us about your ride"
        title={`${config.vehicleNounTitle} Details`}
        accentText="text-slate-900"
      />

      <div className="mt-6 space-y-4">
        <Field icon={Hash} label="Registration Number" required accentText={config.accentText}>
          <input
            type="text"
            value={data.regNumber}
            onChange={update("regNumber")}
            placeholder="e.g. KA 01 AB 1234"
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium uppercase tracking-wider text-slate-900 outline-none transition-all placeholder:font-normal placeholder:tracking-normal placeholder:text-slate-400 focus:border-slate-400"
          />
        </Field>

        <Field icon={Calendar} label="Registration Date" required accentText={config.accentText}>
          <input
            type="date"
            value={data.regDate}
            onChange={update("regDate")}
            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all focus:border-slate-400"
          />
        </Field>

        <div
          className={`flex items-start gap-2 rounded-xl border-2 border-dashed border-slate-200 ${config.cardBgActive} p-3 text-xs text-slate-700`}
        >
          <Sparkles className={`mt-0.5 h-4 w-4 shrink-0 ${config.accentText}`} />
          <span>
            We use these only to fetch the best premium options from top
            insurers — never shared without your consent.
          </span>
        </div>
      </div>
    </>
  );
}

function Step3({ config, data, update, onSubmit }) {
  const VehicleIcon =
    VEHICLE_ICONS[config.vehicleType || config.vehicleNoun] || Bike;
  return (
    <>
      <MobileBrandStrip config={config} VehicleIcon={VehicleIcon} />
      <StepHeading
        tagline="Almost there"
        title="Where should we send the quotes?"
        accentText="text-slate-900"
      />

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
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
              rows={2}
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
      </form>
    </>
  );
}

function Field({ icon: Icon, label, required, accentText, children }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 font-display text-xs font-bold text-slate-700">
        <Icon className={`h-3.5 w-3.5 ${accentText}`} />
        {label}
        {required && <span className="text-rose-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function SuccessView({ data, config, onClose }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-ping rounded-full bg-emerald-300 opacity-30" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-lg">
          <Check className="h-10 w-10" strokeWidth={2.5} />
        </div>
      </div>
      <h2 className="mt-6 font-display text-2xl font-extrabold text-slate-900 md:text-3xl">
        Quotes are on the way!
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
        Thanks <span className="font-bold text-slate-900">{data.name}</span> —
        we'll share tailored {config.vehicleNoun} insurance quotes on{" "}
        <span className="font-bold text-slate-900">{data.email}</span> and{" "}
        <span className="font-bold text-slate-900">+91 {data.mobile}</span>.
      </p>

      <div className="mx-auto mt-7 grid max-w-md gap-2.5 text-left">
        <div className="flex items-start gap-3 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 px-4 py-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
          <div>
            <div className="font-display text-sm font-bold text-slate-900">
              Multi-insurer quotes
            </div>
            <div className="text-xs text-slate-600">
              Best 3-5 options for you to compare.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 px-4 py-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
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

      <button
        type="button"
        onClick={onClose}
        className="mt-7 inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-2.5 font-display text-sm font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
      >
        Close
      </button>
    </div>
  );
}
