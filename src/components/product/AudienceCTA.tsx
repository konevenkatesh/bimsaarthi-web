'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Compass, GraduationCap, HardHat, Server } from 'lucide-react';

const AudienceCTA = () => {
    const roles = [
        { 
            icon: HardHat, 
            role: "Project Managers", 
            text: "Predict, prevent, and control project risks.",
            cta: "See Control Controls" 
        },
        { 
            icon: Compass, 
            role: "BIM Managers", 
            text: "Make BIM semantically useful beyond visualization.",
            cta: "Explore BIM Intel" 
        },
        { 
            icon: Server, 
            role: "IT & CTOs", 
            text: "Enterprise-ready, cloud-secure architecture.",
            cta: "View Architecture" 
        },
        { 
            icon: GraduationCap, 
            role: "Researchers", 
            text: "Open ontology + explainable models.",
            cta: "Read Documentation" 
        },
    ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-zinc-900 p-8 rounded-2xl overflow-hidden hover:bg-zinc-800 transition-all cursor-pointer border border-white/5 hover:border-white/20"
                >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />

                    <div className="relative z-10">
                        <item.icon className="w-10 h-10 text-gray-500 mb-6 group-hover:text-blue-400 transition-colors" />
                        
                        <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                        <p className="text-gray-400 text-sm mb-8 h-10">{item.text}</p>

                        <div className="flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            {item.cta} <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceCTA;
