'use client';

import { motion } from 'framer-motion';

const ProductDefinition = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-8 leading-relaxed">
            BIMSaarthi is an enterprise SaaS platform that transforms traditionally siloed construction data into{' '}
            <span className="text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 inline-block mx-1">
              semantic knowledge
            </span>{' '}
            and{' '}
            <span className="text-purple-400 font-bold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 inline-block mx-1">
              actionable intelligence
            </span>
            .
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Unlike traditional BIM viewers or project dashboards, BIMSaarthi connects BIM geometry, schedule logic, cost structures, and real-world data to deliver predictive, explainable insights throughout planning, execution, and handover phases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-12">
            {[
              { label: 'Not just visualization', value: "It's Understanding" },
              { label: 'Not just reports', value: "Actionable Predictions" },
              { label: 'Not just analytics', value: "Contextual Reasoning" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{item.label}</span>
                <span className="text-2xl font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDefinition;
