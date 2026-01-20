'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Database, FileWarning } from 'lucide-react';

const ProblemCards = () => {
    const problems = [
        {
            icon: Database,
            title: "Isolated Data Silos",
            desc: "Data lives in silos; decisions happen too late.",
            impact: "Delays already locked in."
        },
        {
            icon: Clock,
            title: "Reactive Decisions",
            desc: "Schedules update, but risk patterns go unnoticed.",
            impact: "Recovery becomes impossible."
        },
        {
            icon: FileWarning,
            title: "Missing Context",
            desc: "BIM geometry lacks context for cost, risk, and execution.",
            impact: "Blind spots in budgeting."
        },
        {
            icon: AlertTriangle,
            title: "Compliance Gaps",
            desc: "Compliance checks are manual and disconnected.",
            impact: "Regulatory risks multiply."
        }
    ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-white mb-4">The Challenges Construction Teams Face Today</h2>
            <p className="text-gray-400">Why typical projects run over budget despite modern tools.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((prob, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-zinc-900 border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-all duration-500 overflow-hidden"
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 group-hover:text-red-400 transition-colors">
                            <prob.icon className="w-6 h-6 text-gray-400 group-hover:text-red-400" />
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-100 transition-colors">
                            {prob.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {prob.desc}
                        </p>

                        <div className="pt-6 border-t border-white/5 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <span className="text-xs font-mono text-red-400 uppercase tracking-wider block mb-1">Impact</span>
                            <span className="text-sm text-white font-medium">{prob.impact}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemCards;
