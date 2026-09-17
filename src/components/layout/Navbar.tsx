"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crosshair } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t("nav.problem"), href: "#problem" },
    { name: t("nav.map"), href: "#map" },
    { name: t("nav.technology"), href: "#technology" },
    { name: t("nav.missionControl"), href: "#mission-control" },
    { name: t("nav.research"), href: "#research" },
    { name: t("nav.contact"), href: "#contact" },
    { name: t("nav.sources"), href: "/sources" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-3 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 duration-300"
              style={{ background: "linear-gradient(135deg, #059669, #0d9488)" }}
            >
              <Crosshair className="w-5 h-5 text-white" />
            </div>
            <span className="flex items-baseline">
              <span className="font-black text-2xl md:text-3xl tracking-tight text-white">MUN</span>
              <span className="font-bold text-xs md:text-sm tracking-[0.25em] ml-0.5 text-emerald-400">DRONE</span>
            </span>
            {/* BD flag badge */}
            <span className="hidden sm:flex items-center gap-1 text-[10px] font-bold text-emerald-400/70 border border-emerald-400/20 rounded-full px-2 py-0.5 tracking-widest uppercase">
              🇧🇩 {t("nav.badge")}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold transition-colors uppercase tracking-wider text-slate-400 hover:text-emerald-400"
              >
                {link.name}
              </Link>
            ))}

            {/* Language switcher */}
            <div
              className="flex items-center rounded-lg overflow-hidden border"
              style={{ borderColor: "rgba(52,211,153,0.25)" }}
            >
              <button
                onClick={() => setLang("bn")}
                className={clsx(
                  "px-3 py-1.5 text-xs font-bold transition-all",
                  lang === "bn"
                    ? "bg-emerald-500 text-white"
                    : "text-slate-400 hover:text-emerald-400"
                )}
              >
                বাংলা
              </button>
              <div className="w-px h-4 bg-emerald-400/20" />
              <button
                onClick={() => setLang("en")}
                className={clsx(
                  "px-3 py-1.5 text-xs font-bold transition-all",
                  lang === "en"
                    ? "bg-emerald-500 text-white"
                    : "text-slate-400 hover:text-emerald-400"
                )}
              >
                English
              </button>
            </div>
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Compact language switcher */}
            <div
              className="flex items-center rounded-lg overflow-hidden border text-[10px]"
              style={{ borderColor: "rgba(52,211,153,0.25)" }}
            >
              <button
                onClick={() => setLang("bn")}
                className={clsx(
                  "px-2 py-1 font-bold transition-all",
                  lang === "bn" ? "bg-emerald-500 text-white" : "text-slate-400"
                )}
              >
                বাংলা
              </button>
              <div className="w-px h-3 bg-emerald-400/20" />
              <button
                onClick={() => setLang("en")}
                className={clsx(
                  "px-2 py-1 font-bold transition-all",
                  lang === "en" ? "bg-emerald-500 text-white" : "text-slate-400"
                )}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(2,12,26,0.98)", borderBottom: "1px solid rgba(52,211,153,0.15)" }}
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-bold text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
