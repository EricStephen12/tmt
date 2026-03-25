"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Award } from "lucide-react";

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
    <main className="min-h-screen bg-bgLight">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase">About Us</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-serif text-primary leading-[1.1] mb-8">
              Building the Future <br />
              <span className="italic text-slate-400">Through Excellence</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-600 leading-relaxed max-w-2xl font-light">
              TMT Group is a diversified business enterprise established in 2021 to provide innovative, practical, and value-driven solutions across multiple sectors of the economy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Identity */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-serif text-primary mb-8">
                Our Foundation
              </motion.h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <motion.p variants={fadeUp}>
                  Built on a strong vision of excellence, relevance, and long-term impact, the Group has continued to position itself as a growing brand with interests in consulting, agriculture, education, logistics, real estate, media and technology, hospitality, and related service industries.
                </motion.p>
                <motion.p variants={fadeUp}>
                  TMT Group exists to serve individuals, organizations, and communities through specialized subsidiaries that address real needs and create meaningful value.
                </motion.p>
              </div>
              <motion.div variants={fadeUp} className="mt-10 pt-10 border-t border-slate-100">
                <p className="text-sm tracking-widest uppercase text-accent font-semibold mb-2">Founder & Lead Executive</p>
                <p className="text-2xl font-serif text-primary italic">Princewill Okafor</p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-3" />
              <div className="absolute inset-0 bg-white border border-slate-100 rounded-2xl rotate-3 overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-slate-300 text-center p-8">
                  <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="font-serif italic text-xl">Vision for 2030</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 md:mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-serif mb-6">Our Core Values</motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-[1px] bg-accent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Excellence", desc: "We deliver nothing short of the highest quality in every service and product." },
              { icon: Zap, title: "Relevance", desc: "Our solutions are tailored to address the genuine needs of today's dynamic market." },
              { icon: Award, title: "Impact", desc: "We are committed to creating sustainable, long-term value for our communities." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="group p-8 border border-white/10 hover:border-accent/30 transition-colors bg-white/5"
              >
                <motion.div variants={fadeUp}>
                  <value.icon className="w-8 h-8 text-accent mb-6" />
                  <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{value.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
