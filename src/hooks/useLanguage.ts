'use client';

import { createContext, useContext } from 'react';

export type Language = 'pl' | 'en' | 'de';

export const translations = {
  pl: {
    // Header
    features: 'Funkcje',
    specifications: 'Specyfikacje',
    order: 'Zamów',
    orderNow: 'Zamów teraz',
    
    // Country detection
    countryDetected: 'Wykryto kraj',
    languageSetAutomatically: '(język ustawiony automatycznie)',
    
    // Hero
    heroTitle: 'Nowoczesny sposób',
    heroTitleHighlight: 'na zdrowy sen',
    heroDescription: 'Inteligentny pierścień, który monitoruje sen, aktywność, temperaturę ciała i tętno. Wszystko w jednym eleganckim urządzeniu.',
    orderNowPrice: 'Zamów teraz – 1299 zł',
    
    // Features
    featuresTitle: 'Wszystko, czego potrzebujesz w jednym pierścieniu',
    sleepMonitoring: 'Monitoring snu',
    sleepDescription: 'Śledź głęboki sen i fazy REM, budź się w najlepszym momencie.',
    activityMonitoring: 'Aktywność fizyczna',
    activityDescription: 'Monitoruj kroki, kalorie i treningi. Ustalaj cele i trzymaj formę.',
    temperatureMonitoring: 'Temperatura ciała',
    temperatureDescription: 'Subtelne zmiany temperatury pomogą wcześniej wykryć obciążenie organizmu.',
    heartRate: 'Tętno',
    heartRateDescription: 'Precyzyjne pomiary spoczynkowe i podczas wysiłku, 24/7.',
    
    // Stats
    statsTitle: 'Specyfikacje techniczne',
    batteryLife: 'dni pracy baterii',
    measurementAccuracy: 'precyzja pomiarów',
    monitoring: 'monitorowanie',
    waterResistance: 'wodoodporność',
    
    // Gallery
    galleryTitle: 'Galeria produktu',
    colorVariants: 'Warianty kolorystyczne',
    closeUps: 'Zbliżenia',
    colorBlack: 'Czarny',
    colorSilver: 'Srebrny',
    colorGold: 'Złoty',
    
    // Order
    orderTitle: 'Zamów już dziś Smart Ring',
    price: '1299 zł',
    freeShipping: 'Darmowa dostawa',
    returnPolicy: '30 dni na zwrot',
    warranty: '2 lata gwarancji',
    
    // Footer
    footerDescription: 'Nowoczesne rozwiązania do monitorowania zdrowia i snu',
    copyright: ' 2024 Smart Ring. Wszystkie prawa zastrzeżone.'
  },
  en: {
    // Header
    features: 'Features',
    specifications: 'Specifications',
    order: 'Order',
    orderNow: 'Order Now',
    
    // Country detection
    countryDetected: 'Country detected',
    languageSetAutomatically: '(language set automatically)',
    
    // Hero
    heroTitle: 'Modern way',
    heroTitleHighlight: 'to healthy sleep',
    heroDescription: 'A smart ring that tracks your sleep, activity, body temperature and heart rate. All in one elegant device.',
    orderNowPrice: 'Order now – $299',
    
    // Features
    featuresTitle: 'Everything you need in one ring',
    sleepMonitoring: 'Sleep Monitoring',
    sleepDescription: 'Track deep sleep and REM; wake up at the right moment.',
    activityMonitoring: 'Physical Activity',
    activityDescription: 'Track steps, calories and workouts. Set goals and stay on track.',
    temperatureMonitoring: 'Body Temperature',
    temperatureDescription: 'Subtle temperature trends help detect strain early.',
    heartRate: 'Heart Rate',
    heartRateDescription: 'Accurate resting and workout heart rate, 24/7.',
    
    // Stats
    statsTitle: 'Technical specifications',
    batteryLife: 'days battery life',
    measurementAccuracy: 'measurement accuracy',
    monitoring: 'monitoring',
    waterResistance: 'water resistance',
    
    // Gallery
    galleryTitle: 'Product Gallery',
    colorVariants: 'Color Variants',
    closeUps: 'Close-ups',
    colorBlack: 'Black',
    colorSilver: 'Silver',
    colorGold: 'Gold',
    
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
    
    // Country detection
    countryDetected: 'Land erkannt',
    languageSetAutomatically: '(Sprache automatisch eingestellt)',
    
    // Hero
    heroTitle: 'Moderner Weg',
    heroTitleHighlight: 'zu gesundem Schlaf',
    heroDescription: 'Intelligenter Ring, der Schlaf, Aktivität, Körpertemperatur und Herzfrequenz misst. Alles in einem eleganten Gerät.',
    orderNowPrice: 'Jetzt bestellen – 299€',
    
    // Features
    featuresTitle: 'Alles was Sie brauchen in einem Ring',
    sleepMonitoring: 'Schlafüberwachung',
    sleepDescription: 'Verfolge Tiefschlaf und REM‑Phasen, wache im richtigen Moment auf.',
    activityMonitoring: 'Körperliche Aktivität',
    activityDescription: 'Schritte, Kalorien und Workouts im Blick. Ziele setzen und dranbleiben.',
    temperatureMonitoring: 'Körpertemperatur',
    temperatureDescription: 'Feine Temperaturtrends helfen, Belastung früh zu erkennen.',
    heartRate: 'Herzfrequenz',
    heartRateDescription: 'Präzise Ruhe‑ und Trainings‑Herzfrequenz, 24/7.',
    
    // Stats
    statsTitle: 'Technische Spezifikationen',
    batteryLife: 'Tage Akkulaufzeit',
    measurementAccuracy: 'Messgenauigkeit',
    monitoring: 'Überwachung',
    waterResistance: 'Wasserfestigkeit',
    
    // Gallery
    galleryTitle: 'Produktgalerie',
    colorVariants: 'Farbvarianten',
    closeUps: 'Nahaufnahmen',
    colorBlack: 'Schwarz',
    colorSilver: 'Silber',
    colorGold: 'Gold',
    
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

export type LanguageContextValue = {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: (key: keyof typeof translations.pl) => string;
};

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'pl',
  changeLanguage: () => {},
  t: (key) => translations.pl[key],
});

export function useLanguage() {
  return useContext(LanguageContext);
}