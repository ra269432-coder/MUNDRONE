"use client";

import Hero from "@/components/sections/Hero";
import ProblemData from "@/components/sections/ProblemData";
import WhyItMatters from "@/components/sections/WhyItMatters";
import HumanImpact from "@/components/sections/HumanImpact";
import BangladeshMap from "@/components/sections/BangladeshMap";
import FictionalScenario from "@/components/sections/FictionalScenario";
import Technology from "@/components/sections/Technology";
import AISection from "@/components/sections/AISection";
import MissionControl from "@/components/sections/MissionControl";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialImpact from "@/components/sections/SocialImpact";
import Beneficiaries from "@/components/sections/Beneficiaries";
import Voices from "@/components/sections/Voices";
import ResearchHub from "@/components/sections/ResearchHub";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import PrivacySafety from "@/components/sections/Privacy";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Solution workflow section
function SolutionWorkflow() {
  const { t } = useLanguage();
  const steps = [
    { key: "solution.step1", color: "#f43f5e" },
    { key: "solution.step2", color: "#f97316" },
    { key: "solution.step3", color: "#fbbf24" },
    { key: "solution.step4", color: "#38bdf8" },
    { key: "solution.step5", color: "#a855f7" },
    { key: "solution.step6", color: "#34d399" },
    { key: "solution.step7", color: "#22d3ee" },
  ];

  return (
    <section
      id="solution"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #040c1a 0%, #060e1f 60%, #040c1a 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(56,189,248,0.15) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-sky-400 border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("solution.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {t("solution.heading")}
          </h2>
        </motion.div>

        {/* Vertical flow on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center">
              <motion.div
                className="relative rounded-xl px-5 py-4 text-center min-w-[120px]"
                style={{
                  background: `${step.color}12`,
                  border: `1px solid ${step.color}35`,
                  boxShadow: `0 0 20px ${step.color}15`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xs font-black mb-1" style={{ color: step.color }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-white font-bold text-xs leading-tight">{t(step.key)}</div>
              </motion.div>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="flex items-center justify-center my-2 md:my-0 md:mx-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 + 0.05 }}
                >
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="hidden md:block w-6 h-px bg-gradient-to-r from-slate-600 to-slate-500" />
                    <div
                      className="hidden md:block w-0 h-0"
                      style={{
                        borderTop: "4px solid transparent",
                        borderBottom: "4px solid transparent",
                        borderLeft: "6px solid rgba(148,163,184,0.6)",
                      }}
                    />
                    <div className="md:hidden w-px h-4 bg-gradient-to-b from-slate-600 to-slate-500" />
                    <div
                      className="md:hidden w-0 h-0"
                      style={{
                        borderLeft: "4px solid transparent",
                        borderRight: "4px solid transparent",
                        borderTop: "6px solid rgba(148,163,184,0.6)",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-950">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Problem Data */}
      <ProblemData />

      {/* 3. Why It Matters */}
      <WhyItMatters />

      {/* 4. Human Impact */}
      <HumanImpact />

      {/* 5. Bangladesh Map */}
      <BangladeshMap />

      {/* 6. Fictional Scenario */}
      <FictionalScenario />

      {/* 7. Solution Workflow */}
      <SolutionWorkflow />

      {/* 8. Technology */}
      <section id="technology"><Technology /></section>

      {/* 9. AI Section */}
      <AISection />

      {/* 10. Mission Control */}
      <section id="mission-control"><MissionControl /></section>

      {/* 11. How It Works */}
      <HowItWorks />

      {/* 12. Social Impact */}
      <SocialImpact />

      {/* 13. Beneficiaries */}
      <Beneficiaries />

      {/* 14. Voices */}
      <Voices />

      {/* 15. Research Hub */}
      <ResearchHub />

      {/* 16. About / Roadmap */}
      <section id="about"><About /></section>

      {/* 17. Contact / Collaboration */}
      <section id="contact"><Contact /></section>

      {/* 18. Privacy */}
      <section id="privacy-safety"><PrivacySafety /></section>
    </div>
  );
}
