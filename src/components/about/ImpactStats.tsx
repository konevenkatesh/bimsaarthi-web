"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, GraduationCap, Leaf } from "lucide-react";

export function ImpactStats() {
  const impacts = [
    {
      icon: <ArrowUpRight className="h-6 w-6 text-green-400" />,
      title: "Industry Transformation",
      stat: "₹87T",
      sub: "Infrastructure Boom",
      desc: "Enable India's growth by making mega projects predictable. Saving ₹1,000+ crores in delay costs."
    },
    {
       icon: <Leaf className="h-6 w-6 text-emerald-400" />,
       title: "Environmental Impact",
       stat: "-15%",
       sub: "Material Waste",
       desc: "Reduce construction waste through predictive planning. Optimized procurement prevents over-ordering."
    },
    {
       icon: <Building2 className="h-6 w-6 text-blue-400" />,
       title: "Workforce Empowerment",
       stat: "∞",
       sub: "Knowledge Accessibility",
       desc: "Capture project intelligence so the next generation learns from the system, not just mentors."
    },
     {
       icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
       title: "Research Contribution",
       stat: "11+",
       sub: "Published Papers",
       desc: "Advancing Construction Informatics as a field. Bridging the gap between academia and industry."
    }
  ];

  return (
    <section className="py-24 relative bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-16"
        >
             <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
             <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group"
                >
                    <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-colors">
                        {item.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.stat}</div>
                    <div className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">{item.sub}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
