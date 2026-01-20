'use client';

import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: "Contact Us" }
        ]} 
      />

      <main className="relative pt-48 pb-20 lg:pb-32 min-h-screen">
         {/* Background Decor */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Left Column: Context & Hero (5 cols) */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                    <ContactHero />
                </div>

                {/* Right Column: Intelligent Form (7 cols) */}
                <div className="lg:col-span-7">
                    <ContactForm />
                </div>

            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
