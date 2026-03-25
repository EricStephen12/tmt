"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Lightbulb, 
  ArrowLeft,
  Briefcase,
  TrendingUp,
  School,
  Building,
  Target,
  Image as ImageIcon
} from "lucide-react";
import Link from "next/link";

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

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-28">
      
      {/* 1. LUXURY HERO */}
      <section className="relative h-[80vh] flex items-center overflow-hidden border-b border-accent/20">
        <div className="absolute inset-0 z-0 bg-primary flex items-center justify-center opacity-5">
           <Briefcase className="w-[800px] h-[800px] text-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
          <Link href="/" className="inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em] text-primary hover:text-accent mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> TMT Group
          </Link>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-accent" />
              <div className="w-12 h-[1px] bg-accent"></div>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-medium text-primary tracking-tight mb-6 leading-[1.1]">
              TMT Consulting <br className="hidden md:block"/>
              <span className="text-accent italic font-light">Advisory</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-sans font-light text-slate-500 mb-8 max-w-2xl leading-relaxed">
              Leadership | Workplace | Enterprise Solutions | School Administration
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 font-serif italic leading-relaxed max-w-2xl">
              A forward-looking consulting firm dedicated to helping individuals, institutions, and businesses build capacity, improve systems, and achieve sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EDITORIAL ABOUT SECTION */}
      <section className="py-32 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-square bg-background p-4 border border-accent/10">
                 <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center border border-slate-200 shadow-inner">
                    <ImageIcon className="w-12 h-12 text-accent/50 mb-4" />
                    <p className="text-xs font-sans uppercase tracking-[0.2em] text-slate-400">Boardroom Collaboration</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-6"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Who We Are</span>
                <div className="w-24 h-[1px] bg-accent/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif text-primary mb-10 leading-[1.2]">
                Today’s world demands <br/> <span className="italic text-accent">more than conventional ideas.</span>
              </motion.h2>

              <div className="space-y-6 text-lg font-sans font-light text-slate-600 leading-relaxed mb-12">
                <motion.p variants={fadeUp}>
                  It requires visionary leadership, efficient systems, empowered teams, smart business strategy, and technology-driven administration. We serve as a trusted growth partner seeking clarity and lasting impact.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="bg-background border border-accent/20 p-8">
                <h3 className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-4">Our Vision</h3>
                <p className="font-serif italic text-lg text-slate-700 leading-relaxed">
                  "To be recognized for raising transformational leaders, building productive workplaces, and revolutionizing administration through smart, sustainable solutions."
                </p>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. FOUR DOMAINS (LUXURY CARDS) */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Domains</span>
              <div className="w-12 h-[1px] bg-accent"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight">
              Our Areas of <span className="italic font-light">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* 1. Leadership Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-luxury p-12 relative overflow-hidden group"
            >
              <Users className="w-10 h-10 text-accent mb-8" />
              <h3 className="text-3xl font-serif text-primary mb-4">Leadership Solutions</h3>
              <p className="text-slate-500 font-sans font-light leading-relaxed mb-8">
                Raising capable, visionary, and effective leaders. We help leaders develop the mindset, skills, and systems required to inspire people and drive innovation.
              </p>
              <div className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-300"></div>
            </motion.div>

            {/* 2. Workplace Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="card-luxury p-12 relative overflow-hidden group"
            >
              <Building className="w-10 h-10 text-accent mb-8" />
              <h3 className="text-3xl font-serif text-primary mb-4">Workplace Solutions</h3>
              <p className="text-slate-500 font-sans font-light leading-relaxed mb-8">
                Helping organizations create workplaces that are structured, functional, innovative, and performance-driven through culture and staff training.
              </p>
              <div className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-300"></div>
            </motion.div>

            {/* 3. Entrepreneurship */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-luxury p-12 relative overflow-hidden group"
            >
              <TrendingUp className="w-10 h-10 text-accent mb-8" />
              <h3 className="text-3xl font-serif text-primary mb-4">Enterprise & Business</h3>
              <p className="text-slate-500 font-sans font-light leading-relaxed mb-8">
                End-to-end management support for emerging enterprises. Moving from vision to structure, from ideas to implementation, and from struggle to success.
              </p>
              <div className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-300"></div>
            </motion.div>

            {/* 4. School Admin */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card-luxury p-12 relative overflow-hidden group"
            >
              <School className="w-10 h-10 text-accent mb-8" />
              <h3 className="text-3xl font-serif text-primary mb-4">School Administration</h3>
              <p className="text-slate-500 font-sans font-light leading-relaxed mb-8">
                Innovative solutions to improve how schools are managed, administered, and positioned for excellence in a technology-driven educational landscape.
              </p>
              <div className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PRESTIGE CTA */}
      <section className="py-32 bg-primary relative overflow-hidden text-center">
        <Target className="w-16 h-16 text-accent mx-auto mb-8 opacity-50" />
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-[1.2]">
              Strategic, practical, and <br/>
              <span className="italic text-accent font-light">client-centered solutions.</span>
            </h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-10"></div>
            <a href="mailto:Tmtglobal@gmail.com" className="inline-flex items-center justify-center px-12 py-5 bg-accent text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-accent/20">
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
