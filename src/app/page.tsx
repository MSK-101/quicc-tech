import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Founder } from "@/components/sections/founder";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Showcase } from "@/components/sections/showcase";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WhyQuicc } from "@/components/sections/why-quicc";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Showcase />
      <WhyQuicc />
      <Process />
      <TechStack />
      <Pricing />
      <Founder />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
