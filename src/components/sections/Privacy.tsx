"use client";

import { motion } from "framer-motion";
import {
  Shield, Lock, FileKey, EyeOff, CheckSquare,
  BrainCircuit, History, Scale, UserCheck, AlertTriangle,
} from "lucide-react";

const principles = [
  { icon: FileKey,      title: "Strict Access Control",   desc: "System access would be strictly limited to verified, authorized personnel only.", from: "#22d3ee", to: "#3b82f6" },
  { icon: Lock,         title: "Encrypted Data",          desc: "All telemetry, imagery, and case data would be encrypted both in transit and at rest.", from: "#8b5cf6", to: "#6366f1" },
  { icon: History,      title: "Limited Retention",       desc: "Data would be automatically purged after case closure, following legal guidelines.", from: "#f97316", to: "#f59e0b" },
  { icon: UserCheck,    title: "Authorized Case Access",  desc: "Cases can only be initiated and viewed by designated law enforcement or search organizations.", from: "#10b981", to: "#22d3ee" },
  { icon: EyeOff,       title: "Child Privacy",           desc: "Facial blurring and strict anonymization protocols for any imagery captured during operations.", from: "#ec4899", to: "#f43f5e" },
  { icon: CheckSquare,  title: "Human Verification",      desc: "AI assists operators but never makes autonomous decisions regarding identification.", from: "#34d399", to: "#10b981" },
  { icon: BrainCircuit, title: "Responsible AI",          desc: "Models trained ethically without bias, focusing solely on assisting search and rescue.", from: "#a855f7", to: "#8b5cf6" },
  { icon: Shield,       title: "Audit Logs",              desc: "Immutable logs of all system access, mission parameters, and data interactions for accountability.", from: "#38bdf8", to: "#818cf8" },
  { icon: Scale,        title: "Lawful Operation",        desc: "Flight operations strictly adhering to local aviation regulations and emergency flight rules.", from: "#fbbf24", to: "#f97316" },
  { icon: Shield,       title: "Authority Coordination",  desc: "System designed to integrate with and support existing official emergency response protocols.", from: "#6366f1", to: "#3b82f6" },
];

export default function PrivacySafety() {
  return (
    <div
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #010f0a 0%, #021510 50%, #010d0a 100%)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(34,197,94,0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-green-400 border border-green-400/30 bg-green-400/10 px-4 py-1.5 rounded-full mb-5">
            Critical Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Privacy &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg,#4ade80,#22d3ee)" }}
            >
              Safety Framework
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Because this technology deals with the most sensitive situations, security and
            privacy cannot be afterthoughts — they must be the foundation.
          </p>
        </motion.div>

        {/* Disclaimer Alert */}
        <motion.div
          className="relative rounded-2xl p-6 mb-20 flex items-start gap-5 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(234,179,8,0.1) 0%, rgba(249,115,22,0.07) 100%)",
            border: "1px solid rgba(234,179,8,0.3)",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              boxShadow: "0 0 20px rgba(245,158,11,0.4)",
            }}
          >
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-yellow-300 font-bold text-lg mb-2">Important Disclaimer</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              <strong className="text-white font-bold">MUNDRONE is a technology concept</strong> and does not replace
              police, emergency services, or professional search-and-rescue organizations. We are not an operational
              rescue service. If you have an emergency, please contact your local authorities immediately.
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-10">
            Proposed{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#4ade80,#22d3ee)" }}>
              Security Principles
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", bounce: 0.25 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="group relative rounded-2xl p-5 flex gap-4 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 0% 50%, rgba(34,197,94,0.12) 0%, transparent 60%)` }}
                  />

                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mt-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                      boxShadow: `0 0 16px ${item.from}55`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Left accent */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
                    style={{ background: `linear-gradient(to bottom, ${item.from}, ${item.to})` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}


