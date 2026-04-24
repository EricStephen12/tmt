"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Video, 
  Play, 
  Calendar, 
  Trash2, 
  Edit3, 
  X,
  Loader2,
  Monitor
} from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function AdminTrainingPage() {
  const [classes, setClasses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    youtubeUrl: "",
    startTime: ""
  });

  const fetchClasses = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/classes");
      const data = await res.json();
      if (Array.isArray(data)) setClasses(data);
    } catch (err) {
      console.error("Fetch classes failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ title: "", description: "", youtubeUrl: "", startTime: "" });
        fetchClasses();
      }
    } catch (err) {
      console.error("Submit failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to extract YouTube ID
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">Virtual Classrooms</h1>
          <p className="text-slate-500 font-sans text-sm tracking-wide">Schedule and host live training sessions via YouTube integration.</p>
        </motion.div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-accent text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-3 transition-all hover:bg-accent-light shadow-lg shadow-accent/10"
        >
          <Plus className="w-4 h-4" />
          Schedule Session
        </motion.button>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {isLoading ? (
          <div className="col-span-full h-64 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-accent animate-spin" />
          </div>
        ) : classes.length === 0 ? (
          <div className="col-span-full bg-[#0A0A0A] border border-white/5 rounded-sm p-20 flex flex-col items-center justify-center text-center">
            <Monitor className="w-12 h-12 text-slate-700 mb-4" />
            <p className="text-slate-500 font-serif text-lg italic">No scheduled classes yet.</p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest mt-2">Start hosting virtual classes to reach more students</p>
          </div>
        ) : (
          classes.map((c) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden flex flex-col group hover:border-accent/30 transition-all duration-500"
            >
              {/* Video Preview */}
              <div className="relative aspect-video bg-black/40">
                {getYoutubeId(c.youtubeUrl) ? (
                  <iframe 
                    className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${getYoutubeId(c.youtubeUrl)}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Play className="w-12 h-12 text-rose-500 opacity-20 mb-2" />
                    <span className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">Invalid URL</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-xl">
                  {c.isActive ? "Live / Upcoming" : "Ended"}
                </div>
              </div>

              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-accent transition-colors">{c.title}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        <Calendar className="w-3 h-3 text-accent" />
                        {c.startTime ? new Date(c.startTime).toLocaleDateString() : "TBD"}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        <Play className="w-3 h-3 text-rose-500" />
                        Public Stream
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 rounded-sm text-slate-500 hover:text-white transition-colors"><Edit3 className="w-4 h-4" /></button>
                    <button className="p-2 bg-white/5 rounded-sm text-slate-500 hover:text-rose-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <p className="text-sm text-slate-400 font-sans font-light leading-relaxed mb-8 line-clamp-2">{c.description}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Stream Active</span>
                  </div>
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Added {new Date(c.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h2 className="font-serif text-2xl font-bold text-white tracking-tight text-center w-full">Schedule Class</h2>
                <button onClick={() => setIsModalOpen(false)} className="absolute right-8 text-slate-500 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Class Title</label>
                  <input required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors" placeholder="e.g. Real Estate Investment Strategy" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">YouTube URL</label>
                  <div className="relative">
                    <Play className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-500" />
                    <input required value={formData.youtubeUrl} onChange={(e) => setFormData({...formData, youtubeUrl: e.target.value})} type="url" className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors" placeholder="https://www.youtube.com/watch?v=..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Start Time (Optional)</label>
                  <input value={formData.startTime} onChange={(e) => setFormData({...formData, startTime: e.target.value})} type="datetime-local" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Brief Description</label>
                  <textarea rows={3} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="What will this class cover?" />
                </div>

                <div className="pt-4">
                  <button disabled={isSubmitting} type="submit" className="w-full bg-accent text-white font-sans text-[11px] font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-accent-light transition-all flex items-center justify-center gap-3 disabled:opacity-50">
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Schedule Live Class"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
