import Link from "next/link";
import { Crosshair } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Crosshair className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-xl tracking-widest text-white">
                MUNDRONE
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-4 max-w-sm leading-relaxed">
              Technology for Faster Missing-Child Recovery. A drone-assisted search platform designed to help rescue teams locate missing children faster.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#technology" className="text-slate-400 hover:text-blue-400 transition-colors">Technology</Link></li>
              <li><Link href="#mission-control" className="text-slate-400 hover:text-blue-400 transition-colors">Mission Control</Link></li>
              <li><Link href="#impact" className="text-slate-400 hover:text-blue-400 transition-colors">Impact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">Organization</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="#privacy-safety" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy & Safety</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MUNDRONE. All rights reserved.</p>
          <p className="mt-4 md:mt-0 max-w-2xl text-center md:text-right">
            MUNDRONE is a technology concept and does not replace police, emergency services, or professional search-and-rescue organizations. 
          </p>
        </div>
      </div>
    </footer>
  );
}
