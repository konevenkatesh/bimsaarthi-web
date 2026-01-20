"use client";

import { motion } from "framer-motion";
import { Brain, Check, Target, Zap } from "lucide-react";

export function Positioning() {
  const pillars = [
    {
      icon: <Target className="text-blue-400" size={32} />,
      title: "Evidence-Based Progress",
      desc: "Truth you can prove: Every activity linked to photos, quantities, and 3D location. No more fake progress. No more billing disputes.",
    },
    {
      icon: <Brain className="text-purple-400" size={32} />,
      title: "Knowledge Graph Intelligence",
      desc: "Instant causality: 'Which subcontractor is causing 60% of delays?' Your competitors need BI teams and weeks. BIMSaarthi knows instantly.",
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Predictive Risk Control",
      desc: "Foresight before failure: AI predicts delays, cost overruns, and bottlenecks per activity—before they cascade.",
    },
  ];

  return (
    <section className="py-24 bg-background relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 border border-blue-500/20">
            WHY ENTERPRISES CHOOSE US
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 italic">
            "BIMSaarthi tells me where my project will fail before it fails."
          </h2>
          <p className="text-xl text-white/80 font-medium">
             That's not marketing. That's control.
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                      <span className="text-red-400">✗</span> Procore and Autodesk collect data.
                  </div>
                  <div className="flex items-center gap-2">
                      <span className="text-red-400">✗</span> InEight and Oracle organize data.
                  </div>
                  <div className="flex items-center gap-2 md:col-span-2 justify-center font-bold text-white mt-2">
                       <Check className="text-green-400" size={16} /> BIMSaarthi understands data and predicts failure.
                  </div>
              </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 rounded-full bg-[#0f1014] border border-white/5 shadow-xl">
                    {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
