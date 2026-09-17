"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
      className="inline-block"
    >
      {value}{suffix}
    </motion.span>
  );
}

function SourceModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-w-2xl w-full rounded-2xl p-8 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
          border: "1px solid rgba(52,211,153,0.3)",
          boxShadow: "0 0 60px rgba(52,211,153,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 rounded-full mb-4">
            Data Sources & Methodology
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">About This Data</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t("problem.sourceNote")}
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              org: "Bangladesh Police Headquarters",
              detail: "Official missing-person (GD) report statistics",
              period: "January–July 2026",
              note: "Figures include all police-verified missing-child cases filed nationwide. Rescued/returned figures represent confirmed traced cases.",
            },
          ].map((src, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm mb-1">{src.org}</div>
                  <div className="text-slate-400 text-xs mb-2">{src.detail} · {src.period}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{src.note}</div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="rounded-xl p-4 mt-4"
            style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)" }}
          >
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-amber-300/80 text-xs leading-relaxed">
                {t("problem.caveat")} These figures represent GD (General Diary) entries and may not capture all cases. The data does not allow extrapolation to annual estimates.
              </p>
            </div>
          </div>

          <a
            href="#sources"
            onClick={onClose}
            className="flex items-center gap-2 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
          >
            View full Sources & Research page <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProblemData() {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  const stats = [
    {
      number: t("problem.stat1.number"),
      label: t("problem.stat1.label"),
      color: "#f97316",
      glow: "rgba(249,115,22,0.3)",
      border: "rgba(249,115,22,0.3)",
    },
    {
      number: t("problem.stat2.number"),
      label: t("problem.stat2.label"),
      color: "#34d399",
      glow: "rgba(52,211,153,0.3)",
      border: "rgba(52,211,153,0.3)",
    },
    {
      number: t("problem.stat3.number"),
      label: t("problem.stat3.label"),
      color: "#f43f5e",
      glow: "rgba(244,63,94,0.3)",
      border: "rgba(244,63,94,0.3)",
    },
    {
      number: t("problem.stat4.number"),
      label: t("problem.stat4.label"),
      color: "#fb923c",
      glow: "rgba(251,146,60,0.3)",
      border: "rgba(251,146,60,0.3)",
    },
  ];

  // Age breakdown data
  const ageGroups = [
    {
      label: t("problem.age09"),
      reported: 474,
      rescued: 406,
      untraced: 68,
      total: 474,
    },
    {
      label: t("problem.age1017"),
      reported: 15243,
      rescued: 13273,
      untraced: 1970,
      total: 15243,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {showModal && <SourceModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>

      <section
        id="problem"
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #060a0f 0%, #0a1020 60%, #06080d 100%)" }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top, rgba(249,115,22,0.12) 0%, transparent 70%)",
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
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-orange-400 border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 rounded-full mb-5">
              {t("problem.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              {t("problem.heading")}
            </h2>
            <p className="text-slate-400 text-lg mb-4">{t("problem.subheading")}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-slate-500 border border-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              {t("problem.period")}
            </div>
          </motion.div>

          {/* Flow Visualization */}
          <div className="flex flex-col items-center mb-20">
            <motion.div
              className="w-full max-w-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* 15,717 */}
              <motion.div
                className="relative rounded-2xl p-8 text-center mb-2"
                style={{
                  background: "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(239,68,68,0.08) 100%)",
                  border: "1px solid rgba(249,115,22,0.35)",
                  boxShadow: "0 0 40px rgba(249,115,22,0.12)",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-3">
                  TOTAL REPORTED · {t("problem.period")}
                </div>
                <div className="text-7xl md:text-9xl font-black text-white mb-2" style={{ lineHeight: 1 }}>
                  <AnimatedNumber value="15,717" />
                </div>
                <div className="text-lg text-orange-300 font-semibold">{t("problem.stat1.label")}</div>
              </motion.div>

              {/* Arrow down */}
              <div className="flex justify-center my-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-500/60 to-transparent" />
                  <div className="w-0 h-0" style={{ borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "10px solid rgba(249,115,22,0.6)" }} />
                </div>
              </div>

              {/* Two columns: rescued + untraced */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Rescued */}
                <motion.div
                  className="relative rounded-2xl p-7 text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(52,211,153,0.12) 0%, rgba(16,185,129,0.08) 100%)",
                    border: "1px solid rgba(52,211,153,0.35)",
                    boxShadow: "0 0 40px rgba(52,211,153,0.1)",
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-2">RESCUED / RETURNED</div>
                  <div className="text-6xl md:text-7xl font-black text-emerald-300 mb-2">
                    <AnimatedNumber value="13,679" />
                  </div>
                  <div className="text-emerald-400 text-sm font-medium">{t("problem.stat2.label")}</div>
                  <div className="mt-4 w-full bg-slate-800 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-emerald-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">87% of reported cases</div>
                </motion.div>

                {/* Untraced */}
                <motion.div
                  className="relative rounded-2xl p-7 text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(244,63,94,0.12) 0%, rgba(239,68,68,0.08) 100%)",
                    border: "1px solid rgba(244,63,94,0.35)",
                    boxShadow: "0 0 40px rgba(244,63,94,0.1)",
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-xs font-bold tracking-widest uppercase text-rose-400 mb-2">STILL UNTRACED</div>
                  <div className="text-6xl md:text-7xl font-black text-rose-300 mb-2">
                    <AnimatedNumber value="2,038" />
                  </div>
                  <div className="text-rose-400 text-sm font-medium">{t("problem.stat3.label")}</div>
                  <div className="mt-4 w-full bg-slate-800 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-rose-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: "13%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">~13% of reported cases</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Age Breakdown */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-10">
              {t("problem.ageBreakdown")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ageGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-white font-bold text-lg mb-5">{group.label}</div>
                  <div className="space-y-4">
                    {[
                      { label: t("problem.reported"), value: group.reported, color: "#f97316", pct: 100 },
                      { label: t("problem.rescued"), value: group.rescued, color: "#34d399", pct: Math.round((group.rescued / group.reported) * 100) },
                      { label: t("problem.untraced"), value: group.untraced, color: "#f43f5e", pct: Math.round((group.untraced / group.reported) * 100) },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400 font-medium">{item.label}</span>
                          <span className="text-white font-bold font-mono">
                            {item.value.toLocaleString()} <span className="text-slate-500 font-normal text-xs">({item.pct}%)</span>
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2.5">
                          <motion.div
                            className="h-2.5 rounded-full"
                            style={{ background: item.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 + i * 0.15 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MUNDRONE Question */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(56,189,248,0.08) 0%, rgba(99,102,241,0.05) 100%)",
                border: "1px solid rgba(56,189,248,0.2)",
              }}
            >
              <p className="text-xl md:text-2xl font-bold text-slate-200 leading-relaxed italic">
                &ldquo;{t("problem.question")}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Source button */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-slate-500 text-sm">{t("problem.source")}</p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-emerald-400 border border-emerald-400/30 hover:bg-emerald-400/10 transition-colors"
            >
              <Info className="w-4 h-4" />
              {t("problem.sourceBtn")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
