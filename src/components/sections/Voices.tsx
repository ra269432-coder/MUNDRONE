"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare } from "lucide-react";

const cards = [
  {
    titleKey: "voices.card1.title",
    quoteKey: "voices.card1.quote",
    image: "/images/community-meeting.jpg",
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.2)",
    border: "rgba(244,63,94,0.3)",
  },
  {
    titleKey: "voices.card2.title",
    quoteKey: "voices.card2.quote",
    image: "/images/search-team.jpg",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.2)",
    border: "rgba(56,189,248,0.3)",
  },
  {
    titleKey: "voices.card3.title",
    quoteKey: "voices.card3.quote",
    image: "/images/research-lab.jpg",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.2)",
    border: "rgba(168,85,247,0.3)",
  },
];

export default function Voices() {
  const { t } = useLanguage();

  return (
    <section
      id="voices"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a0510 0%, #0d0818 60%, #0a0510 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-purple-400 border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("voices.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t("voices.heading")}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">{t("voices.subheading")}</p>
        </motion.div>

        {/* Cards with photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden group"
              style={{ border: `1px solid ${card.border}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Full-bleed photo header */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={card.image}
                  alt={t(card.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)`,
                  }}
                />
                {/* PLACEHOLDER badge */}
                <div
                  className="absolute top-3 right-3 text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded-md"
                  style={{
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}30`,
                    color: card.color,
                  }}
                >
                  PLACEHOLDER
                </div>
                {/* Title at bottom of photo */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-white font-black text-xl drop-shadow-lg">
                    {t(card.titleKey)}
                  </h3>
                </div>
              </div>

              {/* Quote body */}
              <div
                className="p-6"
                style={{ background: `linear-gradient(160deg, ${card.glow} 0%, rgba(0,0,0,0.5) 100%)` }}
              >
                {/* Quote mark */}
                <div className="text-4xl font-black leading-none mb-3" style={{ color: `${card.color}40` }}>
                  &ldquo;
                </div>
                <p className="text-slate-300 text-base leading-relaxed mb-4 italic">
                  {t(card.quoteKey)}
                </p>
                <p className="text-xs text-slate-600">
                  Real voices and interviews will be published as the research progresses.
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className="h-0.5"
                style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base transition-all"
            style={{
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
              boxShadow: "0 0 32px rgba(168,85,247,0.3)",
            }}
          >
            <MessageSquare className="w-5 h-5" />
            {t("voices.cta")}
          </a>
          <p className="text-slate-600 text-sm mt-4 max-w-md mx-auto">
            {t("voices.note")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
