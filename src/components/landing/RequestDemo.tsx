"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function RequestDemo() {
  return (
    <section id="request-demo" className="py-24 bg-gradient-to-b from-blue-900/10 to-black border-t border-white/5 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your project?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join the waitlist for BIMSaarthi and start managing your construction projects with real intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                    Request a Demo <ArrowRight className="h-4 w-4" />
                </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" /> Collaborate with Us
                </button>
            </Link>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
            Looking for academic partnership? <a href="mailto:research@bimsaarthi.com" className="text-blue-400 hover:underline">Contact our research team.</a>
        </p>
      </div>
    </section>
  );
}
