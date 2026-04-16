"use client";

import { motion } from "framer-motion";
import { ArrowRight, Hotel, Utensils, Sparkles } from "lucide-react";
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

export default function Hospitality() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-light/50 rounded-bl-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">TMT Hospitality</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif text-primary leading-[1.1] mb-8">
                Curating <br />
                <span className="italic text-accent font-light">Premium Experiences</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-500 leading-relaxed font-sans font-light mb-10 max-w-lg">
                Defining luxury and comfort through world-class hospitality investments and management services tailored for the discerning African traveler.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="/contact" className="btn-primary inline-flex items-center gap-3">
                  Bookings & Inquiries
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-[4/3] w-full group"
            >
              {/* Decorative Frame */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-accent/20 transition-all duration-700 group-hover:-top-3 group-hover:-right-3"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-accent/20 transition-all duration-700 group-hover:-bottom-3 group-hover:-left-3"></div>
              
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000" 
                  alt="African Luxury Resort and Hospitality"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
              </div>

              {/* Status Box */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-10 -right-6 bg-white p-8 shadow-xl border border-accent/10 hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Hotel className="w-5 h-5 text-accent" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-slate-400 font-bold">Service Status</span>
                </div>
                <p className="text-3xl font-serif text-primary">Elite <span className="text-sm italic text-accent font-light">Class</span></p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-background relative border-t border-accent/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24 text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Capabilities</span>
              <div className="w-8 h-[1px] bg-accent"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif text-primary mb-8">Art of <span className="italic font-light text-accent">Hosting</span></h2>
            <p className="text-slate-500 font-sans font-light leading-relaxed">
              We focus on delivering uncompromised quality, personalized service, and attention to detail that transforms every stay into an unforgettable memory.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Hotel, title: "Hotel Management", desc: "Operating high-end boutique and commercial hotels with a focus on guest satisfaction and operational excellence." },
              { icon: Utensils, title: "Culinary Services", desc: "Fine dining and professional catering solutions scaled for corporate events and private celebrations." },
              { icon: Sparkles, title: "Guest Experience", desc: "Designing bespoke leisure and tourism experiences for maximum relaxation and cultural immersion." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="group p-10 border border-accent/10 hover:border-accent/30 transition-all duration-500 bg-white shadow-sm hover:shadow-xl"
              >
                <motion.div variants={fadeUp}>
                  <div className="w-14 h-14 border border-accent/20 rounded-full flex items-center justify-center mb-10 group-hover:bg-accent transition-all duration-500">
                    <service.icon className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-primary mb-6 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-slate-500 font-sans leading-relaxed font-light text-sm">{service.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

