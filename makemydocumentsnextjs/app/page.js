import Hero from "@/components/sections/hero";
import ServicesMarquee from "@/components/sections/services-marquee";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services";
import StatsBand from "@/components/sections/stats-band";
import CscStrip from "@/components/sections/csc-strip";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesMarquee />
      <Process />
      <Services />
      <StatsBand />
      <CscStrip />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
