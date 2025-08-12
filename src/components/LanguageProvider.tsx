'use client';

import React, { useEffect, useState } from 'react';
import { Language, LanguageContext, translations } from '@/hooks/useLanguage';

// Country to language mapping
const countryLanguageMap: Record<string, Language> = {
  'DE': 'de', // Germany
  'PL': 'pl', // Poland
  'US': 'en', // United States
  'GB': 'en', // United Kingdom
  'CA': 'en', // Canada
  'AU': 'en', // Australia
  'NZ': 'en', // New Zealand
  'IE': 'en', // Ireland
  'ZA': 'en', // South Africa
  'IN': 'en', // India
  'SG': 'en', // Singapore
  'HK': 'en', // Hong Kong
};

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Function to detect user's country and set appropriate language
  const detectCountryAndSetLanguage = async () => {
    try {
      // Try to get country from IP geolocation
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const countryCode = data.country_code;
      
      if (countryCode && countryLanguageMap[countryCode]) {
        const detectedLanguage = countryLanguageMap[countryCode];
        setLanguage(detectedLanguage);
        localStorage.setItem('language', detectedLanguage);
        localStorage.setItem('autoDetectedCountry', countryCode);
        return detectedLanguage;
      }
    } catch {
      console.log('Could not detect country from IP, falling back to browser language');
    }
    
    // Fallback to browser language detection
    try {
      const browserLang = (navigator.language || navigator.languages?.[0] || 'en').slice(0, 2) as Language;
      if (['pl', 'en', 'de'].includes(browserLang)) {
        setLanguage(browserLang);
        localStorage.setItem('language', browserLang);
        return browserLang;
      }
    } catch {
      console.log('Could not detect browser language');
    }
    
    return 'en'; // Default fallback
  };

  useEffect(() => {
    // 1) URL param override (?lang=pl|en|de) - highest priority
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = (params.get('lang') || '').toLowerCase() as Language;
      if (urlLang && ['pl', 'en', 'de'].includes(urlLang)) {
        setLanguage(urlLang);
        localStorage.setItem('language', urlLang);
        return; // URL param has highest precedence
      }
    } catch {}

    // 2) Check if we already auto-detected country in this session
    const autoDetectedCountry = localStorage.getItem('autoDetectedCountry');
    const savedLanguage = localStorage.getItem('language') as Language | null;
    
    if (savedLanguage && ['pl', 'en', 'de'].includes(savedLanguage)) {
      // If we have a saved language and it's not from URL override, use it
      if (!window.location.search.includes('lang=')) {
        setLanguage(savedLanguage);
        return;
      }
    }

    // 3) Auto-detect country and set language (only on first visit)
    if (!autoDetectedCountry && !savedLanguage) {
      detectCountryAndSetLanguage();
    } else if (savedLanguage && ['pl', 'en', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }

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
