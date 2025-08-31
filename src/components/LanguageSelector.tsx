'use client';

import { useState, useEffect } from 'react';
import { useLanguage, Language } from '@/hooks/useLanguage';

const languages = [
  { code: 'pl' as Language, name: 'Polski', flag: '🇵🇱', country: 'PL' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸', country: 'EN' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪', country: 'DE' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [autoDetectedCountry, setAutoDetectedCountry] = useState<string | null>(null);
  const { language, changeLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    // Get auto-detected country from localStorage
    const detected = localStorage.getItem('autoDetectedCountry');
    if (detected) {
      setAutoDetectedCountry(detected);
    }
  }, []);

  const handleLanguageChange = (locale: Language) => {
    changeLanguage(locale);
    setIsOpen(false);
  };

  const isAutoDetected = autoDetectedCountry && 
    currentLanguage.country === autoDetectedCountry;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 border border-gray-600 hover:bg-white/20 transition-colors duration-200"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-white">{currentLanguage.code.toUpperCase()}</span>
        {isAutoDetected && (
          <span className="text-xs text-green-400 bg-green-900/30 px-1.5 py-0.5 rounded-full">
            Auto
          </span>
        )}
        <svg 
          className={`w-4 h-4 text-gray-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {languages.map((lang) => {
            const isLangAutoDetected = autoDetectedCountry && 
              lang.country === autoDetectedCountry;
            
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code ? 'bg-gray-100 text-black' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
                {isLangAutoDetected && (
                  <span className="text-xs text-black bg-gray-200 px-1.5 py-0.5 rounded-full">
                    Auto
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}