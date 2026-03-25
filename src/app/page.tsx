"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Briefcase, 
  Truck, 
  Leaf, 
  GraduationCap, 
  Hotel, 
  ArrowRight,
  MonitorPlay,
  Shirt
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
    transition: { staggerChildren: 0.1 }
  }
};

const subsidiaries = [
  {
    name: "TMT Real Estate",
    description: "Architectural brilliance and property solutions that build lasting legacies.",
    icon: Building2,
    href: "/real-estate",
  },
  {
    name: "TMT Consulting",
    description: "Strategic enterprise advisory elevating performance and visionary leadership.",
    icon: Briefcase,
    href: "/consulting",
  },
  {
    name: "High Star Logistics",
    description: "Precision-driven haulage ensuring seamless operational excellence.",
    icon: Truck,
    href: "/logistics",
  },
  {
    name: "Yutaka Farm",
    description: "Sustainable agricultural production pioneering food security.",
    icon: Leaf,
    href: "/agriculture",
  },
  {
    name: "TMT Schools",
    description: "Cultivating future leaders through premium educational administration.",
    icon: GraduationCap,
    href: "/schools",
  },
  {
    name: "TMT Technologies",
    description: "Cutting-edge digital and multimedia strategies for modern enterprise.",
    icon: MonitorPlay,
    href: "/media-tech",
  },
  {
    name: "Tours & Hospitality",
    description: "Bespoke travel and hospitality experiences crafted for ultimate convenience.",
    icon: Hotel,
    href: "/hospitality",
  },
  {
    name: "Premium Klin",
    description: "Executive lifestyle care delivering uncompromised service quality.",
    icon: Shirt,
    href: "/lifestyle",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative h-screen flex items-center pt-28 overflow-hidden">
        {/* Abstract Architectural Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-accent-light/30 rounded-bl-[100px] transform translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-tr-[100px] transform -translate-x-10 translate-y-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Established 2021</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-8">
                Diversification <br className="hidden sm:block" />
                <span className="italic font-light text-accent">With Direction.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed mb-12 max-w-2xl">
                TMT Group is a diversified enterprise built on an unwavering vision of excellence, relevance, and long-term impact across the African economy.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
                <Link href="#about" className="btn-primary">
                  Discover Our Vision
                </Link>
                <Link href="#subsidiaries" className="btn-outline">
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>

            {/* High-End Imagery Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative w-full aspect-[3/4]">
                {/* Decorative border */}
                <div className="absolute inset-0 border border-accent/30 rounded-t-full transform translate-x-4 translate-y-4"></div>
                {/* Image container */}
                <div className="absolute inset-0 bg-primary/5 rounded-t-full overflow-hidden border border-accent/10 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm shadow-2xl">
                   <Building2 className="w-12 h-12 text-accent mb-6 opacity-50" />
                   <p className="text-primary font-serif italic text-2xl mb-2">"...always with you"</p>
                   <p className="text-xs font-sans uppercase tracking-[0.2em] text-slate-500">Corporate Headquarters</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE EXECUTIVE SUMMARY (CLASSIC EDITORIAL STYLE) */}
      <section id="about" className="py-32 relative bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Left Column: Founder */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="sticky top-40">
                <div className="relative aspect-[4/5] bg-background border border-slate-200 p-4 shadow-sm">
                   <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center border border-slate-200/50">
                      <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-6">
                        <span className="text-accent font-serif text-2xl italic">P</span>
                      </div>
                      <h3 className="text-2xl font-serif text-primary mb-1">Princewill Okafor</h3>
                      <p className="text-xs font-sans uppercase tracking-[0.2em] text-slate-500">Founder & Lead Executive</p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 lg:pt-12"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Our Philosophy</span>
                <div className="w-24 h-[1px] bg-accent/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary mb-8 md:mb-12 leading-[1.3] md:leading-[1.2]">
                A unified brand identity <br className="hidden md:block"/><span className="italic text-accent">harnessing business opportunities</span> across strategic industries.
              </motion.h2>

              <div className="space-y-8 text-lg font-sans font-light text-slate-600 leading-relaxed">
                <motion.p variants={fadeUp}>
                  TMT Group exists to serve individuals, organizations, and communities through specialized subsidiaries that address real needs and create measurable value. The Group’s operating philosophy combines professionalism, customer commitment, innovation, and strategic growth.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Rather than operating as a single-service brand, TMT Group has built its strength around multiple business units capable of serving different customer segments while maintaining a shared culture of excellence.
                </motion.p>
                <motion.p variants={fadeUp}>
                  This structure allows us to adapt to changing market conditions, develop cross-sector opportunities, and pursue sustainable expansion in ways that strengthen both profitability and impact.
                </motion.p>
              </div>

              {/* Core Values Minimalist Layout */}
              <motion.div variants={fadeUp} className="mt-20 pt-12 border-t border-slate-100">
                <h3 className="text-xs font-sans uppercase tracking-[0.3em] text-primary mb-10">Pillars of Excellence</h3>
                <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
                  {[
                    { title: "Excellence", desc: "Outstanding standards in service delivery." },
                    { title: "Integrity", desc: "Honesty, accountability, and professionalism." },
                    { title: "Innovation", desc: "Smart thinking and technology-driven solutions." },
                    { title: "Sustainability", desc: "Building for long-term value and enduring impact." }
                  ].map((value, idx) => (
                    <div key={idx}>
                      <h4 className="font-serif text-xl text-primary mb-2">{value.title}</h4>
                      <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SUBSIDIARIES PORTFOLIO (GALLERY STYLE) */}
      <section id="subsidiaries" className="py-32 bg-background border-t border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Portfolio</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-serif text-primary leading-tight">
                Our Strategic <br/><span className="italic font-light">Subsidiaries</span>
              </h2>
            </div>
            <p className="text-slate-500 font-sans font-light max-w-sm">
              Broad multi-sector capability under one brand, delivering flexible solutions tailored to actual market needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {subsidiaries.map((sub, i) => (
                <motion.div 
                  key={sub.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={sub.href} className="block group h-full">
                    <div className="card-luxury p-8 flex flex-col h-full relative overflow-hidden z-10">
                      {/* Hover background slide effect */}
                      <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-[-1]"></div>
                      
                      <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center mb-8 bg-background group-hover:border-transparent transition-all duration-500">
                        <sub.icon className="w-5 h-5 text-accent" />
                      </div>
                      
                      <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-white transition-colors duration-500">{sub.name}</h3>
                      <p className="font-sans text-sm text-slate-500 font-light leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors duration-500">
                        {sub.description}
                      </p>
                      
                      <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em] text-accent font-semibold mt-auto opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Explore <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. LUXURY CTA SECTION */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Begin A Strategic <br/><span className="italic text-accent font-light">Partnership</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-sans font-light max-w-2xl mx-auto mb-12">
              Discover why clients rely on TMT Group for uncompromising excellence, flexible solutions, and dependable collaboration.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-12 py-5 bg-accent text-primary font-sans text-sm font-semibold uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-accent/20">
              Contact The Group
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
