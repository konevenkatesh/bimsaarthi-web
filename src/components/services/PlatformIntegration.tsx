'use client';

import { motion } from 'framer-motion';

const PlatformIntegration = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Diagram */}
        <div className="relative h-[400px] flex items-center justify-center">
             {/* Flow Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.path 
                    d="M 50,200 C 150,200 150,100 250,100" 
                    fill="none" 
                    stroke="url(#flowGrad)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
                 <motion.path 
                    d="M 50,200 C 150,200 150,300 250,300" 
                    fill="none" 
                    stroke="url(#flowGrad)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
                />
                 <motion.path 
                    d="M 350,200 L 550,200" 
                    fill="none" 
                    stroke="url(#flowGrad)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
                />
            </svg>

            {/* Nodes */}
            <div className="relative w-full h-full">
                {/* Service Inputs */}
                <div className="absolute top-[80px] left-[20px] bg-zinc-900 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                    BIM Services
                </div>
                <div className="absolute bottom-[80px] left-[20px] bg-zinc-900 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                    Planning Services
                </div>

                {/* Platform Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-900/20 border border-blue-500/30 rounded-full flex flex-col items-center justify-center p-4 backdrop-blur-sm z-10 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">B</span>
                    </div>
                    <span className="text-xs font-bold text-white uppercase">BIMSaarthi Platform</span>
                </div>

                 {/* Outcome */}
                 <div className="absolute top-1/2 right-[20px] -translate-y-1/2 bg-green-900/20 border border-green-500/30 px-6 py-3 rounded-lg text-green-400 font-bold backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                    Actionable Intelligence
                </div>
            </div>
        </div>

        {/* Right: Text Content */}
        <div>
            <h2 className="text-3xl font-bold text-white mb-6">Services Built to Power the Platform</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                All our services are designed to produce structured, platform-ready data. Service outputs directly feed the BIMSaarthi Platform’s knowledge graph, digital twin, and intelligence modules, ensuring faster adoption and higher return on investment.
            </p>
            
            <ul className="space-y-4">
                {[
                    "Standardized Data Schema",
                    "Ontology-Compliant Models",
                    "Execution-Ready Digital Twins"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">✓</div>
                        <span className="text-gray-300">{item}</span>
                    </div>
                ))}
            </ul>
        </div>

      </div>
    </section>
  );
};

export default PlatformIntegration;
