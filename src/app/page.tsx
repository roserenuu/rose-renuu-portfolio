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

function Blend({ from, to }: { from: string; to: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: "60px",
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        marginTop: "-1px",
        marginBottom: "-1px",
      }}
    />
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandsSection />
      <Blend from="#e9e9e9" to="#ecede8" />
      <IGStatsSection />
      <Blend from="#ecede8" to="#ddc7ab" />
      <PaidAdSection />
      <Blend from="#ddc7ab" to="#c8bbaa" />
      <OrganicRow1Section />
      <OrganicExamplesSection />
      <Blend from="#c8bbaa" to="#f8faf0" />
      <TestimonialsSection />
      <ServicesSection />
      <PhotographySection />
      <Blend from="#f8faf0" to="#ecede8" />
      <ContactSection />
    </main>
  );
}
