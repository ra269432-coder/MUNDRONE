import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Sources & Research Data | MUNDRONE",
  description:
    "All data sources used by MUNDRONE. Verified figures from Bangladesh Police Headquarters and other reputable organizations. Full transparency on methodology.",
};

const sources = [
  {
    org: "Bangladesh Police Headquarters",
    category: "Primary Statistical Source",
    report: "Missing Persons / Children Report (GD Statistics)",
    year: "2026",
    period: "January–July 2026",
    dataPoints: [
      "15,717 children reported missing (Jan–Jul 2026)",
      "13,679 children rescued or returned to families",
      "2,038 children still untraced",
      "Age 0–9: 474 reported, 406 rescued, 68 untraced",
      "Age 10–17: 15,243 reported, 13,273 rescued, 1,970 untraced",
    ],
    methodology: "Figures based on police-verified General Diary (GD) entries filed at police stations nationwide. The untraced figure represents cases where the missing person has not been located as of the reporting date.",
    link: null,
    color: "#34d399",
  },
  {
    org: "UNICEF Bangladesh",
    category: "Contextual Reference",
    report: "Bangladesh Country Overview — Child Protection",
    year: "2024–2025",
    period: "Various",
    dataPoints: [
      "Child protection context for Bangladesh",
      "Children in difficult circumstances",
      "Vulnerable children data",
    ],
    methodology: "Contextual information only. Not combined with police missing-child statistics. Used for broader child-protection landscape section.",
    link: "https://www.unicef.org/bangladesh/",
    color: "#38bdf8",
  },
  {
    org: "Bangladesh Bureau of Statistics (BBS)",
    category: "Contextual Reference",
    report: "Population & Housing Census / Child Statistics",
    year: "2022",
    period: "Census data",
    dataPoints: [
      "Bangladesh child population data",
      "Demographic context",
    ],
    methodology: "Used for demographic context only. Not used to derive missing-child statistics.",
    link: "http://www.bbs.gov.bd/",
    color: "#a855f7",
  },
];

const methodologyNotes = [
  {
    title: "GD (General Diary) Entries",
    note: "Missing-child data is sourced from General Diary entries filed at police stations. Not all missing persons are reported to police, so actual numbers may differ from GD counts.",
  },
  {
    title: "Tracing vs. Rescue",
    note: "\"Rescued or returned\" includes children traced through any means — police action, voluntary return, community help — and does not necessarily imply a formal rescue operation.",
  },
  {
    title: "No Extrapolation",
    note: "The seven-month figure (January–July 2026) is not extrapolated to an annual estimate. Annual estimates require full-year data and are not presented here.",
  },
  {
    title: "Reporting Practices",
    note: "Missing-person reporting numbers can be affected by reporting practices, definitions, and awareness. Figures should be interpreted with these limitations in mind.",
  },
  {
    title: "Data Separation",
    note: "Statistics from different child-protection domains (missing persons, children in difficult circumstances, trafficking, etc.) are presented separately and never combined.",
  },
];

export default function SourcesPage() {
  return (
    <div
      className="min-h-screen pt-24 pb-24"
      style={{ background: "linear-gradient(160deg, #040c18 0%, #060e1e 60%, #040c18 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to MUNDRONE
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 rounded-full mb-5">
            Data Transparency
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Sources & Research Data
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            MUNDRONE is committed to full transparency about all statistics and data presented on this website. Every figure is sourced from verified, reputable organizations. No data is fabricated or combined across unrelated domains.
          </p>
        </div>

        {/* Sources */}
        <div className="space-y-8 mb-16">
          {sources.map((src, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${src.color}25` }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 border-b"
                style={{ background: `${src.color}08`, borderColor: `${src.color}20` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: src.color }}>
                      {src.category}
                    </div>
                    <h3 className="text-white font-bold text-lg">{src.org}</h3>
                    <p className="text-slate-400 text-sm">{src.report} · {src.year}</p>
                  </div>
                  {src.link && (
                    <a
                      href={src.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors"
                      style={{ color: src.color, borderColor: `${src.color}30`, background: `${src.color}08` }}
                    >
                      Visit Source <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5" style={{ background: "rgba(0,0,0,0.4)" }}>
                {/* Data points */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Data Points Used</div>
                  <ul className="space-y-2">
                    {src.dataPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: src.color }} />
                        <span className="text-slate-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Methodology */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Methodology Note</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{src.methodology}</p>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Info className="w-3.5 h-3.5" />
                  Reporting period: {src.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology notes */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-8">Methodology & Limitations</h2>
          <div className="space-y-4">
            {methodologyNotes.map((note, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h3 className="text-white font-bold text-sm mb-2">{note.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{note.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MUNDRONE data policy */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(16,185,129,0.05) 100%)",
            border: "1px solid rgba(52,211,153,0.25)",
          }}
        >
          <h2 className="text-xl font-bold text-white mb-4">MUNDRONE Data Policy</h2>
          <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
            <p>MUNDRONE does not fabricate, exaggerate, or combine statistics from unrelated domains.</p>
            <p>All demonstrations labeled &ldquo;DEMO&rdquo;, &ldquo;SIMULATION&rdquo;, or &ldquo;CONCEPT&rdquo; contain no real case data.</p>
            <p>Statistics are presented with full source attribution and methodology notes.</p>
            <p>MUNDRONE does not display real missing-child case locations, real missing-child photographs, or confidential police data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
