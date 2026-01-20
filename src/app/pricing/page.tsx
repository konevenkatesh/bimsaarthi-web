import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import PricingCTA from '@/components/pricing/PricingCTA';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPackages from '@/components/pricing/PricingPackages';
import ServiceAddons from '@/components/pricing/ServiceAddons';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Breadcrumb items={[{ label: "Pricing" }]} />
      
      <PricingHero />
      <PricingPackages />
      <ServiceAddons />
      <PricingFAQ />
      <PricingCTA />
      
      <Footer />
    </main>
  );
}
