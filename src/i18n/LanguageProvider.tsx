"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/data/content";

type LanguageContextValue = {
  locale: Locale;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    // Read the persisted preference after mount (not in a lazy initializer) so the
    // first client render matches the server-rendered HTML and avoids a hydration
    // mismatch; this one-time sync from localStorage is the exception to the rule.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === "es" ? "en" : "es";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
