"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20">
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black blur-[100px] opacity-60" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-8"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 py-1.5 px-3 text-sm transition-colors hover:bg-white/10 backdrop-blur-sm">
             <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
             <span className="text-white/70">v2.0 Now Available</span>
             <ChevronRight className="ml-1 h-4 w-4 text-white/50" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white max-w-5xl mb-6 leading-tight"
        >
          Intelligent Construction <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">
            Decision Control.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          Stop managing files. Start managing project intelligence. 
          The first Knowledge Graph platform unifying BIM, Schedule, and Cost for predictive AI insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="#product-view" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
               Start Free Trial <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <Link href="#demo" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/15 border border-white/5 backdrop-blur transition-colors">
               Book a Demo
             </button>
          </Link>
        </motion.div>

        {/* Floating Abstract UI Preview in Background/Bottom */}
         <motion.div
            initial={{ opacity: 0, rotateX: 20, z: -100 }}
            animate={{ opacity: 1, rotateX: 0, z: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 relative w-full max-w-5xl perspective-1000 hidden md:block"
         >
             <div className="relative rounded-xl border border-white/10 bg-black/40 shadow-2xl overflow-hidden backdrop-blur-xl aspect-[16/9]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                 {/* Visual placeholder for the "SaaS Interface" look */}
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent flex items-center justify-center">
                    <span className="text-blue-500/20 font-bold text-6xl tracking-widest">UI PREVIEW</span>
                 </div>
             </div>
             {/* Glow below */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-blue-500/20 blur-[100px]" />
         </motion.div>
      </div>
    </section>
  );
}

