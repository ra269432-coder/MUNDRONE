"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const beneficiaries = [
  {
    titleKey: "bene.children.title",
    descKey: "bene.children.desc",
    image: "/images/rural-bd.jpg",
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.3)",
    span: "lg:col-span-2",
  },
  {
    titleKey: "bene.families.title",
    descKey: "bene.families.desc",
    image: "/images/family-searching.jpg",
    color: "#f97316",
    glow: "rgba(249,115,22,0.3)",
    span: "lg:col-span-1",
  },
  {
    titleKey: "bene.police.title",
    descKey: "bene.police.desc",
    image: "/images/search-team.jpg",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.3)",
    span: "lg:col-span-1",
  },
  {
    titleKey: "bene.ngo.title",
    descKey: "bene.ngo.desc",
    image: "/images/dhaka-street.jpg",
    color: "#34d399",
    glow: "rgba(52,211,153,0.3)",
    span: "lg:col-span-1",
  },
  {
    titleKey: "bene.sar.title",
    descKey: "bene.sar.desc",
    image: "/images/aerial-bd.jpg",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.3)",
    span: "lg:col-span-1",
  },
  {
    titleKey: "bene.research.title",
    descKey: "bene.research.desc",
    image: "/images/drone-camera.jpg",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.3)",
    span: "lg:col-span-2",
  },
];

export default function Beneficiaries() {
  const { t } = useLanguage();

  return (
    <section
      id="beneficiaries"
      className="relative py-24 overflow-hidden bg-black"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-rose-400 border border-rose-400/30 bg-rose-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("bene.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {t("bene.heading")}
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {beneficiaries.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group ${item.span} h-64 md:h-72`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              style={{ border: `1px solid ${item.color}25` }}
            >
              <Image
                src={item.image}
                alt={t(item.titleKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)`,
                }}
              />

              {/* Top color accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3
                  className="text-xl font-black text-white mb-1"
                  style={{ textShadow: `0 0 20px ${item.color}60` }}
                >
                  {t(item.titleKey)}
                </motion.h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
