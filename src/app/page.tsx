"use client";

import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Building2, 
  Briefcase, 
  Truck, 
  Leaf, 
  GraduationCap, 
  Hotel, 
  ArrowRight,
  MonitorPlay,
  Shirt,
  ChevronDown,
  ShoppingCart,
  Video
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const subsidiaries = [
  {
    name: "TMT Real Estate",
    description: "Building more than just walls. We create the spaces where your family's legacy actually begins.",
    icon: Building2,
    href: "/real-estate",
    image: "/images/realestate.jpg"
  },
  {
    name: "TMT Consulting",
    description: "We help you stop guessing and start growing. Real advice for real impact in the African market.",
    icon: Briefcase,
    href: "/consulting",
    image: "/images/consultancy.jpg"
  },
  {
    name: "High Star Logistics",
    description: "Your goods, our promise. We're the bridge that connects your business to the rest of the world.",
    icon: Truck,
    href: "/logistics",
    image: "/images/logistic.jpg"
  },
  {
    name: "Yutaka Farm",
    description: "Feeding Africa starts with the soil. We're bringing sustainable, heart-led farming to every table.",
    icon: Leaf,
    href: "/agriculture",
    image: "/images/Farm.jpg"
  },
  {
    name: "TMT Schools",
    description: "The future belongs to our kids. We're giving them the world-class education they deserve to lead it.",
    icon: GraduationCap,
    href: "/schools",
    image: "/images/schoolbuilding.jpg"
  },
  {
    name: "TMT Technologies",
    description: "Tech that feels human. We're building the digital tools that power the modern African dream.",
    icon: MonitorPlay,
    href: "/media-tech",
    image: "/images/tech.jpg"
  },
  {
    name: "Tours & Hospitality",
    description: "Your escape, reimagined. We craft travel experiences that stay with you long after you've returned home.",
    icon: Hotel,
    href: "/hospitality",
    image: "/images/hospitalit.jpg"
  },
  {
    name: "Premium Klin",
    description: "Take your time back. We handle the executive lifestyle care so you can focus on your big wins.",
    icon: Shirt,
    href: "/lifestyle",
    image: "/images/hospitalit3.jpg"
  },
  {
    name: "TMT Bookstore",
    description: "Unlock your next big idea. A curated home for the books and resources that shape the African mind.",
    icon: ShoppingCart,
    href: "/bookstore",
    image: "/images/Book store_.jpg"
  },
  {
    name: "Virtual Training",
    description: "Learn at your own pace, on your own terms. Professional training designed for the real world.",
    icon: Video,
    href: "/training",
    image: "/images/tech4.jpg"
  }
];

