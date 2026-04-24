"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Building2, Briefcase, Truck, Leaf, GraduationCap, MonitorPlay, Hotel, Presentation, ShoppingCart, Video } from "lucide-react";
import { SignInButton, Show, UserButton } from "@clerk/nextjs";
import Magnetic from "./Magnetic";

const subsidiaries = [
  { name: "Real Estate & Properties", href: "/real-estate", icon: Building2 },
  { name: "TMT Consulting", href: "/consulting", icon: Briefcase },
  { name: "High Star Logistics", href: "/logistics", icon: Truck },
  { name: "Yutaka Farm", href: "/agriculture", icon: Leaf },
  { name: "Group of Schools", href: "/schools", icon: GraduationCap },
  { name: "TMT Bookstore", href: "/bookstore", icon: ShoppingCart },
  { name: "Virtual Training", href: "/training", icon: Video },
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
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollPos > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-background shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] h-20 border-b border-primary/5' 
        : 'bg-transparent h-28'
    } flex items-center`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group relative">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-tight text-primary leading-none">
                TMT
              </span>
              <span className="text-[8px] font-sans font-bold tracking-[0.5em] text-accent uppercase mt-1 leading-none">
                Group
              </span>
            </div>
            {/* Logo underline decoration */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: scrolled ? '100%' : '0%' }}
              className="absolute -bottom-2 left-0 h-[1px] bg-accent/30"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { label: 'Overview', href: '/' },
              { label: 'Corporate', href: '/about' }
            ].map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary/60 hover:text-accent transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
            
            <div 
              className="relative py-8"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary/60 hover:text-accent transition-colors flex items-center gap-2 group">
                Subsidiaries 
                <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-background shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] z-50 p-8 border border-primary/5 origin-top backdrop-blur-3xl"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                      {subsidiaries.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center space-x-4 px-4 py-4 hover:bg-accent-light/30 transition-all duration-500 group rounded-sm"
                        >
                          <div className="w-8 h-8 rounded-full border border-accent/10 flex items-center justify-center bg-accent-light/10 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                            <sub.icon className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors duration-500" />
                          </div>
                          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-primary/70 group-hover:text-primary transition-colors duration-500">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    {/* Bottom Link in Dropdown */}
                    <div className="mt-6 pt-6 border-t border-primary/5">
                      <Link href="/subsidiaries" className="text-[9px] font-sans uppercase tracking-[0.3em] text-accent font-bold hover:text-primary transition-colors flex items-center gap-2">
                        View Full Portfolio <ChevronDown className="w-3 h-3 -rotate-90" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center space-x-6">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="text-[10px] font-sans uppercase tracking-[0.3em] font-semibold text-primary/80 hover:text-accent transition-colors mr-4">
                    Sign In
                  </button>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <div className="mr-4 mt-1 border border-accent/20 rounded-full p-0.5">
                  <UserButton />
                </div>
              </Show>

              <Magnetic strength={0.2}>
                <Link href="/contact" className="relative group">
                  <div className="absolute inset-0 bg-accent translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-20"></div>
                  <div className="relative text-[10px] font-sans uppercase tracking-[0.4em] text-white bg-primary px-10 py-5 transition-all duration-500 group-hover:bg-accent">
                    Connect
                  </div>
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`relative z-[70] p-2 transition-colors ${isOpen ? 'text-primary' : 'text-primary hover:text-accent'}`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                  className="absolute w-8 h-[2px] bg-current"
                />
                <motion.div
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute w-8 h-[2px] bg-current"
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                  className="absolute w-8 h-[2px] bg-current"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[55] md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[60] bg-background shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-8 pt-32 space-y-10 h-full">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-serif text-primary hover:text-accent transition-colors">Home.</Link>
                
                <div className="space-y-6">
                  <p className="text-[10px] font-sans text-accent uppercase tracking-[0.4em] font-bold">Subsidiaries</p>
                  <div className="grid gap-6">
                    {subsidiaries.map((sub, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (i * 0.05) }}
                        key={sub.name}
                      >
                         <Link
                           href={sub.href}
                           onClick={() => setIsOpen(false)}
                           className="flex items-center space-x-4 group"
                         >
                           <div className="w-10 h-10 rounded-full border border-accent/10 flex items-center justify-center bg-accent-light/10 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                             <sub.icon className="w-4 h-4 text-accent group-hover:text-white" />
                           </div>
                           <span className="text-lg font-serif text-primary group-hover:text-accent transition-colors">{sub.name}</span>
                         </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Link href="/about" onClick={() => setIsOpen(false)} className="text-4xl font-serif text-primary hover:text-accent transition-colors">Corporate.</Link>
                
                <div className="pt-8 mt-auto space-y-4">
                  <Show when="signed-out">
                    <SignInButton mode="modal">
                      <button onClick={() => setIsOpen(false)} className="block w-full text-center text-[10px] font-sans uppercase tracking-[0.4em] text-primary border border-primary/20 bg-transparent hover:bg-primary/5 transition-all px-8 py-6">
                        Sign In To Account
                      </button>
                    </SignInButton>
                  </Show>
                  <Show when="signed-in">
                    <div className="flex items-center justify-center gap-4 py-4 border border-primary/10 mb-4">
                       <UserButton />
                       <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary">Manage Account</span>
                    </div>
                  </Show>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center text-[10px] font-sans uppercase tracking-[0.4em] text-white bg-primary hover:bg-accent transition-all px-8 py-6">
                    Connect With Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
