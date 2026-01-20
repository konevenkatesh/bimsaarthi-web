'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mb-6">
            <MessageSquare className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-mono text-blue-300 uppercase tracking-wider">Get in Touch</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Let’s Start the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Right Conversation
          </span>
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
          Every construction challenge is different. Whether you are exploring the BIMSaarthi Platform, requesting a demo, or proposing a research collaboration — this is the right place to begin.
        </p>

        <div className="space-y-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-2">Who we work with</h3>
                <p className="text-sm text-gray-400 mb-4">
                    BIMSaarthi works with contractors, owners, government agencies, academic institutions, and industry partners.
                </p>
                <div className="flex flex-wrap gap-2">
                    {['Contractors', 'Owners', 'Government', 'Academia'].map((item, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Information</h4>
            
            <a href="mailto:contact@bimsaarthi.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Email us at</span>
                    <span className="text-sm font-medium">info@bimsaarthi.com</span>
                </div>
            </a>

            <div className="flex items-center gap-3 text-gray-400 group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Headquarters</span>
                    <span className="text-sm font-medium">Amaravati, Andhra Pradesh, India</span>
                </div>
            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactHero;
