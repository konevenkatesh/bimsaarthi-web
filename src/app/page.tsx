import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { EnterpriseScenarios } from "@/components/landing/EnterpriseScenarios";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Positioning } from "@/components/landing/Positioning";
import { ProblemStatement } from "@/components/landing/ProblemStatement";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { RequestDemo } from "@/components/landing/RequestDemo";
import { ResearchValidation } from "@/components/landing/ResearchValidation";
import { UseCases } from "@/components/landing/UseCases";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Positioning />
        <ComparisonTable />
        <EnterpriseScenarios />
        <ProductPreview />
        <HowItWorks />
        <UseCases />
        <ResearchValidation />
        <RequestDemo />
      </main>
      <Footer />
    </div>
  );
}
