"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Shield, Zap, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <main ref={containerRef} className="min-h-screen bg-background relative selection:bg-accent selection:text-white">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden">
        {/* Ghost Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.025] select-none">
          <span className="absolute top-20 -left-10 text-[20vw] font-serif font-bold whitespace-nowrap text-primary">
            VISION.
          </span>
        </div>

        {/* Parallax Shapes */}
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[50%] h-full bg-accent-light/15 rounded-bl-[120px] pointer-events-none" />
        <motion.div style={{ y: y1 }} className="absolute -top-10 right-20 w-[40%] h-[110%] border-r border-b border-accent/10 rounded-br-[140px] pointer-events-none" />
        
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-32 w-40 h-40 border border-accent/10 rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-8"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">About Us</span>
              </motion.div>
              <motion.h1 
                variants={staggerContainer}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-8"
              >
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="block">A Story of</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="italic font-light text-accent block">Vision & Purpose.</motion.span>
                </div>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl font-light font-sans">
                "We didn't just start a business; we started a movement to redefine excellence across the African landscape."
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Identity */}
      <section className="py-40 bg-background relative overflow-hidden border-t border-accent/10">
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
          <span className="absolute top-10 -right-20 text-[18vw] font-serif font-bold whitespace-nowrap text-primary text-right w-full">
            JOURNEY.
          </span>
        </div>

        {/* Ambient Shapes */}
        <motion.div style={{ y: y1 }} className="absolute -top-40 -left-20 w-[800px] h-[800px] bg-gradient-radial from-accent-light/10 to-transparent rounded-full pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-tl-[100px] pointer-events-none" />
        
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-10 w-64 h-64 border border-accent/5 rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-6"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The TMT Journey</span>
                <div className="w-24 h-[1px] bg-accent/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-6xl font-serif text-primary mb-10 leading-[1.1]">
                It's about <span className="italic font-light text-accent">more than numbers.</span><br/> It's about people.
              </motion.h2>
              
              <div className="space-y-8 text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed">
                <motion.p variants={fadeUp}>
                  Born in 2021 from a burning desire to create lasting impact, TMT Group has grown into a family of specialized brands. We've poured our hearts into consulting, agriculture, education, and beyond—not just to compete, but to serve.
                </motion.p>
                <motion.div variants={fadeUp} className="border-l-[1px] border-accent/40 pl-8 py-2">
                  <p className="italic text-primary/80 font-serif text-2xl leading-relaxed">
                    "Every project we take on, every building we construct, and every seed we plant is a testament to our belief in the African dream."
                  </p>
                </motion.div>
              </div>
              
              <motion.div variants={fadeUp} className="mt-16 pt-12 border-t border-accent/10 flex items-center gap-8">
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold mb-2">The Heart of TMT</p>
                  <p className="text-4xl font-serif text-primary italic">Princewill Okafor</p>
                  <p className="text-xs font-sans text-slate-400 tracking-widest uppercase mt-2">Lead Executive & Visionary</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative aspect-[4/5] w-full group"
            >
              {/* Asymmetric Frames */}
              <div className="absolute -inset-4 border border-accent/15 rounded-[40px] -rotate-3 transition-transform duration-1000 group-hover:rotate-0"></div>
              <div className="absolute -inset-4 border border-accent/5 rounded-[40px] rotate-3 transition-transform duration-1000 delay-100 group-hover:rotate-0"></div>
              
              <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-2xl bg-slate-100">
                <Image 
                  src="/images/founder.jpeg" 
                  alt="Princewill Okafor - Founder of TMT Group"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 mix-blend-multiply"></div>
                
                <div className="absolute bottom-12 left-10 right-10">
                   <p className="text-white/90 font-serif italic text-3xl leading-tight">"Excellence isn't an act, <br/>it's our habit."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values with Premium Grid */}
      <section className="py-40 bg-primary relative overflow-hidden">
        {/* Ghost Text Dark */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03] select-none">
          <span className="absolute top-1/3 left-10 text-[18vw] font-serif font-bold whitespace-nowrap text-white">
            VALUES.
          </span>
        </div>

        <motion.div style={{ y: y1 }} className="absolute -top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-accent/5 rounded-tr-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-accent"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Our Soul</span>
              </div>
              <motion.h2 variants={fadeUp} className="text-5xl lg:text-[6rem] font-serif text-white leading-[1.05]">
                What We <br /><span className="italic font-light text-accent">Stand For.</span>
              </motion.h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-xl md:text-2xl font-light font-sans max-w-md pb-4"
            >
              We don't just follow standards; we set them. Our values are the heartbeat of everything we do.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { icon: Shield, title: "Excellence", desc: "It's not just about being good. It's about being the best version of ourselves every single day." },
              { icon: Zap, title: "Relevance", desc: "We listen, we adapt, and we solve real problems for real people in our communities." },
              { icon: Award, title: "Impact", desc: "Success is measured by the lives we touch and the legacies we help build." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`group p-16 lg:p-20 border-white/5 relative overflow-hidden ${
                  i === 1 ? 'bg-white/[0.02] border-x md:border-y-0 border-y' : ''
                }`}
              >
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500"></div>
                <motion.div className="relative z-10">
                  <div className="w-20 h-20 rounded-full border border-accent/20 flex items-center justify-center mb-12 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <value.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-4xl font-serif text-white mb-6 group-hover:text-accent transition-colors">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light font-sans text-lg">{value.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 bg-background relative overflow-hidden flex flex-col items-center justify-center border-t border-accent/10">
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-[0.03]">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-bold whitespace-nowrap text-primary">
            GROW.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-12">
            Ready to <span className="italic font-light text-accent">grow with us?</span>
          </h2>
          <Magnetic>
            <Link href="/contact" className="btn-primary group relative overflow-hidden px-16 py-6 text-lg">
              <span className="relative z-10">Connect With Us</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </Magnetic>
        </motion.div>
      </section>
    </main>
  );
}


