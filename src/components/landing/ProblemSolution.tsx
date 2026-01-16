"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, FileX, Layers, Network, Zap } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    {
      icon: <FileX className="text-red-400" size={32} />,
      title: "Static BIM Data",
      description: "Models are trapped in files, disconnected from real-time project schedules and costs.",
    },
    {
      icon: <AlertTriangle className="text-orange-400" size={32} />,
      title: "Disconnected Insights",
      description: "Schedules in P6, costs in Excel, and models in Revit never talk to each other.",
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Reactive Decisions",
      description: "Managers find out about delays and overruns weeks after they happen.",
    },
  ];

  const solutions = [
    {
      icon: <Network className="text-blue-400" size={32} />,
      title: "Project Knowledge Graph",
      description: "A unified brain connecting BIM elements, tasks, resources, and risks.",
    },
    {
      icon: <Layers className="text-purple-400" size={32} />,
      title: "Active Intelligence",
      description: "AI Agents that constantly query the graph to predict delays and suggest fixes.",
    },
    {
      icon: <CheckCircle2 className="text-green-400" size={32} />,
      title: "Real-time Control",
      description: "Live dashboards that flag risks before they become critical issues.",
    },
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">From Chaos to Control</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Construction projects are complex. Your data shouldn't be.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Problem Column */}
          <div className="space-y-8 relative">
            <h3 className="text-2xl font-semibold mb-8 text-center text-red-400/80">The Problem</h3>
             {/* Vertical line */}
             <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-red-500/20 to-transparent hidden md:block" />
            
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/10 hover:border-red-500/20 transition-all"
              >
                <div className="shrink-0 pt-1">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solution Column */}
          <div className="space-y-8 relative">
             <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400/80">The Solution</h3>
             {/* Vertical line */}
             <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/20 to-transparent hidden md:block" />

            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/20 transition-all"
              >
                <div className="shrink-0 pt-1">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
