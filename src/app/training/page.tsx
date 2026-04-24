"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Video, Monitor, Award, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Magnetic from "@/components/Magnetic";
import TrainingEnrollModal from "@/components/TrainingEnrollModal";

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
    icon: Video, 
    title: "Live Virtual Training", 
    desc: "Interactive, live-streamed sessions by industry experts that you can attend directly from our online portal.",
    points: ["Live Sessions", "Expert Tutors", "Interactive Q&A"]
  },
  { 
    icon: Monitor, 
    title: "On-Demand E-Learning", 
    desc: "Access an extensive digital library of on-demand courses, modules, and video resources tailored to your goals.",
    points: ["On-Demand Courses", "Resource Library", "Self-Paced"]
  },
  { 
    icon: Award, 
    title: "Digital Certifications", 
    desc: "Take online assessments to earn globally recognized digital credentials that validate your expertise.",
    points: ["Online Exams", "Skill Validation", "Digital Badges"]
  },
  { 
    icon: BookOpen, 
    title: "Physical Training", 
    desc: "Prefer in-person learning? Fill out a request form to join our exclusive physical training sessions at our facilities.",
    points: ["In-Person Classes", "Register via Form", "Facility Access"]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1588196749597-9ff0465b91af?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=2000"
];

export default function TrainingPage() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [liveClasses, setLiveClasses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch("/api/classes");
        const data = await res.json();
        if (Array.isArray(data)) setLiveClasses(data);
      } catch (err) {
        console.error("Failed to fetch classes");
      } finally {
        setIsLoading(false);
      }
    };
    fetchClasses();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  // Combine static and dynamic offerings
  const dynamicOfferings = liveClasses.map(c => ({
    icon: Video,
    title: c.title,
    desc: c.description || "Live virtual training session hosted by TMT experts.",
    points: ["Live Stream", "Expert Guidance", "Interactive"],
    isLive: true
  }));

  const services = [
    ...dynamicOfferings,
    { 
      icon: Monitor, 
      title: "On-Demand E-Learning", 
      desc: "Access an extensive digital library of on-demand courses, modules, and video resources tailored to your goals.",
      points: ["On-Demand Courses", "Resource Library", "Self-Paced"]
    },
    { 
      icon: Award, 
      title: "Digital Certifications", 
      desc: "Take online assessments to earn globally recognized digital credentials that validate your expertise.",
      points: ["Online Exams", "Skill Validation", "Digital Badges"]
    },
    { 
      icon: BookOpen, 
      title: "Physical Training", 
      desc: "Prefer in-person learning? Fill out a request form to join our exclusive physical training sessions at our facilities.",
      points: ["In-Person Classes", "Register via Form", "Facility Access"]
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-background relative selection:bg-accent selection:text-white">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <TrainingEnrollModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
      />

      {/* 1. LUXURY HERO SECTION */}
      <section className="relative h-screen flex items-center pt-28 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.025] select-none">
            <span className="absolute top-1/4 -left-10 text-[20vw] font-serif font-bold whitespace-nowrap text-primary">
              SKILLS.
            </span>
          </div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[55%] h-full bg-accent-light/15 rounded-bl-[120px] pointer-events-none"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] border border-accent/10 rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] border border-accent/5 rounded-full pointer-events-none"
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
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">TMT Virtual Training</span>
              </motion.div>
              
              <motion.h1 
                variants={staggerContainer}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-8"
              >
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="block">Learn Without</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="italic font-light text-accent block">Boundaries.</motion.span>
                </div>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed mb-12 max-w-2xl">
                We provide professional training directly on our platform. Learn virtually at your own pace, or apply to join our physical sessions.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 pt-4">
                <Magnetic>
                  <Link href="#programs" className="btn-primary group relative overflow-hidden">
                    <span className="relative z-10">View Catalogue</span>
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
                   <Video className="w-16 h-16 text-accent opacity-50" />
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
            SKILLS. GROWTH.
          </span>
        </div>
        {/* Knowledge-themed Shapes */}
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[55%] h-full bg-accent/[0.04] rounded-bl-[140px] pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-light/15 rounded-tr-[120px] pointer-events-none" />
        
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
                      src="/nigerian_tech_hub_1777041406874.png" 
                      alt="TMT Media-Tech Hub"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The Academy</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-12 leading-[1.1] tracking-tight">
                Empowering The <br/>
                <span className="italic font-light text-accent">Modern Mind.</span>
              </motion.h2>

              <div className="space-y-8 text-lg font-sans font-light text-slate-500 leading-relaxed max-w-2xl">
                <motion.p variants={fadeUp}>
                  TMT Virtual Training was built to shatter the constraints of traditional education, offering seamless online learning directly through our platform.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Whether you join our <span className="text-primary font-medium italic">virtual sessions</span> or fill out a form for <span className="text-primary font-medium italic">in-person physical training</span>, we connect ambitious professionals with industry experts.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="mt-16 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Vision</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To be the premier digital destination for virtual upskilling, and a trusted partner for physical training.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Mission</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To deliver accessible, high-quality online learning that bridges the gap between ambition and success.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR OFFERINGS */}
      <section id="programs" className="py-32 bg-slate-50 relative border-t border-accent/10 overflow-hidden">
        {/* Ghost Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
          <span className="absolute top-0 right-0 text-[16vw] font-serif font-bold whitespace-nowrap text-primary">
            ACADEMY.
          </span>
        </div>
        {/* Parallax Blocks */}
        <motion.div style={{ y: y1 }} className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent-light/10 rounded-full pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-10 w-[500px] h-[300px] border border-accent/10 rounded-t-full pointer-events-none" />
        
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
                Our Learning <br/><span className="italic font-light">Pathways</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white p-12 hover:bg-primary transition-colors duration-500 border border-slate-100 rounded-sm flex flex-col"
              >
                <div className="absolute top-12 right-12 text-[10px] font-sans font-bold text-accent/30 tracking-[0.5em]">0{i+1}</div>
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-3xl text-primary mb-6 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-sans text-slate-500 font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-500">
                  {service.desc}
                </p>

                <div className="mb-10 mt-auto">
                  {service.title.includes("Virtual") || service.title.includes("On-Demand") ? (
                    <Magnetic strength={0.1}>
                      <Link 
                        href="/training/stream" 
                        className="px-8 py-3 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] group-hover:bg-white group-hover:text-primary transition-all duration-500 rounded-full inline-block"
                      >
                        Watch Now
                      </Link>
                    </Magnetic>
                  ) : (
                    <Magnetic strength={0.1}>
                      <button 
                        onClick={() => setIsEnrollModalOpen(true)}
                        className="px-8 py-3 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] group-hover:bg-white group-hover:text-primary transition-all duration-500 rounded-full"
                      >
                        Apply Now
                      </button>
                    </Magnetic>
                  )}
                </div>

                <ul className="space-y-3 border-t border-slate-100 pt-6 group-hover:border-white/10 transition-colors duration-500">
                  {service.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 group-hover:text-slate-300 font-light">
                      <ChevronRight className="w-3 h-3 text-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <motion.div 
            initial={{opacity: 0, x: -20}} 
            whileInView={{opacity: 1, x: 0}} 
            viewport={{once: true}}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The Experience</span>
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
                alt="Training Gallery Image"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-60 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
            alt="Virtual Learning"
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
              <span className="text-[10px] font-sans uppercase tracking-[0.5em] text-accent font-bold">Enroll</span>
              <div className="w-12 h-[1px] bg-accent"></div>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tighter">
              Start your journey <br/>
              <span className="italic font-light text-accent">to mastery today.</span>
            </motion.h2>
            
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.2}>
                <button 
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="group relative inline-flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-white translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 opacity-10"></div>
                  <div className="relative px-16 py-6 bg-accent text-white font-sans text-[11px] font-bold uppercase tracking-[0.6em] overflow-hidden">
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Sign Up Now</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0"></div>
                  </div>
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

