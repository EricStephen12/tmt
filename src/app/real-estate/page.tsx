"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Map, 
  Briefcase, 
  Construction, 
  Wrench, 
  ArrowLeft,
  Check,
  Home,
  FileCheck,
  TrendingUp,
  Image as ImageIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const services = [
  {
    title: "Real Estate Development",
    description: "Acquisition, planning, and development of residential, commercial, and mixed-use properties designed for long-term returns.",
    icon: Building2,
  },
  {
    title: "Building Construction",
    description: "Professional construction services delivering durable, functional, and aesthetically appealing structures.",
    icon: Construction,
  },
  {
    title: "Property Sales & Acquisition",
    description: "Secure, transparent property transactions with proper documentation for absolute confidence.",
    icon: FileCheck,
  },
  {
    title: "Project Management",
    description: "Comprehensive oversight from concept to completion, ensuring precise quality control and timely delivery.",
    icon: Briefcase,
  },
  {
    title: "Real Estate Consultancy",
    description: "Expert advisory on investment strategy, land acquisition, and emerging market opportunities.",
    icon: TrendingUp,
  },
  {
    title: "Renovation & Remodeling",
    description: "Transforming existing structures into modern, highly efficient, and valuable spaces.",
    icon: Home,
  },
  {
    title: "Property Management",
    description: "Holistic maintenance, tenant coordination, and operational oversight to preserve elite asset value.",
    icon: Wrench,
  },
  {
    title: "Infrastructure Works",
    description: "Execution of selected civil works, road construction, and precise site preparation.",
    icon: Map,
  }
];

export default function RealEstatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-28">
      
      {/* 1. LUXURY HERO */}
      <section className="relative h-[80vh] flex items-center overflow-hidden border-b border-accent/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary">
             {/* Abstract gold pattern overlay */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          {/* Abstract geometric gold accents */}
          <div className="absolute right-0 top-0 w-1/2 h-full border-l border-accent/20 opacity-30 transform skew-x-12 translate-x-32"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
          <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.4em] text-accent hover:text-white mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> TMT Group
          </Link>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <Building2 className="w-8 h-8 text-accent" />
              <div className="w-12 h-[1px] bg-accent"></div>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-white tracking-tight mb-6 leading-[1.1]">
              TMT Real Estate & <br className="hidden md:block"/>
              <span className="text-accent italic font-light">Construction</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-2xl font-serif italic text-accent-light/60 mb-8">
              "Shaping Spaces, Securing Futures"
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-300 font-sans font-light leading-relaxed max-w-2xl">
              We specialize in property development, building construction, project management, and related infrastructure services across the African landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EDITORIAL ABOUT SECTION */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-6"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Our Foundation</span>
                <div className="w-24 h-[1px] bg-accent/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif text-primary mb-10 leading-[1.2]">
                Every structure is a foundation for <span className="italic text-accent">dreams, growth, and legacy.</span>
              </motion.h2>

              <div className="space-y-6 text-lg font-sans font-light text-slate-500 leading-relaxed mb-12">
                <motion.p variants={fadeUp}>
                  At TMT Real Estate and Construction LTD, we work to provide lasting solutions that meet the needs of individuals, families, businesses, and communities with a strong commitment to quality and innovation.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Driven by a passion for transforming ideas into enduring realities, we bring professionalism, technical expertise, and meticulous attention to detail to every residential, commercial, and land development project.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-y-6 gap-x-4">
                {[
                  "Quality Assurance",
                  "Experienced Team",
                  "Timely Delivery",
                  "Client-Focused",
                  "True Transparency",
                  "Value-Driven"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-primary font-sans text-xs font-bold tracking-widest uppercase">
                     <Check className="w-3 h-3 text-accent" />
                     {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[3/4] bg-background border border-accent/20 p-4 group">
                 <div className="relative w-full h-full overflow-hidden shadow-2xl">
                    <Image 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                      alt="Modern African Architecture"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                 </div>
                 
                 {/* Floating Mission Box */}
                 <div className="absolute -bottom-10 -left-10 bg-primary p-10 text-white w-80 shadow-2xl border border-accent/20 hidden md:block z-20">
                   <h3 className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent mb-6 font-bold">Our Mission</h3>
                   <p className="font-serif italic text-xl leading-relaxed">
                     To provide innovative, cost-effective construction solutions that exceed client expectations through structural excellence.
                   </p>
                 </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. LUXURY SERVICES GRID */}
      <section className="py-32 bg-background border-t border-accent/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Capabilities</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-serif text-primary leading-tight">
                Engineering <br/><span className="italic font-light text-accent">Excellence</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {services.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-10 group relative overflow-hidden border border-accent/5 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  <div className="w-12 h-12 border border-accent/20 flex items-center justify-center rounded-full mb-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-primary mb-6 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. PRESTIGE CTA */}
      <section className="py-40 bg-primary relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-[1.2]">
              Building trust and delivering projects <br/>
              <span className="italic text-accent font-light">that stand the test of time.</span>
            </h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-12"></div>
            <a href="mailto:Tmtglobal@gmail.com" className="btn-primary bg-accent text-primary px-16 py-6 hover:bg-white inline-block">
              Inquire About Properties
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

