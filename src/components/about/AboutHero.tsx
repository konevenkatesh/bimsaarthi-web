"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden pt-20">
      
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
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 py-1.5 px-3 text-sm transition-colors backdrop-blur-sm">
             <span className="text-blue-400 font-semibold tracking-wider uppercase text-xs">About BIMSaarthi</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-5xl mb-6 leading-tight"
        >
          Bridging Deep Construction <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">
             Expertise with Advanced AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[800px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
           From academic research to production-ready intelligence. <br/>
           Founded by construction domain experts who code.
        </motion.p>
      </div>
    </section>
  );
}
