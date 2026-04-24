"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  Users, 
  Settings, 
  BarChart3, 
  ChevronRight,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin" },
  { icon: BookOpen, label: "Books", href: "/admin/books" },
  { icon: Video, label: "Virtual Classes", href: "/admin/training" },
  { icon: Users, label: "Applications", href: "/admin/applications" },
  { icon: BarChart3, label: "Metrics", href: "/admin/metrics" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#050505] text-slate-200 selection:bg-accent selection:text-white">
      {/* SIDEBAR */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 h-screen bg-[#0A0A0A] border-r border-white/5 z-50 overflow-hidden hidden md:flex flex-col"
      >
        {/* Logo */}
        <div className="p-8 flex items-center gap-4">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center shrink-0">
            <span className="font-serif font-bold text-white text-xs">TMT</span>
          </div>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-serif text-lg font-bold tracking-tight text-white"
            >
              ADMIN <span className="text-accent italic font-light text-xs ml-1">Panel</span>
            </motion.span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`group flex items-center gap-4 px-4 py-3.5 rounded-sm transition-all duration-300 relative ${
                  isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-white/5 rounded-sm"
                  />
                )}
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-accent" : "group-hover:text-accent"} transition-colors`} />
                {isSidebarOpen && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-sans font-medium tracking-wide"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isActive && isSidebarOpen && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-auto">
                    <ChevronRight className="w-3 h-3 text-accent" />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-6 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-4 px-2">
            <UserButton />
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Logged in as</span>
                <span className="text-xs text-white font-medium">Administrator</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-white transition-colors"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            {isSidebarOpen && <span className="text-sm font-medium">Collapse</span>}
          </button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <main className={`flex-1 transition-all duration-500 ${isSidebarOpen ? "md:pl-[280px]" : "md:pl-[80px]"}`}>
        <div className="min-h-screen p-8 lg:p-12">
          {children}
        </div>
      </main>

      {/* Mobile Backdrop */}
      <div className="md:hidden fixed top-0 left-0 w-full p-6 flex justify-between items-center bg-[#0A0A0A] border-b border-white/5 z-[60]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="font-serif font-bold text-white text-xs">TMT</span>
          </div>
          <span className="font-serif text-lg font-bold text-white">ADMIN</span>
        </div>
        <UserButton />
      </div>
    </div>
  );
}
