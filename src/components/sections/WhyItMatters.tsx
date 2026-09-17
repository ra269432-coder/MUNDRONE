"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const panels = [
  {
    image: "/images/family-searching.jpg",
    captionKey: "why.caption1",
    position: "left",
  },
  {
    image: "/images/dhaka-street.jpg",
    captionKey: "why.caption2",
    position: "right",
  },
  {
    image: "/images/rural-bd.jpg",
    captionKey: "why.caption3",
    position: "left",
  },
  {
    image: "/images/search-team.jpg",
    captionKey: "why.caption4",
    position: "right",
  },
  {
    image: "/images/aerial-bd.jpg",
    captionKey: "why.caption5",
    position: "center",
  },
];

export default function WhyItMatters() {
  const { t } = useLanguage();

  return (
    <section
      id="why"
      className="relative py-24 overflow-hidden bg-black"
    >
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-rose-400 border border-rose-400/30 bg-rose-400/10 px-4 py-1.5 rounded-full mb-5">
            {t("why.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {t("why.heading")}
          </h2>
        </motion.div>
      </div>

      {/* Documentary Panels */}
      <div className="space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {panels.map((panel, idx) => (
          <motion.div
            key={idx}
            className={`relative rounded-2xl overflow-hidden ${
              panel.position === "center"
                ? "h-[400px] md:h-[500px]"
                : "h-[300px] md:h-[380px]"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.05 }}
          >
            <Image
              src={panel.image}
              alt={t(panel.captionKey)}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  panel.position === "center"
                    ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
              }}
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <motion.p
                className="text-2xl md:text-4xl font-black text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05 }}
              >
                {t(panel.captionKey)}
              </motion.p>
            </div>

            {/* Illustrative label */}
            {idx === 0 && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-black/60 text-slate-400 border border-slate-700">
                {t("why.label")}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="text-center mt-12 px-4">
        <p className="text-slate-600 text-xs italic">
          All photography is illustrative. No photographs represent real missing-child cases.
        </p>
      </div>
    </section>
  );
}
