"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again or email us directly.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-bgLight">
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase">Connect</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary leading-[1.1] mb-8">
                Get in <span className="italic text-slate-400">Touch</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 leading-relaxed max-w-lg font-light mb-12">
                Whether you have an inquiry about our subsidiaries, need a consultation, or want to explore partnership opportunities, we are here to listen.
              </motion.p>
              
              <div className="space-y-8">
                <motion.div variants={fadeUp} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Head Office</h3>
                    <p className="text-slate-500 font-light leading-relaxed">
                      Suite 046, Global Plaza,<br />
                      By Jabi Upstairs, Jabi,<br />
                      Abuja FCT
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Phone</h3>
                    <p className="text-slate-500 font-light leading-relaxed">
                      +234 (0)8174006548
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary mb-2">Email</h3>
                    <p className="text-slate-500 font-light leading-relaxed">
                      Tmtglobal@gmail.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 lg:p-14 shadow-xl border border-slate-100 relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                {status.message && (
                  <div className={`p-4 text-sm font-sans tracking-widest uppercase ${status.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                    {status.message}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-sans tracking-widest uppercase text-slate-400 mb-3">Full Name*</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-b border-slate-200 py-3 bg-transparent text-primary placeholder-slate-300 focus:outline-none focus:border-accent transition-colors font-light"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans tracking-widest uppercase text-slate-400 mb-3">Email Address*</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-b border-slate-200 py-3 bg-transparent text-primary placeholder-slate-300 focus:outline-none focus:border-accent transition-colors font-light"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans tracking-widest uppercase text-slate-400 mb-3">Subject</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full border-b border-slate-200 py-3 bg-transparent text-primary placeholder-slate-300 focus:outline-none focus:border-accent transition-colors font-light"
                    placeholder="How can we help?"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans tracking-widest uppercase text-slate-400 mb-3">Message*</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border-b border-slate-200 py-3 bg-transparent text-primary placeholder-slate-300 focus:outline-none focus:border-accent transition-colors font-light resize-none"
                    placeholder="Your message here..."
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className="bg-primary text-white px-8 py-4 font-sans text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all w-full flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
