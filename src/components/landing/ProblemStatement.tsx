"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FileX, Zap } from "lucide-react";

export function ProblemStatement() {
  const problems = [
    {
      icon: <FileX className="text-red-400" size={32} />,
      title: "Isolated Data Silos",
      description: "BIM data is locked in models, Schedule in P6, and Costs in Excel. They never talk to each other, creating blind spots.",
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Reactive Decisions",
      description: "Project managers find out about delays and overruns weeks after they happen, making recovery impossible.",
    },
    {
      icon: <AlertTriangle className="text-orange-400" size={32} />,
      title: "Missing Context",
      description: "Existing tools don't understand project semantics—they see lines and geometry, not 'Columns' that impact 'Budget'.",
    },
  ];

  return (
    <section className="py-24 bg-background relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why Construction Projects Still Fail</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
             Despite using BIM, 80% of projects run over budget. The problem isn't the model—it's the disconnection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-red-500/5 transition-all group"
              >
                <div className="mb-6 p-4 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
