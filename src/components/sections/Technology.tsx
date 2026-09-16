"use client";

import { motion } from "framer-motion";
import {
  Scan, ThermometerSnowflake, Crosshair,
  Cpu, Activity, Map,
} from "lucide-react";

const technologies = [
  {
    title: "Aerial Search",
    icon: Scan,
    description: "Rapidly scan designated areas from above, covering difficult terrain faster than ground teams alone.",
    status: "Core Protocol",
    statusColor: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.4)", text: "#4ade80" },
    gradientFrom: "#6366f1", gradientTo: "#8b5cf6", glow: "rgba(99,102,241,0.4)",
  },
  {
    title: "Thermal Imaging",
    icon: ThermometerSnowflake,
    description: "Future drone configurations may use thermal sensors for low-light and night search operations, identifying heat signatures in dense environments.",
    status: "Future Capability",
    statusColor: { bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.4)", text: "#fbbf24" },
    gradientFrom: "#f59e0b", gradientTo: "#ef4444", glow: "rgba(245,158,11,0.4)",
  },
  {
    title: "GPS Intelligence",
    icon: Crosshair,
    description: "Record precise drone telemetry and detection coordinates, ensuring actionable and accurate location data.",
    status: "Core Protocol",
    statusColor: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.4)", text: "#4ade80" },
    gradientFrom: "#22d3ee", gradientTo: "#3b82f6", glow: "rgba(34,211,238,0.4)",
  },
  {
    title: "AI-Assisted Detection",
    icon: Cpu,
    description: "Future computer-vision models help operators prioritize potential detections in real-time. AI-assisted, not fully autonomous.",
    status: "In Development",
    statusColor: { bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.4)", text: "#c084fc" },
    gradientFrom: "#a855f7", gradientTo: "#6366f1", glow: "rgba(168,85,247,0.4)",
  },
  {
    title: "Live Mission Data",
    icon: Activity,
    description: "Combine drone telemetry, location, camera feeds, mission status, and search coverage into a unified command view.",
    status: "Prototype Stage",
    statusColor: { bg: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.4)", text: "#fb923c" },
    gradientFrom: "#f97316", gradientTo: "#ec4899", glow: "rgba(249,115,22,0.4)",
  },
  {
    title: "Search Mapping",
    icon: Map,
    description: "Display polygon-based search areas and completed zones to visually track mission progress and eliminate coverage gaps.",
    status: "Core Protocol",
    statusColor: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.4)", text: "#4ade80" },
    gradientFrom: "#10b981", gradientTo: "#22d3ee", glow: "rgba(16,185,129,0.4)",
  },
];

export default function Technology() {
  return (
    <div
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0618 0%, #0f0c29 50%, #0a0618 100%)" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-violet-400 border border-violet-400/30 bg-violet-400/10 px-4 py-1.5 rounded-full mb-5">
            System Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Advanced{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg,#818cf8,#c084fc)" }}
            >
              Aerial Capabilities
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            MUNDRONE integrates robotics, sensory data, and software systems to provide comprehensive
            situational awareness during critical missions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring", bounce: 0.25 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Hover inner glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 20%, ${tech.glow} 0%, transparent 60%)` }}
                />

                {/* Icon + Status */}
                <div className="relative flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${tech.gradientFrom}, ${tech.gradientTo})`,
                      boxShadow: `0 0 20px ${tech.glow}`,
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className="text-[10px] font-black tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: tech.statusColor.bg,
                      border: `1px solid ${tech.statusColor.border}`,
                      color: tech.statusColor.text,
                    }}
                  >
                    {tech.status}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-2">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${tech.gradientFrom}, ${tech.gradientTo})` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

