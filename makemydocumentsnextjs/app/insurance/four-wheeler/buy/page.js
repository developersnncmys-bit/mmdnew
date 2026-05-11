import InsuranceQuoteForm from "@/components/sections/insurance-quote-form";

export const metadata = {
  title: "Buy / Renew Four-Wheeler Insurance | Make My Documents",
  description:
    "Get instant car insurance quotes — buy a new policy or renew your existing one in 3 quick steps. Comprehensive, third-party, and add-on covers.",
};

const config = {
  vehicleNoun: "car",
  vehicleNounTitle: "Car",
  bgClass: "bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700",
  gradient: "from-amber-500 to-orange-600",
  accentBg: "bg-amber-600",
  accentBgHover: "hover:bg-amber-700",
  accentText: "text-amber-700",
  accentRing: "ring-amber-400",
  cardBgActive: "bg-amber-50",
  cardBorderActive: "border-amber-500",
  backHref: "/insurance/four-wheeler",
};

export default function FourWheelerBuyPage() {
  return <InsuranceQuoteForm config={config} />;
}
