"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Droplets, Sprout, ShoppingBag, ChevronRight, MapPin } from "lucide-react";
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

const products = [
  { 
    icon: Leaf, 
    title: "Hydroponic Vegetables", 
    desc: "Fresh, pesticide-free vegetables grown in our state-of-the-art hydroponic greenhouse with consistent quality year-round.",
    points: ["Lettuce & Kale", "Tomatoes & Cucumber", "Okra, Ginger & Carrots"]
  },
  { 
    icon: Sprout, 
    title: "Livestock & Animal Products", 
    desc: "Ethically raised goats, fish, and snails managed with the highest standards of animal welfare. Includes an on-site butchery and abattoir.",
    points: ["Goat Farm", "Fish Ponds", "Snail Farm & Butchery"]
  },
  { 
    icon: Droplets, 
    title: "Staple Crop Production", 
    desc: "Large-scale cultivation of Nigeria's key staple crops using sustainable farming practices for individual and wholesale buyers.",
    points: ["Beans, Maize & Rice", "Soybean & Cassava", "Wholesale Supply"]
  },
  { 
    icon: ShoppingBag, 
    title: "Food Mart & Training", 
    desc: "Our on-site food mart brings farm-fresh produce directly to consumers. We also run training and consultancy programs for farmers and agro-entrepreneurs.",
    points: ["Farm-to-Table Retail", "Agro Training", "Wholesale Inquiries"]
  }
];

const galleryImages = [
  "/images/farm1.jpg",
  "/images/Farm.jpg",
  "/images/farm3.jpg",
  "/images/farm4.jpg"
];

