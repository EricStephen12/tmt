const fs = require('fs');

const realEstatePage = `"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, HardHat, LandPlot, ClipboardList, TrendingUp, PaintBucket, ShieldCheck, Pickaxe } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const services = [
  { icon: LandPlot, title: "Real Estate Development", desc: "Acquisition, planning, development, and sale of residential, commercial, and mixed-use properties." },
  { icon: HardHat, title: "Building Construction", desc: "Professional construction services for residential buildings, commercial complexes, offices, and schools." },
  { icon: Building2, title: "Property Sales & Acquisition", desc: "Buy and sell lands, houses, estates, and commercial properties with confidence and transparency." },
  { icon: ClipboardList, title: "Project Management", desc: "Overseeing construction and property development projects from concept to completion." },
  { icon: TrendingUp, title: "Real Estate Consultancy", desc: "Expert guidance on property investment, development strategy, and property valuation." },
  { icon: PaintBucket, title: "Renovation & Remodeling", desc: "Upgrading and transforming existing buildings into modern, efficient, and valuable spaces." },
  { icon: ShieldCheck, title: "Property Management", desc: "Maintenance coordination, tenant management, and operational oversight to preserve asset value." },
  { icon: Pickaxe, title: "Civil & Infrastructure", desc: "Drainage, roads, site preparation, and complementary construction solutions." }
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white pt-32">
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-accent font-sans text-xs tracking-[0.5em] uppercase font-bold">TMT Real Estate</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-9xl font-serif text-primary leading-[0.85] mb-12 tracking-tighter">
              Shaping <br />
              <span className="italic text-accent font-light">Spaces.</span><br />
              Securing <br />
              <span className="italic text-accent font-light">Futures.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-500 leading-relaxed font-sans font-light mb-14 max-w-2xl">
              Every structure is more than just a building; it is a foundation for dreams, growth, security, and legacy. We transform ideas into enduring realities.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.2}>
                <a href="#services" className="group relative inline-flex items-center gap-6 px-12 py-6 bg-primary text-white overflow-hidden shadow-2xl">
                  <span className="relative z-10 font-sans font-bold uppercase tracking-widest text-sm">View Expertise</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES & VALUES */}
      <section id="services" className="py-32 bg-[#f8fcfd] border-t border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">What We Do</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
              Driven by <br/><span className="italic font-light text-accent">Excellence.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="w-14 h-14 bg-white shadow-sm border border-accent/10 flex items-center justify-center mb-6 rounded-sm group-hover:border-accent/40 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors duration-500">{service.title}</h3>
                <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Core Values Sub-section */}
          <div className="mt-32 pt-20 border-t border-slate-200 grid lg:grid-cols-12 gap-16">
             <div className="lg:col-span-4">
               <h3 className="text-3xl font-serif text-primary italic mb-6">Our Core Values</h3>
               <p className="text-slate-500 font-sans font-light leading-relaxed">Integrity, Excellence, Innovation, Customer Satisfaction, Professionalism, and Sustainability. The foundation of every project we touch.</p>
             </div>
             <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
               {["Quality Assurance", "Experienced Team", "Timely Delivery", "Client-Focused", "Trust & Transparency", "Value-Driven"].map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="font-sans text-sm font-semibold tracking-wide text-primary uppercase">{val}</span>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. MINIMALIST CTA */}
      <section className="py-40 bg-primary relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-12 leading-[0.85] tracking-tighter"
          >
            Ready to <br /><span className="italic text-accent font-light">Build?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 font-sans font-light mb-16 max-w-2xl mx-auto"
          >
            From concept to completion, we bring professionalism and technical expertise to every project. Let's talk about yours.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Magnetic strength={0.2}>
              <a href="/contact" className="group relative inline-flex items-center gap-8 px-20 py-8 bg-accent text-white overflow-hidden shadow-2xl">
                <span className="relative z-10 font-sans font-bold uppercase tracking-[0.3em] text-sm group-hover:text-primary transition-colors duration-500">Get in Touch</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
`;

