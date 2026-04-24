"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  MessageSquare, 
  Users, 
  Clock, 
  ShieldCheck,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";

export default function VirtualClassroom() {
  const [activeClass, setActiveClass] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const res = await fetch("/api/classes");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setActiveClass(data[0]); // Get the most recent active class
        }
      } catch (err) {
        console.error("Failed to fetch class");
      } finally {
        setIsLoading(false);
      }
    };
    fetchClass();
  }, []);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (isLoading) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-accent animate-pulse font-serif">Initializing Classroom...</div>;

  if (!activeClass) return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
      <Play className="w-16 h-16 text-slate-800 mb-6" />
      <h1 className="text-3xl font-serif text-white mb-4">No Active Sessions</h1>
      <p className="text-slate-500 max-w-md mb-8 font-sans">There are no live training sessions scheduled at the moment. Please check back later or view our on-demand resources.</p>
      <Link href="/training" className="text-accent uppercase tracking-widest text-xs font-bold border border-accent/20 px-8 py-3 rounded-sm hover:bg-accent/10 transition-all">Return to Training</Link>
    </div>
  );

  const videoId = getYoutubeId(activeClass.youtubeUrl);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-accent selection:text-white">
      {/* Top Bar */}
      <div className="border-b border-white/5 bg-[#0A0A0A]/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/training" className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Classroom
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 text-rose-500 text-[10px] font-bold uppercase tracking-widest rounded-sm">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
              Live Session
            </div>
            <div className="w-[1px] h-4 bg-white/10"></div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <Users className="w-3 h-3" />
              124 Watching
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto p-6 lg:p-10">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Main Content: Video + Info */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-white/5"
            >
              {videoId ? (
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <Play className="w-16 h-16 text-rose-500/20 mb-4" />
                  <span className="text-slate-500 font-sans">Stream source error. Contact administrator.</span>
                </div>
              )}
            </motion.div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">{activeClass.title}</h1>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3 text-accent" />
                    Started 20 mins ago
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    Official TMT Session
                  </div>
                </div>
              </div>
              <p className="text-slate-400 font-sans font-light leading-relaxed max-w-3xl">
                {activeClass.description}
              </p>
            </div>
          </div>

          {/* Sidebar: Chat / Q&A */}
          <div className="lg:col-span-4 space-y-6 flex flex-col h-[calc(100vh-160px)]">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-sm flex-1 flex flex-col overflow-hidden">
              <div className="p-5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <h3 className="text-xs uppercase tracking-widest font-bold text-white">Live Q&A</h3>
                </div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-accent">Student {i}</span>
                      <span className="text-[9px] text-slate-600 font-medium uppercase tracking-tighter">10:1{i} AM</span>
                    </div>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed bg-white/5 p-3 rounded-sm">
                      How can I apply this strategy to a small-scale real estate project?
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 bg-black/20">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask a question..."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors pr-12"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-accent hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
