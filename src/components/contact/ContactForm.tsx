'use client';

import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

const ENQUIRY_TYPES = [
  { id: 'demo', label: 'Request a Platform Demo', description: 'See BIMSaarthi in action' },
  { id: 'pricing', label: 'Discuss Pricing or Packages', description: 'Get a quote for your team' },
  { id: 'services', label: 'Professional Services Enquiry', description: 'BIM modeling & implementation' },
  { id: 'research', label: 'Research / Academic Collaboration', description: 'Partner on R&D initiatives' },
  { id: 'government', label: 'Government / PSU Engagement', description: 'Public sector solutions' },
  { id: 'general', label: 'General Enquiry', description: 'Other questions' },
];

const ORG_TYPES = ['Contractor', 'Developer / Owner', 'Consultant', 'Government / PSU', 'Academic / Research', 'Other'];
const PROJECT_STAGES = ['Planning', 'Design', 'Construction', 'Operations'];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    enquiryType: '',
    name: '',
    email: '',
    organization: '',
    role: '',
    orgType: '',
    projectStage: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnquirySelect = (id: string) => {
    setFormData(prev => ({ ...prev, enquiryType: id }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
             setIsSuccess(true);
        } else {
            console.error('Submission failed:', data.error);
            alert('Failed to submit enquiry. Please try again later.'); // Or a better UI feedback
        }

    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
    } finally {
        setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-900 border border-white/10 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[600px]"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Submission Received</h3>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
            Thank you for reaching out. We have received your enquiry and directed it to the relevant team. You can expect a response within 1–2 business days.
        </p>
        <button 
            onClick={() => { setIsSuccess(false); setStep(1); setFormData({ enquiryType: '', name: '', email: '', organization: '', role: '', orgType: '', projectStage: '', message: '' }); }}
            className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
            Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-1 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        
        <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-8">
            
            {/* Step 1: Enquiry Type */}
            <div className="space-y-4">
                <label className="text-sm font-semibold text-white uppercase tracking-wider block">
                    1. What would you like to discuss? <span className="text-red-400">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                    {ENQUIRY_TYPES.map((type) => (
                        <div 
                            key={type.id}
                            onClick={() => handleEnquirySelect(type.id)}
                            className={cn(
                                "cursor-pointer p-4 rounded-xl border transition-all duration-200 flex flex-col gap-1 relative overflow-hidden group",
                                formData.enquiryType === type.id 
                                    ? "bg-blue-600/10 border-blue-500" 
                                    : "bg-black/40 border-white/5 hover:bg-black/60 hover:border-white/10"
                            )}
                        >
                            <div className="flex justify-between items-start">
                                <span className={cn("text-sm font-semibold", formData.enquiryType === type.id ? "text-blue-400" : "text-white")}>
                                    {type.label}
                                </span>
                                {formData.enquiryType === type.id && (
                                    <CheckCircle className="w-4 h-4 text-blue-500" />
                                )}
                            </div>
                            <span className="text-xs text-gray-500">{type.description}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/5" />

            {/* Step 2: Contact Details */}
            <div className="space-y-6">
                 <label className="text-sm font-semibold text-white uppercase tracking-wider block">
                    2. Your Details
                </label>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Full Name <span className="text-red-400">*</span></label>
                        <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Work Email <span className="text-red-400">*</span></label>
                        <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                        />
                    </div>
                     <div className="space-y-2">
                        <label className="text-xs text-gray-400">Organization <span className="text-red-400">*</span></label>
                        <input 
                            required
                            type="text" 
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="Company Name"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                        />
                    </div>
                     <div className="space-y-2">
                        <label className="text-xs text-gray-400">Role / Designation</label>
                        <input 
                            type="text" 
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            placeholder="e.g. Project Manager"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                        />
                    </div>
                </div>
            </div>

             <div className="border-t border-white/5" />

            {/* Step 3: Context */}
            <div className="space-y-6">
                 <label className="text-sm font-semibold text-white uppercase tracking-wider block">
                    3. Context
                </label>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-400">Organization Type</label>
                        <select 
                            name="orgType"
                            value={formData.orgType}
                            onChange={handleInputChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Select Type</option>
                            {ORG_TYPES.map(t => <option key={t} value={t} className="bg-zinc-900">{t}</option>)}
                        </select>
                    </div>
                     <div className="space-y-2">
                        <label className="text-xs text-gray-400">Project Stage (Optional)</label>
                         <select 
                            name="projectStage"
                            value={formData.projectStage}
                            onChange={handleInputChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Select Stage</option>
                            {PROJECT_STAGES.map(t => <option key={t} value={t} className="bg-zinc-900">{t}</option>)}
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                     <label className="text-xs text-gray-400">How can we help?</label>
                     <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder={
                            formData.enquiryType === 'demo' ? "Tell us about your project and what you're looking to achieve..." : 
                            formData.enquiryType === 'research' ? "Describe your research area and potential collaboration..." :
                            "Briefly describe your requirement, challenge, or idea..."
                        }
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium resize-none"
                     />
                </div>
            </div>

            <div className="space-y-4 pt-2">
                <button
                    disabled={isSubmitting || !formData.enquiryType}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Submit Enquiry
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        By submitting, you agree to be contacted by our team. We value your privacy.
                    </p>
                </div>
            </div>

        </form>
    </div>
  );
};

export default ContactForm;
