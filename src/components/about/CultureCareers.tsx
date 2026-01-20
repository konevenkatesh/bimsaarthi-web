"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Heart, Scale } from "lucide-react";
import Link from "next/link";

export function CultureCareers() {
  const culture = [
    { icon: <Brain className="w-5 h-5"/>, title: "Research-First", desc: "We read papers before we write code. Validation > Scale." },
    { icon: <BookOpen className="w-5 h-5"/>, title: "Continuous Learning", desc: "Monthly paper clubs, conference budgets, hackathons." },
    { icon: <Heart className="w-5 h-5"/>, title: "Customer Obsession", desc: "We solve problems, not just build features." },
    { icon: <Scale className="w-5 h-5"/>, title: "Work-Life Balance", desc: "Sustainable pace > burnout. Quality thinking requires rest." },
  ];

  const jobs = [
    { title: "AI/ML Engineer", focus: "RAG systems, Vision", exp: "2-4 years" },
    { title: "Full-Stack Developer", focus: "Next.js, GraphDB", exp: "2-4 years" },
    { title: "BIM Specialist", focus: "IFC, Revit API", exp: "3-5 years" },
  ];

  return (
    <section className="py-24 relative bg-black">
      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Culture */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Culture & Values</h2>
                    <p className="text-muted-foreground">What it's really like to work here.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {culture.map((item, idx) => (
                        <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="mb-3 text-blue-400">{item.icon}</div>
                            <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Careers */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-zinc-900/50 rounded-3xl p-8 border border-white/10"
            >
                 <div className="mb-8">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-3xl font-bold text-white">Join Us</h2>
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">HIRING 2026-27</span>
                    </div>
                    <p className="text-muted-foreground">Shape the future of construction intelligence from day one.</p>
                </div>

                <div className="space-y-4 mb-8">
                     {jobs.map((job, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-black border border-white/10">
                             <div>
                                 <h4 className="font-semibold text-white">{job.title}</h4>
                                 <p className="text-xs text-gray-500">{job.focus}</p>
                             </div>
                             <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">{job.exp}</span>
                        </div>
                     ))}
                </div>

                <Link href="mailto:careers@bimsaarthi.com" className="group flex items-center justify-between w-full p-4 rounded-xl bg-white text-black font-semibold hover:bg-blue-50 transition-colors">
                    <span>Apply Now via Email</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-xs text-center text-gray-500 mt-4">Send resume + portfolio to careers@bimsaarthi.com</p>

            </motion.div>

        </div>
      </div>
    </section>
  );
}
