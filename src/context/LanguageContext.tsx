"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "bn";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

import { translations } from "@/lib/translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  function t(key: string): string {
    const dict = translations[lang];
    return (dict as Record<string, string>)[key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
