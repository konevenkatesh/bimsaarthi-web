'use client';

import { motion } from 'framer-motion';

const SolutionsHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Role-Based Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Solutions Built Around <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Project Responsibilities
                </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
                Construction projects succeed or fail based on how effectively responsibilities are executed. 
                BIMSaarthi delivers role-based solutions that align directly with how project teams work—enabling 
                better decisions, earlier risk detection, and measurable outcomes.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHero;
