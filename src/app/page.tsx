import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";
import { IGStatsSection } from "@/components/IGStatsSection";
import { PaidAdSection } from "@/components/PaidAdSection";
import { OrganicRow1Section } from "@/components/OrganicRow1Section";
import { OrganicExamplesSection } from "@/components/OrganicExamplesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PhotographySection } from "@/components/PhotographySection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandsSection />
      <IGStatsSection />
      <PaidAdSection />
      <OrganicRow1Section />
      <OrganicExamplesSection />
      <TestimonialsSection />
      <ServicesSection />
      <PhotographySection />
      <ContactSection />
    </main>
  );
}
