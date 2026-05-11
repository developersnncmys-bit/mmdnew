const items = [
  "Passport Services",
  "PAN Card",
  "Visa Assistance",
  "Police Clearance Certificate",
  "Senior Citizen Card",
  "Rental Agreement",
  "FSSAI Food License",
  "Health Insurance",
  "Life Insurance",
  "Bike & Car Insurance",
];

export default function ServicesMarquee() {
  const repeated = [...items, ...items];
  return (
    <div className="flex items-center gap-0 overflow-hidden bg-slate-950 py-3.5">
      <div className="shrink-0 border-r border-white/10 px-8 pl-[6%] text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
        Services
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-2.5 border-r border-white/[0.08] px-7 text-[13px] text-white/45"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
