'use client';

import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const SolutionsCTA = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
             
             {/* Abstract Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Find the Solution That Fits Your Role</h2>
                <p className="text-xl text-gray-400 mb-8">
                    Every role on a construction project faces different challenges. 
                    BIMSaarthi delivers targeted solutions built on a unified intelligence platform.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-white/10">
                            Request Demo <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-black/40 hover:bg-black/60 text-white border border-white/10 rounded-lg font-medium flex items-center gap-2 transition-all backdrop-blur-sm">
                            <MessageSquare className="w-4 h-4" />
                            Talk to Our Team
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
