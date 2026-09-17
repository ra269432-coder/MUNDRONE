"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldAlert, CheckCircle2, XCircle } from "lucide-react";

const capabilities = [
  "ai.capability1",
  "ai.capability2",
  "ai.capability3",
  "ai.capability4",
  "ai.capability5",
];

const neverSay = ["ai.never1", "ai.never2", "ai.never3"];
const alwaysSay = ["ai.always1", "ai.always2"];

export default function AISection() {
  const { t } = useLanguage();

  return (
    <section
      id="ai"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #08050f 0%, #0d0818 60%, #08050f 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
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
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-purple-400 border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("ai.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {t("ai.heading")}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">{t("ai.subheading")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Photo card with capabilities overlaid */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(168,85,247,0.3)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Photo */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/ai-vision.jpg"
                alt="AI Computer Vision Research"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(13,8,24,0.95) 100%)",
                }}
              />
              {/* Research stage label */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-black tracking-widest uppercase"
                style={{
                  background: "rgba(168,85,247,0.2)",
                  border: "1px solid rgba(168,85,247,0.5)",
                  color: "#c084fc",
                  backdropFilter: "blur(8px)",
                }}
              >
                Research Stage · Not Yet Developed
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <h3 className="text-white font-bold text-lg">Future AI Capabilities Under Research</h3>
              </div>
            </div>

            {/* Capabilities list below photo */}
            <div className="p-6" style={{ background: "rgba(168,85,247,0.05)" }}>
              <div className="space-y-3">
                {capabilities.map((key, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{t(key)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: human verification photo + Never/Always */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Human verification — photo card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(52,211,153,0.35)" }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/images/research-lab.jpg"
                  alt="Human verification by trained operators"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-start gap-3">
                  <ShieldAlert className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-emerald-300 font-bold text-lg">{t("ai.humanTitle")}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mt-1">{t("ai.humanNote")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Never say */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(244,63,94,0.06)",
                border: "1px solid rgba(244,63,94,0.2)",
              }}
            >
              <div className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-4">{t("ai.neverSay")}</div>
              <div className="space-y-2">
                {neverSay.map((key, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span className="text-rose-300/80 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Always say */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(52,211,153,0.06)",
                border: "1px solid rgba(52,211,153,0.2)",
              }}
            >
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">{t("ai.alwaysSay")}</div>
              <div className="space-y-2">
                {alwaysSay.map((key, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-emerald-300/80 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
