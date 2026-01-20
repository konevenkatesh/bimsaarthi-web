'use client';

import { motion } from 'framer-motion';
import { Package, PlusCircle } from 'lucide-react';

const ServiceAddons = () => {
    const services = [
        {
            title: "Platform Enablement Services",
            desc: "Project onboarding, BIM/Schedule readiness assessment, configuration & training.",
            pricing: "One-time, project-based"
        },
        {
            title: "BIM & Engineering Services",
            desc: "Architectural, Structural, MEP modeling. Scan-to-BIM. LOD 300-500.",
            pricing: "Based on scope, LOD, and size"
        },
        {
            title: "Planning & Commercial Services",
            desc: "CPM scheduling (P6/MSP), BOQ structuring, Cost baseline setup.",
            pricing: "Project-based or bundled"
        },
        {
            title: "Digital Twin & Advanced Intel",
            desc: "Digital twin config, Risk model calibration, Compliance customization.",
            pricing: "Premium, scoped per engagement"
        }
    ];

    const bundles = [
        {
            title: "Pilot Engagement",
            items: ["Short-term access", "Limited services", "Fixed duration (3-6mo)"],
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            title: "Project Intelligence Bundle",
            items: ["Intelligence Package", "Platform Enablement", "Planning & BOQ Setup"],
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            title: "Enterprise Transformation",
            items: ["Enterprise Package", "Portfolio Intelligence", "Custom Integrations"],
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        }
    ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Services Column */}
        <div>
             <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Professional Services (Add-ons)</h2>
                <p className="text-gray-400">Accelerate adoption with optional specialized services.</p>
            </div>

            <div className="space-y-4">
                {services.map((svc, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 bg-zinc-900 border border-white/5 rounded-xl hover:border-white/20 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="font-bold text-white">{svc.title}</h3>
                             <PlusCircle className="w-5 h-5 text-gray-500" />
                        </div>
                        <p className="text-sm text-gray-400 mb-4">{svc.desc}</p>
                        <div className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded w-fit">
                            {svc.pricing}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Bundles Column */}
        <div>
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Bundled Engagement Options</h2>
                <p className="text-gray-400">Combine software and services for easier procurement.</p>
            </div>
            
            <div className="space-y-6">
                {bundles.map((bundle, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-8 rounded-2xl border ${bundle.bg} ${bundle.border} relative overflow-hidden`}
                    >
                        <div className="relative z-10">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                    <Package className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{bundle.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {bundle.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceAddons;
