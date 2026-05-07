import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import VisaBanner from "@/components/sections/visa-banner";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import AssociatedWith from "@/components/sections/associated-with";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <VisaBanner />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <AssociatedWith />
    </main>
  );
}
