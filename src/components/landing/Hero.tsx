"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
        


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white max-w-5xl mb-6 leading-tight"
        >
          AI-Powered <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">
            Project Control
          </span> <br/>
          & Risk Intelligence.
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.15 }}
           className="mb-8 font-mono text-sm tracking-widest text-blue-300 uppercase"
        >
            Not a System of Record. A System of Intelligence.
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[800px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
           Your competitors see what happened. You see what will happen.<br/>
           The only platform combining <strong>Knowledge Graph</strong>, <strong>Evidence-Based Progress</strong>, and <strong>Predictive AI</strong> for enterprise construction control.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
               Request Demo <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <Link href="#how-it-works" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/15 border border-white/5 backdrop-blur transition-colors">
               View Workflow
             </button>
          </Link>
        </motion.div>

{/* Floating Abstract UI Preview in Background/Bottom - REMOVED */}
      </div>
    </section>
  );
}

