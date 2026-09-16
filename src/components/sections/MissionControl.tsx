"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import clsx from "clsx";

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
    <div className="flex bg-slate-900 py-8 min-h-[calc(100vh-4rem)]">
      
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-800 border-r border-slate-700 p-4">
        <div className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-widest pl-3">Main Menu</div>
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              className={clsx(
                "flex items-center w-full px-3 py-2.5 rounded-md text-sm font-medium transition-all",
                item.active 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              ACTIVE MISSION
              <span className="bg-orange-500/10 text-orange-500 text-xs px-2.5 py-1 rounded border border-orange-500/30">MC-2026-001</span>
            </h1>
            <p className="text-slate-400 font-medium text-sm mt-1">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Mission Time</div>
              <div className="font-mono text-2xl font-bold text-white">18:{formatTime(missionTime + 42)}</div>
            </div>
            <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-md text-orange-500 font-bold text-sm animate-pulse flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              SEARCHING
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LIVE MAP (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col relative h-[500px] shadow-lg">
            <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-sm border border-slate-700 px-3 py-1.5 rounded-md text-xs font-mono font-semibold text-slate-200 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-500" /> LIVE TRACKING (DEMO)
            </div>
            <div className="relative w-full h-full bg-slate-900">
              <Image 
                src="/images/map-bg.jpg" 
                alt="Map Background" 
                fill 
                className="object-cover opacity-50 mix-blend-screen grayscale"
              />
              
              {/* Map Overlays */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Search Area Polygon Mock */}
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="20,20 80,30 90,80 30,70" fill="rgba(37, 99, 235, 0.05)" stroke="rgba(37, 99, 235, 0.5)" strokeWidth="0.5" strokeDasharray="1,1" />
                  <polygon points="20,20 60,25 50,60 30,70" fill="rgba(37, 99, 235, 0.15)" stroke="rgba(37, 99, 235, 0.8)" strokeWidth="0.5" />
                </svg>

                {/* Drone Location Ping */}
                <motion.div 
                  className="absolute top-[40%] left-[55%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Potential Detection Marker */}
                <motion.div 
                  className="absolute top-[65%] left-[45%] flex flex-col items-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="px-2 py-0.5 bg-orange-500/20 border border-orange-500/50 text-orange-400 font-bold text-[10px] font-mono rounded mb-1 backdrop-blur-sm">
                    DETECTION #03
                  </div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* DRONE STATUS */}
            <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow-lg">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Radio className="w-4 h-4 text-blue-500" /> DRONE M-01
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg">
                  <div className="text-xs font-medium text-slate-400 mb-1">Altitude</div>
                  <div className="font-mono text-lg font-bold text-white">82 m</div>
                </div>
                <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg">
                  <div className="text-xs font-medium text-slate-400 mb-1">Speed</div>
                  <div className="font-mono text-lg font-bold text-white">7.4 m/s</div>
                </div>
                <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-400 mb-1">Battery</div>
                    <div className="font-mono text-lg font-bold text-white">78%</div>
                  </div>
                  <Battery className="w-5 h-5 text-green-500" />
                </div>
                <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-400 mb-1">Signal</div>
                    <div className="font-mono text-lg font-bold text-white">Strong</div>
                  </div>
                  <Wifi className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>

            {/* SEARCH COVERAGE */}
            <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow-lg">
              <h3 className="text-sm font-semibold text-white mb-4">SEARCH COVERAGE</h3>
              <div className="flex items-end justify-between mb-2">
                <div className="text-3xl font-bold font-mono text-white">64%</div>
                <div className="text-xs font-medium text-slate-400 uppercase mb-1">Area: 2.4 km²</div>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
                <motion.div 
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: "64%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between text-xs font-medium text-slate-400 mt-2">
                <span>Searched</span>
                <span>36% Remaining</span>
              </div>
            </div>

            {/* DETECTION PANEL */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col flex-1 shadow-lg">
              <div className="bg-orange-500/10 border-b border-orange-500/20 p-4">
                <h3 className="text-sm font-semibold text-orange-500 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> POTENTIAL DETECTION #03
                </h3>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Confidence</div>
                  <div className="font-mono font-bold text-xl text-orange-500">87%</div>
                </div>
                <div className="space-y-3 text-sm text-slate-300 font-medium mb-6">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Location</span>
                    <span className="font-mono text-white">23.8103° N, 90.4125° E</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Time Detected</span>
                    <span className="font-mono text-white">14:32:18</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Status</span>
                    <span className="text-orange-400 text-xs font-bold px-2 py-0.5 bg-orange-500/10 rounded border border-orange-500/20">AWAITING VERIFICATION</span>
                  </div>
                </div>
                
                <div className="mt-auto space-y-3">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-md transition-colors shadow-sm">
                    Review Detection
                  </button>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-slate-900 hover:bg-slate-700 border border-slate-600 text-slate-300 font-medium py-2 rounded-md transition-colors text-xs flex items-center justify-center gap-1">
                      <XCircle className="w-4 h-4" /> False Positive
                    </button>
                    <button className="flex-1 bg-slate-900 hover:bg-slate-700 border border-slate-600 text-slate-300 font-medium py-2 rounded-md transition-colors text-xs flex items-center justify-center gap-1">
                      <AlertCircle className="w-4 h-4" /> Escalate
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
