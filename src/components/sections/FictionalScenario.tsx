"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, ChevronDown, CheckCircle2 } from "lucide-react";

const timelineEvents = [
  { time: "14:10", descKey: "scenario.t1", color: "#f43f5e" },
  { time: "14:18", descKey: "scenario.t2", color: "#f97316" },
  { time: "14:30", descKey: "scenario.t3", color: "#fbbf24" },
  { time: "14:45", descKey: "scenario.t4", color: "#38bdf8" },
  { time: "15:00", descKey: "scenario.t5", color: "#818cf8" },
];

const droneCapabilities = [
  "scenario.point1",
  "scenario.point2",
  "scenario.point3",
  "scenario.point4",
  "scenario.point5",
];

export default function FictionalScenario() {
  const { t } = useLanguage();

  return (
    <section
      id="scenario"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0c0a05 0%, #141008 60%, #0c0a05 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FICTION banner */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black tracking-widest uppercase"
            style={{
              background: "rgba(251,191,36,0.1)",
              border: "2px solid rgba(251,191,36,0.4)",
              color: "#fbbf24",
            }}
          >
            ⚠ {t("scenario.badge")}
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t("scenario.heading")}
          </h2>
          <p className="text-slate-500 text-sm italic">{t("scenario.subheading")}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Vertical line */}
          <div
            className="absolute left-[60px] md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(251,191,36,0.3) 15%, rgba(251,191,36,0.3) 85%, transparent)" }}
          />

          <div className="space-y-8">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                className="relative flex items-start gap-6 md:justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {/* Time */}
                <div className="flex-shrink-0 w-14 md:w-24 text-right">
                  <div className="inline-flex items-center gap-1.5 font-mono text-sm font-bold" style={{ color: event.color }}>
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </div>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-[52px] md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 mt-0.5 flex-shrink-0 border-2 border-slate-900"
                  style={{ background: event.color, boxShadow: `0 0 12px ${event.color}60` }}
                />

                {/* Content */}
                <div
                  className="flex-1 md:max-w-sm rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid rgba(255,255,255,0.07)`,
                    marginLeft: "20px",
                  }}
                >
                  <p className="text-slate-300 text-sm leading-relaxed">{t(event.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow to MUNDRONE section */}
        <div className="flex justify-center mb-10">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-amber-400" />
          </motion.div>
        </div>

        {/* Where MUNDRONE Could Help */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(99,102,241,0.06) 100%)",
            border: "1px solid rgba(56,189,248,0.2)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="px-6 py-4 border-b"
            style={{ borderColor: "rgba(56,189,248,0.15)", background: "rgba(56,189,248,0.06)" }}
          >
            <h3 className="text-xl font-bold text-sky-300">{t("scenario.where")}</h3>
          </div>
          <div className="p-6">
            <p className="text-slate-400 mb-6 font-medium">{t("scenario.could")}</p>
            <div className="space-y-3 mb-8">
              {droneCapabilities.map((key, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-white font-bold text-lg">&ldquo;{t("scenario.closing")}&rdquo;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
