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
          <div className="absolute inset-0 bg-primary"></div>
          {/* Abstract geometric gold accents */}
          <div className="absolute right-0 top-0 w-1/2 h-full border-l border-accent/20 opacity-30 transform skew-x-12 translate-x-32"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
          <Link href="/" className="inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em] text-accent hover:text-white mb-12 transition-colors group">
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
            
            <motion.p variants={fadeUp} className="text-2xl font-serif italic text-accent-light mb-8">
              "Shaping Spaces, Securing Futures"
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-300 font-sans font-light leading-relaxed max-w-2xl">
              We specialize in property development, building construction, project management, and related infrastructure services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EDITORIAL ABOUT SECTION */}
      <section className="py-32 bg-white relative">
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
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Our Foundation</span>
                <div className="w-24 h-[1px] bg-accent/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif text-primary mb-10 leading-[1.2]">
                Every structure is a foundation for <span className="italic text-accent">dreams, growth, and legacy.</span>
              </motion.h2>

              <div className="space-y-6 text-lg font-sans font-light text-slate-600 leading-relaxed mb-12">
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
                  <div key={i} className="flex items-center gap-3 text-primary font-sans text-sm font-semibold tracking-wide">
                     <Check className="w-4 h-4 text-accent" />
                     {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[3/4] bg-background border border-accent/20 p-4">
                 <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center border border-slate-200 shadow-inner">
                    <ImageIcon className="w-12 h-12 text-accent/50 mb-4" />
                    <p className="text-xs font-sans uppercase tracking-[0.2em] text-slate-400">Construction Architecture</p>
                 </div>
                 {/* Floating Mission Box */}
                 <div className="absolute -bottom-10 -left-10 bg-primary p-8 text-white w-80 shadow-2xl border border-accent/20 hidden md:block">
                   <h3 className="text-xs font-sans uppercase tracking-[0.3em] text-accent mb-4">Our Mission</h3>
                   <p className="font-serif italic text-lg leading-relaxed">
                     To provide innovative, cost-effective construction solutions that exceed client expectations through structural excellence.
                   </p>
                 </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 3. LUXURY SERVICES GRID */}
      <section className="py-32 bg-background border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Capabilities</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight">
                Engineering <br/><span className="italic font-light">Excellence</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {services.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card-luxury p-8 group relative overflow-hidden"
                >
                  <div className="w-10 h-10 border border-accent/30 flex items-center justify-center rounded-full mb-8 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <service.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-4">{service.title}</h3>
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
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-[1.2]">
              Building trust and delivering projects <br/>
              <span className="italic text-accent font-light">that stand the test of time.</span>
            </h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-10"></div>
            <a href="mailto:Tmtglobal@gmail.com" className="btn-primary bg-accent text-primary px-12 py-5 hover:bg-white inline-block">
              Inquire About Properties
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
