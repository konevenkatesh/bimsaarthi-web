'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Lightbulb, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

interface UseCase {
  title: string;
  desc: string;
  outcome: string;
}

interface RoleSolutionProps {
  id: string;
  role: string;
  headline: string;
  problem: string;
  howItHelps: string;
  improvements: string[];
  finalOutcome: string;
  useCases: UseCase[];
  index: number;
}

const RoleSolution = ({ id, role, headline, problem, howItHelps, improvements, finalOutcome, useCases, index }: RoleSolutionProps) => {
  const [activeUseCase, setActiveUseCase] = useState<UseCase | null>(null);

  return (
    <section id={id} className="py-24 relative group bg-black border-t border-white/5 overflow-hidden">
      
      {/* Dynamic Background Gradient */}
      <div className={cn(
          "absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b opacity-20 blur-[120px] rounded-full pointer-events-none transition-colors duration-700",
          index % 2 === 0 ? "from-blue-900 to-transparent" : "from-purple-900 to-transparent"
      )} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Main Content (7 cols) */}
            <div className={cn("lg:col-span-7 flex flex-col justify-center", index % 2 !== 0 && "lg:order-2")}>
                <div className="flex items-center gap-3 mb-6">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900 border border-white/10", 
                        index % 2 === 0 ? "text-blue-400" : "text-purple-400")}>
                        <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <span className="text-gray-400 font-mono text-sm uppercase tracking-wider">Solution for</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{role}</h2>
                <h3 className="text-xl text-gray-200 font-light mb-8 italic border-l-2 border-white/20 pl-6">
                    "{headline}"
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors">
                        <h4 className="text-sm text-red-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
                            The Challenge
                        </h4>
                        <p className="text-gray-400 leading-relaxed text-sm">{problem}</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors">
                        <h4 className={cn("text-sm uppercase tracking-wider font-bold mb-3 flex items-center gap-2", 
                            index % 2 === 0 ? "text-blue-400" : "text-purple-400")}>
                            BIMSaarthi Approach
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">{howItHelps}</p>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                     <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Improvements</h4>
                     <div className="grid sm:grid-cols-2 gap-3">
                        {improvements.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300 bg-white/5 px-4 py-3 rounded-lg border border-white/5">
                                <Check className={cn("w-4 h-4 shrink-0", index % 2 === 0 ? "text-blue-500" : "text-purple-500")} />
                                <span className="text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                 <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border-l-4 border-white/20">
                    <p className="text-white font-medium">
                        <span className="text-gray-500 uppercase text-xs font-bold mr-2">Outcome:</span>
                        {finalOutcome}
                    </p>
                 </div>
            </div>

            {/* Interactive Sidebar (5 cols) - Sticky */}
            <div className={cn("lg:col-span-5 space-y-6 sticky top-32", index % 2 !== 0 && "lg:order-1")}>
                 <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Sparkles className="w-24 h-24 text-white" />
                    </div>

                    <div className="relative z-10">
                        <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                             <Lightbulb className="w-5 h-5 text-yellow-400" />
                             In Practice
                        </h4>
                        <p className="text-gray-400 text-sm mb-6">Real-world scenarios where this solution applies.</p>

                        <div className="space-y-4">
                            {useCases.map((useCase, i) => (
                                <motion.button
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveUseCase(useCase)}
                                    className="w-full text-left p-5 rounded-xl bg-black border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all group/card"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h5 className="font-bold text-white group-hover/card:text-blue-400 transition-colors">{useCase.title}</h5>
                                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover/card:translate-x-1 transition-transform" />
                                    </div>
                                    <p className="text-xs text-gray-500 line-clamp-2">{useCase.desc}</p>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="flex justify-center">
                    <div className="h-24 w-px bg-gradient-to-b from-white/20 to-transparent" />
                </div>
            </div>

        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activeUseCase && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                onClick={() => setActiveUseCase(null)}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl shadow-black/50 relative"
                >
                    <button 
                        onClick={() => setActiveUseCase(null)}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-8">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">{activeUseCase.title}</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm text-gray-500 uppercase font-bold mb-2">Scenario</h4>
                                <p className="text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4">{activeUseCase.desc}</p>
                            </div>
                            
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                                <h4 className="text-sm text-green-400 uppercase font-bold mb-2">Outcome</h4>
                                <p className="text-white text-sm font-medium">{activeUseCase.outcome}</p>
                            </div>
                        </div>
                        
                         <button 
                            onClick={() => setActiveUseCase(null)}
                            className="mt-8 w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Got it
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default RoleSolution;
