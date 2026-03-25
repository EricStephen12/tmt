import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-12">
            <Link href="/" className="inline-block mb-8 group">
              <span className="text-3xl font-serif font-bold tracking-tight text-white">
                TMT <span className="text-accent font-sans font-light">GROUP</span>
              </span>
            </Link>
            <p className="text-slate-300 font-serif italic text-xl mb-6">
              "...always with you"
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              A diversified business enterprise providing innovative, practical, and value-driven solutions across strategic sectors of the economy since 2021.
            </p>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-sans tracking-[0.2em] text-accent uppercase mb-8">Head Office</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-300 group">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed max-w-[250px] group-hover:text-white transition-colors">
                  Suite 046, Global Plaza, <br/>
                  By Jabi Upstairs, Jabi,<br/>
                  Abuja FCT.
                </span>
              </li>
              <li className="flex items-center gap-4 text-slate-300 group">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+2348174006548" className="text-sm group-hover:text-white transition-colors">
                  +234 (0)8174006548
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-300 group">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:Tmtglobal@gmail.com" className="text-sm group-hover:text-white transition-colors">
                  Tmtglobal@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-sans tracking-[0.2em] text-accent uppercase mb-8">Our Subsidiaries</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <Link href="/real-estate" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Real Estate
              </Link>
              <Link href="/consulting" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Consulting
              </Link>
              <Link href="/logistics" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Logistics
              </Link>
              <Link href="/agriculture" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Agriculture
              </Link>
              <Link href="/schools" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Schools
              </Link>
              <Link href="/media-tech" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Media & Tech
              </Link>
              <Link href="/hospitality" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Hospitality
              </Link>
              <Link href="/tmca" className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> TMCA
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-sans tracking-widest">
            &copy; {new Date().getFullYear()} TMT GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
