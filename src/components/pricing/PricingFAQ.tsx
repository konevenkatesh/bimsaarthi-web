'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const PricingFAQ = () => {
    const faqs = [
        { q: "Do you charge per user?", a: "No. BIMSaarthi pricing is not seat-based. We believe in unlimited collaboration for the entire project team." },
        { q: "Can we start small and scale later?", a: "Yes. Projects can begin with the Core package and upgrade to Intelligence or Enterprise as needs evolve or as the project complexity increases." },
        { q: "Are services mandatory?", a: "No. Services are optional but highly recommended for teams that want faster ROI or need help digitizing their initial data (BIM models, schedules)." },
        { q: "Do you support government pricing models?", a: "Yes. We support pilot-based, milestone-based, and tender-aligned pricing structures for Government and PSU projects." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-white/10 rounded-xl bg-black overflow-hidden">
                    <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                        <span className="font-semibold text-white">{faq.q}</span>
                        {openIndex === i ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div 
                                initial={{ height: 0 }} 
                                animate={{ height: "auto" }} 
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                                    {faq.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
