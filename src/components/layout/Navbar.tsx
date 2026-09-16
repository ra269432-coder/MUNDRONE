"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crosshair } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navLinks = [
  { name: "Technology", href: "#technology" },
  { name: "Mission Control", href: "#mission-control" },
  { name: "Impact", href: "#impact" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy", href: "#privacy-safety" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for subtle styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="#" className="flex items-center space-x-3 group">
            <Crosshair className="w-8 h-8 text-blue-600 transition-transform group-hover:rotate-90 duration-500" />
            <span className={clsx(
              "flex items-baseline transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              <span className="font-black text-2xl md:text-3xl tracking-tight">MUN</span>
              <span className="font-bold text-xs md:text-sm tracking-[0.25em] ml-1 text-blue-500">DRONE</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-semibold transition-colors uppercase tracking-wider",
                  isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                "focus:outline-none",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 uppercase tracking-wider transition-colors"
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
