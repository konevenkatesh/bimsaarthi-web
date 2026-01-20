"use client";

import { motion } from "framer-motion";
import { Award, Building, CheckCircle2, MapPin } from "lucide-react";

export function LocationsCertifications() {
  return (
    <section className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Locations */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-500" /> Locations & Partners
                </h2>
                
                <div className="space-y-8">
                    <div className="relative pl-8 border-l border-blue-900">
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <h3 className="text-lg font-semibold text-white mb-1">Amaravati HQ</h3>
                        <p className="text-blue-200/70 text-sm mb-2">Andhra Pradesh, India</p>
                        <p className="text-sm text-muted-foreground">Strategically located near the Amaravati Capital Project for Digital Twin opportunities. Leveraging government infrastructure support.</p>
                    </div>

                    <div className="relative pl-8 border-l border-white/10">
                         <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                        <h3 className="text-lg font-semibold text-white mb-1">NIT Karnataka</h3>
                        <p className="text-purple-200/70 text-sm mb-2">Research Partnership</p>
                        <p className="text-sm text-muted-foreground">Ongoing PhD affiliation and collaboration with the Department of Civil Engineering.</p>
                    </div>

                     <div className="relative pl-8 border-l border-white/10">
                         <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                        <h3 className="text-lg font-semibold text-white mb-1">Hyderabad / Bangalore</h3>
                        <p className="text-gray-400 text-sm mb-2">Planned Expansion (2026-27)</p>
                        <p className="text-sm text-muted-foreground">Future hubs for sales, partnerships, and talent acquisition.</p>
                    </div>
                </div>
            </motion.div>

            {/* Certifications */}
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                    <Award className="h-6 w-6 text-yellow-500" /> Recognition
                </h2>

                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 mb-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                             <h3 className="text-xl font-bold text-white mb-1">DPIIT Recognized</h3>
                             <p className="text-sm text-green-500 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Received & Verified
                             </p>
                        </div>
                        <Building className="h-8 w-8 text-white/20" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        Officially recognized startup by the Government of India. Eligible for tax exemptions and government schemes.
                    </p>
                    <div className="flex gap-2 text-xs">
                         <span className="px-2 py-1 bg-white/5 rounded border border-white/5 text-gray-300">Tax Exemptions</span>
                         <span className="px-2 py-1 bg-white/5 rounded border border-white/5 text-gray-300">Govt Schemes</span>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-75">
                    <h3 className="text-lg font-bold text-white mb-3">Compliance Targets (2025-26)</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            ISO 27001 (Data Security)
                        </li>
                        <li className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            SOC 2 Type II (Enterprise Ready)
                        </li>
                    </ul>
                </div>

            </motion.div>

        </div>
      </div>
    </section>
  );
}

// Helper icons
function ShieldCheck({className}: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
    )
}
