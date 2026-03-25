"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Building2, Briefcase, Truck, Leaf, GraduationCap, MonitorPlay, Hotel, Presentation } from "lucide-react";

const subsidiaries = [
  { name: "Real Estate & Properties", href: "/real-estate", icon: Building2 },
  { name: "TMT Consulting", href: "/consulting", icon: Briefcase },
  { name: "High Star Logistics", href: "/logistics", icon: Truck },
  { name: "Yutaka Farm", href: "/agriculture", icon: Leaf },
  { name: "Group of Schools", href: "/schools", icon: GraduationCap },
  { name: "Tech & Multimedia", href: "/media-tech", icon: MonitorPlay },
  { name: "Tours & Hospitality", href: "/hospitality", icon: Hotel },
  { name: "TMCA", href: "/tmca", icon: Presentation },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm h-20' : 'bg-transparent h-28'} flex items-center`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-serif font-bold tracking-tight text-primary">
              TMT <span className="text-accent font-sans font-light">GROUP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-xs font-sans uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors">
              Overview
            </Link>
            
            <div 
              className="relative py-8"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-xs font-sans uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors flex items-center gap-2">
                Subsidiaries <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 15, rotateX: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-white shadow-2xl z-50 p-6 border-t-[3px] border-accent origin-top"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {subsidiaries.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center space-x-4 px-4 py-3 hover:bg-accent-light/20 transition-colors group"
                        >
                          <sub.icon className="w-4 h-4 text-accent" />
                          <span className="text-xs font-sans uppercase tracking-widest text-primary group-hover:text-accent">{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-xs font-sans uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors">Corporate</Link>
            <Link href="/contact" className="text-xs font-sans uppercase tracking-[0.2em] text-white bg-primary hover:bg-accent transition-colors px-8 py-4">
              Connect
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-accent transition-colors p-2">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col p-8 pt-32 h-screen overflow-y-auto"
          >
            <div className="space-y-10 flex flex-col mx-auto w-full max-w-sm">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-serif text-primary hover:text-accent transition-colors">Home.</Link>
              <div className="space-y-6">
                <p className="text-xs font-sans text-accent uppercase tracking-[0.3em]">Subsidiaries</p>
                {subsidiaries.map((sub, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    key={sub.name}
                  >
                     <Link
                       href={sub.href}
                       onClick={() => setIsOpen(false)}
                       className="flex items-center space-x-6 text-xl font-serif text-primary hover:text-accent transition-colors"
                     >
                       <sub.icon className="w-5 h-5 opacity-50" />
                       <span>{sub.name}</span>
                     </Link>
                  </motion.div>
                ))}
              </div>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-4xl font-serif text-primary hover:text-accent transition-colors">Corporate.</Link>
              <div className="pt-8">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center text-sm font-sans uppercase tracking-widest text-white bg-primary hover:bg-accent transition-colors px-8 py-5">
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