const consultingPage = `"use client";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Users, Briefcase, GraduationCap } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const services = [
  { icon: Compass, title: "Leadership Solutions", desc: "Executive coaching, leadership training, and vision alignment. We raise capable, visionary leaders who inspire people and drive results." },
  { icon: Users, title: "Workplace Solutions", desc: "Culture development, staff training, and performance systems. We transform workplaces into environments where people perform at their best." },
  { icon: Briefcase, title: "Enterprise & Business", desc: "Strategy, startup advisory, and business structure development. We help entrepreneurs move from vision to structure and sustainable success." },
  { icon: GraduationCap, title: "School Tech Solutions", desc: "Digital school administration, management strategy, and operational flow. We help schools build smart, future-ready administrative systems." }
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white pt-32">
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">TMT Consulting LTD</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[10rem] font-serif text-primary leading-[0.85] mb-12 tracking-tighter">
              Capacity. <br />
              Systems. <br />
              <span className="italic text-accent font-light">Growth.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-500 leading-relaxed font-sans font-light mb-14 max-w-2xl">
              We provide direction, structure, and solutions that work. Today's world demands visionary leadership and efficient systems. We make that happen.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.2}>
                <a href="#services" className="group relative inline-flex items-center gap-6 px-12 py-6 bg-primary text-white overflow-hidden shadow-2xl">
                  <span className="relative z-10 font-sans font-bold uppercase tracking-widest text-sm">Explore Solutions</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES & VALUES */}
      <section id="services" className="py-32 bg-[#fdfaf8] border-t border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Areas of Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
              Tailored Solutions that <br/><span className="italic font-light text-accent">Solve Real Problems.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative border-l-2 border-accent/20 pl-8 hover:border-accent transition-colors duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white shadow-sm border border-accent/10 flex items-center justify-center rounded-full group-hover:border-accent/40 transition-colors duration-500">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-3xl text-primary">{service.title}</h3>
                </div>
                <p className="font-sans text-base text-slate-500 font-light leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-20 border-t border-slate-200 grid lg:grid-cols-12 gap-16">
             <div className="lg:col-span-4">
               <h3 className="text-3xl font-serif text-primary italic mb-6">Our Process</h3>
               <p className="text-slate-500 font-sans font-light leading-relaxed">Strategic, practical, and client-centered. We design solutions that are tailored, relevant, and implementation-focused.</p>
             </div>
             <div className="lg:col-span-8 flex flex-wrap gap-4">
               {["Needs Assessment", "Analysis & Diagnosis", "Solution Design", "Implementation Support", "Monitoring & Improvement"].map((step, i) => (
                  <div key={i} className="px-6 py-3 border border-slate-200 rounded-full text-sm font-sans font-medium text-slate-600 bg-white">
                    {i + 1}. {step}
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. MINIMALIST CTA */}
      <section className="py-40 bg-primary relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-12 leading-[0.85] tracking-tighter"
          >
            Move from Vision <br /><span className="italic text-accent font-light">To Execution.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 font-sans font-light mb-16 max-w-2xl mx-auto"
          >
            We are your trusted growth partner. Strong leadership and structured workplaces are the foundation for progress. 
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Magnetic strength={0.2}>
              <a href="/contact" className="group relative inline-flex items-center gap-8 px-20 py-8 bg-accent text-white overflow-hidden shadow-2xl">
                <span className="relative z-10 font-sans font-bold uppercase tracking-[0.3em] text-sm group-hover:text-primary transition-colors duration-500">Book a Consultation</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
`;

