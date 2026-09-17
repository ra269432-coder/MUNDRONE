"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, FlaskConical } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bd.jpg"
          alt="Aerial Bangladesh landscape with search drone"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        {/* Green tint for Bangladesh identity */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-transparent to-slate-950/40" />
      </div>

      {/* Grid coordinates overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Map coordinate display */}
      <div className="absolute top-24 right-6 md:right-12 text-right z-20 opacity-60">
        <div className="font-mono text-[10px] text-emerald-400 tracking-wider">
          <div>23.8103° N</div>
          <div>90.4125° E</div>
          <div className="mt-1 text-slate-400">DHAKA, BD</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
              <span>🇧🇩</span>
              {t("hero.badge")}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <FlaskConical className="w-3 h-3" />
              {t("hero.conceptLabel")}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]"
          >
            {t("hero.heading1")}
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #34d399, #22d3ee, #38bdf8)",
              }}
            >
              {t("hero.heading2")}
            </span>
          </motion.h1>

          {/* Bangla tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-300/80 mb-4 font-medium"
            style={{ fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif" }}
          >
            {t("hero.bangla_tagline")}
          </motion.p>

          {/* English subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
          >
            {t("hero.subheading")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#problem"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all shadow-xl"
              style={{
                background: "linear-gradient(135deg, #059669, #0d9488)",
                boxShadow: "0 0 32px rgba(5,150,105,0.4)",
              }}
            >
              {t("hero.cta1")}
              <ChevronDown className="w-5 h-5" />
            </Link>
            <Link
              href="#mission-control"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all border border-slate-600 hover:border-slate-400 hover:bg-slate-800/50"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {t("hero.cta2")}
            </Link>
          </motion.div>

          {/* Location indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-2 text-slate-500 text-sm"
          >
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>Bangladesh-based initiative · Research & Concept Stage 2026</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
