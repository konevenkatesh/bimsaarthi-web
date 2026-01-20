"use client";

import { motion } from "framer-motion";
import { AlertCircle, Building, HelpCircle, LayoutDashboard, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function EnterpriseScenarios() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
       title: "The Project Director's Dilemma",
       icon: <LayoutDashboard size={24} />,
       problem: "\"Block C is 3 weeks delayed. Which subcontractor? Which activities? What's the cascade impact on the critical path? What will it cost?\"",
       answer: {
           title: "BIMSaarthi Answer (in 30 seconds):",
           points: [
               "MEP contractor, Activities M-207 to M-214",
               "Missing materials: 12 items, procurement delayed 2 weeks",
               "Critical path impact: 18 days",
               "Cost impact: ₹47 lakhs",
               "Recommended action: Expedite procurement, reallocate crew to Block D"
           ]
       },
       competitor: "Competitors: Export data → BI analysis → Wait 3 days for report"
    },
    {
       title: "The Owner's Trust Problem",
       icon: <ShieldCheck size={24} />,
       problem: "\"Contractor claims 75% progress. But photos don't match. What's the real number?\"",
       answer: {
           title: "BIMSaarthi Answer:",
           points: [
               "Evidence-based progress: 61% (not 75%)",
               "3D visualization shows incomplete zones",
               "Dispute-proof: Every claim linked to geo-tagged evidence + BOQ quantities",
               "Billing recommendation: Hold ₹14 lakhs until completion"
           ]
       },
       competitor: "Competitors: Manual site inspection → Spreadsheet comparison → Dispute escalation"
    },
    {
       title: "The PMC's Portfolio Risk Forecast",
       icon: <Building size={24} />,
       problem: "\"Which of our 5 ongoing projects will miss deadlines? Where should I intervene?\"",
       answer: {
           title: "BIMSaarthi Prediction:",
           points: [
               "Project A: 94% on-time probability ✅",
               "Project B: 67% probability (risk: structural delays) ⚠️",
               "Project C: 43% probability (risk: design pending + resource shortage) 🚨",
               "Recommended intervention: Project C requires immediate action",
               "Root causes: 14 pending design approvals, 3 critical material shortages"
           ]
       },
       competitor: "Competitors: Monthly review meetings → Reactive firefighting → Post-mortem analysis"
    }
  ];

  return (
    <section className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Built for Enterprise Scenarios</h2>
          <p className="text-muted-foreground">Real challenges faced by Project Directors, PMCs, and EPC teams.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar / Tabs */}
            <div className="space-y-4">
                {scenarios.map((s, idx) => (
                    <button
                       key={idx}
                       onClick={() => setActiveScenario(idx)}
                       className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center gap-4 group ${activeScenario === idx ? "bg-white/10 border-blue-500/50" : "bg-white/5 border-white/5 hover:bg-white/10"}`}
                    >
                        <div className={`p-3 rounded-lg ${activeScenario === idx ? "bg-blue-500 text-white" : "bg-black/40 text-muted-foreground group-hover:text-white"}`}>
                            {s.icon}
                        </div>
                        <span className={`font-bold ${activeScenario === idx ? "text-white" : "text-muted-foreground group-hover:text-white"}`}>
                            {s.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2">
                 <motion.div
                    key={activeScenario}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-br from-[#0f1014] to-black border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                 >
                     {/* Quote / Problem */}
                     <div className="flex gap-4 mb-8">
                         <HelpCircle className="text-orange-400 shrink-0" size={32} />
                         <div>
                             <h4 className="text-lg font-bold text-orange-400 mb-2">The Problem</h4>
                             <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed">
                                 {scenarios[activeScenario].problem}
                             </p>
                         </div>
                     </div>

                     <div className="h-px w-full bg-white/10 mb-8" />

                     {/* Solution */}
                     <div className="mb-8">
                         <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                             <AlertCircle size={20} /> {scenarios[activeScenario].answer.title}
                         </h4>
                         <ul className="space-y-3 pl-4">
                             {scenarios[activeScenario].answer.points.map((point, i) => (
                                 <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/80">
                                     <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                                     {point}
                                 </li>
                             ))}
                         </ul>
                     </div>

                     {/* Competitor */}
                     <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-sm text-muted-foreground font-mono">
                         {scenarios[activeScenario].competitor}
                     </div>

                 </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
