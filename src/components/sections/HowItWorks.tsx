"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  {
    num: "01", titleKey: "how.step1.title", descKey: "how.step1.desc",
    image: "/images/community-meeting.jpg",
    color: "#f43f5e",
  },
  {
    num: "02", titleKey: "how.step2.title", descKey: "how.step2.desc",
    image: "/images/research-lab.jpg",
    color: "#f97316",
  },
  {
    num: "03", titleKey: "how.step3.title", descKey: "how.step3.desc",
    image: "/images/aerial-bd.jpg",
    color: "#fbbf24",
  },
  {
    num: "04", titleKey: "how.step4.title", descKey: "how.step4.desc",
    image: "/images/drone-operator.jpg",
    color: "#38bdf8",
  },
  {
    num: "05", titleKey: "how.step5.title", descKey: "how.step5.desc",
    image: "/images/drone-camera.jpg",
    color: "#818cf8",
  },
  {
    num: "06", titleKey: "how.step6.title", descKey: "how.step6.desc",
    image: "/images/ai-vision.jpg",
    color: "#a855f7",
  },
  {
    num: "07", titleKey: "how.step7.title", descKey: "how.step7.desc",
    image: "/images/field-equipment.jpg",
    color: "#34d399",
  },
  {
    num: "08", titleKey: "how.step8.title", descKey: "how.step8.desc",
    image: "/images/search-team.jpg",
    color: "#22d3ee",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #030812 0%, #060d1e 60%, #030812 100%)" }}
    >
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
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-sky-400 border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("how.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t("how.heading")}
          </h2>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
            style={{
              background: "rgba(251,191,36,0.08)",
              border: "1px solid rgba(251,191,36,0.25)",
              color: "#fbbf24",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {t("how.disclaimer")}
          </div>
        </motion.div>

        {/* Steps — photo cards in 2-col + 4-col layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden group"
              style={{ border: `1px solid ${step.color}25` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Photo */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={step.image}
                  alt={t(step.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)`,
                  }}
                />
                {/* Step number badge */}
                <div
                  className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-sm"
                  style={{
                    background: `${step.color}25`,
                    border: `1.5px solid ${step.color}60`,
                    color: step.color,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* Text */}
              <div
                className="p-4"
                style={{ background: `linear-gradient(160deg, ${step.color}08 0%, rgba(0,0,0,0.7) 100%)` }}
              >
                <h3 className="text-white font-bold text-sm mb-1.5">{t(step.titleKey)}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{t(step.descKey)}</p>
              </div>

              {/* Accent bottom */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.07 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 text-slate-500 text-sm">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            All steps require appropriate authorization, safety protocols, and privacy compliance
          </div>
        </motion.div>
      </div>
    </section>
  );
}