export default function Home() {
  const [activeSub, setActiveSub] = useState<number>(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotateHero = useTransform(scrollYProgress, [0, 0.2], [0, 5]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-background relative selection:bg-accent selection:text-white">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative h-screen flex items-center pt-28 overflow-hidden">
        {/* Abstract Architectural Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-3/4 h-full bg-accent-light/30 rounded-bl-[100px] transform translate-x-10 -translate-y-10"
          ></motion.div>
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-tr-[100px] transform -translate-x-10 translate-y-10"
          ></motion.div>
          
          {/* Floating Decorative Elements */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-10 w-40 h-40 border border-accent/10 rounded-full"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-10 w-60 h-60 border border-accent/5 rounded-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-[20%] left-[10%] w-[1px] h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[1px] h-60 bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            style={{ rotate: rotateHero, opacity: opacityHero }}
            className="grid lg:grid-cols-12 gap-16 items-center">
            
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
              
              <motion.h1 
                variants={staggerContainer}
                className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl lg:text-[5.5rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-8"
              >
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="block">Diversification</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="italic font-light text-accent block">With Direction.</motion.span>
                </div>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed mb-12 max-w-2xl">
                TMT Group is a diversified enterprise built on an unwavering vision of excellence, relevance, and long-term impact across the African economy.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 pt-4">
                <Magnetic>
                  <Link href="#subsidiaries" className="btn-primary group relative overflow-hidden">
                    <span className="relative z-10">Explore Our Portfolio</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="#about" className="btn-outline">
                    Our Vision
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>

            {/* High-End Imagery Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-5 hidden lg:block group relative"
            >
              {/* Floating Architectural Lines */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-accent/20 transition-all duration-700 group-hover:-top-5 group-hover:-right-5"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-accent/20 transition-all duration-700 group-hover:-bottom-5 group-hover:-left-5"></div>

              <div className="relative w-full aspect-[3/4] perspective-1000">
                {/* Decorative border */}
                <div className="absolute inset-0 border border-accent/30 rounded-t-full transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                {/* Image container */}
                <div className="absolute inset-0 bg-primary/5 rounded-t-full overflow-hidden border border-primary/5 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm shadow-2xl group-hover:bg-primary/10 transition-colors duration-700">
                   {/* Curtain Reveal Overlay */}
                   <motion.div
                     initial={{ scaleY: 1 }}
                     animate={{ scaleY: 0 }}
                     transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                     className="absolute inset-0 bg-accent origin-bottom z-20"
                   />
                   
                   <motion.div 
                     animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     className="relative z-10"
                   >
                     <Building2 className="w-16 h-16 text-accent mb-8 opacity-40" />
                     <div className="absolute -inset-4 border border-accent/10 rounded-full animate-ping"></div>
                   </motion.div>
                   <h3 className="text-primary font-serif italic text-3xl mb-4 leading-tight relative z-10">"...always with you"</h3>
                   <div className="w-10 h-[1px] bg-accent/30 mb-4 relative z-10"></div>
                   <p className="text-[10px] font-sans uppercase tracking-[0.4em] text-slate-400 font-bold relative z-10">Corporate Headquarters</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll to Discover Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          data-cursor-text="Scroll"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4 z-10 cursor-pointer"
        >
          <span className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-accent/60">Discover</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-accent/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* 2. THE EXECUTIVE SUMMARY (CLASSIC EDITORIAL STYLE) */}
      <section id="about" className="py-40 relative bg-background overflow-hidden">
        {/* Subtle Background Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
          <span className="absolute top-20 -left-20 text-[20vw] font-serif font-bold whitespace-nowrap">
            EXCELLENCE. IMPACT. VISION.
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            
            {/* Left Column: Founder with Parallax Effect */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 relative group"
            >
              <div className="sticky top-40">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
                  <motion.div 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <Image 
                      src="/images/founder.jpeg" 
                      alt="Princewill Okafor - Founder of TMT Group"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                    {/* Sophisticated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                  </motion.div>
                  
                  {/* Curtain Reveal Overlay */}
                  <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-accent origin-top z-10"
                  />
                  
                  {/* Founder Name & Title Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-10 translate-y-2 group-hover:translate-y-0 transition-all duration-700 z-20">
                    <div className="flex flex-col">
                      <h3 className="text-3xl font-serif text-white mb-2">Princewill Okafor</h3>
                      <p className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Founder & Lead Executive</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Architectural Frame */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-accent/30 -z-10 transition-all duration-700 group-hover:-top-3 group-hover:-right-3"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-accent/30 -z-10 transition-all duration-700 group-hover:-bottom-3 group-hover:-left-3"></div>
              </div>
            </motion.div>

            {/* Right Column: Text & Pillars */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The TMT Philosophy</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-12 leading-[1.1] tracking-tight">
                A Unified Brand Identity <br/>
                <span className="italic font-light text-accent">Harnessing Opportunities.</span>
              </motion.h2>

              <div className="space-y-10 text-lg font-sans font-light text-slate-500 leading-relaxed max-w-2xl">
                <motion.p variants={fadeUp}>
                  TMT Group exists to serve individuals, organizations, and communities through specialized subsidiaries that address real needs and create measurable value. Our operating philosophy combines <span className="text-primary font-medium italic">professionalism</span>, <span className="text-primary font-medium italic">customer commitment</span>, and <span className="text-primary font-medium italic">strategic growth</span>.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Rather than operating as a single-service brand, we have built our strength around multiple business units capable of serving different customer segments while maintaining a shared culture of excellence.
                </motion.p>
              </div>

              {/* Pillars of Excellence Upgrade */}
              <motion.div variants={fadeUp} className="mt-24">
                <div className="flex items-center gap-4 mb-12">
                  <h3 className="text-[10px] font-sans uppercase tracking-[0.4em] text-primary/40 font-bold">Pillars of Excellence</h3>
                  <div className="flex-grow h-[1px] bg-primary/5"></div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                  {[
                    { title: "Excellence", desc: "Outstanding standards in service delivery." },
                    { title: "Integrity", desc: "Honesty, accountability, and professionalism." },
                    { title: "Innovation", desc: "Smart thinking and technology-driven solutions." },
                    { title: "Sustainability", desc: "Building for long-term value and enduring impact." }
                  ].map((value, idx) => (
                    <motion.div 
                      key={idx} 
                      className="group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] font-sans font-bold text-accent/40">0{idx + 1}</span>
                        <h4 className="font-serif text-2xl text-primary group-hover:text-accent transition-colors duration-500">{value.title}</h4>
                      </div>
                      <p className="font-sans text-sm text-slate-500 font-light leading-relaxed pl-8 border-l border-primary/5 group-hover:border-accent/30 transition-all duration-500">
                        {value.desc}
                      </p>
                    </motion.div>
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
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12"
          >
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-[1px] bg-accent"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Portfolio</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
                Our Strategic <br/><span className="italic font-light">Subsidiaries</span>
              </h2>
            </div>
            <div className="max-w-sm">
               <div className="w-12 h-[1px] bg-slate-200 mb-6"></div>
               <p className="text-slate-500 font-sans font-light leading-relaxed">
                Broad multi-sector capability under one brand, delivering flexible solutions tailored to actual market needs.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between gap-6 mb-10"
          >
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-slate-400">
                Hover To Expand
              </span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-[1px] bg-accent/40"></div>
                <ChevronDown className="w-4 h-4 text-accent/70 -rotate-90" />
              </motion.div>
            </div>
            <div className="lg:hidden flex items-center gap-3">
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-slate-400">
                Tap To Expand
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-[1px] bg-accent/40"></div>
                <ChevronDown className="w-4 h-4 text-accent/70" />
              </motion.div>
            </div>
            <div className="ml-auto flex items-center gap-2 text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-accent/60">
              <span>01</span>
              <div className="w-10 h-[1px] bg-accent/20"></div>
              <span>08</span>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-2 h-[800px] lg:h-[700px] group/container">
            {subsidiaries.map((sub, i) => (
              <motion.div 
                key={sub.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveSub(i)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-1000 ease-[0.22, 1, 0.36, 1] ${
                  activeSub === i 
                    ? 'lg:flex-[4] h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-20' 
                    : 'lg:flex-1 h-20 lg:h-full grayscale opacity-60 hover:opacity-100 z-10'
                }`}
              >
                {/* Background Image with Parallax & Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image 
                    src={sub.image} 
                    alt={sub.name}
                    fill
                    className={`object-cover transition-all duration-[2000ms] ease-out ${
                      activeSub === i ? 'scale-110 rotate-1' : 'scale-125'
                    }`}
                  />
                  {/* Sophisticated Dual Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/90 transition-opacity duration-1000 ${
                    activeSub === i ? 'opacity-100' : 'opacity-80'
                  }`}></div>
                  <div className={`absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-1000 ${
                    activeSub === i ? 'opacity-0' : 'opacity-40'
                  }`}></div>
                </div>

                {/* Card Border Highlight */}
                <div className={`absolute inset-0 border border-white/10 transition-opacity duration-1000 ${
                  activeSub === i ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Content Layer */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  {/* Top Section: Index & Icon */}
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-sans font-bold text-accent/60 tracking-[0.5em] uppercase">
                      0{i + 1}
                    </span>
                    <div className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5 transition-all duration-1000 ${
                      activeSub === i ? 'scale-100 rotate-0 opacity-100' : 'scale-75 rotate-12 opacity-0 lg:opacity-0'
                    }`}>
                      <sub.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Bottom Section: Text */}
                  <div className="relative">
                    <div className={`transition-all duration-1000 ease-[0.22, 1, 0.36, 1] ${
                      activeSub === i ? 'translate-y-0 opacity-100' : 'lg:translate-y-20 lg:opacity-0'
                    }`}>
                      <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-none tracking-tighter max-w-xs">
                        {sub.name.split(' ').map((word, idx) => (
                          <span key={idx} className={idx === 1 ? 'italic font-light text-accent block mt-2' : 'block'}>
                            {word}
                          </span>
                        ))}
                      </h3>
                      
                      <div className={`transition-all duration-1000 delay-300 ${
                        activeSub === i ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}>
                        <p className="font-sans text-base text-white/70 font-light leading-relaxed mb-10 max-w-sm">
                          {sub.description}
                        </p>
                        <Link 
                          href={sub.href} 
                          className="inline-flex items-center gap-4 text-[10px] font-sans uppercase tracking-[0.4em] text-white font-bold group/btn"
                        >
                          <span className="relative">
                            View Project
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover/btn:w-full"></span>
                          </span>
                          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all duration-500">
                            <ArrowRight className="w-3 h-3 text-white transition-transform group-hover/btn:translate-x-1" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Collapsed Label (Editorial Style) */}
                    <div className={`absolute bottom-0 left-0 transition-all duration-1000 ${
                      activeSub === i ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
                    }`}>
                      <h4 className="text-xs font-sans uppercase tracking-[0.5em] text-white/40 font-bold [writing-mode:vertical-lr] hidden lg:block pb-4">
                        {sub.name}
                      </h4>
                      <h4 className="text-xs font-sans uppercase tracking-[0.5em] text-white/40 font-bold lg:hidden">
                        {sub.name}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Subtle Glow Effect on Active */}
                <div className={`absolute -inset-20 bg-accent/5 blur-[120px] rounded-full transition-opacity duration-1000 pointer-events-none ${
                  activeSub === i ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LUXURY CTA SECTION (ASYMMETRIC EDITORIAL STYLE) */}
      <section className="py-60 bg-primary relative overflow-hidden">
        {/* Background Parallax Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/consultancy1.jpg" 
            alt="Corporate Strategic Partnership"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent"></div>
          
          {/* Floating Architectural Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] border border-accent/10 rounded-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.5em] text-accent font-bold">Collaborate</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-12 leading-[1.05] tracking-tighter">
                Begin A Strategic <br/>
                <span className="italic font-light text-accent">Partnership.</span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 font-sans font-light max-w-xl mb-16 leading-relaxed">
                Discover why leading clients rely on TMT Group for uncompromising excellence, flexible solutions, and dependable collaboration across African strategic industries.
              </motion.p>
              
              <motion.div variants={fadeUp}>
                <Magnetic strength={0.2}>
                  <Link href="/contact" className="group relative inline-flex items-center justify-center">
                    {/* Shadow Decoration */}
                    <div className="absolute inset-0 bg-white translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 opacity-5"></div>
                    
                    <div className="relative px-20 py-8 bg-accent text-white font-sans text-[11px] font-bold uppercase tracking-[0.6em] overflow-hidden">
                      <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Connect With Us</span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0"></div>
                    </div>
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>

            {/* Right: Decorative Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 hidden lg:flex justify-end"
            >
              <div className="relative w-64 h-64 border border-accent/20 rounded-full flex items-center justify-center p-12 text-center group cursor-default">
                <div className="absolute inset-0 border border-accent/5 rounded-full animate-ping"></div>
                <div className="absolute inset-4 border border-accent/10 rounded-full group-hover:inset-0 transition-all duration-1000"></div>
                <p className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent/60 leading-loose">
                  Driving <br/> Economic <br/> Transformation
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
