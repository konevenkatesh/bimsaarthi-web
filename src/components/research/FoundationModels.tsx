"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const labels = []; // Removed labels

export function FoundationModels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/3 z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              How We Build <br />
              <span className="text-cyan-400">Deep Intelligence</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Generic AI doesn't understand construction. We train our models on a structured stack of domain knowledge, ensuring they understand the difference between a "beam" in software and a "beam" in concrete.
            </p>
             <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-gray-300">Context-Aware Embeddings</span>
              </div>
               <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-gray-300">Failure Pattern Recognition</span>
              </div>
               <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-gray-300">IS Code Compliance</span>
              </div>
            </div>
          </div>

          {/* Image Only */}
          <div className="w-full md:w-2/3 relative flex items-center justify-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative w-full max-w-2xl"
            >
               {/* Main Image */}
               <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src="/images/layers.png" 
                    alt="Construction Intelligence Layers" 
                    fill
                    className="object-contain"
                    priority
                  />
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
