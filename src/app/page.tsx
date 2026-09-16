"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Target, Radio, CheckCircle2 } from "lucide-react";
import Technology from "@/components/sections/Technology";
import Impact from "@/components/sections/Impact";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import PrivacySafety from "@/components/sections/Privacy";
import MissionControl from "@/components/sections/MissionControl";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      
      {/* Hero Section - Dark Navy */}
      <section id="home" className="bg-slate-900 w-full pt-32 pb-16 relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900 pointer-events-none" />
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                When Every Minute Matters, <br/>
                <span className="text-blue-500">Search From Above.</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed font-medium">
                MUNDRONE is developing drone-assisted technology to help authorized rescue teams search larger areas, identify potential locations, and coordinate faster responses when a child goes missing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#technology" 
                  className="inline-flex justify-center items-center px-6 py-3.5 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-sm"
                >
                  Explore the Technology
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="#mission-control" 
                  className="inline-flex justify-center items-center px-6 py-3.5 rounded-md bg-slate-800 border border-slate-700 text-white font-semibold hover:bg-slate-700 transition-colors"
                >
                  View Mission Demo
                </Link>
              </div>
            </div>

            <motion.div 
              className="relative h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-2xl border border-slate-700"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/drone-hero.jpg"
                alt="Search and Rescue Drone"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section - Dark Red/Orange */}
      <section id="problem" className="relative w-full py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #150a04 0%, #1a0d05 60%, #100802 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="absolute right-0 top-0 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 60%)", filter: "blur(60px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid rgba(249,115,22,0.2)", boxShadow: "0 0 40px rgba(249,115,22,0.08)" }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image src="/images/humanitarian.jpg" alt="Humanitarian efforts" fill className="object-cover opacity-70" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(21,10,4,0.7) 0%, transparent 50%)" }} />
            </motion.div>

            <div>
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-orange-400 border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 rounded-full mb-6">The Challenge</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
                Every Missing Child Case Is a{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#f97316,#ef4444)" }}>Race Against Time.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Ground searches face critical challenges when every second counts. Traditional methods can be limited by human resources, environment, and visibility.
              </p>
              <ul className="space-y-4">
                {[
                  { text: "Vast search areas that take hours to cover on foot.", color: "#f97316" },
                  { text: "Difficult terrain that puts ground teams at risk.", color: "#ef4444" },
                  { text: "Fragmented information delaying coordination.", color: "#fbbf24" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", bounce: 0.3 }}
                    className="flex items-start gap-4 rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                    <span className="text-slate-300 font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Dark Blue */}
      <section id="solution" className="relative w-full py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #040c1a 0%, #060e1f 60%, #040c1a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-48 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(56,189,248,0.15) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-sky-400 border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 rounded-full mb-5">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Aerial Intelligence for{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#818cf8)" }}>Search &amp; Rescue</span>
            </h2>
            <p className="text-slate-400 text-lg">Augmenting ground operations with aerial robotics and real-time intelligence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "SEARCH",  desc: "Drone rapidly scans areas autonomously based on predetermined paths.",  icon: Target,      from: "#38bdf8", to: "#6366f1", glow: "rgba(56,189,248,0.4)" },
              { step: "02", title: "DETECT",  desc: "Visual and AI-assisted systems help identify potential locations.",       icon: Radio,       from: "#f97316", to: "#ef4444", glow: "rgba(249,115,22,0.4)" },
              { step: "03", title: "RESPOND", desc: "Verified coordinates shared with authorized rescue personnel.",           icon: CheckCircle2, from: "#34d399", to: "#22d3ee", glow: "rgba(52,211,153,0.4)" },
            ].map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: "spring", bounce: 0.3 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative flex flex-col items-center text-center rounded-2xl p-8 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${stage.glow} 0%, transparent 60%)` }} />
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: `linear-gradient(135deg, ${stage.from}, ${stage.to})`, boxShadow: `0 0 24px ${stage.glow}` }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs font-black tracking-[0.2em] uppercase mb-3" style={{ color: stage.from }}>Phase {stage.step}</div>
                  <h3 className="text-xl font-extrabold mb-3 text-white">{stage.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{stage.desc}</p>
                  <motion.div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl" style={{ background: `linear-gradient(90deg, ${stage.from}, ${stage.to})` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPA Sections */}
      <section id="technology"><Technology /></section>
      <section id="mission-control"><MissionControl /></section>
      <section id="impact"><Impact /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <section id="privacy-safety"><PrivacySafety /></section>
    </div>
  );
}
