import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { ComplianceLifecycle } from "@/components/research/ComplianceLifecycle";
import { FoundationModels } from "@/components/research/FoundationModels";
import { HeroSection } from "@/components/research/HeroSection";
import { PartnersRoadmap } from "@/components/research/PartnersRoadmap";
import { ResearchPillars } from "@/components/research/ResearchPillars";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "R&D | BIMSaarthi",
  description: "Building the Intelligence Layer for Construction. Knowledge Graphs, Digital Twins, and Domain-Trained Foundation Models.",
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Header />
      <main className="flex-grow relative">
        <Breadcrumb items={[{ label: "Research" }]} />

        <HeroSection />
        <ResearchPillars />
        <FoundationModels />
        <ComplianceLifecycle />
        <PartnersRoadmap />
      </main>
      <Footer />
    </div>
  );
}
