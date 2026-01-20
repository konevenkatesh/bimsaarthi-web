"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Search, Target, Unlock } from "lucide-react";

export function MissionVision() {
  const values = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-blue-400" />,
      title: "Honesty",
      description: "Truth-based progress, not fake reports. Our Evidence-Based Progress system makes it impossible to lie about completion."
    },
    {
       icon: <Search className="h-6 w-6 text-purple-400" />,
       title: "Rigor",
       description: "Academic-grade research meets production code. We publish our methods in peer-reviewed journals. We ship working software."
    },
    {
       icon: <Target className="h-6 w-6 text-emerald-400" />,
       title: "Impact",
       description: "Real problems, real solutions, measurable ROI. We're here to prevent ₹10 crore delays."
    },
    {
       icon: <Unlock className="h-6 w-6 text-orange-400" />,
       title: "Openness",
       description: "Integrate, don't isolate. We enhance Autodesk, Procore, and P6—we don't replace them."
    }
  ];

  return (
    <section className="py-24 relative bg-black/50 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-900/10 blur-[100px] -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 mb-24">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
             >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-blue-500" />
                  <span className="text-blue-500 uppercase tracking-widest text-sm font-semibold">Mission</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Make construction execution knowledge-driven, not experience-dependent.</h3>
                <p className="text-muted-foreground text-lg">
                    Replace "we've always done it this way" with "the data shows this will fail."
                </p>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
             >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-purple-500" />
                  <span className="text-purple-500 uppercase tracking-widest text-sm font-semibold">Vision</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Become the essential intelligence layer for all construction execution globally.</h3>
                <p className="text-muted-foreground text-lg">
                    Every project above ₹50 crores should know what will fail before it fails.
                </p>
             </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
           <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
                >
                    <div className="mb-4">{val.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{val.title}</h4>
                    <p className="text-sm text-muted-foreground">{val.description}</p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