export default function AgriculturePage() {
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

      {/* 1. HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.025] select-none">
            <span className="absolute top-1/4 -left-10 text-[20vw] font-serif font-bold whitespace-nowrap text-primary">
              GROW.
            </span>
          </div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[55%] h-full bg-accent/[0.03] rounded-bl-[160px] pointer-events-none"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-10 right-[15%] w-[400px] h-[400px] border border-accent/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-5%] left-[5%] w-[350px] h-[350px] border border-accent/5 rounded-full pointer-events-none"
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
                <SubsidiaryBreadcrumb name="Agriculture & Foods" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">Yutaka Farm</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-sans text-slate-400 tracking-wide">Karu, Abuja · Km 44 Abuja-Keffi Expressway</span>
              </motion.div>
              
              <motion.h1 
                variants={staggerContainer}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-8"
              >
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="block">Nigeria's Farmer</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="italic font-light text-accent block">Preferred Farm.</motion.span>
                </div>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed mb-12 max-w-2xl">
                Nigeria and Africa's premier farm and agro-allied company — delivering fresh hydroponic vegetables, quality livestock, staple crops, and agricultural training from our Abuja base.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 pt-4">
                <Magnetic>
                  <Link href="#products" className="btn-primary group relative overflow-hidden">
                    <span className="relative z-10">Explore Products</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </Link>
                </Magnetic>
                <Link href="https://yutakafarmsandco.com.ng/wholesale" target="_blank" className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary/60 hover:text-accent transition-colors flex items-center gap-2 py-4">
                  Wholesale Inquiry <ChevronRight className="w-3 h-3" />
                </Link>
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
                   <Leaf className="w-16 h-16 text-accent opacity-50" />
                 </motion.div>
                 <div className="absolute inset-4 border border-accent/10 rounded-full animate-ping"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className="py-40 relative bg-background overflow-hidden border-t border-accent/10">
        {/* Decorative BG — Ghost Text + Animated Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.025] select-none">
          <span className="absolute top-10 -left-10 text-[18vw] font-serif font-bold whitespace-nowrap text-primary">
            GROW. HARVEST. NOURISH.
          </span>
        </div>
        {/* Organic Leaf-like Blobs */}
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] pointer-events-none" />
        <motion.div style={{ y: y1 }} className="absolute -top-10 right-20 w-[400px] h-[400px] border border-accent/15 rounded-[50%_50%_20%_80%/25%_80%_20%_75%] pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent-light/15 rounded-[70%_30%_30%_70%/60%_40%_60%_40%] pointer-events-none" />
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
                      src="/images/Farm.jpg" 
                      alt="Yutaka Farm"
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Our Story</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-12 leading-[1.1] tracking-tight">
                From Karu to <br/>
                <span className="italic font-light text-accent">Every Table.</span>
              </motion.h2>

              <div className="space-y-8 text-lg font-sans font-light text-slate-500 leading-relaxed max-w-2xl">
                <motion.p variants={fadeUp}>
                  Yutaka Farm was established with a clear vision to revolutionize agricultural practices in Nigeria. From our head office and farm site on Leha Road, Karu, Abuja, we have grown from a small-scale operation into one of Nigeria's preferred agricultural producers.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Today, we run a <span className="text-primary font-medium italic">hydroponic greenhouse</span>, livestock operations, staple crop cultivation, an on-site butchery, and a food mart — connecting the supply of our products directly to the steady needs of our end-users.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="mt-16 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Vision</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To be Nigeria and Africa's farmer-preferred farm and agro-allied company, with excellence in customer value and reliable service.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Mission</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To provide the highest quality agricultural products and education, strengthening our customers, company, and the wider agricultural community.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS */}
      <section id="products" className="py-32 bg-background relative overflow-hidden border-t border-primary/5">
        {/* Decorative BG — Ghost Text + Circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
          <span className="absolute top-0 right-0 text-[16vw] font-serif font-bold whitespace-nowrap text-primary">
            HARVEST.
          </span>
        </div>
        {/* Organic Flowing Shapes */}
        <motion.div style={{ y: y1 }} className="absolute -top-20 -right-10 w-[600px] h-[600px] bg-accent-light/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] rotate-12 pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] pointer-events-none" />
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">What We Grow</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
                Products & <br/><span className="italic font-light">Services</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <div className="w-12 h-[1px] bg-slate-300 mb-6"></div>
              <p className="text-slate-500 font-sans font-light leading-relaxed">
                From pesticide-free hydroponic greens to ethically raised livestock and Nigeria's key staple crops — all grown and sold from Abuja.
              </p>
            </div>
          </motion.div>

          <div className="divide-y divide-primary/5">
            {products.map((product, i) => (
              <motion.div 
                key={product.title}
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
                    <product.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-[1.75rem] text-primary leading-tight">
                    {product.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center">
                  <p className="font-sans text-[15px] text-slate-500 font-light leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col items-start md:items-end justify-start md:justify-center gap-2 flex-wrap">
                  {product.points.map((pt, idx) => (
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
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The Farm</span>
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
                alt="Yutaka Farm Gallery"
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
            src="/images/farm3.jpg" 
            alt="Yutaka Farm Nigeria"
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
              <span className="text-[10px] font-sans uppercase tracking-[0.5em] text-accent font-bold">Work With Us</span>
              <div className="w-12 h-[1px] bg-accent"></div>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tighter">
              Fresh from the farm, <br/>
              <span className="italic font-light text-accent">straight to you.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-slate-400 font-sans font-light mb-16 leading-relaxed max-w-xl mx-auto">
              Wholesale inquiries, retail visits, farm tours, or training programs — reach out and we'll be in touch.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Magnetic strength={0.2}>
                <Link href="/contact" className="group relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-white translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 opacity-10"></div>
                  <div className="relative px-16 py-6 bg-accent text-white font-sans text-[11px] font-bold uppercase tracking-[0.6em] overflow-hidden">
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-500">Get In Touch</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0"></div>
                  </div>
                </Link>
              </Magnetic>
              <Link href="https://yutakafarmsandco.com.ng" target="_blank" className="text-[10px] font-sans uppercase tracking-[0.4em] text-white/50 hover:text-accent transition-colors flex items-center gap-2">
                Visit yutakafarmsandco.com.ng <ChevronRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
