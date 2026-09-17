"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Division positions on a simplified Bangladesh SVG (approximate percentages)
const divisions = [
  { name: "Dhaka", bn: "ঢাকা", x: 55, y: 42, type: "urban", description: "High-density urban, transport hubs, markets" },
  { name: "Chattogram", bn: "চট্টগ্রাম", x: 76, y: 60, type: "coastal", description: "Port city, coastal, hilly terrain" },
  { name: "Sylhet", bn: "সিলেট", x: 80, y: 28, type: "highland", description: "Tea estates, highland, forest terrain" },
  { name: "Rajshahi", bn: "রাজশাহী", x: 28, y: 30, type: "rural", description: "Agricultural flatlands, river banks" },
  { name: "Khulna", bn: "খুলনা", x: 28, y: 68, type: "coastal", description: "Sundarbans delta, mangrove, coastal" },
  { name: "Barishal", bn: "বরিশাল", x: 50, y: 68, type: "riverine", description: "River delta, waterways, chars" },
  { name: "Rangpur", bn: "রংপুর", x: 32, y: 16, type: "rural", description: "North plains, river erosion zones" },
  { name: "Mymensingh", bn: "ময়মনসিংহ", x: 57, y: 25, type: "riverine", description: "Haor wetlands, rivers, agricultural" },
];

const typeColors: Record<string, { bg: string; text: string; dot: string }> = {
  urban:   { bg: "rgba(249,115,22,0.2)",  text: "#fb923c", dot: "#f97316" },
  coastal: { bg: "rgba(56,189,248,0.2)",  text: "#38bdf8", dot: "#0ea5e9" },
  highland:{ bg: "rgba(168,85,247,0.2)",  text: "#c084fc", dot: "#a855f7" },
  rural:   { bg: "rgba(52,211,153,0.2)",  text: "#6ee7b7", dot: "#34d399" },
  riverine:{ bg: "rgba(99,102,241,0.2)",  text: "#a5b4fc", dot: "#818cf8" },
};

export default function BangladeshMap() {
  const { t } = useLanguage();

  return (
    <section
      id="map"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #030e1a 0%, #051525 60%, #030e1a 100%)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-sky-400 border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("map.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t("map.heading")}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">{t("map.subheading")}</p>
        </motion.div>

        {/* Simulation label */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.3)",
              color: "#fb923c",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            {t("map.label")}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Map */}
          <div className="lg:col-span-2">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(3,14,26,0.9) 0%, rgba(5,21,37,0.95) 100%)",
                border: "1px solid rgba(56,189,248,0.2)",
                boxShadow: "0 0 60px rgba(56,189,248,0.05)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* SVG Map of Bangladesh */}
              <div className="relative" style={{ paddingBottom: "95%" }}>
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full p-6"
                  style={{ filter: "drop-shadow(0 0 20px rgba(56,189,248,0.1))" }}
                >
                  {/* Simplified Bangladesh silhouette */}
                  <path
                    d="M 25 10 
                       L 45 8 L 62 12 L 78 16 L 88 22 L 86 32 
                       L 84 36 L 90 42 L 88 52 
                       L 82 58 L 84 65 L 78 74 
                       L 68 80 L 60 88 L 52 92 
                       L 42 88 L 34 82 L 26 76 
                       L 16 72 L 14 62 L 18 52 
                       L 12 44 L 14 34 L 20 24 Z"
                    fill="rgba(56,189,248,0.08)"
                    stroke="rgba(56,189,248,0.4)"
                    strokeWidth="0.8"
                  />

                  {/* Rivers - simplified */}
                  <path d="M 55 42 Q 52 55 50 70 Q 48 80 46 88" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8" />
                  <path d="M 50 30 Q 48 38 50 50 Q 52 60 48 68" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="0.6" />
                  <path d="M 30 30 Q 35 40 38 50 Q 40 60 36 70" fill="none" stroke="rgba(56,189,248,0.35)" strokeWidth="0.5" />
                  <path d="M 65 32 Q 68 42 70 55 Q 72 65 68 74" fill="none" stroke="rgba(56,189,248,0.35)" strokeWidth="0.5" />

                  {/* Bay of Bengal label */}
                  <text x="48" y="97" textAnchor="middle" fontSize="3" fill="rgba(56,189,248,0.5)" fontFamily="monospace">BAY OF BENGAL</text>

                  {/* Division markers */}
                  {divisions.map((div, i) => {
                    const typeStyle = typeColors[div.type];
                    return (
                      <g key={i}>
                        {/* Pulse ring */}
                        <circle
                          cx={div.x}
                          cy={div.y}
                          r="3.5"
                          fill="none"
                          stroke={typeStyle.dot}
                          strokeWidth="0.5"
                          opacity="0.4"
                        />
                        {/* Dot */}
                        <circle
                          cx={div.x}
                          cy={div.y}
                          r="1.5"
                          fill={typeStyle.dot}
                          opacity="0.9"
                        />
                        {/* Label */}
                        <text
                          x={div.x}
                          y={div.y - 4}
                          textAnchor="middle"
                          fontSize="2.5"
                          fill="white"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          {div.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Bottom info bar */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-3 flex justify-between items-center"
                style={{ background: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(56,189,248,0.15)" }}
              >
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">BANGLADESH · 8 ADMINISTRATIVE DIVISIONS</span>
                <span className="font-mono text-[10px] text-emerald-400">CONCEPTUAL</span>
              </div>
            </motion.div>
          </div>

          {/* Legend + division list */}
          <div className="space-y-5">
            {/* Environment types legend */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t("map.environments")}</div>
              <div className="space-y-2.5">
                {Object.entries(typeColors).map(([type, colors]) => (
                  <div key={type} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: colors.dot }} />
                    <span className="text-sm" style={{ color: colors.text }}>
                      {type === "urban" ? t("map.urban") :
                       type === "coastal" ? t("map.coastal") :
                       type === "rural" ? t("map.rural") :
                       type === "riverine" ? t("map.riverine") :
                       "Highland / Forest"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divisions list */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">DIVISIONS</div>
              <div className="space-y-3">
                {divisions.map((div, i) => {
                  const typeStyle = typeColors[div.type];
                  return (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: typeStyle.dot }} />
                      <div>
                        <div className="text-white text-sm font-semibold">
                          {div.name} <span className="text-slate-500 text-xs ml-1">· {div.bn}</span>
                        </div>
                        <div className="text-slate-600 text-xs">{div.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
