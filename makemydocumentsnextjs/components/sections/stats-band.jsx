const stats = [
  { num: "1L+", label: "Customers Served" },
  { num: "10+", label: "Years in Service" },
  { num: "4.8★", label: "Google Rating" },
  { num: "CSC", label: "Govt. Approved" },
  { num: "3", label: "Offices in Bangalore" },
];

export default function StatsBand() {
  return (
    <section className="bg-blue-600 px-[6%]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 divide-x divide-white/15 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="py-10 text-center">
            <div className="font-display text-[36px] font-extrabold leading-none tracking-[-1px] text-white">
              {s.num}
            </div>
            <div className="mt-1.5 text-[12.5px] text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
