const partners = [
  { name: "Paytm", className: "text-2xl font-bold tracking-tight", style: { color: "#00B9F1" }, render: (s) => (
    <>
      <span style={s}>Pay</span>
      <span style={{ color: "#002E6E" }}>tm</span>
    </>
  ) },
  { name: "CSC e-Governance", className: "text-2xl font-extrabold italic tracking-tighter", style: { color: "#1F3A93" }, sub: "e-Governance Services India Limited" },
  { name: "GroMo", className: "text-2xl font-bold lowercase tracking-tight", style: { color: "#3FA34D" } },
  { name: "Digital India", className: "text-xl font-bold", style: { color: "#1F3A93" }, sub: "Power To Empower" },
  { name: "GoDaddy", className: "text-2xl font-bold tracking-tight", style: { color: "#1BDBDB" } },
  { name: "Turtlemint Pro", className: "text-2xl font-bold tracking-tight", style: { color: "#0B0F2C" }, suffix: "PRO", suffixColor: "#3FA34D" },
];

function Logo({ p }) {
  return (
    <div className="flex h-20 min-w-[180px] shrink-0 flex-col items-center justify-center rounded-2xl border border-border/60 bg-card px-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md md:min-w-[220px]">
      <div className={p.className} style={p.style}>
        {p.render ? p.render(p.style) : (
          <>
            {p.name}
            {p.suffix && (
              <sup
                className="ml-1 text-xs font-bold"
                style={{ color: p.suffixColor }}
              >
                {p.suffix}
              </sup>
            )}
          </>
        )}
      </div>
      {p.sub && (
        <div className="mt-1 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
          {p.sub}
        </div>
      )}
    </div>
  );
}

export default function AssociatedWith() {
  const loop = [...partners, ...partners];

  return (
    <section id="associated" className="border-y bg-secondary/20 py-14 md:py-16">
      <div className="container">
        <div className="text-center">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground md:text-base">
            Associated With
          </h3>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full gradient-bg" />
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/40 to-transparent md:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/40 to-transparent md:w-32"
          aria-hidden
        />

        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <Logo key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
