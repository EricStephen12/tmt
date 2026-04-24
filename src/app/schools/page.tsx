"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, BookOpen, Users, Laptop, ChevronRight, MapPin } from "lucide-react";
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
    icon: GraduationCap, 
    title: "Nursery & Primary", 
    desc: "A strong, nurturing foundation that develops early literacy, numeracy, character, and love for learning in young children.",
    points: ["Early Childhood Education", "Play-Based Learning", "Safe Environment"]
  },
  { 
    icon: Users, 
    title: "Secondary Education", 
    desc: "A rigorous secondary program designed to prepare students academically and personally for tertiary education and life beyond the classroom.",
    points: ["Core Academics", "Leadership Development", "STEM & Creative Arts"]
  },
  { 
    icon: Laptop, 
    title: "Digital & Tech Integration", 
    desc: "All TMT schools integrate technology into learning — from computer labs to digital resources — preparing students for the modern world.",
    points: ["Computer Studies", "Digital Literacy", "Online Learning Tools"]
  },
  { 
    icon: GraduationCap, 
    title: "Ne Plus Ultra University", 
    desc: "Our premium tertiary institution offering specialized programs designed for high-achieving students ready to lead in their respective fields.",
    points: ["Executive Programs", "Specialized Degrees", "Global Research"]
  },
  { 
    icon: BookOpen, 
    title: "Extracurricular Programs", 
    desc: "Beyond academics, we develop well-rounded students through debates, sports, arts, mentorship programs, and student leadership councils.",
    points: ["Sports & Athletics", "Arts & Culture", "Student Leadership"]
  }
];

const galleryImages = [
  "/images/school.jpg",
  "/images/school2.jpg",
  "/images/school3.jpg",
  "/images/schoolbuilding.jpg"
];

export default function SchoolsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-background relative selection:bg-accent selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.025] select-none">
            <span className="absolute top-1/4 -left-10 text-[22vw] font-serif font-bold whitespace-nowrap text-primary">
              LEAD.
            </span>
          </div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[50%] h-full bg-accent-light/15 rounded-bl-full pointer-events-none"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-20 right-[15%] w-[400px] h-[600px] border border-accent/10 rounded-t-full pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] border border-accent/5 rounded-full pointer-events-none"
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
                <SubsidiaryBreadcrumb name="Group of Schools" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">TMT Group of Schools</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-7">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-sans text-slate-400 tracking-wide">Abuja, Nigeria</span>
              </motion.div>
              
              <motion.h1 
                variants={staggerContainer}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-7"
              >
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="block">Educating.</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="italic font-light text-accent block">Character First.</motion.span>
                </div>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed mb-10 max-w-2xl">
                TMT Group of Schools is committed to holistic education — combining strong academics, character formation, and real-world skills to prepare Nigerian students for a competitive future.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
                <Magnetic>
                  <Link href="#programs" className="btn-primary group relative overflow-hidden">
                    <span className="relative z-10">Explore Programs</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>

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
                   <GraduationCap className="w-16 h-16 text-accent opacity-50" />
                 </motion.div>
                 <div className="absolute inset-4 border border-accent/10 rounded-full animate-ping"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-40 relative bg-background overflow-hidden border-t border-accent/10">
        {/* Decorative BG — Ghost Text + Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.025] select-none">
          <span className="absolute top-10 -left-10 text-[18vw] font-serif font-bold whitespace-nowrap text-primary">
            LEARN. INSPIRE. LEAD.
          </span>
        </div>
        {/* Foundation Blocks & Arches */}
        <motion.div style={{ y: y1 }} className="absolute top-0 right-20 w-[300px] h-[600px] bg-accent/[0.04] rounded-t-full pointer-events-none" />
        <motion.div style={{ y: y1 }} className="absolute top-20 right-[350px] w-[200px] h-[400px] border border-accent/15 rounded-t-full pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-light/15 rounded-tr-[150px] pointer-events-none" />
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 right-16 w-32 h-32 border border-accent/10 rounded-full pointer-events-none" />
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 left-8 w-48 h-48 border border-accent/5 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            
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
                      src="/images/school.jpg" 
                      alt="TMT Schools"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
                  </motion.div>
                  <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-accent origin-top z-10"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-accent/30 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-accent/30 -z-10"></div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Our Philosophy</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-12 leading-[1.1] tracking-tight">
                More Than Grades. <br/>
                <span className="italic font-light text-accent">We Shape People.</span>
              </motion.h2>

              <div className="space-y-8 text-lg font-sans font-light text-slate-500 leading-relaxed max-w-2xl">
                <motion.p variants={fadeUp}>
                  TMT Group of Schools provides quality education across nursery, primary, secondary levels, and our flagship <span className="text-primary font-medium italic">Ne Plus Ultra University</span> in Abuja. Our institutions are designed around the belief that true education builds both intellect and character.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We go beyond the standard curriculum to develop students who are <span className="text-primary font-medium italic">confident, curious, and compassionate</span> — ready to take on challenges in Nigeria and beyond.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="mt-16 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Vision</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To be the most impactful school group in Nigeria, producing graduates who lead with integrity and excellence.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Mission</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To provide a rich, structured, and supportive learning environment that unlocks every child's full potential.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-32 bg-background relative overflow-hidden border-t border-primary/5">
        {/* Decorative BG — Ghost Text + Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
          <span className="absolute top-0 right-0 text-[16vw] font-serif font-bold whitespace-nowrap text-primary">
            SCHOLARS.
          </span>
        </div>
        {/* Learning Foundations */}
        <motion.div style={{ y: y1 }} className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-accent-light/10 rounded-full pointer-events-none" />
        <motion.div style={{ y: y1 }} className="absolute -top-10 right-40 w-[300px] h-[300px] bg-accent/[0.05] rounded-[60px] rotate-12 pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-10 w-[400px] h-[300px] border border-accent/10 rounded-t-full pointer-events-none" />
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Education Levels</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
                Our Academic <br/><span className="italic font-light">Programs</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <div className="w-12 h-[1px] bg-slate-300 mb-6"></div>
              <p className="text-slate-500 font-sans font-light leading-relaxed">
                A complete educational journey from early childhood through secondary school — anchored in academic excellence and personal development.
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

      {/* GALLERY */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <motion.div 
            initial={{opacity: 0, x: -20}} 
            whileInView={{opacity: 1, x: 0}} 
            viewport={{once: true}}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Campus Life</span>
          </motion.div>
        </div>

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
                alt="TMT Schools"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-60 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/schoolbuilding.jpg" 
            alt="Education Nigeria"
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
              <span className="text-[10px] font-sans uppercase tracking-[0.5em] text-accent font-bold">Admissions</span>
              <div className="w-12 h-[1px] bg-accent"></div>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tighter">
              Give your child <br/>
              <span className="italic font-light text-accent">the right foundation.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 font-sans font-light mb-16 leading-relaxed max-w-xl mx-auto">
              Reach out to learn more about admissions, school programs, and how TMT Schools can be the right environment for your child.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.2}>
                <Link href="/contact" className="group relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-white translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 opacity-10"></div>
                  <div className="relative px-16 py-6 bg-accent text-white font-sans text-[11px] font-bold uppercase tracking-[0.6em] overflow-hidden">
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Enquire Now</span>
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
