"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity, Brain, Cpu, Database, Eye, FileText, Network, X, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Pillar {
  id: number;
  title: string;
  shortTitle: string;
  icon?: any;
  image?: string;
  description: string;
  tech: string;
  x: number;
  y: number;
}

// Helper to calculate position on a circle
const getPosition = (index: number, total: number, radius: number = 38) => {
  const angle = (index * (360 / total) - 90) * (Math.PI / 180); // Start at -90deg (Top)
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
};

const pillarsData = [
  {
    title: "01. Construction Knowledge Graphs",
    shortTitle: "Knowledge Graphs",
    icon: Network,
    image: "/images/pillar_1.png",
    description: "IproK Ontology Framework structures construction domain knowledge to enable semantic reasoning.",
    tech: "OWL • RDF • SPARQL • IFC",
  },
  {
    title: "02. Digital Twin Intelligence",
    shortTitle: "Digital Twin",
    icon: Database,
    image: "/images/pillar_2.png",
    description: "Live synchronization between design intent and on-site reality, enabling simulation and predictive control.",
    tech: "BIM • IoT • Real-time Sync",
  },
  {
    title: "03. Compliance & Regulatory AI",
    shortTitle: "Compliance AI",
    icon: FileText,
    image: "/images/pillar_3.png",
    description: "Automated compliance checking against Indian standards ensuring zero gaps.",
    tech: "NBC • IS Codes • Automated Checks",
  },
  {
    title: "04. Predictive Analytics",
    shortTitle: "Predictive AI",
    icon: Activity,
    image: "/images/pillar_4.png",
    description: "Early prediction of cost overruns and schedule delays through learned failure patterns.",
    tech: "ML • Time-Series • Risk Models",
  },
  {
    title: "05. Computer Vision",
    shortTitle: "Computer Vision",
    icon: Eye,
    image: "/images/pillar_5.png",
    description: "Continuous site monitoring for progress tracking, safety compliance, and defect detection.",
    tech: "Object Detection • Segmentation",
  },
  {
    title: "06. Construction NLP",
    shortTitle: "NLP & Docs",
    icon: Brain,
    image: "/images/pillar_6.png",
    description: "Automated understanding of tenders, contracts, and RFIs for faster decision-making.",
    tech: "RAG • NER • Extraction",
  },
  {
    title: "07. Foundation Models",
    shortTitle: "Foundation Models",
    icon: Cpu,
    image: "/images/layers.png", // Reusing the layers image for this pillar
    description: "Domain-adapted LLMs that understand construction terminology and workflows.",
    tech: "Fine-tuning • Domain Embeddings",
  },
];

const pillars: Pillar[] = pillarsData.map((p, i) => ({
  id: i + 1,
  ...p,
  ...getPosition(i, 7),
}));

export function ResearchPillars() {
  const [activePillar, setActivePillar] = useState<Pillar | null>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActivePillar(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="relative py-20 bg-neutral-950 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Seven Pillars of <span className="text-cyan-400">Construction Intelligence</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 max-w-2xl mx-auto"
          >
            A unified intelligence architecture powering the next generation of construction.
          </motion.p>
        </div>

        <div className="relative w-full max-w-[800px] mx-auto aspect-square md:aspect-auto md:h-[700px]">
           
           {/* Center Core (Static) */}
           <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-900 to-black border-4 border-gray-800 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
           >
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-gray-700 animate-[spin_20s_linear_infinite_reverse]" />
              
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 mb-2" />
              <h3 className="text-xs md:text-sm font-bold text-white tracking-widest uppercase">The BIMSaarthi</h3>
              <div className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Intelligence Core
              </div>
           </motion.div>

           {/* Decorative Ring Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 rotate-0">
             <circle cx="50%" cy="50%" r="38%" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
             <circle cx="50%" cy="50%" r="28%" fill="none" stroke="#1e293b" strokeWidth="40" strokeOpacity="0.3" />
           </svg>


          {/* Pillars */}
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
              style={{ left: `${pillar.x}%`, top: `${pillar.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: pillar.id * 0.1 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                setActivePillar(pillar);
              }}
            >
              <div className={`relative group flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border-2 bg-black/90 backdrop-blur-md transition-all duration-300 ${activePillar?.id === pillar.id ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] scale-110' : 'border-gray-700 hover:border-cyan-500/50'}`}>
                {pillar.icon && <pillar.icon className={`w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 transition-colors ${activePillar?.id === pillar.id ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-200'}`} />}
                <span className={`text-[9px] md:text-[10px] font-bold text-center px-1 leading-tight ${activePillar?.id === pillar.id ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                  {pillar.shortTitle}
                </span>
                
                {/* Number Badge */}
                <div className="absolute -top-3 -right-1 bg-gray-900 border border-gray-700 text-[9px] font-mono text-cyan-500 px-1.5 py-0.5 rounded-full">
                    {String(pillar.id).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal/Overlay */}
        <AnimatePresence>
          {activePillar && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              onClick={(e) => e.stopPropagation()} 
              className="fixed top-20 right-4 md:right-10 w-[90vw] md:w-full max-w-sm bg-neutral-900/95 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl z-50 shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <button 
                onClick={() => setActivePillar(null)}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-white bg-black/50 rounded-full p-1 md:bg-transparent"
              >
                <X size={20} />
              </button>

              {/* Image in Modal */}
              {activePillar.image ? (
                  <div className="relative w-full h-40 md:h-48 mb-4 rounded-lg overflow-hidden border border-gray-800 bg-black">
                      <Image 
                        src={activePillar.image} 
                        alt={activePillar.title} 
                        fill 
                        className="object-contain"
                      />
                  </div>
              ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-950/50 rounded-lg">
                         {activePillar.icon && <activePillar.icon className="w-6 h-6 text-cyan-400" />}
                    </div>
                  </div>
              )}

              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{activePillar.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {activePillar.description}
              </p>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                    {activePillar.tech.split('•').map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-cyan-200 border border-gray-700">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
