'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Box,
    BrainCircuit,
    CalendarClock,
    ChevronRight,
    ClipboardCheck,
    DollarSign,
    LayoutGrid,
    ShieldCheck
} from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    id: 'site',
    icon: ClipboardCheck,
    title: 'Site Execution & Collaboration',
    category: 'Core Execution',
    purpose: 'Run day-to-day site operations with structured, traceable, and intelligence-ready data.',
    inside: [
      'Drawings & revisions (audit-ready)',
      'RFIs and technical queries',
      'Daily site diary & Manpower',
      'QA/QC & Safety inspections',
      'Material requests tracking'
    ],
    why: 'Captures ground reality. This data feeds prediction, cost, and risk engines.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20'
  },
  {
    id: 'schedule',
    icon: CalendarClock,
    title: 'Schedule, Production & Reliability',
    category: 'Core Execution',
    purpose: 'Ensure what was planned actually gets executed, reliably and predictably.',
    inside: [
      'Lookahead planning (2–6 weeks)',
      'Weekly Work Plans (Last Planner)',
      'Constraint identification',
      'Reasons for Non-Completion (RNC)',
      'Reliability metrics (PPC)'
    ],
    why: 'Shows what will actually happen, and why it might fail. Beyond simple CPM.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    id: 'cost',
    icon: DollarSign,
    title: 'Commercial & Cost Control',
    category: 'Core Execution',
    purpose: 'Connect progress, quantities, and site evidence directly to money.',
    inside: [
      'BOQ and quantity tracking',
      'Measurement capture (site-verified)',
      'RA bills & subcontractor bills',
      'Cost forecasting',
      'Earned Value Analysis'
    ],
    why: 'Links BOQ → progress evidence → forecast → risk in one connected system.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20'
  },
  {
    id: 'bim',
    icon: Box,
    title: 'BIM-Connected Delivery',
    category: 'Intelligence',
    purpose: 'Make BIM operational, not just visual.',
    inside: [
      '3D BIM model viewing',
      'BIM object ↔ task ↔ BOQ linkage',
      '4D planning and simulation',
      'Reality capture integration',
      'Evidence-based progress validation'
    ],
    why: 'Adds semantic understanding and explainable connections to the model.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    id: 'risk',
    icon: BrainCircuit,
    title: 'Risk, Prediction & Decision Intel',
    category: 'Intelligence',
    purpose: 'Move from tracking problems to preventing problems.',
    inside: [
      'Task-level delay risk prediction',
      'Cost overrun forecasting',
      'Root-cause reasoning',
      'What-if scenario analysis',
      'AI-assisted recommendations'
    ],
    why: 'Answers: "What will go wrong next, and what should I do now?"',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance, Quality & Governance',
    category: 'Enterprise',
    purpose: 'Ensure continuous compliance, not one-time checks.',
    inside: [
      'Permit workflows',
      'Code compliance checks (NBC/IS)',
      'Quality audits and inspections',
      'Safety compliance tracking',
      'Full audit trails'
    ],
    why: 'Critical for government projects, enterprise clients, and risk management.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20'
  },
  {
    id: 'portfolio',
    icon: LayoutGrid,
    title: 'Portfolio & Enterprise Control',
    category: 'Enterprise',
    purpose: 'Enable enterprise-level visibility and governance.',
    inside: [
      'Multi-project dashboards',
      'Portfolio risk views',
      'Role-based access control',
      'ERP & BI Integrations',
      'Offline mobile workflows'
    ],
    why: 'Makes BIMSaarthi enterprise-ready, not just project-level software.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20'
  }
];

const ModuleSystem = () => {
  const [activeModule, setActiveModule] = useState(modules[4]); // Default to Risk

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">The BIMSaarthi Platform Modules</h2>
            <p className="text-gray-400">A modular, connected system designed for every stakeholder.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            {/* LEFT: Navigator */}
            <div className="lg:col-span-4 flex flex-col gap-2">
                {modules.map((mod) => (
                    <button
                        key={mod.id}
                        onClick={() => setActiveModule(mod)}
                        className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                            activeModule.id === mod.id 
                                ? 'bg-zinc-800 border-l-4 border-blue-500 shadow-xl' 
                                : 'hover:bg-zinc-900 border-l-4 border-transparent text-gray-400'
                        }`}
                    >
                        <mod.icon className={`w-5 h-5 ${activeModule.id === mod.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`} />
                        <span className={`font-medium ${activeModule.id === mod.id ? 'text-white' : ''}`}>
                            {mod.title}
                        </span>
                        {activeModule.id === mod.id && (
                            <ChevronRight className="w-4 h-4 text-white ml-auto" />
                        )}
                    </button>
                ))}
            </div>

            {/* RIGHT: Detail Panel */}
            <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeModule.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[500px]"
                    >
                        {/* Background Splashes */}
                        <div className={`absolute top-0 right-0 w-96 h-96 ${activeModule.bg} blur-[100px] rounded-full opacity-20 pointer-events-none`} />

                        <div className="relative z-10">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${activeModule.bg} ${activeModule.border} w-fit mb-6`}>
                                <activeModule.icon className={`w-4 h-4 ${activeModule.color}`} />
                                <span className={`text-xs font-mono uppercase tracking-wider ${activeModule.color}`}>
                                    {activeModule.category} Module
                                </span>
                            </div>

                            <h3 className="text-4xl font-bold text-white mb-6">
                                {activeModule.title}
                            </h3>

                            <p className="text-xl text-gray-300 leading-relaxed mb-12">
                                {activeModule.purpose}
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                                        What Happens Inside
                                    </h4>
                                    <ul className="space-y-4">
                                        {activeModule.inside.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${activeModule.bg.replace('/10', '')}`} />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`rounded-2xl p-6 ${activeModule.bg} border ${activeModule.border}`}>
                                    <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${activeModule.color}`}>
                                        Why It Matters
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        {activeModule.why}
                                    </p>
                                    
                                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white cursor-pointer hover:opacity-80 transition-opacity">
                                        Explore features <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ModuleSystem;
