'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const PricingHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Hero Content */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Transparent Pricing</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Simple, Scalable Pricing for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Construction Intelligence
                </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                BIMSaarthi pricing is designed around project complexity, not user count. Choose the platform package that fits your project needs and add services only when required.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-white/10">
                    Request Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 rounded-lg font-medium flex items-center gap-2 transition-all">
                    <MessageSquare className="w-4 h-4" />
                    Discuss Pricing
                </button>
            </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 text-left bg-zinc-900/50 border border-white/5 rounded-3xl p-8 lg:p-12"
        >
            <div>
                 <h2 className="text-2xl font-bold text-white mb-4">How Our Pricing Works</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    Construction projects are complex. Our pricing reflects that reality.
                    BIMSaarthi uses a value-based pricing model aligned to project size, duration, and intelligence requirements — <span className="text-blue-400 font-semibold">not per-user subscriptions.</span>
                 </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
                {[
                    "Project-based & Recurring",
                    "Services Scoped Separately",
                    "No Per-User Limits",
                    "Flexible Scaling"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <span className="text-sm font-medium text-gray-300">{item}</span>
                    </div>
                ))}
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingHero;
