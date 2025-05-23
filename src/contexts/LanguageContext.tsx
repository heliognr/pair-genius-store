
"use client";
import type React from 'react';
import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { SupportedLanguage, LanguageOption } from '@/lib/i18n';
import { translations, DEFAULT_LANGUAGE, LANGUAGES, type TranslationKeys } from '@/lib/i18n';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: keyof TranslationKeys, replacements?: Record<string, string | number>) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<SupportedLanguage>(DEFAULT_LANGUAGE);

  const t = useCallback((key: keyof TranslationKeys, replacements?: Record<string, string | number>) => {
    let translation = translations[language][key] || translations[DEFAULT_LANGUAGE][key] || String(key);
    if (replacements) {
      Object.entries(replacements).forEach(([placeholder, value]) => {
        translation = translation.replace(new RegExp(`{{${placeholder}}}`, 'g'), String(value));
      });
    }
    return translation;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t, languages: LANGUAGES }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