const tmcaPage = `"use client";
import { motion } from "framer-motion";
import { Target, Users, MonitorSmartphone, GraduationCap, HeartHandshake } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const services = [
  { icon: Target, title: "Teen Mentorship", desc: "Structured sessions focused on identity, purpose discovery, and emotional intelligence." },
  { icon: Users, title: "Coaching & Life Skills", desc: "Practical coaching in communication, leadership development, and decision-making." },
  { icon: MonitorSmartphone, title: "Digital & High-Income Skills", desc: "Preparing teens for the future economy through SMM, Copywriting, Affiliate Marketing, and Tech Literacy." },
  { icon: GraduationCap, title: "School Programs", desc: "Leadership seminars, career guidance workshops, and value reorientation sessions for institutions." },
  { icon: HeartHandshake, title: "Parent Engagement", desc: "Helping parents better understand their teenagers through workshops and communication strategies." }
];

export default function TMCAPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white pt-32">
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">Teens Mentorship & Coaching Academy</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[9rem] font-serif text-primary leading-[0.85] mb-12 tracking-tighter">
              Mentally Equipped. <br />
              Morally Grounded. <br />
              <span className="italic text-accent font-light">Globally Competitive.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-500 leading-relaxed font-sans font-light mb-14 max-w-2xl">
              We bridge the gap between academic knowledge and real-life success. Equipping young people with the mindset, skills, and character to thrive in today's dynamic world.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Magnetic strength={0.2}>
                <a href="#programs" className="group relative inline-flex items-center gap-6 px-12 py-6 bg-primary text-white overflow-hidden shadow-2xl">
                  <span className="relative z-10 font-sans font-bold uppercase tracking-widest text-sm">Explore Programs</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE SERVICES & VALUES */}
      <section id="programs" className="py-32 bg-[#faf9fc] border-t border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">What We Offer</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
              Focusing on both <br/><span className="italic font-light text-accent">Character & Competence.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative bg-white p-8 border border-accent/5 hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-sm mb-6 group-hover:bg-accent transition-colors duration-500">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">{service.title}</h3>
                <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-20 border-t border-slate-200 grid lg:grid-cols-12 gap-16">
             <div className="lg:col-span-4">
               <h3 className="text-3xl font-serif text-primary italic mb-6">Our Core Values</h3>
               <p className="text-slate-500 font-sans font-light leading-relaxed">We adopt a holistic development model, focusing not just on knowledge, but on total transformation.</p>
             </div>
             <div className="lg:col-span-8 flex flex-wrap gap-4">
               {[
                 { label: "Excellence", desc: "High standards in performance." },
                 { label: "Integrity", desc: "Strong moral principles." },
                 { label: "Growth", desc: "Continuous personal development." },
                 { label: "Leadership", desc: "Raising influencers." },
                 { label: "Empowerment", desc: "Practical life skills." }
               ].map((val, i) => (
                  <div key={i} className="px-6 py-4 border border-slate-200 bg-white">
                    <span className="block font-serif text-lg text-primary italic mb-1">{val.label}</span>
                    <span className="block font-sans text-xs text-slate-500">{val.desc}</span>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. MINIMALIST CTA */}
      <section className="py-40 bg-primary relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-12 leading-[0.85] tracking-tighter"
          >
            Empower the <br /><span className="italic text-accent font-light">Next Generation.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 font-sans font-light mb-16 max-w-2xl mx-auto"
          >
            Whether you are a parent, school, or youth-focused organization, partner with us to raise exceptional teenagers.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Magnetic strength={0.2}>
              <a href="/contact" className="group relative inline-flex items-center gap-8 px-20 py-8 bg-accent text-white overflow-hidden shadow-2xl">
                <span className="relative z-10 font-sans font-bold uppercase tracking-[0.3em] text-sm group-hover:text-primary transition-colors duration-500">Partner With Us</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
`;

fs.writeFileSync('src/app/real-estate/page.tsx', realEstatePage);
console.log('Wrote real-estate');

fs.writeFileSync('src/app/consulting/page.tsx', consultingPage);
console.log('Wrote consulting');

fs.writeFileSync('src/app/schools/page.tsx', tmcaPage);
console.log('Wrote schools (TMCA)');
