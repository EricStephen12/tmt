"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { UserPlus, Lightbulb, MonitorSmartphone, School, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";
import SubsidiaryBreadcrumb from "@/components/SubsidiaryBreadcrumb";

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

const services = [
  { 
    icon: UserPlus, 
    title: "Teen Mentorship", 
    desc: "Structured mentorship sessions focused on personal development, purpose discovery, emotional intelligence, and identity.",
    points: ["Purpose Discovery", "Self-Awareness", "Emotional Intelligence"]
  },
  { 
    icon: Lightbulb, 
    title: "Coaching & Life Skills", 
    desc: "We provide practical coaching in communication, leadership development, goal setting, productivity, and decision-making.",
    points: ["Confidence Building", "Leadership Skills", "Goal Setting"]
  },
  { 
    icon: MonitorSmartphone, 
    title: "Digital & Income Skills", 
    desc: "Preparing teens for the future economy through training in tech, digital literacy, and modern high-income skills.",
    points: ["Social Media Mgt", "Basic Tech Literacy", "Copywriting"]
  },
  { 
    icon: School, 
    title: "School Programs", 
    desc: "We partner with learning institutions to deliver leadership seminars, career guidance, and value reorientation sessions.",
    points: ["Leadership Seminars", "Career Guidance", "Value Reorientation"]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000"
];

export default function TMCAPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-background relative selection:bg-accent selection:text-white">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 1. LUXURY HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 overflow-hidden">
        {/* Expert Hero Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.025] select-none">
            <span className="absolute top-1/4 -left-10 text-[20vw] font-serif font-bold whitespace-nowrap text-primary">
              MASTER.
            </span>
          </div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[50%] h-full bg-accent-light/15 rounded-bl-[100px] pointer-events-none"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-[10%] right-[20%] w-[300px] h-[300px] border border-accent/10 rotate-45 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border border-accent/5 rounded-full pointer-events-none"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-8"
            >
              <motion.div variants={fadeUp} className="mb-12">
                <SubsidiaryBreadcrumb name="TMCA Academy" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">TMCA Academy</span>
              </motion.div>
              
              <motion.h1 
                variants={staggerContainer}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-8"
              >
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="block">Purpose-Driven.</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="italic font-light text-accent block">High-Performing.</motion.span>
                </div>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed mb-12 max-w-2xl">
                We are raising a new generation of teenagers equipped with the mindset, skills, and character needed to thrive in today's dynamic world.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 pt-4">
                <Magnetic>
                  <Link href="#programs" className="btn-primary group relative overflow-hidden">
                    <span className="relative z-10">Discover Our Programs</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>

            {/* Subdued Floating Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 hidden lg:block group relative"
            >
              <div className="relative w-full aspect-square border border-accent/20 rounded-full flex items-center justify-center p-8 backdrop-blur-sm shadow-xl">
                 <motion.div 
                   animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 >
                   <UserPlus className="w-16 h-16 text-accent opacity-50" />
                 </motion.div>
                 <div className="absolute inset-4 border border-accent/10 rounded-full animate-ping"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. THE STORY (ABOUT) */}
      <section className="py-40 relative bg-background overflow-hidden border-t border-accent/10">
        {/* Decorative BG — Ghost Text + Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.025] select-none">
          <span className="absolute top-10 -left-10 text-[18vw] font-serif font-bold whitespace-nowrap text-primary">
            TRAIN. DEVELOP. EXCEL.
          </span>
        </div>
        {/* Precision Nodes and Blocks */}
        <motion.div style={{ y: y1 }} className="absolute top-10 right-10 w-[400px] h-[400px] border border-accent/20 rotate-45 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] border border-accent/10"></div>
        </motion.div>
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[40%] h-[80%] bg-accent/[0.03] pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-accent-light/15 rounded-tl-[80px] rounded-br-[80px] pointer-events-none" />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 right-16 w-32 h-32 border border-accent/10 rounded-full pointer-events-none" />
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 left-8 w-48 h-48 border border-accent/5 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            
            {/* Left: Striking Image Parallax */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-5 relative group"
            >
              <div className="sticky top-40">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <motion.div 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=2000" 
                      alt="Mentoring Session"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                  </motion.div>
                  
                  {/* Curtain Reveal Overlay */}
                  <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-accent origin-top z-10"
                  />
                </div>
                
                {/* Floating Frame */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-accent/30 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-accent/30 -z-10"></div>
              </div>
            </motion.div>

            {/* Right: Text Layout */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">About the Academy</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-12 leading-[1.1] tracking-tight">
                Bridging Academic Knowledge <br/>
                <span className="italic font-light text-accent">& Real-Life Success.</span>
              </motion.h2>

              <div className="space-y-8 text-lg font-sans font-light text-slate-500 leading-relaxed max-w-2xl">
                <motion.p variants={fadeUp}>
                  Teens Mentorship and Coaching Academy (TMCA) is a transformational platform dedicated to bridging the gap between traditional schooling and real-world achievement.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We focus not just on knowledge, but on <span className="text-primary font-medium italic">transformation</span>. We adopt a holistic development model combining structured mentorship, coaching, practical skills training, and real-life applications.
                </motion.p>
              </div>

              {/* Core Values Summary */}
              <motion.div variants={fadeUp} className="mt-16 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Vision</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To raise a generation of exceptional teenagers who are mentally equipped, morally grounded, and globally competitive.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Mission</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To empower teenagers through mentorship, leadership coaching, and skill-based training that unlocks potential.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR OFFERINGS (SERVICES) */}
      <section id="services" className="py-32 bg-background relative overflow-hidden border-t border-primary/5">
        {/* Decorative BG — Ghost Text + Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
          <span className="absolute top-0 right-0 text-[16vw] font-serif font-bold whitespace-nowrap text-primary">
            MASTER.
          </span>
        </div>
        {/* Angular Precision */}
        <motion.div style={{ y: y1 }} className="absolute -top-20 right-20 w-[500px] h-[500px] border-r-2 border-b-2 border-accent/15 rotate-12 pointer-events-none" />
        <motion.div style={{ y: y2, clipPath: 'polygon(0 0, 100% 100%, 0% 100%)' }} className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/[0.04] pointer-events-none" />
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute top-12 right-24 w-40 h-40 border border-accent/10 rounded-full pointer-events-none" />
        <motion.div animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} className="absolute bottom-16 left-12 w-56 h-56 border border-accent/5 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Programs</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
                Our Pathways To <br/><span className="italic font-light">Transformation</span>
              </h2>
            </div>
            <div className="max-w-sm">
               <div className="w-12 h-[1px] bg-slate-300 mb-6"></div>
               <p className="text-slate-500 font-sans font-light leading-relaxed">
                Structured and result-driven development programs focused on character, competence, and readiness for the future economy.
               </p>
            </div>
          </motion.div>

          <div className="divide-y divide-primary/5">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-12 gap-4 lg:gap-10 py-10 hover:bg-accent/[0.025] transition-all duration-500 cursor-default -mx-6 px-6"
              >
                <div className="col-span-1 hidden md:flex items-start pt-1">
                  <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-primary/20 group-hover:text-accent transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center mb-4 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-500">
                    <service.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-[1.75rem] text-primary leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center">
                  <p className="font-sans text-[15px] text-slate-500 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col items-start md:items-end justify-start md:justify-center gap-2 flex-wrap">
                  {service.points.map((pt, idx) => (
                    <span key={idx} className="text-[9px] font-sans uppercase tracking-[0.15em] text-primary/30 group-hover:text-accent/60 transition-colors duration-500">
                      {pt}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL JOURNEY (IMAGE GALLERY) */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <motion.div 
            initial={{opacity: 0, x: -20}} 
            whileInView={{opacity: 1, x: 0}} 
            viewport={{once: true}}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The Environment</span>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Gallery Effect */}
        <div className="flex gap-6 px-6 lg:px-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative min-w-[300px] md:min-w-[400px] lg:min-w-[500px] aspect-[4/3] snap-center rounded-sm overflow-hidden group"
            >
              <Image 
                src={img}
                alt="TMCA Gallery Image"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. LUXURY CTA SECTION */}
      <section className="py-60 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
            alt="Teen Empowerment"
            fill
            className="object-cover opacity-[0.15] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.5em] text-accent font-bold">Empowerment</span>
              <div className="w-12 h-[1px] bg-accent"></div>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tighter">
              A generation of influencers <br/>
              <span className="italic font-light text-accent">and change-makers.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 font-sans font-light mb-16 leading-relaxed max-w-xl mx-auto">
              Ready to unlock their full potential? Reach out to discover how TMCA can transform the future for the teenagers in your life.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.2}>
                <Link href="/contact" className="group relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-white translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 opacity-10"></div>
                  <div className="relative px-16 py-6 bg-accent text-white font-sans text-[11px] font-bold uppercase tracking-[0.6em] overflow-hidden">
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Join the Academy</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0"></div>
                  </div>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
