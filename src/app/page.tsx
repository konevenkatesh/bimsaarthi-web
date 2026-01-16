import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { ResearchValidation } from "@/components/landing/ResearchValidation";
import { UseCases } from "@/components/landing/UseCases";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <ProductPreview />
        <HowItWorks />
        <UseCases />
        <ResearchValidation />
      </main>
      <Footer />
    </div>
  );
}
