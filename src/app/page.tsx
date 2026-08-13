import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Founder } from "@/components/sections/founder";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
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
      <Portfolio />
      <WhyQuicc />
      <Process />
      <TechStack />
      <Pricing />

      {/* Closing run: meet the person you'll work with, ask for the project,
          then reassure with proof and answers. */}
      <Founder />
      <Contact />
      <Testimonials />
      <Faq />
    </>
  );
}
