"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sprout, Tractor, SunMedium } from "lucide-react";

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

export default function Agriculture() {
  return (
    <main className="min-h-screen bg-bgLight">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase">TMT Agriculture</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary leading-[1.1] mb-8">
                Cultivating <br />
                <span className="italic text-slate-400">Sustainable Growth</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 leading-relaxed font-light mb-10 max-w-lg">
                Harnessing innovation and traditional expertise to ensure food security and premium agricultural yields.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-sm font-sans tracking-[0.2em] uppercase hover:bg-accent transition-colors group">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-[4/3] w-full"
            >
              <div className="absolute inset-0 bg-emerald-900/5 rounded-2xl -rotate-2" />
              <div className="absolute inset-0 bg-white border border-slate-100 rounded-2xl rotate-2 overflow-hidden shadow-2xl flex items-center justify-center">
                 <div className="text-slate-300 text-center p-8">
                  <Leaf className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="font-serif italic text-xl">Agricultural Assets</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-serif text-primary mb-6">Our Focus Areas</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 font-light leading-relaxed">
              We focus on scalability, community empowerment, and embracing modern agricultural techniques.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Sprout, title: "Crop Production", desc: "Large scale farming focusing on high-volume, quality cash and food crops." },
              { icon: Tractor, title: "Agro-mechanization", desc: "Deploying advanced machinery for higher efficiency and minimized post-harvest losses." },
              { icon: SunMedium, title: "Food Processing", desc: "Transforming raw agricultural produce into refined, market-ready consumer goods." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="group p-10 border border-slate-100 hover:border-accent hover:shadow-xl transition-all duration-300 bg-bgLight"
              >
                <motion.div variants={fadeUp}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-light">{service.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
