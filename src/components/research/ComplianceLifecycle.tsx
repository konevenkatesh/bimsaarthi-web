"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Building2, CheckCircle2, ClipboardCheck, FileCheck, HardHat } from "lucide-react";

const stages = [
  { id: 1, title: "Planning", icon: ClipboardCheck, checks: ["Zoning Validation", "FAR/FSI Calc", "Env. Clearances"] },
  { id: 2, title: "Design", icon: Building2, checks: ["Structural Codes", "Fire & MEP", "Sustainability"] },
  { id: 3, title: "Construction", icon: HardHat, checks: ["Quality Inspections", "Safety Audits", "Material Testing"] },
  { id: 4, title: "Handover", icon: FileCheck, checks: ["Occupancy Cert", "As-Built Docs", "Utility Approvals"] },
  { id: 5, title: "Operations", icon: AlertTriangle, checks: ["Fire Renewals", "Structural Audits", "Insurance"] },
];

export function ComplianceLifecycle() {
  return (
    <section className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Compliance Across <span className="text-cyan-400">Every Stage</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Compliance is not a checklist. It is a continuous process that must adapt as projects evolve, ensuring every deviation is recorded.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Connecting Line (Dashed) */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 border-t border-dashed border-gray-700 hidden md:block transform -translate-y-1/2 z-0" />
        
        {/* Animated Progress Line */}
        <motion.div 
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-900 hidden md:block transform -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Node Icon */}
              <div className="w-16 h-16 mx-auto bg-neutral-900 border border-gray-700 rounded-2xl flex items-center justify-center mb-6 z-10 relative transition-transform group-hover:scale-110 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <stage.icon className="w-8 h-8 text-gray-400 group-hover:text-cyan-400" />
                
                {/* Active Indicator */}
                 <div className="absolute -bottom-2 w-full h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{stage.title}</h3>
                <ul className="space-y-2 text-left bg-neutral-900/50 p-4 rounded-lg border border-gray-800/50">
                  {stage.checks.map((check, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
