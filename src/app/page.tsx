import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TransparencySection } from "@/components/TransparencySection";
import { UrgentNeedsSection } from "@/components/UrgentNeedsSection";
import { DonationSection } from "@/components/DonationSection";
import { TeamAndFaqSection } from "@/components/TeamAndFaqSection";
import { ImpactSection } from "@/components/ImpactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf7] text-navy antialiased">
      <Hero />
      <AboutSection />
      <hr className="border-navy/5 container-page mx-auto" />
      <FeaturesSection />
      <hr className="border-navy/5 container-page mx-auto" />
      <TransparencySection />
      <hr className="border-navy/5 container-page mx-auto" />
      <UrgentNeedsSection />
      <hr className="border-navy/5 container-page mx-auto" />
      <DonationSection />
      <hr className="border-navy/5 container-page mx-auto" />
      <TeamAndFaqSection />
      <ImpactSection />
    </main>
  );
}
