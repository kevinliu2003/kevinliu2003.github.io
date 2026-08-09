"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  
  // Prefer English by default; load saved preference if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("language") as Language | null
      if (saved === "en" || saved === "zh") {
        setLanguage(saved)
      } else {
        setLanguage("en")
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
