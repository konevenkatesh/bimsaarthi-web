"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PartnersRoadmap() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        
        {/* Partners Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
             <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-4">Collaborations</h2>
             <h3 className="text-3xl font-bold text-white">Research Partners</h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos */}
             <div className="text-2xl font-serif text-gray-400 border border-gray-800 px-8 py-4 rounded-lg bg-neutral-900 hover:text-white hover:border-cyan-900 hover:bg-neutral-800 transition-all">
                NIT Karnataka
             </div>
             <div className="text-2xl font-sans font-bold text-gray-400 border border-gray-800 px-8 py-4 rounded-lg bg-neutral-900 hover:text-white hover:border-cyan-900 hover:bg-neutral-800 transition-all">
                Ratan Tata Innovation Hub
             </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold text-white">Innovation Roadmap</h2>
                <p className="text-gray-500 mt-2">The path to enterprise-grade construction intelligence.</p>
            </motion.div>

            <div className="space-y-8">
                {[
                    { q: "Q1 2026", title: "Ontology v2 & Tender RAG", desc: "Advanced semantic reasoning and document intelligence pipelines." },
                    { q: "Q2 2026", title: "Predictive AI & Digital Twin MVP", desc: "Real-time sync and cost/schedule risk prediction." },
                    { q: "Q3 2026", title: "Foundation Model Beta", desc: "First release of construction-specific LLMs and APIs." },
                    { q: "Q4 2026", title: "Enterprise Deployments", desc: "Full-scale government integrations and enterprise rollout." }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-6 p-6 border-l-2 border-gray-800 hover:border-cyan-500 transition-colors bg-gradient-to-r from-neutral-900/50 to-transparent rounded-r-xl"
                    >
                        <div className="min-w-[80px] text-cyan-500 font-mono font-bold pt-1">{item.q}</div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
                 <Link href="/contact">
                     <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105">
                         <span className="relative z-10">Propose Research Collaboration</span>
                         <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                         <div className="absolute inset-0 bg-cyan-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                     </button>
                 </Link>
            </div>

        </div>
      </div>
    </section>
  );
}
