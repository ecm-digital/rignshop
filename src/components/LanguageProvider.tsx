'use client';

import React, { useEffect, useState } from 'react';
import { Language, LanguageContext, translations } from '@/hooks/useLanguage';

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // 1) URL param override (?lang=pl|en|de)
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = (params.get('lang') || '').toLowerCase() as Language;
      if (urlLang && ['pl', 'en', 'de'].includes(urlLang)) {
        setLanguage(urlLang);
        localStorage.setItem('language', urlLang);
        // URL param has highest precedence
        return;
      }
    } catch {}

    // 2) Initialize from localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['pl', 'en', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      return;
    }

    // 3) Detect from browser language on first load
    try {
      const browserLang = (navigator.language || navigator.languages?.[0] || 'en').slice(0, 2) as Language;
      if (['pl', 'en', 'de'].includes(browserLang)) {
        setLanguage(browserLang);
      }
    } catch {}

    // Sync across tabs
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'language' && e.newValue) {
        const val = e.newValue as Language;
        if (['pl', 'en', 'de'].includes(val)) {
          setLanguage(val);
        }
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: keyof typeof translations.pl) => {
    return translations[language][key] || translations.pl[key];
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
