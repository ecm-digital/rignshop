'use client';

import { useState, useEffect } from 'react';

export type Language = 'pl' | 'en' | 'de';

const translations = {
  pl: {
    // Header
    features: 'Funkcje',
    specifications: 'Specyfikacje',
    order: 'Zamów',
    orderNow: 'Zamów teraz',
    
    // Hero
    heroTitle: 'Nowoczesny sposób',
    heroTitleHighlight: 'na zdrowy sen',
    heroDescription: 'Inteligentny pierścień, który monitoruje Twój sen, aktywność fizyczną, temperaturę ciała i tętno. Wszystko w jednym eleganckim urządzeniu.',
    orderNowPrice: 'Zamów teraz - 1299 zł',
    
    // Features
    featuresTitle: 'Wszystko, czego potrzebujesz w jednym pierścieniu',
    sleepMonitoring: 'Monitoring snu',
    sleepDescription: 'Śledź jakość swojego snu i fazy REM',
    activityMonitoring: 'Aktywność fizyczna',
    activityDescription: 'Monitoruj kroki, kalorie i treningi',
    temperatureMonitoring: 'Temperatura ciała',
    temperatureDescription: 'Ciągłe monitorowanie temperatury',
    heartRate: 'Tętno',
    heartRateDescription: 'Precyzyjne pomiary tętna 24/7',
    
    // Order
    orderTitle: 'Zamów już dziś Smart Ring',
    price: '1299 zł',
    freeShipping: 'Darmowa dostawa',
    returnPolicy: '30 dni na zwrot',
    warranty: '2 lata gwarancji',
    
    // Footer
    footerDescription: 'Nowoczesne rozwiązania do monitorowania zdrowia i snu',
    copyright: '© 2024 Smart Ring. Wszystkie prawa zastrzeżone.'
  },
  en: {
    // Header
    features: 'Features',
    specifications: 'Specifications',
    order: 'Order',
    orderNow: 'Order Now',
    
    // Hero
    heroTitle: 'Modern way',
    heroTitleHighlight: 'to healthy sleep',
    heroDescription: 'Smart ring that monitors your sleep, physical activity, body temperature and heart rate. Everything in one elegant device.',
    orderNowPrice: 'Order now - $299',
    
    // Features
    featuresTitle: 'Everything you need in one ring',
    sleepMonitoring: 'Sleep Monitoring',
    sleepDescription: 'Track your sleep quality and REM phases',
    activityMonitoring: 'Physical Activity',
    activityDescription: 'Monitor steps, calories and workouts',
    temperatureMonitoring: 'Body Temperature',
    temperatureDescription: 'Continuous temperature monitoring',
    heartRate: 'Heart Rate',
    heartRateDescription: 'Precise heart rate measurements 24/7',
    
    // Order
    orderTitle: 'Order Smart Ring Today',
    price: '$299',
    freeShipping: 'Free shipping',
    returnPolicy: '30-day return',
    warranty: '2-year warranty',
    
    // Footer
    footerDescription: 'Modern solutions for health and sleep monitoring',
    copyright: '© 2024 Smart Ring. All rights reserved.'
  },
  de: {
    // Header
    features: 'Funktionen',
    specifications: 'Spezifikationen',
    order: 'Bestellen',
    orderNow: 'Jetzt bestellen',
    
    // Hero
    heroTitle: 'Moderner Weg',
    heroTitleHighlight: 'zu gesundem Schlaf',
    heroDescription: 'Intelligenter Ring, der Ihren Schlaf, körperliche Aktivität, Körpertemperatur und Herzfrequenz überwacht. Alles in einem eleganten Gerät.',
    orderNowPrice: 'Jetzt bestellen - 299€',
    
    // Features
    featuresTitle: 'Alles was Sie brauchen in einem Ring',
    sleepMonitoring: 'Schlafüberwachung',
    sleepDescription: 'Verfolgen Sie Ihre Schlafqualität und REM-Phasen',
    activityMonitoring: 'Körperliche Aktivität',
    activityDescription: 'Überwachen Sie Schritte, Kalorien und Workouts',
    temperatureMonitoring: 'Körpertemperatur',
    temperatureDescription: 'Kontinuierliche Temperaturüberwachung',
    heartRate: 'Herzfrequenz',
    heartRateDescription: 'Präzise Herzfrequenzmessungen 24/7',
    
    // Order
    orderTitle: 'Bestellen Sie Smart Ring heute',
    price: '299€',
    freeShipping: 'Kostenloser Versand',
    returnPolicy: '30 Tage Rückgabe',
    warranty: '2 Jahre Garantie',
    
    // Footer
    footerDescription: 'Moderne Lösungen für Gesundheits- und Schlafüberwachung',
    copyright: '© 2024 Smart Ring. Alle Rechte vorbehalten.'
  }
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pl');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['pl', 'en', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: keyof typeof translations.pl) => {
    return translations[language][key] || translations.pl[key];
  };

  return { language, changeLanguage, t };
}