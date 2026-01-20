'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

export interface ServiceItem {
  title: string;
  bullets: string[];
  image?: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
  imageAlign?: 'left' | 'right';
  index?: number;
}

const ServiceSection = ({ title, description, services, imageAlign = 'right', index = 0 }: ServiceSectionProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const isImageRight = imageAlign === 'right';

  // Determine which image to show: Hover takes precedence, otherwise default to first
  const activeImageIndex = hoverIndex !== null ? hoverIndex : 0;

  return (
    <section className={cn("py-24 border-t border-white/5", index % 2 === 0 ? "bg-zinc-950" : "bg-black")}>
      <div className="container mx-auto px-6">
        <div className={cn("grid lg:grid-cols-2 gap-16 items-center", !isImageRight && "lg:grid-flow-col-dense")}>
            
            {/* Text Content */}
            <motion.div
                 initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className={cn(!isImageRight && "lg:col-start-2")}
            >
                <div className="mb-8">
                     <div className="w-12 h-1 bg-blue-500 mb-6" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
                </div>

                <div className="space-y-4">
                    {services.map((service, i) => (
                        <div 
                            key={i} 
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className={cn(
                                "cursor-pointer p-6 rounded-xl border transition-all duration-300 group",
                                // Only highlight if actively hovered by user
                                hoverIndex === i 
                                    ? "bg-zinc-900 border-blue-500/50 shadow-lg shadow-blue-900/10" 
                                    : "bg-zinc-900/20 border-white/5 hover:border-white/10 hover:bg-zinc-900/40"
                            )}
                        >
                            <h3 className={cn(
                                "text-xl font-bold mb-3 transition-colors flex items-center justify-between",
                                hoverIndex === i ? "text-white" : "text-gray-300 group-hover:text-white"
                            )}>
                                {service.title}
                                {hoverIndex === i && <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
                            </h3>
                            
                            <div className="overflow-hidden">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-2">
                                    {service.bullets.map((bullet, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                                            <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Image Display Area */}
            <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className={cn(
                     "relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl",
                     !isImageRight && "lg:col-start-1"
                 )}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        {services[activeImageIndex]?.image ? (
                            <>
                                <img 
                                    src={services[activeImageIndex].image} 
                                    alt={services[activeImageIndex].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-white font-medium text-lg">{services[activeImageIndex].title}</p>
                                </div>
                            </>
                        ) : (
                            // Fallback if no image is provided
                            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-800">
                                <span className="text-gray-500 text-sm font-mono uppercase tracking-wider">
                                    {services[activeImageIndex].title} Visualization
                                </span>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Grid Pattern Overlay for tech feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-white/20 rounded-tl-2xl z-10 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-white/20 rounded-br-2xl z-10 pointer-events-none" />

            </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
