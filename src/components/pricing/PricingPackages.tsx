'use client';

import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { ArrowRight, Check, Globe, Shield, Zap } from 'lucide-react';

const PricingPackages = () => {
    const packages = [
        {
            title: "BIMSaarthi Core",
            desc: "Essential execution and collaboration capabilities for construction projects starting their digital journey.",
            icon: Zap,
            features: [
                "Site Execution & Collaboration",
                "Schedule, Production & Reliability",
                "Daily reports, QA/QC, and safety",
                "Lookahead planning",
                "Basic BIM model viewing"
            ],
            bestFor: "Contractors, Small to mid-size projects",
            pricingModel: "Per project, per year",
            cta: "Start with Core",
            popular: false
        },
        {
            title: "BIMSaarthi Intelligence",
            desc: "Advanced construction intelligence for predictive control and proactive risk management.",
            icon: Shield,
            features: [
                "Everything in Core",
                "Commercial & Cost Control",
                "BIM-Connected Digital Twin",
                "Risk, Prediction & Decision Intel",
                "BOQ ↔ Progress ↔ Cost linkage"
            ],
            bestFor: "Developers, Complex projects",
            pricingModel: "Based on scale & data volume",
            cta: "Explore Intelligence",
            popular: true
        },
        {
            title: "BIMSaarthi Enterprise",
            desc: "Portfolio-level intelligence, governance, and enterprise integration.",
            icon: Globe,
            features: [
                "Everything in Intelligence",
                "Multi-project portfolio dashboards",
                "Compliance & quality governance",
                "Role-based access & audit trails",
                "ERP, BI, and API integrations"
            ],
            bestFor: "Owners, PMOs, Large EPCs",
            pricingModel: "Annual enterprise license",
            cta: "Talk to Sales",
            popular: false
        }
    ];

  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Platform Packages</h2>
            <p className="text-gray-400">Choose the level of intelligence your project needs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                        "relative p-8 rounded-3xl border flex flex-col h-full",
                        pkg.popular 
                            ? "bg-zinc-900 border-blue-500 shadow-2xl shadow-blue-900/10" 
                            : "bg-black border-white/10 hover:border-white/20 transition-colors"
                    )}
                >
                    {pkg.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-8">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", pkg.popular ? "bg-blue-500/10 text-blue-400" : "bg-zinc-800 text-gray-400")}>
                            <pkg.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{pkg.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12">{pkg.desc}</p>
                        
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-mono mb-1">Pricing Model</p>
                            <p className="text-sm font-medium text-white">{pkg.pricingModel}</p>
                        </div>
                    </div>

                    <div className="flex-grow">
                        <p className="text-sm font-bold text-white mb-4">What's Included:</p>
                        <ul className="space-y-4 mb-8">
                            {pkg.features.map((feat, j) => (
                                <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className={cn("w-4 h-4 shrink-0 mt-0.5", pkg.popular ? "text-blue-400" : "text-gray-500")} />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className={cn(
                        "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all",
                        pkg.popular 
                            ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20" 
                            : "bg-white text-black hover:bg-gray-200"
                    )}>
                        {pkg.cta}
                        <ArrowRight className="w-4 h-4" />
                    </button>

                </motion.div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
                Need help choosing? <a href="#" className="text-blue-400 hover:text-blue-300 underline">Compare all features</a>
            </p>
        </div>

      </div>
    </section>
  );
};

export default PricingPackages;
