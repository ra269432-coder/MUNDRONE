"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const pillars = [
  {
    titleKey: "research.pillar1.title",
    descKey: "research.pillar1.desc",
    image: "/images/research-lab.jpg",
    color: "#f97316",
    border: "rgba(249,115,22,0.35)",
    tag: "Active",
    tagColor: "#f97316",
  },
  {
    titleKey: "research.pillar2.title",
    descKey: "research.pillar2.desc",
    image: "/images/drone-camera.jpg",
    color: "#38bdf8",
    border: "rgba(56,189,248,0.35)",
    tag: "Planned",
    tagColor: "#38bdf8",
  },
  {
    titleKey: "research.pillar3.title",
    descKey: "research.pillar3.desc",
    image: "/images/ai-vision.jpg",
    color: "#a855f7",
    border: "rgba(168,85,247,0.35)",
    tag: "Planned",
    tagColor: "#a855f7",
  },
  {
    titleKey: "research.pillar4.title",
    descKey: "research.pillar4.desc",
    image: "/images/drone-operator.jpg",
    color: "#34d399",
    border: "rgba(52,211,153,0.35)",
    tag: "Planned",
    tagColor: "#34d399",
  },
  {
    titleKey: "research.pillar5.title",
    descKey: "research.pillar5.desc",
    image: "/images/community-meeting.jpg",
    color: "#818cf8",
    border: "rgba(129,140,248,0.35)",
    tag: "Planned",
    tagColor: "#818cf8",
  },
  {
    titleKey: "research.pillar6.title",
    descKey: "research.pillar6.desc",
    image: "/images/aerial-bd.jpg",
    color: "#22d3ee",
    border: "rgba(34,211,238,0.35)",
    tag: "Future",
    tagColor: "#22d3ee",
  },
];

const timeline = [
  "research.t1",
  "research.t2",
  "research.t3",
  "research.t4",
  "research.t5",
  "research.t6",
  "research.t7",
];

export default function ResearchHub() {
  const { t } = useLanguage();

  return (
    <section
      id="research"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("research.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t("research.heading")}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">{t("research.subheading")}</p>
        </motion.div>

        {/* Research Pillars — photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden group"
              style={{ border: `1px solid ${pillar.border}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Photo header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={t(pillar.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)`,
                  }}
                />
                {/* Tag */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase"
                  style={{
                    background: `${pillar.tagColor}20`,
                    border: `1px solid ${pillar.tagColor}50`,
                    color: pillar.tagColor,
                  }}
                >
                  {pillar.tag}
                </div>
                {/* Title overlaid on photo */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-white font-black text-lg leading-tight drop-shadow-lg">
                    {t(pillar.titleKey)}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div
                className="p-5"
                style={{
                  background: `linear-gradient(160deg, ${pillar.color}08 0%, rgba(0,0,0,0.6) 100%)`,
                }}
              >
                <p className="text-slate-400 text-sm leading-relaxed">{t(pillar.descKey)}</p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, ${pillar.color}, transparent)` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Research Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">{t("research.timeline.title")}</h3>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-6 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.4) 15%, rgba(16,185,129,0.4) 85%, transparent)" }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {timeline.map((key, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                >
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center mb-3 font-mono font-black text-sm z-10"
                    style={{
                      background: idx === 0
                        ? "linear-gradient(135deg, #10b981, #22d3ee)"
                        : "rgba(255,255,255,0.05)",
                      border: idx === 0
                        ? "2px solid rgba(52,211,153,0.6)"
                        : "1px solid rgba(255,255,255,0.1)",
                      color: idx === 0 ? "white" : "#475569",
                      boxShadow: idx === 0 ? "0 0 20px rgba(52,211,153,0.4)" : "none",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: idx === 0 ? "#34d399" : "#475569" }}>
                    {t(key)}
                  </p>
                  {idx === 0 && (
                    <span className="mt-1.5 text-[9px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                      {t("research.current")}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
