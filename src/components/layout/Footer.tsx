"use client";

import Link from "next/link";
import { Crosshair, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      {/* Disclaimer bar */}
      <div
        className="w-full px-4 py-3 text-center"
        style={{ background: "rgba(251,191,36,0.05)", borderBottom: "1px solid rgba(251,191,36,0.15)" }}
      >
        <div className="flex items-start justify-center gap-2 max-w-4xl mx-auto text-left">
          <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-amber-300/70 text-xs leading-relaxed">{t("footer.disclaimer")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #059669, #0d9488)" }}
              >
                <Crosshair className="w-4 h-4 text-white" />
              </div>
              <span className="flex items-baseline">
                <span className="font-black text-xl text-white">MUN</span>
                <span className="font-bold text-xs tracking-[0.25em] ml-0.5 text-emerald-400">DRONE</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">
              Technology for Faster Missing-Child Recovery
            </p>
            <p className="text-slate-600 text-xs" style={{ fontFamily: "var(--font-hind-siliguri), sans-serif" }}>
              নিখোঁজ শিশু উদ্ধারে দ্রুততর প্রযুক্তির উদ্যোগ
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-amber-400 border border-amber-400/25 bg-amber-400/5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Research & Concept Stage 2026
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Navigate</div>
            <div className="space-y-2">
              {[
                { label: "The Problem", href: "#problem" },
                { label: "Bangladesh Map", href: "#map" },
                { label: "Technology", href: "#technology" },
                { label: "Mission Demo", href: "#mission-control" },
                { label: "Research Hub", href: "#research" },
                { label: "Contact", href: "#contact" },
                { label: "Sources & Data", href: "/sources" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-500 hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Notices */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Important Notices</div>
            <div className="space-y-3">
              {[
                "No existing partnership with any organization.",
                "All mission demos are simulations only.",
                "No children have been found using this technology.",
                "AI detection is not yet developed or deployed.",
                "Data sourced from Bangladesh Police Headquarters, Sep 2026.",
              ].map((notice, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-700 mt-2 flex-shrink-0" />
                  <p className="text-slate-600 text-xs leading-relaxed">{notice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs">{t("footer.rights")}</p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <Link href="/sources" className="hover:text-emerald-400 transition-colors">Sources & Data</Link>
            <span>·</span>
            <Link href="#privacy-safety" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <span className="flex items-center gap-1">🇧🇩 Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
