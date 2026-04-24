"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const stats = [
  { label: "Total Revenue", value: "₦1,240,500", trend: "+12.5%", isPositive: true, icon: TrendingUp },
  { label: "Book Purchases", value: "84", trend: "+5.2%", isPositive: true, icon: ShoppingBag },
  { label: "Training Applications", value: "156", trend: "-2.1%", isPositive: false, icon: Users },
  { label: "Active Books", value: "12", trend: "0%", isPositive: true, icon: BookOpen },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tight">Overview</h1>
        <p className="text-slate-500 font-sans text-sm tracking-wide">Welcome back. Here is what's happening across TMT today.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <motion.div 
            key={stat.label}
            variants={fadeUp}
            className="bg-[#0A0A0A] border border-white/5 p-6 rounded-sm group hover:border-accent/30 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <stat.icon className="w-5 h-5 text-accent" />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.isPositive ? "text-emerald-500" : "text-rose-500"}`}>
                {stat.trend}
                {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-serif font-bold text-white">{stat.value}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Recent Purchases */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="lg:col-span-8 bg-[#0A0A0A] border border-white/5 rounded-sm overflow-hidden"
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-serif text-lg font-bold text-white">Recent Purchases</h3>
            <button className="text-[10px] uppercase tracking-widest text-accent font-bold hover:text-white transition-colors">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">User</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Book</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Amount</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">
                          JD
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-white font-medium">John Doe</span>
                          <span className="text-[10px] text-slate-500 font-sans tracking-wide">john@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-300 font-sans">The Billionaire Blueprint</td>
                    <td className="px-6 py-4 text-xs text-white font-medium font-serif">₦15,000</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold uppercase tracking-widest rounded-sm">Success</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="lg:col-span-4 bg-[#0A0A0A] border border-white/5 rounded-sm p-6"
        >
          <h3 className="font-serif text-lg font-bold text-white mb-8">Activity Feed</h3>
          <div className="space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== 4 && <div className="absolute top-8 left-4 bottom-[-32px] w-[1px] bg-white/5"></div>}
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 relative z-10">
                  <Clock className="w-3 h-3 text-slate-500" />
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <span className="text-white font-medium">New Application</span> for Media-Tech program from Sarah Wilson.
                  </p>
                  <span className="text-[10px] text-slate-600 uppercase tracking-tighter font-bold">2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
