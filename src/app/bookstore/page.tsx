"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Book, Library, Bookmark, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Magnetic from "@/components/Magnetic";
import PaystackCheckout from "@/components/PaystackCheckout";
import { Download } from "lucide-react";

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
    icon: BookOpen, 
    title: "E-Books & Learning", 
    desc: "Seamless access to our entire catalog of e-books, allowing you to purchase and start reading instantly.",
    points: ["Instant Access", "Multi-Device", "Offline Reading"]
  },
  { 
    icon: BookOpen, 
    id: "billionaire-blueprint",
    price: 15000,
    title: "The Billionaire Blueprint", 
    desc: "A comprehensive guide on wealth creation, strategic thinking, and the mindset required to build a legacy from scratch.",
    points: ["Mindset Mastery", "Strategic Investment", "Legacy Building"]
  },
  { 
    icon: Book, 
    id: "digital-dominance",
    price: 10000,
    title: "Digital Dominance", 
    desc: "Master the art of scaling digital products and navigating the modern media-tech landscape with high-impact strategies.",
    points: ["Scaling Digital", "Modern Marketing", "Tech Innovation"]
  },
  { 
    icon: Bookmark, 
    id: "modern-leader",
    price: 12000,
    title: "The Modern Leader", 
    desc: "A deep dive into 21st-century leadership, focusing on emotional intelligence, remote team management, and global vision.",
    points: ["EQ in Leadership", "Remote Management", "Global Vision"]
  },
  { 
    icon: Library, 
    id: "wealth-codes",
    price: 20000,
    title: "The Wealth Codes", 
    desc: "Decrypting the financial structures and systems used by the top 1% to generate and preserve generational wealth.",
    points: ["Asset Allocation", "Tax Efficiency", "Wealth Preservation"]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000"
];

