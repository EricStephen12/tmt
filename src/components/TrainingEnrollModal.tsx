"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { submitTrainingApplication } from "@/app/actions/submitTraining";

interface TrainingEnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const programs = [
  "Nursery Education",
  "Primary Education",
  "Secondary Education",
  "Neplus University",
  "Professional Certifications",
  "Corporate Training"
];

export default function TrainingEnrollModal({ isOpen, onClose }: TrainingEnrollModalProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await submitTrainingApplication(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || "Something went wrong.");
      }
    });
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-md z-[110]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[120] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background w-full max-w-xl relative overflow-hidden rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] pointer-events-auto border border-primary/5"
            >
              {/* Grain Texture */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-primary/40 hover:text-accent transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-10 md:p-16 relative z-10">
                {!success ? (
                  <>
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-[1px] bg-accent"></div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Registration</span>
                      </div>
                      <h2 className="text-4xl font-serif text-primary tracking-tight">
                        Enroll for <span className="italic font-light">Physical Training</span>
                      </h2>
                      <p className="mt-4 text-slate-500 font-sans font-light text-sm">
                        Please provide your details below. Our administrative team will reach out to schedule your physical session.
                      </p>
                    </div>

                    <form action={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/60">First Name</label>
                          <input
                            required
                            name="firstName"
                            type="text"
                            placeholder="John"
                            className="w-full bg-slate-50 border-none px-4 py-4 font-sans text-sm font-light focus:ring-1 focus:ring-accent outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/60">Last Name</label>
                          <input
                            required
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                            className="w-full bg-slate-50 border-none px-4 py-4 font-sans text-sm font-light focus:ring-1 focus:ring-accent outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/60">Email Address</label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border-none px-4 py-4 font-sans text-sm font-light focus:ring-1 focus:ring-accent outline-none transition-all"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/60">Phone Number</label>
                          <input
                            required
                            name="phone"
                            type="tel"
                            placeholder="+234..."
                            className="w-full bg-slate-50 border-none px-4 py-4 font-sans text-sm font-light focus:ring-1 focus:ring-accent outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary/60">Program</label>
                          <select
                            required
                            name="program"
                            className="w-full bg-slate-50 border-none px-4 py-4 font-sans text-sm font-light focus:ring-1 focus:ring-accent outline-none transition-all appearance-none"
                          >
                            <option value="">Select a program</option>
                            {programs.map(p => (
                              <option key={p} value={p}>{p}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {error && (
                        <p className="text-red-500 text-xs font-sans tracking-wide">{error}</p>
                      )}

                      <button
                        disabled={isPending}
                        type="submit"
                        className="w-full bg-primary text-white py-5 px-8 font-sans text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 group disabled:opacity-50 hover:bg-accent transition-all duration-500"
                      >
                        {isPending ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : (
                          <>
                            Submit Application
                            <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="text-3xl font-serif text-primary mb-4">Application Sent.</h2>
                    <p className="text-slate-500 font-sans font-light leading-relaxed mb-10">
                      Success! We have received your enrollment request. Our team will contact you within 24 hours to finalize your physical training schedule.
                    </p>
                    <button
                      onClick={onClose}
                      className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold pb-2 border-b border-accent/30 hover:border-accent transition-all"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Decorative Border */}
              <div className="absolute top-0 left-0 w-2 h-full bg-accent/20"></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
