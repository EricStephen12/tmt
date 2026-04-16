"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Award } from "lucide-react";
import Image from "next/image";

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

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-light/50 rounded-bl-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">About Us</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary leading-[1.1] mb-8">
              Building the Future <br />
              <span className="italic text-accent font-light">Through Excellence</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-500 leading-relaxed max-w-2xl font-light font-sans">
              TMT Group is a diversified business enterprise established in 2021 to provide innovative, practical, and value-driven solutions across multiple sectors of the African economy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Identity */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Our Foundation</span>
                <div className="w-16 h-[1px] bg-accent/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif text-primary mb-8 leading-tight">
                A Vision Rooted in <br/><span className="italic font-light text-accent">Impact and Relevance.</span>
              </motion.h2>
              
              <div className="space-y-6 text-slate-500 font-sans font-light leading-relaxed">
                <motion.p variants={fadeUp}>
                  Built on a strong vision of excellence, relevance, and long-term impact, the Group has continued to position itself as a growing brand with interests in consulting, agriculture, education, logistics, real estate, media and technology, hospitality, and related service industries.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Driven by a passion for serving individuals, organizations, and communities, we have built specialized subsidiaries that address real needs and create meaningful value across the continent.
                </motion.p>
              </div>
              <motion.div variants={fadeUp} className="mt-12 pt-10 border-t border-accent/10">
                <p className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold mb-4">Founder & Lead Executive</p>
                <p className="text-3xl font-serif text-primary italic">Princewill Okafor</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full group"
            >
              {/* Decorative Frame */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-accent/20 transition-all duration-700 group-hover:-top-3 group-hover:-right-3"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-accent/20 transition-all duration-700 group-hover:-bottom-3 group-hover:-left-3"></div>
              
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
                  alt="TMT Group Vision"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
              </div>
              
              {/* Floating Vision Tag */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 right-8 bg-white p-8 shadow-xl border border-accent/10 max-w-xs"
              >
                <Target className="w-8 h-8 text-accent mb-4" />
                <p className="font-serif italic text-lg text-primary">"Building a legacy of excellence that transcends generations."</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The TMT Way</span>
            </div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-6xl font-serif text-white mb-6">
              Our Core <span className="italic font-light text-accent">Values</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Excellence", desc: "We deliver nothing short of the highest quality in every service and product, maintaining world-class standards." },
              { icon: Zap, title: "Relevance", desc: "Our solutions are meticulously tailored to address the genuine needs of today's dynamic African market." },
              { icon: Award, title: "Impact", desc: "We are committed to creating sustainable, long-term value for the communities and industries we serve." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="group p-10 border border-white/10 hover:border-accent/30 transition-all duration-500 bg-white/5 backdrop-blur-sm"
              >
                <motion.div variants={fadeUp}>
                  <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    <value.icon className="w-5 h-5 text-accent group-hover:text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-accent transition-colors">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light font-sans text-sm">{value.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

