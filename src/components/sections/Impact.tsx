"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Zap, Shield, Users, Moon, Heart,
  AlertTriangle, FileSearch, Radio,
  Eye, Cpu, Handshake,
} from "lucide-react";

/* ─────────────── Impact Cards ─────────────── */
const impacts = [
  { title: "Faster Search",        icon: Zap,    desc: "Aerial systems can help teams cover large areas efficiently, reducing the time required to scan square kilometers of terrain." },
  { title: "Safer Operations",     icon: Shield, desc: "Drones can provide aerial information before ground teams enter difficult or hazardous terrain, improving responder safety." },
  { title: "Better Coordination",  icon: Users,  desc: "Shared location and mission information can help authorized teams coordinate their ground movements more effectively." },
  { title: "Night Search",         icon: Moon,   desc: "Thermal-equipped drones can support searches in low-light environments where human vision is severely limited." },
  { title: "Community Impact",     icon: Heart,  desc: "The long-term goal is to support organizations working tirelessly to recover missing children and reunite families." },
];

/* ─────────────── Vision Steps ─────────────── */
const visionSteps = [
  {
    phase: "01",
    title: "Missing Child",
    desc: "A child is reported missing. Every second counts — the clock starts now.",
    icon: AlertTriangle,
    gradientFrom: "#ef4444",
    gradientTo: "#f97316",
    glow: "rgba(239,68,68,0.35)",
    border: "#f87171",
  },
  {
    phase: "02",
    title: "Authorized Case",
    desc: "Verified case information is securely logged and shared with authorized responders.",
    icon: FileSearch,
    gradientFrom: "#fbbf24",
    gradientTo: "#eab308",
    glow: "rgba(251,191,36,0.35)",
    border: "#fbbf24",
  },
  {
    phase: "03",
    title: "Search Mission",
    desc: "A coordinated aerial search mission is launched across the target terrain.",
    icon: Radio,
    gradientFrom: "#38bdf8",
    gradientTo: "#3b82f6",
    glow: "rgba(56,189,248,0.35)",
    border: "#38bdf8",
  },
  {
    phase: "04",
    title: "Aerial Intelligence",
    desc: "MUNDRONE drones stream live video and thermal data from the search zone.",
    icon: Cpu,
    gradientFrom: "#8b5cf6",
    gradientTo: "#7c3aed",
    glow: "rgba(167,139,250,0.35)",
    border: "#a78bfa",
  },
  {
    phase: "05",
    title: "Human Verification",
    desc: "Trained operators review AI-flagged footage to confirm findings on the ground.",
    icon: Eye,
    gradientFrom: "#22d3ee",
    gradientTo: "#14b8a6",
    glow: "rgba(34,211,238,0.35)",
    border: "#22d3ee",
  },
  {
    phase: "06",
    title: "Rescue Coordination",
    desc: "Ground teams are directed with precision intelligence — reuniting families.",
    icon: Handshake,
    gradientFrom: "#34d399",
    gradientTo: "#22c55e",
    glow: "rgba(52,211,153,0.35)",
    border: "#34d399",
  },
];

/* ─────────────── Floating Particle ─────────────── */
function Particle({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-400/20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

/* ─────────────── OrbitRing ─────────────── */
function OrbitRing({ size, duration, delay }: { size: number; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full border border-white/10 pointer-events-none"
      style={{ width: size, height: size, top: "50%", left: "50%", x: "-50%", y: "-50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

export default function Impact() {
  const reduce = useReducedMotion();

  return (
    <div className="bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero copy ── */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Technology That Can Help Save Time{" "}
            <span className="text-blue-600">When It Matters Most.</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            By integrating advanced aerial robotics into existing search-and-rescue protocols, we aim
            to provide critical intelligence that assists authorized teams on the ground.
          </p>
        </motion.div>

        {/* ── Impact Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-slate-300 p-8 rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                <impact.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{impact.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{impact.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ════════════════════════════════════════
            THE MUNDRONE VISION — premium redesign
        ════════════════════════════════════════ */}
        <section className="relative rounded-3xl overflow-hidden bg-[#050d1a] px-4 py-20 md:py-28">

          {/* Background grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Radial glow blob */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[600px] rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>

          {/* Floating particles */}
          {!reduce && (
            <>
              <Particle x="8%"  y="15%" delay={0}   size={8}  />
              <Particle x="88%" y="12%" delay={1.2} size={6}  />
              <Particle x="5%"  y="72%" delay={2.1} size={10} />
              <Particle x="92%" y="65%" delay={0.7} size={7}  />
              <Particle x="45%" y="5%"  delay={1.8} size={5}  />
              <Particle x="55%" y="90%" delay={0.4} size={9}  />
            </>
          )}

          {/* Section header */}
          <motion.div
            className="relative text-center mb-20 z-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-sky-400 border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 rounded-full mb-5">
              End-to-End Pipeline
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              The{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#818cf8)" }}
              >
                MUNDRONE
              </span>{" "}
              Vision
            </h2>
            <p className="mt-5 text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
              From the first alert to rescue coordination — a seamless, intelligence-driven
              pipeline designed to bring children home safely.
            </p>
          </motion.div>

          {/* Steps grid */}
          <div className="relative z-10 max-w-5xl mx-auto">

            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.25) 20%, rgba(56,189,248,0.25) 80%, transparent)" }}
            />

            <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
              {visionSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
                    className={`group relative ${isLeft ? "lg:pr-10" : "lg:pl-10"}`}
                  >
                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative rounded-2xl p-6 overflow-hidden cursor-default"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                        border: `1px solid rgba(${hexToRgb(step.border)}, 0.3)`,
                        boxShadow: `0 0 0 1px rgba(${hexToRgb(step.border)}, 0.1) inset`,
                      }}
                    >
                      {/* Inner glow on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at 30% 30%, ${step.glow} 0%, transparent 65%)` }}
                      />

                      {/* Orbit rings around icon */}
                      <div className="relative w-14 h-14 mb-5 flex-shrink-0">
                        <OrbitRing size={52} duration={8}  delay={0}   />
                        <OrbitRing size={66} duration={13} delay={1.5} />
                        {/* Icon circle */}
                        <div
                          className="absolute inset-0 m-auto w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                            boxShadow: `0 0 24px ${step.glow}`,
                          }}
                        >
                          <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                        </div>
                      </div>

                      {/* Phase badge */}
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[10px] font-black tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                          style={{
                            background: `rgba(${hexToRgb(step.border)}, 0.15)`,
                            color: step.border,
                            border: `1px solid rgba(${hexToRgb(step.border)}, 0.3)`,
                          }}
                        >
                          Phase {step.phase}
                        </span>
                        {/* Animated dot */}
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: step.border }}
                          animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                        />
                      </div>

                      <h3 className="text-white font-bold text-xl mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>

                      {/* Bottom accent bar */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${step.border}, transparent)` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.12 }}
                      />
                    </motion.div>

                    {/* Step connector arrow (lg only, between columns) */}
                    {isLeft && idx < visionSteps.length - 1 && (
                      <motion.div
                        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-8 h-8 rounded-full items-center justify-center"
                        style={{
                          background: "rgba(56,189,248,0.1)",
                          border: "1px solid rgba(56,189,248,0.3)",
                          boxShadow: "0 0 12px rgba(56,189,248,0.2)",
                        }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: "#38bdf8" }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            className="relative z-10 mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm border border-slate-700 rounded-full px-5 py-2 bg-white/[0.03]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Every phase is subject to safety, privacy &amp; authorization review
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}

/* ─────────────── Utility ─────────────── */
function hexToRgb(hex: string): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r},${g},${b}`;
}
