import InsuranceQuoteForm from "@/components/sections/insurance-quote-form";

export const metadata = {
  title: "Buy / Renew Two-Wheeler Insurance | Make My Documents",
  description:
    "Get instant two-wheeler insurance quotes — buy a new policy or renew your existing one in 3 quick steps. No inspection, no paperwork.",
};

const config = {
  vehicleNoun: "bike",
  vehicleNounTitle: "Bike",
  bgClass: "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800",
  gradient: "from-blue-600 to-indigo-700",
  accentBg: "bg-blue-600",
  accentBgHover: "hover:bg-blue-700",
  accentText: "text-blue-700",
  accentRing: "ring-blue-400",
  cardBgActive: "bg-blue-50",
  cardBorderActive: "border-blue-500",
  backHref: "/insurance/two-wheeler",
};

export default function TwoWheelerBuyPage() {
  return <InsuranceQuoteForm config={config} />;
}
