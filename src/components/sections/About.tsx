"use client";

import { motion } from "framer-motion";
import {
  Building2, ShieldCheck, HeartHandshake, CheckCircle2,
  Globe, Cpu, Eye, FlaskConical, Handshake, Rocket,
  Zap,
} from "lucide-react";

const roadmap = [
  { phase: "01", title: "Digital Platform", desc: "Website, mission dashboard, and case management prototype (Current Phase).", icon: Globe, gradientFrom: "#10b981", gradientTo: "#22d3ee", glow: "rgba(16,185,129,0.5)", active: true },
  { phase: "02", title: "Drone Prototype", desc: "Develop and physically test the hardware drone platform and basic telemetry.", icon: Zap, gradientFrom: "#f59e0b", gradientTo: "#f97316", glow: "rgba(245,158,11,0.4)", active: false },
  { phase: "03", title: "Computer Vision", desc: "Develop AI-assisted person detection models for aerial imagery.", icon: Eye, gradientFrom: "#8b5cf6", gradientTo: "#6366f1", glow: "rgba(139,92,246,0.4)", active: false },
  { phase: "04", title: "Field Testing", desc: "Controlled, authorized search simulations in safe environments.", icon: FlaskConical, gradientFrom: "#ec4899", gradientTo: "#f43f5e", glow: "rgba(236,72,153,0.4)", active: false },
  { phase: "05", title: "Institutional Collaboration", desc: "Establish protocols with authorized child protection organizations.", icon: Handshake, gradientFrom: "#38bdf8", gradientTo: "#818cf8", glow: "rgba(56,189,248,0.4)", active: false },
  { phase: "06", title: "Real-World Deployment", desc: "Only after appropriate testing, authorization, safety, and privacy processes are complete.", icon: Rocket, gradientFrom: "#34d399", gradientTo: "#22d3ee", glow: "rgba(52,211,153,0.4)", active: false },
];

const partners = [
  { title: "Child Protection Organizations", icon: HeartHandshake, gradientFrom: "#f43f5e", gradientTo: "#ec4899", glow: "rgba(244,63,94,0.35)" },
  { title: "Law Enforcement", icon: ShieldCheck, gradientFrom: "#3b82f6", gradientTo: "#6366f1", glow: "rgba(59,130,246,0.35)" },
  { title: "Rescue & Emergency Teams", icon: Building2, gradientFrom: "#f97316", gradientTo: "#f59e0b", glow: "rgba(249,115,22,0.35)" },
];

export default function About() {
  return (
    <div
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #031a12 0%, #041f1a 40%, #050d0a 100%)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Why MUNDRONE Exists ── */}
        <motion.section
          className="mb-28"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 rounded-full mb-6">
            Project Genesis
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            Why{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg,#34d399,#22d3ee)" }}
            >
              MUNDRONE
            </span>{" "}
            Exists
          </h2>

          <div className="space-y-5 text-slate-400 text-lg leading-relaxed max-w-3xl">
            <p>
              When a child goes missing, search teams need timely information and situational
              awareness. The early hours are critical, yet ground searches can be slow,
              resource-heavy, and hampered by difficult terrain or poor visibility.
            </p>
            <p>
              <strong className="text-white font-bold">MUNDRONE</strong> explores how aerial
              robotics, mapping, computer vision, and real-time information systems can support
              that process — demonstrating how technology can augment the incredible work already
              being done by human search teams.
            </p>
          </div>

          {/* Status card */}
          <motion.div
            className="mt-10 p-5 rounded-2xl flex items-center gap-5 max-w-md"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(34,211,238,0.06) 100%)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-400/40"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Current Status</div>
              <div className="text-white font-bold text-lg">Concept / Early Prototype</div>
              <div className="text-slate-500 text-sm mt-0.5">Hardware not yet commenced</div>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Roadmap ── */}
        <motion.section
          className="mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center"
          >
            Development{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#34d399,#22d3ee)" }}>
              Roadmap
            </span>
          </h2>

          <div className="space-y-4">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, type: "spring", bounce: 0.3 }}
                  whileHover={{ x: 6 }}
                  className="group relative rounded-2xl p-5 flex items-center gap-5 overflow-hidden"
                  style={{
                    background: item.active
                      ? `linear-gradient(135deg, rgba(16,185,129,0.15), rgba(34,211,238,0.08))`
                      : "rgba(255,255,255,0.03)",
                    border: item.active
                      ? "1px solid rgba(16,185,129,0.4)"
                      : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                      boxShadow: `0 0 18px ${item.glow}`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="font-mono text-xs font-black"
                        style={{ color: item.gradientFrom }}
                      >
                        {item.phase}
                      </span>
                      <h3 className="text-white font-bold text-base">{item.title}</h3>
                      {item.active && (
                        <span className="flex items-center gap-1.5 text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full ml-auto flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3" /> IN PROGRESS
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                  </div>

                  {/* Accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${item.gradientFrom}, transparent)` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Collaboration ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-5">
            Built for{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#34d399,#38bdf8)" }}>
              Collaboration
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12 leading-relaxed">
            MUNDRONE is being developed with the long-term goal of working alongside child-protection
            organizations, rescue teams, and humanitarian agencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", bounce: 0.3 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group relative rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${partner.glow} 0%, transparent 65%)` }}
                  />
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${partner.gradientFrom}, ${partner.gradientTo})`,
                      boxShadow: `0 0 24px ${partner.glow}`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base leading-snug">{partner.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

      </div>
    </div>
  );
}


