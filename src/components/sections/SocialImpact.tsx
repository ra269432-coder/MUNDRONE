"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AlertCircle } from "lucide-react";

const impacts = [
  {
    titleKey: "social.item1.title",
    descKey: "social.item1.desc",
    image: "/images/aerial-bd.jpg",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.3)",
  },
  {
    titleKey: "social.item2.title",
    descKey: "social.item2.desc",
    image: "/images/search-team.jpg",
    color: "#34d399",
    glow: "rgba(52,211,153,0.3)",
  },
  {
    titleKey: "social.item3.title",
    descKey: "social.item3.desc",
    image: "/images/rural-bd.jpg",
    color: "#f97316",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    titleKey: "social.item4.title",
    descKey: "social.item4.desc",
    image: "/images/drone-camera.jpg",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.3)",
  },
  {
    titleKey: "social.item5.title",
    descKey: "social.item5.desc",
    image: "/images/hero-bd.jpg",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.3)",
  },
];

export default function SocialImpact() {
  const { t } = useLanguage();

  return (
    <section
      id="social-impact"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #040c18 0%, #070e1e 60%, #040c18 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
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
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("social.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t("social.heading")}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">{t("social.subheading")}</p>
        </motion.div>

        {/* 5 Impact cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden group"
              style={{ border: `1px solid ${item.color}25` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={t(item.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, ${item.color}10 0%, rgba(0,0,0,0.7) 100%)` }}
                />
                {/* Potential label */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase" style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, color: item.color }}>
                  POTENTIAL
                </div>
              </div>

              {/* Text */}
              <div
                className="p-5"
                style={{ background: `linear-gradient(160deg, ${item.color}08 0%, rgba(0,0,0,0.6) 100%)` }}
              >
                <h3 className="text-white font-bold text-base mb-2">{t(item.titleKey)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-start gap-3 p-4 rounded-xl max-w-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="text-slate-500 text-xs leading-relaxed">
              All items marked "POTENTIAL" are research-stage possibilities. No outcomes are guaranteed. Operational use requires proper authorization, testing, safety review, and institutional approval.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
