"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle2,
  Clock,
  MoreVertical,
  Loader2,
  Inbox
} from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApps = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/applications");
      const data = await res.json();
      if (Array.isArray(data)) setApps(data);
    } catch (err) {
      console.error("Fetch apps failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch("/api/admin/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) fetchApps();
    } catch (err) {
      console.error("Update failed");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">Student Applications</h1>
        <p className="text-slate-500 font-sans text-sm tracking-wide">Review and manage training applications from prospective students.</p>
      </motion.div>

      {/* Toolbar */}
      <div className="bg-[#0A0A0A] border border-white/5 p-4 flex flex-col md:flex-row gap-4 items-center justify-between rounded-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="w-full bg-white/5 border border-white/5 rounded-sm pl-12 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden min-h-[400px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-accent animate-spin" />
          </div>
        ) : apps.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <Inbox className="w-12 h-12 text-slate-700 mb-4" />
            <p className="text-slate-500 font-serif text-lg italic">No applications received yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Applicant</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Program</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Applied Date</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Status</th>
                  <th className="px-6 py-4 text-right text-[10px] uppercase tracking-widest text-slate-500 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {apps.map((app) => (
                  <tr key={app.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-white font-medium">{app.firstName} {app.lastName}</span>
                        <div className="flex items-center gap-3 text-[10px] text-slate-500">
                          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {app.email}</span>
                          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {app.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] text-accent border border-accent/20 px-2 py-1 rounded-sm uppercase tracking-tighter font-bold">{app.program}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                        <Calendar className="w-3.5 h-3.5 text-slate-600" />
                        {new Date(app.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {app.status === "PENDING" ? (
                          <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[9px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                            <Clock className="w-3 h-3" /> Pending
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> Reviewed
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <select 
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        value={app.status}
                        className="bg-white/5 border border-white/5 rounded-sm px-3 py-1.5 text-[9px] text-slate-300 font-bold uppercase tracking-widest focus:outline-none focus:border-accent"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="REVIEWED">Reviewed</option>
                        <option value="ACCEPTED">Accepted</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
