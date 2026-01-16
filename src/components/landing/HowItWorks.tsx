"use client";

import { motion } from "framer-motion";
import { Bot, Box, Network, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Box size={32} className="text-blue-400" />,
      title: "Import Data",
      desc: "Upload IFC models, P6 schedules, and Excel BOQs. System auto-extracts entities.",
    },
    {
      icon: <Network size={32} className="text-purple-400" />,
      title: "Build Graph",
      desc: "Our engine maps relationships (Task relies on Element, Element has Cost).",
    },
    {
      icon: <Bot size={32} className="text-pink-400" />,
      title: "AI Analysis",
      desc: "Agents traverse the graph to find conflicts, risks, and optimization opportunities.",
    },
    {
      icon: <Zap size={32} className="text-green-400" />,
      title: "Actionable Insights",
      desc: "Get predictive alerts for delays and cost overruns before they happen.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">From raw files to intelligent decisions in four steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
           {/* Connection Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-background/80 backdrop-blur md:bg-transparent"
            >
              <div className="w-24 h-24 mx-auto bg-[#0f1014] rounded-full border border-white/10 flex items-center justify-center mb-6 shadow-xl relative z-10 group hover:border-blue-500/50 transition-colors">
                {step.icon}
                <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-center px-4">
                <div className="text-sm font-bold text-muted-foreground mb-2">STEP 0{idx + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