export default function BookstorePage() {
  const containerRef = useRef(null);
  const [purchasedBookIds, setPurchasedBookIds] = useState<string[]>([]);
  const [dbBooks, setDbBooks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [purchasesRes, booksRes] = await Promise.all([
          fetch("/api/purchases/check"),
          fetch("/api/books")
        ]);
        
        const purchasesData = await purchasesRes.json();
        const booksData = await booksRes.json();

        if (purchasesData.purchasedBookIds) setPurchasedBookIds(purchasesData.purchasedBookIds);
        if (Array.isArray(booksData)) setDbBooks(booksData);
      } catch (err) {
        console.error("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  // Map DB books to UI format (with icons)
  const displayBooks = dbBooks.map(book => ({
    ...book,
    icon: book.iconName === "Book" ? Book : book.iconName === "Library" ? Library : book.iconName === "Bookmark" ? Bookmark : BookOpen,
    points: ["Instant Access", "Multi-Device", "Secure Payment"]
  }));

  // If DB is empty, use the initial hardcoded ones as fallback
  const services = displayBooks.length > 0 ? displayBooks : [
    { 
      icon: BookOpen, 
      id: "billionaire-blueprint",
      price: 15000,
      title: "The Billionaire Blueprint", 
      desc: "A comprehensive guide on wealth creation, strategic thinking, and the mindset required to build a legacy from scratch.",
      points: ["Mindset Mastery", "Strategic Investment", "Legacy Building"]
    },
    { 
      icon: Book, 
      id: "digital-dominance",
      price: 10000,
      title: "Digital Dominance", 
      desc: "Master the art of scaling digital products and navigating the modern media-tech landscape with high-impact strategies.",
      points: ["Scaling Digital", "Modern Marketing", "Tech Innovation"]
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-background relative selection:bg-accent selection:text-white">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 1. LUXURY HERO SECTION */}
      <section className="relative h-screen flex items-center pt-28 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.025] select-none">
            <span className="absolute top-1/4 -left-10 text-[20vw] font-serif font-bold whitespace-nowrap text-primary">
              READS.
            </span>
          </div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[50%] h-full bg-accent-light/10 pointer-events-none"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-20 right-20 w-[40%] h-[80%] border-l border-b border-accent/10 rounded-bl-[80px] pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-10 w-64 h-32 border-t border-r border-accent/5 pointer-events-none"
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
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent font-semibold">TMT Bookstore</span>
              </motion.div>
              
              <motion.h1 
                variants={staggerContainer}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif font-medium text-primary leading-[1.05] tracking-tight mb-8"
              >
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="block">Curated Knowledge.</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span variants={fadeUp} className="italic font-light text-accent block">Endless Discovery.</motion.span>
                </div>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-sans font-light leading-relaxed mb-12 max-w-2xl">
                We provide a curated digital storefront for the e-books, audiobooks, and digital resources that shape minds and build leaders.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 pt-4">
                <Magnetic>
                  <Link href="#portfolio" className="btn-primary group relative overflow-hidden">
                    <span className="relative z-10">Explore Collection</span>
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
                   <BookOpen className="w-16 h-16 text-accent opacity-50" />
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
            WISDOM. KNOWLEDGE.
          </span>
        </div>
        {/* Page-themed Shapes */}
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[50%] h-full bg-accent/[0.04] rounded-bl-[140px] pointer-events-none" />
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
                      src="/images/Book store_.jpg" 
                      alt="TMT Digital Library"
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Company Profile</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-12 leading-[1.1] tracking-tight">
                Empowering Minds <br/>
                <span className="italic font-light text-accent">Through Pages.</span>
              </motion.h2>

              <div className="space-y-8 text-lg font-sans font-light text-slate-500 leading-relaxed max-w-2xl">
                <motion.p variants={fadeUp}>
                  TMT Bookstore provides a carefully curated digital storefront for literature designed to educate, empower, and inspire.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Driven by a passion for the written word, we bring <span className="text-primary font-medium italic">exclusive digital resources</span> and <span className="text-primary font-medium italic">thought-provoking reads</span> directly to your devices instantly.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="mt-16 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Vision</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To become the leading digital hub for curated intellectual capital and transformative digital literature.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-primary mb-3">Our Mission</h4>
                  <p className="font-sans text-sm text-slate-500 font-light pr-4 border-l-2 border-accent/20 pl-4">
                    To connect readers with life-changing ideas and high-quality e-books instantly, anywhere in the world.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR OFFERINGS */}
      <section id="portfolio" className="py-32 bg-slate-50 relative border-t border-accent/10 overflow-hidden">
        {/* Ghost Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
          <span className="absolute top-0 right-0 text-[16vw] font-serif font-bold whitespace-nowrap text-primary">
            BOOKS.
          </span>
        </div>
        {/* Parallax Blocks */}
        <motion.div style={{ y: y1 }} className="absolute -top-20 -right-10 w-[600px] h-[600px] bg-accent-light/10 rounded-[100px] rotate-12 pointer-events-none" />
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
                <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">Categories</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif text-primary leading-tight tracking-tight">
                Our Curated <br/><span className="italic font-light">Collections</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, i) => {
              const isPurchased = purchasedBookIds.includes(service.id || "");
              
              return (
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
                  <h3 className="font-serif text-3xl text-primary mb-2 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-accent font-serif text-xl italic">₦{(service.price || 0).toLocaleString()}</span>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-slate-400 group-hover:text-slate-300 transition-colors">Digital Copy</span>
                  </div>
                  <p className="font-sans text-slate-500 font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-500">
                    {service.desc}
                  </p>
                  
                  <div className="mb-10 mt-auto">
                    {isPurchased ? (
                      <Magnetic strength={0.1}>
                        <button 
                          onClick={() => window.open(service.downloadUrl, "_blank")}
                          className="px-10 py-5 bg-green-600 text-white text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3 rounded-sm hover:bg-green-700 transition-all"
                        >
                          <Download className="w-4 h-4" />
                          Download Book
                        </button>
                      </Magnetic>
                    ) : (
                      <PaystackCheckout 
                        bookId={service.id || ""} 
                        amount={service.price || 0} 
                        bookTitle={service.title} 
                      />
                    )}
                  </div>

                  <ul className="space-y-3 border-t border-slate-100 pt-6 group-hover:border-white/10 transition-colors duration-500">
                    {service.points.map((pt: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 group-hover:text-slate-300 font-light">
                        <ChevronRight className="w-3 h-3 text-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
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
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent font-bold">The Atmosphere</span>
          </motion.div>
        </div>

        <div className="px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[21/9] rounded-sm overflow-hidden group border border-white/5"
          >
            <Image 
              src="/images/Book store_.jpg"
              alt="TMT Bookstore Atmosphere"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-60 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000" 
            alt="Books"
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
              <span className="text-[10px] font-sans uppercase tracking-[0.5em] text-accent font-bold">Featured E-Book</span>
              <div className="w-12 h-[1px] bg-accent"></div>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tighter">
              Unlock your next <br/>
              <span className="italic font-light text-accent">big idea today.</span>
            </motion.h2>
            
            <motion.div variants={fadeUp} className="flex justify-center">
              <Magnetic strength={0.2}>
                <PaystackCheckout 
                  bookId="featured-001" 
                  amount={5000} 
                  bookTitle="TMT Excellence Strategy" 
                />
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

