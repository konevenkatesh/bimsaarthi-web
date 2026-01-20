'use client';

import { motion } from 'framer-motion';

const ProcessFlow = () => {
    const steps = [
        { num: '01', title: 'Import Data', desc: 'Ingest BIM models, schedules, and docs.' },
        { num: '02', title: 'Construct Graph', desc: 'Auto-map into a semantic knowledge graph.' },
        { num: '03', title: 'Apply AI', desc: 'Run predictive agents & risk models.' },
        { num: '04', title: 'Deliver Context', desc: 'Get actionable alerts & dashboards.' }
    ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">From Data to Decisions</h2>
            <p className="text-gray-400">Simple, Predictable, Explainable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[20px] left-0 w-full h-[2px] bg-white/10 -z-0" />
            
            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.2 }}
                    className="relative z-10 bg-zinc-950 p-6 pt-0 text-center"
                >
                    <div className="w-10 h-10 bg-zinc-900 border border-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
