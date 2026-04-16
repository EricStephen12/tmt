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

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-28">
      
      {/* 1. LUXURY HERO */}
      <section className="relative h-[80vh] flex items-center overflow-hidden border-b border-accent/20">
        <div className="absolute inset-0 z-0 bg-primary flex items-center justify-center opacity-5">
           <Briefcase className="w-[800px] h-[800px] text-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
          <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.4em] text-primary hover:text-accent mb-12 transition-colors group">
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
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-primary tracking-tight mb-6 leading-[1.1]">
              TMT Consulting <br className="hidden md:block"/>
              <span className="text-accent italic font-light">Advisory</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-sans font-light text-slate-500 mb-8 max-w-2xl leading-relaxed">
              Leadership | Workplace | Enterprise Solutions | School Administration
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 font-serif italic leading-relaxed max-w-2xl">
              A forward-looking consulting firm dedicated to helping individuals, institutions, and businesses build capacity, improve systems, and achieve sustainable growth across Africa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EDITORIAL ABOUT SECTION */}
      <section className="py-32 bg-background relative border-b border-accent/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-square bg-background p-4 border border-accent/10 group">
                 <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
                      alt="African Strategic Consulting"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Who We Are</span>
                <div className="w-24 h-[1px] bg-accent/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif text-primary mb-10 leading-[1.2]">
                Today’s world demands <br/> <span className="italic text-accent">more than conventional ideas.</span>
              </motion.h2>

              <div className="space-y-6 text-lg font-sans font-light text-slate-500 leading-relaxed mb-12">
                <motion.p variants={fadeUp}>
                  It requires visionary leadership, efficient systems, empowered teams, smart business strategy, and technology-driven administration. We serve as a trusted growth partner seeking clarity and lasting impact.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="bg-white border border-accent/20 p-10 shadow-xl">
                <h3 className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent mb-6 font-bold">Our Vision</h3>
                <p className="font-serif italic text-xl text-primary leading-relaxed">
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
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Domains</span>
              <div className="w-12 h-[1px] bg-accent"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif text-primary leading-tight">
              Our Areas of <span className="italic font-light text-accent">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Leadership Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-12 relative overflow-hidden group border border-accent/5 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 border border-accent/20 flex items-center justify-center rounded-full mb-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6 group-hover:text-accent transition-colors">Leadership Solutions</h3>
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
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-12 relative overflow-hidden group border border-accent/5 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 border border-accent/20 flex items-center justify-center rounded-full mb-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6 group-hover:text-accent transition-colors">Workplace Solutions</h3>
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
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-12 relative overflow-hidden group border border-accent/5 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 border border-accent/20 flex items-center justify-center rounded-full mb-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6 group-hover:text-accent transition-colors">Enterprise & Business</h3>
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
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-12 relative overflow-hidden group border border-accent/5 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 border border-accent/20 flex items-center justify-center rounded-full mb-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <School className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-6 group-hover:text-accent transition-colors">School Administration</h3>
              <p className="text-slate-500 font-sans font-light leading-relaxed mb-8">
                Innovative solutions to improve how schools are managed, administered, and positioned for excellence in a technology-driven educational landscape.
              </p>
              <div className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PRESTIGE CTA */}
      <section className="py-40 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Target className="w-16 h-16 text-accent mx-auto mb-10 opacity-60" />
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-[1.2]">
              Strategic, practical, and <br/>
              <span className="italic text-accent font-light">client-centered solutions.</span>
            </h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-12"></div>
            <a href="mailto:Tmtglobal@gmail.com" className="btn-primary bg-accent text-primary px-16 py-6 hover:bg-white inline-block">
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

