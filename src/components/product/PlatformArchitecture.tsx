'use client';

import { motion } from 'framer-motion';

const PlatformArchitecture = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">A Modular, Connected Architecture</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Built as a set of modular services that interoperate through a central semantic knowledge core.
                    </p>
                </div>

                {/* Architecture Diagram */}
                <div className="max-w-6xl mx-auto relative">
                    
                    {/* Connection Lines (Animated SVG) */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full opacity-30">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            {/* Horizontal Flow Lines */}
                            <motion.path 
                                d="M 0,100 L 1200,100" 
                                stroke="url(#lineGrad)" 
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {/* Layer 1: Data Sources */}
                        <div className="flex flex-col gap-4">
                            <div className="text-center mb-4">
                                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest">Data Sources</h3>
                            </div>
                            {['BIM Models', 'Schedules (P6/MSP)', 'Cost Data (ERP)', 'IoT / Sensors', 'Documents'].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-zinc-900 border border-white/10 p-4 rounded-lg text-center text-sm text-gray-300 hover:border-blue-500/50 transition-colors"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>

                        {/* Layer 2: Knowledge Core */}
                        <div className="flex flex-col justify-center gap-4 relative">
                            {/* Arrow */}
                            <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 text-blue-500/50">→</div>
                            
                            <div className="text-center mb-4">
                                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest">Knowledge Core</h3>
                            </div>
                            <div className="bg-blue-900/10 border border-blue-500/30 p-8 rounded-2xl text-center h-[320px] flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-colors" />
                                <div className="relative z-10">
                                    <div className="text-xl font-bold text-white mb-2">Semantic Graph</div>
                                    <div className="text-sm text-blue-200 mb-6">Ontology & Relationships</div>
                                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto animate-pulse flex items-center justify-center">
                                        <div className="w-12 h-12 bg-black rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layer 3: AI & Intelligence */}
                        <div className="flex flex-col justify-center gap-4 relative">
                             {/* Arrow */}
                             <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 text-purple-500/50">→</div>

                            <div className="text-center mb-4">
                                <h3 className="text-sm font-mono text-purple-400 uppercase tracking-widest">Intelligence</h3>
                            </div>
                            <div className="space-y-4">
                                {['Predictive Models', 'Causal Reasoning', 'Risk Engine', 'LLM Agents'].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="bg-purple-900/10 border border-purple-500/20 p-4 rounded-lg text-center text-sm text-purple-100"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                         {/* Layer 4: Insights */}
                         <div className="flex flex-col justify-center gap-4 relative">
                             {/* Arrow */}
                             <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 text-green-500/50">→</div>

                            <div className="text-center mb-4">
                                <h3 className="text-sm font-mono text-green-400 uppercase tracking-widest">Outcomes</h3>
                            </div>
                            {['Dashboards', 'Real-time Alerts', 'Prescriptive Actions', 'API Exports'].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="bg-zinc-900 border border-white/10 p-4 rounded-lg text-center text-sm text-gray-300 hover:bg-green-900/10 hover:border-green-500/30 transition-colors"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformArchitecture;
