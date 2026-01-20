'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Box, Landmark, Rocket, School } from 'lucide-react';
import Link from 'next/link';

const EngagementModels = () => {
    const models = [
        {
            icon: Rocket,
            title: "Pilot Project",
            desc: "Prove value on a single active project site.",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: Box,
            title: "Platform + Services",
            desc: "End-to-end implementation and support.",
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        },
        {
            icon: School,
            title: "Research Partners",
            desc: "Joint innovation on new ontologies/AI.",
            color: "text-green-400",
            bg: "bg-green-500/10"
        },
        {
            icon: Landmark,
            title: "Government / PSU",
            desc: "Compliance and large-scale digital mandates.",
            color: "text-orange-400",
            bg: "bg-orange-500/10"
        }
    ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Engagement Cards */}
        <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white mb-4">How We Engage</h2>
             <p className="text-gray-400">Flexible models tailored to your scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {models.map((model, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-zinc-900 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors text-center"
                >
                    <div className={`w-12 h-12 rounded-xl ${model.bg} flex items-center justify-center mx-auto mb-6`}>
                        <model.icon className={`w-6 h-6 ${model.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{model.title}</h3>
                    <p className="text-sm text-gray-400">{model.desc}</p>
                </motion.div>
            ))}
        </div>

        {/* Final CTA */}
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5" />
            <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Digitalize Your Execution?</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold shadow-lg shadow-blue-900/20 transition-all hover:scale-105 flex items-center gap-2">
                            Start a Pilot <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10 rounded-lg font-medium transition-all">
                            Talk to Our Team
                        </button>
                    </Link>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default EngagementModels;
