"use client";

import { motion } from "framer-motion";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    enquiryType: 'General Enquiry', // Default for About page
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    organization: formData.organization,
                    message: formData.message,
                    role: 'N/A', // Not collected on this form
                    orgType: 'N/A', // Not collected on this form
                    projectStage: 'N/A' // Not collected on this form
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ firstName: "", lastName: "", email: "", organization: "", message: "" });
            } else {
                console.error('Submission failed:', data.error);
                alert('Failed to submit enquiry. Please try again later.');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section className="py-24 relative bg-black border-t border-white/10">
      <div className="container px-4 md:px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-6"
            >
                Get in Touch
            </motion.h2>
            <p className="text-muted-foreground">
                Whether you're interested in a demo, partnership, or joining the team, we'd love to hear from you.
            </p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl"
        >
            {isSuccess ? (
                <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-8">
                        Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">First Name</label>
                            <input 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                                placeholder="Jane" 
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Last Name</label>
                            <input 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                                placeholder="Doe" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Email</label>
                        <input 
                            name="email"
                            type="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                            placeholder="jane@company.com" 
                            required 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Organization</label>
                        <input 
                            name="organization"
                            type="text" 
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                            placeholder="Company Name" 
                            required 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white min-h-[120px] focus:outline-none focus:border-blue-500 transition-colors" 
                            placeholder="Tell us about your project..." 
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>Sending... <Loader2 className="w-4 h-4 animate-spin"/></>
                        ) : (
                            <>Send Message <Mail className="w-4 h-4"/></>
                        )}
                    </button>
                </form>
            )}
            
            <div className="mt-8 pt-8 border-t border-white/5 text-center">
                <p className="text-sm text-muted-foreground mb-2">Direct Founder Contact</p>
                <a href="mailto:venkateshkone.connect@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    venkateshkone.connect@gmail.com
                </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
