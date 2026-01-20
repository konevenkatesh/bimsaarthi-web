import { AboutHero } from "@/components/about/AboutHero";
import { CompetitiveMoat } from "@/components/about/CompetitiveMoat";
import { ContactSection } from "@/components/about/ContactSection";
import { CultureCareers } from "@/components/about/CultureCareers";
import { ImpactStats } from "@/components/about/ImpactStats";
import { LocationsCertifications } from "@/components/about/LocationsCertifications";
import { MissionVision } from "@/components/about/MissionVision";
import { OurStory } from "@/components/about/OurStory";
import { Team } from "@/components/about/Team";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Header />
      <main className="flex-grow relative">
        <Breadcrumb items={[{ label: "About" }]} />
        <AboutHero />
        <OurStory />
        <MissionVision />
        <CompetitiveMoat />
        <Team />
        <ImpactStats />
        <LocationsCertifications />
        <CultureCareers />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
