'use client';

import { motion } from 'framer-motion';

const Benefits = () => {
    const metrics = [
        { label: 'Delay Risk Reduction', value: '-30%', desc: 'By detecting risks 4–8 weeks early.' },
        { label: 'Cost Overruns', value: '-20%', desc: 'Through causal analytics & forecasts.' },
        { label: 'Manual Reporting', value: '70% Less', desc: 'Automated dashboards & alerts.' },
        { label: 'Design Conflicts', value: 'Zero', desc: 'Resolved before site execution.' },
    ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-3xl font-bold text-white mb-4">Business Outcomes You Can Measure</h2>
            <p className="text-gray-400">Real impact, not just vanity metrics.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-zinc-950 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-900/10 group"
                >
                    <div className="text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {metric.value}
                    </div>
                    <div className="text-lg font-medium text-gray-300 mb-4">
                        {metric.label}
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        {metric.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
