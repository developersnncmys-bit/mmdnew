import Link from "next/link";
import { Landmark, ArrowRight } from "lucide-react";

export default function CscStrip() {
  return (
    <section className="border-y border-blue-200 bg-blue-50 px-[6%] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-10">
        <div className="inline-flex shrink-0 items-center gap-3.5 rounded-xl border border-blue-200 bg-white px-5 py-4 shadow-sm">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
            <Landmark className="h-6 w-6" strokeWidth={1.75} />
          </span>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.13em] text-blue-600">
              Government Registered
            </div>
            <div className="mt-0.5 font-display text-[15px] font-bold text-slate-900">
              CSC Approved Agency
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[260px]">
          <h3 className="font-display text-[20px] font-extrabold tracking-[-0.4px] text-slate-900">
            Officially Registered. Fully Authorised.
          </h3>
          <p className="mt-1.5 max-w-[460px] text-[14px] leading-[1.65] text-slate-500">
            Make My Documents is approved by the Common Service Center (CSC) —
            e-Governance Services India Limited. Your documents are handled by
            a recognised, authorised agency.
          </p>
        </div>
        <Link
          href="#contact"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Get Started
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
