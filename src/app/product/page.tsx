import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import AudienceCTA from '@/components/product/AudienceCTA';
import Benefits from '@/components/product/Benefits';
import Hero from '@/components/product/Hero';
import ModuleSystem from '@/components/product/ModuleSystem';
import PlatformArchitecture from '@/components/product/PlatformArchitecture';
import ProblemCards from '@/components/product/ProblemCards';
import ProcessFlow from '@/components/product/ProcessFlow';
import ProductDefinition from '@/components/product/ProductDefinition';
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Breadcrumb items={[{ label: "Product" }]} />
      <Hero />
      <ProductDefinition />
      <ProblemCards />
      <ModuleSystem />
      <PlatformArchitecture />
      <ProcessFlow />
      <Benefits />
      <AudienceCTA />
      <Footer />
    </main>
  );
}
