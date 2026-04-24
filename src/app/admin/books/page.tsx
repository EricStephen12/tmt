"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  BookOpen, 
  Trash2, 
  Edit3, 
  ExternalLink,
  X,
  Loader2
} from "lucide-react";
import Image from "next/image";

const fadeUp: any = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function AdminBooksPage() {
  const [books, setBooks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    downloadUrl: "",
    category: "Personal Development",
    iconName: "BookOpen"
  });

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/books");
      const data = await res.json();
      if (Array.isArray(data)) setBooks(data);
    } catch (err) {
      console.error("Fetch books failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ title: "", description: "", price: "", downloadUrl: "", category: "Personal Development", iconName: "BookOpen" });
        fetchBooks();
      }
    } catch (err) {
      console.error("Submit failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">Library Management</h1>
          <p className="text-slate-500 font-sans text-sm tracking-wide">Add, update, and manage the TMT digital bookstore catalog.</p>
        </motion.div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-accent text-white font-sans text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-3 transition-all hover:bg-accent-light shadow-lg shadow-accent/10"
        >
          <Plus className="w-4 h-4" />
          Add New Book
        </motion.button>
      </div>

      {/* Toolbar */}
      <div className="bg-[#0A0A0A] border border-white/5 p-4 flex flex-col md:flex-row gap-4 items-center justify-between rounded-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search by title or author..." 
            className="w-full bg-white/5 border border-white/5 rounded-sm pl-12 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mr-4">Filter:</span>
          <select className="bg-white/5 border border-white/5 rounded-sm px-4 py-2 text-xs text-slate-300 focus:outline-none">
            <option>All Categories</option>
            <option>Business</option>
            <option>Leadership</option>
            <option>Wealth</option>
          </select>
        </div>
      </div>

      {/* Books Table */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden min-h-[400px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-accent animate-spin" />
          </div>
        ) : books.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <BookOpen className="w-12 h-12 text-slate-700 mb-4" />
            <p className="text-slate-500 font-serif text-lg italic">No books found in the library.</p>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest mt-2">Add your first book to get started</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Book Title</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Category</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Price</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Metrics</th>
                  <th className="px-6 py-4 text-right text-[10px] uppercase tracking-widest text-slate-500 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {books.map((book) => (
                  <tr key={book.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shrink-0">
                          <BookOpen className="w-5 h-5 text-accent/50" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-white font-medium">{book.title}</span>
                          <span className="text-[10px] text-slate-500 font-sans line-clamp-1 max-w-[200px]">{book.description}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] text-slate-400 border border-white/10 px-2 py-1 rounded-sm uppercase tracking-tighter">{book.category || "General"}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-white font-serif font-medium">₦{book.price.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-emerald-500 font-medium font-serif">12 Sales</span>
                        <span className="text-[9px] text-slate-600 uppercase tracking-widest">₦180,000 total</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-slate-500 hover:text-white transition-colors" title="Edit">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-500 hover:text-rose-500 transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h2 className="font-serif text-2xl font-bold text-white tracking-tight">Add New Resource</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Book Title</label>
                    <input 
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      placeholder="e.g. The Billionaire Blueprint"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Price (NGN)</label>
                    <input 
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      type="number" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      placeholder="15000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Category</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option>Business</option>
                      <option>Personal Development</option>
                      <option>Tech & Media</option>
                      <option>Wealth Management</option>
                    </select>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Download Link / Asset URL</label>
                    <div className="p-4 bg-accent/5 border border-accent/10 rounded-sm mb-2">
                      <p className="text-[10px] text-accent font-sans leading-relaxed">
                        <span className="font-bold">Tip:</span> Host your PDF on Google Drive, Dropbox, or S3, and paste the "Direct Download" or "Shared Link" below. Ensure the link is accessible to anyone with the URL.
                      </p>
                    </div>
                    <input 
                      required
                      value={formData.downloadUrl}
                      onChange={(e) => setFormData({...formData, downloadUrl: e.target.value})}
                      type="url" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      placeholder="https://..."
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Short Description</label>
                    <textarea 
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Enter a compelling summary of the book content..."
                    />
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="flex-1 bg-accent text-white font-sans text-[11px] font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-accent-light transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Publish Resource"}
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 border border-white/10 text-white font-sans text-[11px] font-bold uppercase tracking-widest py-4 rounded-sm hover:bg-white/5 transition-all"
                  >
                    Cancel
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
