"use client";

import { motion } from "framer-motion";
import { Send, Crosshair, Mail, MapPin, Users, Rocket } from "lucide-react";

const contactMeta = [
  {
    icon: Mail,
    label: "Inquiries",
    value: "contact@mundrone-concept.org",
    from: "#38bdf8", to: "#818cf8", glow: "rgba(56,189,248,0.35)",
  },
  {
    icon: MapPin,
    label: "Global Operations",
    value: "Dhaka, Bangladesh",
    from: "#34d399", to: "#22d3ee", glow: "rgba(52,211,153,0.35)",
  },
];

const partnerTypes = [
  { icon: Users,  label: "Research Partners" },
  { icon: Rocket, label: "Tech Collaborators" },
];

export default function Contact() {
  return (
    <div
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #050818 0%, #080c20 60%, #050818 100%)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-indigo-400 border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 rounded-full mb-5">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Help Build the{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg,#818cf8,#38bdf8)" }}
            >
              Future of Search &amp; Rescue
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            MUNDRONE is seeking strategic partnerships with technology developers, researchers,
            and humanitarian organizations to advance this concept.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">

          {/* Left col: branding + contact info */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Logo block */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg,#6366f1,#38bdf8)", boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
                >
                  <Crosshair className="w-6 h-6 text-white" />
                </div>
                <span
                  className="font-black text-2xl tracking-[0.2em] text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg,#818cf8,#38bdf8)" }}
                >
                  MUNDRONE
                </span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Technology for Faster Missing-Child Recovery</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                A drone-assisted search platform designed to help rescue teams locate missing children faster.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactMeta.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", bounce: 0.3 }}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                        boxShadow: `0 0 16px ${item.glow}`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: item.from }}>
                        {item.label}
                      </div>
                      <div className="text-white font-medium text-sm">{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Concept note */}
            <motion.div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Early-Stage Concept</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We are currently in the conceptual and prototype phase. We do not yet offer active search services.
              </p>
            </motion.div>
          </motion.div>

          {/* Right col: Form */}
          <motion.div
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(56,189,248,0.04) 100%)",
              border: "1px solid rgba(99,102,241,0.25)",
              boxShadow: "0 0 40px rgba(99,102,241,0.08)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "linear-gradient(90deg, transparent, #818cf8, #38bdf8, transparent)" }}
            />

            <h3 className="text-white font-bold text-xl mb-6">Start a Conversation</h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text" id="contact-name"
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-org" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Organization</label>
                  <input
                    type="text" id="contact-org"
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                    placeholder="Organization Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email" id="contact-email"
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel" id="contact-phone"
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-interest" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Area of Interest</label>
                <select
                  id="contact-interest"
                  className="w-full rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all appearance-none cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <option value="" className="bg-slate-900">Select an area of interest...</option>
                  <option value="tech-partner" className="bg-slate-900">Technology Partnership</option>
                  <option value="research" className="bg-slate-900">Research Collaboration</option>
                  <option value="ngo" className="bg-slate-900">NGO/Child Protection</option>
                  <option value="drone" className="bg-slate-900">Drone Technology</option>
                  <option value="ai" className="bg-slate-900">AI/Computer Vision</option>
                  <option value="general" className="bg-slate-900">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-all resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                  placeholder="Tell us how you would like to collaborate..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-xl font-bold text-white text-base transition-all shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #f97316, #ef4444)",
                  boxShadow: "0 0 24px rgba(249,115,22,0.35)",
                }}
              >
                <Send className="w-5 h-5" />
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}


