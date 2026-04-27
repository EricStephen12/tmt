import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer className="bg-accent-light text-primary pt-48 pb-12 relative overflow-hidden border-t border-primary/5">
      {/* 1. HUGE BACKGROUND BRANDING (LIGHT THEME WATERMARK) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none opacity-[0.04] z-0">
        <h2 className="text-[25vw] font-serif font-bold whitespace-nowrap leading-none text-center text-primary">
          TMT GROUP
        </h2>
      </div>

      {/* 2. DYNAMIC DECORATIONS - SUBTLE LIGHT THEME */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-white blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 3. MAIN ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          
          {/* Left: Brand Identity & Large Connect */}
          <div className="lg:col-span-7">
            <Link href="/" className="inline-block mb-16 group">
              <div className="flex flex-col">
                <span className="text-6xl font-serif font-bold tracking-tighter text-primary leading-none group-hover:text-accent transition-colors duration-700">
                  TMT.
                </span>
                <span className="text-[10px] font-sans font-bold tracking-[0.8em] text-accent uppercase mt-4 leading-none ml-1">
                  TMT Group
                </span>
              </div>
            </Link>

            <div className="space-y-12">
              <h3 className="text-[10px] font-sans font-bold tracking-[0.5em] text-primary/20 uppercase">
                Let's Build Together
              </h3>
              <div className="space-y-4">
                <Magnetic strength={0.1}>
                  <a 
                    href="mailto:info@tmtgroup.com.ng" 
                    className="block text-4xl md:text-6xl lg:text-7xl font-serif italic text-primary hover:text-accent transition-all duration-700 hover:translate-x-4 tracking-tighter"
                  >
                    info@tmtgroup.com.ng
                  </a>
                </Magnetic>
                <Magnetic strength={0.1}>
                  <a 
                    href="tel:+2348174006548" 
                    className="block text-2xl md:text-4xl font-serif text-slate-500 hover:text-primary transition-all duration-700 hover:translate-x-4"
                  >
                    +234 (0) 817 400 6548
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Right: Portfolio & Navigation */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-16 lg:pt-32">
            {/* Portfolio Links */}
            <div>
              <h4 className="text-[10px] font-sans font-bold tracking-[0.4em] text-accent uppercase mb-10">
                Portfolio
              </h4>
              <ul className="space-y-5">
                {['Real Estate', 'Logistics', 'Consulting', 'Agriculture', 'Hospitality'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="text-sm text-slate-500 hover:text-primary transition-all duration-500 flex items-center group/link"
                    >
                      <span className="w-0 h-[1px] bg-accent group-hover/link:w-6 transition-all duration-500 mr-0 group-hover/link:mr-4"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate Links */}
            <div>
              <h4 className="text-[10px] font-sans font-bold tracking-[0.4em] text-accent uppercase mb-10">
                Corporate
              </h4>
              <ul className="space-y-5">
                {['About Us', 'Our Team', 'Strategic Vision', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-sm text-slate-500 hover:text-primary transition-all duration-500 flex items-center group/link"
                    >
                      <span className="w-0 h-[1px] bg-accent group-hover/link:w-6 transition-all duration-500 mr-0 group-hover/link:mr-4"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. SOCIALS & BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-primary/10">
          {/* Large Interactive Socials */}
          <div className="flex gap-12 items-center">
            {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] font-sans font-bold tracking-[0.4em] text-slate-400 hover:text-primary transition-all duration-500 uppercase relative group"
              >
                {social}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Minimal Copyright & Legal */}
          <div className="flex flex-col md:items-end gap-2 text-right">
            <p className="text-[10px] text-slate-400 font-sans tracking-[0.2em] uppercase">
              &copy; {new Date().getFullYear()} TMT GROUP HOLDINGS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-[9px] text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">Privacy</Link>
              <Link href="/terms" className="text-[9px] text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">Terms</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
