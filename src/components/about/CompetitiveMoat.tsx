"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Layers, ShieldCheck } from "lucide-react";

export function CompetitiveMoat() {
    const differentiators = [
        {
            icon: <Database className="w-8 h-8 text-blue-400"/>,
            title: "IproK Knowledge Graph",
            desc: "Proprietary semantic ontology from PhD research at NIT Karnataka. A formal logic system for construction, not just a database."
        },
         {
            icon: <ShieldCheck className="w-8 h-8 text-green-400"/>,
            title: "Evidence-Based Progress",
            desc: "Auto-calculate % complete from evidence (photos, BIM), not estimates. Makes fake progress mathematically impossible."
        },
         {
            icon: <BrainCircuit className="w-8 h-8 text-purple-400"/>,
            title: "Construction-Specific AI",
            desc: "Models trained on real Indian project data. Understands BOQ terminology, Indian standards, and local workflows."
        },
         {
            icon: <Layers className="w-8 h-8 text-orange-400"/>,
            title: "Full-Stack Ownership",
            desc: "We own the schema, AI models, and BIM pipelines. No third-party dependencies for core intelligence."
        }
    ];

  return (
    <section className="py-24 relative bg-black overflow-hidden">
      
       {/* Background gradient */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-3xl p-8 md:p-12 mb-20 text-center"
        >
             <h2 className="text-lg font-mono text-blue-300 mb-4 tracking-widest uppercase">The Dual DNA</h2>
             <div className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Construction Domain Expertise <br/>
                <span className="text-white/50">+</span><br/>
                High Technology Proficiency
             </div>
             <div className="text-xl md:text-2xl text-blue-400 font-semibold">= Something Competitors Can't Replicate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
           <h2 className="text-3xl font-bold text-white mb-4">What Competitors Can't Copy</h2>
           <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                    <div className="shrink-0 pt-1">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
