"use client";

import { motion } from "framer-motion";

export function OurStory() {
  return (
    <section className="py-24 relative bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Story</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* The Problem */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
             >
                <div className="mb-6 h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xl">
                    !
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The Problem We Saw</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Construction projects fail predictably. Delays cascade, costs overrun, risks become crises. Existing tools like Autodesk, Procore, or Primavera digitize workflows or give you files, but none of them answer: "Why is Block C delayed?". The tools were built by software engineers who learned construction terminology, not construction experts who code AI.
                </p>
            </motion.div>

             {/* Our Insight */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
             >
                <div className="mb-6 h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-xl">
                    💡
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Insight</h3>
                <p className="text-muted-foreground leading-relaxed">
                   After 4 years teaching construction management and researching AI, we saw a pattern: construction expertise and tech proficiency rarely coexist. The answer wasn't better workflow software, but intelligence systems that reason over construction relationships. This required people who think like project managers and code like AI engineers.
                </p>
             </motion.div>

             {/* The Solution */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
             >
                <div className="mb-6 h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 font-bold text-xl">
                    ✓
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                   BIMSaarthi — the first platform combining Knowledge Graph semantics, Evidence-Based Progress, and Construction-Specific AI. We're not replacing Autodesk or Procore. We're building the intelligence layer that sits on top, preventing problems before they start.
                </p>
             </motion.div>
        </div>
      </div>
    </section>
  );
}
