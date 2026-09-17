"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AlertCircle } from "lucide-react";

export default function HumanImpact() {
  const { t } = useLanguage();

  const groups = [
    {
      titleKey: "impact.children.title",
      introKey: "impact.children.intro",
      items: ["impact.children.item1", "impact.children.item2", "impact.children.item3", "impact.children.item4"],
      color: "#f43f5e",
      glow: "rgba(244,63,94,0.2)",
      border: "rgba(244,63,94,0.25)",
      image: "/images/rural-bd.jpg",
    },
    {
      titleKey: "impact.families.title",
      introKey: "impact.families.intro",
      items: ["impact.families.item1", "impact.families.item2", "impact.families.item3", "impact.families.item4"],
      color: "#f97316",
      glow: "rgba(249,115,22,0.2)",
      border: "rgba(249,115,22,0.25)",
      image: "/images/family-searching.jpg",
    },
    {
      titleKey: "impact.communities.title",
      introKey: "impact.communities.intro",
      items: ["impact.communities.item1", "impact.communities.item2", "impact.communities.item3", "impact.communities.item4"],
      color: "#818cf8",
      glow: "rgba(129,140,248,0.2)",
      border: "rgba(129,140,248,0.25)",
      image: "/images/dhaka-street.jpg",
    },
  ];

  return (
    <section
      id="human-impact"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a0510 0%, #0d0a18 60%, #0a0510 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,140,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.04) 1px, transparent 1px)",
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
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-violet-400 border border-violet-400/30 bg-violet-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("impact.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t("impact.heading")}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">{t("impact.subheading")}</p>
        </motion.div>

        {/* Three group columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${group.border}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={group.image}
                  alt={t(group.titleKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)` }}
                />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-white font-black text-xl">{t(group.titleKey)}</h3>
                </div>
              </div>

              {/* Content */}
              <div
                className="p-6"
                style={{ background: `linear-gradient(160deg, ${group.glow} 0%, rgba(0,0,0,0.5) 100%)` }}
              >
                <p className="text-slate-400 text-sm mb-4 italic">{t(group.introKey)}</p>
                <ul className="space-y-3">
                  {group.items.map((itemKey, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: group.color }}
                      />
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {t(itemKey)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-10 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-start gap-3 p-4 rounded-xl text-left"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="text-slate-500 text-xs leading-relaxed">
              {t("impact.disclaimer")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
