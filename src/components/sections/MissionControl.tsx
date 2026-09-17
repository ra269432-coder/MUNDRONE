"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Map,
  Target,
  Radio,
  Video,
  Battery,
  Wifi,
  Navigation,
  AlertTriangle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Active Missions", icon: Target },
  { name: "Cases", icon: Navigation },
  { name: "Drones", icon: Radio },
  { name: "Search Areas", icon: Map },
  { name: "Detection Review", icon: Video },
];

export default function MissionControl() {
  const [missionTime, setMissionTime] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setMissionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="bg-slate-950 py-0 min-h-screen">
      {/* SIMULATION BANNER */}
      <div
        className="w-full px-4 py-4 flex items-center justify-center gap-4 text-center"
        style={{
          background: "linear-gradient(90deg, rgba(239,68,68,0.12) 0%, rgba(249,115,22,0.12) 50%, rgba(239,68,68,0.12) 100%)",
          borderBottom: "2px solid rgba(239,68,68,0.5)",
        }}
      >
        <motion.div
          className="flex items-center gap-3"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle className="w-5 h-5 text-red-400" />
          <span className="text-red-300 font-black tracking-widest uppercase text-sm">
            {t("mc.simulationBanner")}
          </span>
          <AlertTriangle className="w-5 h-5 text-red-400" />
        </motion.div>
        <span className="hidden md:block text-red-400/60 text-xs font-medium">
          {t("mc.simulationNote")}
        </span>
      </div>

      <div className="flex" style={{ minHeight: "calc(100vh - 56px)" }}>
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800 p-4">
          {/* Mission header */}
          <div className="mb-6 pb-4 border-b border-slate-800">
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">{t("mc.title")}</div>
            <div className="text-slate-500 text-xs">{t("mc.mission")}: DEMO-MC-001</div>
          </div>

          <div className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-widest pl-2">Main Menu</div>
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                className={clsx(
                  "flex items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                  item.active
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Dashboard */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-slate-950">
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-3 flex-wrap">
                {t("mc.title")}
                <span className="bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded border border-amber-500/30">
                  DEMO-MC-001
                </span>
                <span className="bg-red-500/10 text-red-400 text-xs px-2.5 py-1 rounded border border-red-500/30">
                  {t("mc.statusValue")}
                </span>
              </h1>
              <p className="text-slate-500 font-medium text-sm mt-1">Dhaka, Bangladesh · {t("mc.status")}: {t("mc.statusValue")}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Mission Time</div>
                <div className="font-mono text-xl font-bold text-white">18:{formatTime(missionTime + 42)}</div>
              </div>
              <div
                className="px-3 py-2 rounded-lg text-orange-400 font-bold text-xs flex items-center gap-2"
                style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)" }}
              >
                <motion.div className="w-2 h-2 rounded-full bg-orange-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                SEARCHING
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* MAP */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col relative h-[440px] shadow-lg">
              <div className="absolute top-3 left-3 z-10 bg-slate-950/90 backdrop-blur-sm border border-slate-700 px-3 py-1.5 rounded-md text-xs font-mono font-semibold text-slate-300 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                LIVE TRACKING (DEMO SIMULATION)
              </div>
              <div className="relative w-full h-full bg-slate-950">
                <Image
                  src="/images/map-bg.jpg"
                  alt="Map Background"
                  fill
                  className="object-cover opacity-40 mix-blend-screen grayscale"
                />

                {/* Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Search boundary */}
                    <polygon
                      points="20,20 80,30 90,80 30,70"
                      fill="rgba(52,211,153,0.05)"
                      stroke="rgba(52,211,153,0.4)"
                      strokeWidth="0.4"
                      strokeDasharray="2,1"
                    />
                    {/* Searched area */}
                    <polygon
                      points="20,20 60,25 50,60 30,70"
                      fill="rgba(52,211,153,0.12)"
                      stroke="rgba(52,211,153,0.7)"
                      strokeWidth="0.4"
                    />
                  </svg>

                  {/* Drone */}
                  <motion.div
                    className="absolute top-[38%] left-[54%] w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-[36%] left-[52%] w-7 h-7 rounded-full border border-emerald-400/30"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Detection marker */}
                  <motion.div
                    className="absolute top-[63%] left-[43%] flex flex-col items-center"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="px-2 py-0.5 bg-orange-500/20 border border-orange-500/50 text-orange-400 font-bold text-[9px] font-mono rounded mb-1 backdrop-blur-sm">
                      DETECTION #03
                    </div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* DRONE STATUS */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-lg">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400" /> DRONE M-01
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Altitude", val: "84 m" },
                    { label: "Speed", val: "7.2 m/s" },
                    { label: "Battery", val: "78%", icon: <Battery className="w-4 h-4 text-emerald-400" /> },
                    { label: "Signal", val: "Strong", icon: <Wifi className="w-4 h-4 text-emerald-400" /> },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-medium text-slate-500 mb-1">{stat.label}</div>
                        <div className="font-mono text-base font-bold text-white">{stat.val}</div>
                      </div>
                      {stat.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* SEARCH COVERAGE */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-lg">
                <h3 className="text-sm font-bold text-white mb-3">SEARCH COVERAGE</h3>
                <div className="flex items-end justify-between mb-2">
                  <div className="text-3xl font-bold font-mono text-white">64%</div>
                  <div className="text-xs text-slate-500 mb-1">Area: 2.4 km²</div>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #10b981, #22d3ee)" }}
                    initial={{ width: 0 }}
                    animate={{ width: "64%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1.5">
                  <span>Searched</span><span>36% Remaining</span>
                </div>
              </div>

              {/* DETECTION PANEL */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col flex-1 shadow-lg">
                <div className="bg-orange-500/10 border-b border-orange-500/20 p-4">
                  <h3 className="text-sm font-bold text-orange-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> POTENTIAL DETECTION #03
                  </h3>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Confidence Score</div>
                    <div className="font-mono font-bold text-xl text-orange-400">87%</div>
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-400 mb-5">
                    {[
                      { label: "Location", val: "23.8103° N, 90.4125° E" },
                      { label: "Detected", val: "14:32:18" },
                      { label: "Status", val: t("mc.detectionAwait"), highlight: true },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-800 pb-2">
                        <span>{row.label}</span>
                        <span className={row.highlight ? "text-orange-400 font-bold" : "font-mono text-white"}>
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-2">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
                      Review Detection
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-400 font-medium py-2 rounded-lg transition-colors text-xs flex items-center justify-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> False Positive
                      </button>
                      <button className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-400 font-medium py-2 rounded-lg transition-colors text-xs flex items-center justify-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Escalate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
