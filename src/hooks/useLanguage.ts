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
    featuresIntro: 'Smart Ring łączy w sobie zaawansowane technologie monitorowania zdrowia w eleganckim, dyskretnym urządzeniu, które nosisz 24/7.',
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

    // Details
    detailsTitle: 'Szczegółowy opis',
    detailsParagraph: 'Smart Ring to elegancki, wodoodporny pierścień do monitorowania zdrowia i aktywności. Mierzy tętno (HR/HRV), saturację SpO₂, sen (w tym fazy REM), temperaturę skóry oraz dzienną aktywność. Dzięki subtelnym trendom i wskazówkom pomaga poprawić regenerację, sen oraz kondycję — bez rozpraszania i zbędnych ekranów.',
    detailSleepTitle: 'Sen i regeneracja',
    detailSleepDesc: 'Analiza faz snu (REM, głęboki), wskazówki poprawy energii.',
    detailActivityTitle: 'Aktywność i sport',
    detailActivityDesc: 'Kroki, kalorie, dystans i tryby sportowe; cele tygodniowe.',
    detailHRVTitle: 'Tętno i HRV',
    detailHRVDesc: 'Całodobowe pomiary HR/HRV i stresu dla pełnego obrazu zdrowia.',
    detailBatteryTitle: 'Długa praca',
    detailBatteryDesc: 'Bateria 5–7 dni, ładowanie w magnetycznym etui ~1,5 h.',
    detailsGainsTitle: 'Co zyskujesz',
    detailsGain1: 'Wgląd w sen, aktywność, temperaturę skóry, tętno i SpO₂ w jednym miejscu.',
    detailsGain2: 'Subtelne wskazówki oparte na trendach — bez rozpraszających ekranów.',
    detailsGain3: '5–7 dni pracy na baterii i szybkie ładowanie w magnetycznym etui.',
    detailsGain4: 'Wygodę i styl — lekka konstrukcja, wodoodporność 5 ATM.',
    detailsCompatibility: 'Kompatybilność: Android 5.1+ / iOS 8.0+ • Aplikacja: QRing • Bluetooth 5.2',
    
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
    featuresIntro: 'Smart Ring combines advanced health monitoring technologies in an elegant, discreet device you wear 24/7.',
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

    // Details
    detailsTitle: 'Detailed description',
    detailsParagraph: 'Smart Ring is an elegant, waterproof ring for health and activity monitoring. It measures heart rate (HR/HRV), SpO₂, sleep (including REM), skin temperature and daily activity. Subtle trends and insights help improve recovery, sleep and fitness — without distractions and unnecessary screens.',
    detailSleepTitle: 'Sleep and recovery',
    detailSleepDesc: 'Sleep stage analysis (REM, deep), tips to improve energy.',
    detailActivityTitle: 'Activity and sport',
    detailActivityDesc: 'Steps, calories, distance and sport modes; weekly goals.',
    detailHRVTitle: 'Heart rate and HRV',
    detailHRVDesc: '24/7 HR/HRV and stress measurements for a complete health picture.',
    detailBatteryTitle: 'Long battery life',
    detailBatteryDesc: 'Battery 5–7 days, charging in magnetic case ~1.5 h.',
    detailsGainsTitle: 'What you get',
    detailsGain1: 'Insights into sleep, activity, skin temperature, heart rate and SpO₂ in one place.',
    detailsGain2: 'Subtle, trend-based guidance — without distracting screens.',
    detailsGain3: '5–7 days battery life and fast charging in a magnetic case.',
    detailsGain4: 'Comfort and style — lightweight build, 5 ATM water resistance.',
    detailsCompatibility: 'Compatibility: Android 5.1+ / iOS 8.0+ • App: QRing • Bluetooth 5.2',
    
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
    featuresIntro: 'Smart Ring vereint fortschrittliche Gesundheitsüberwachung in einem eleganten, dezenten Gerät, das Sie 24/7 tragen.',
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

    // Details
    detailsTitle: 'Detaillierte Beschreibung',
    detailsParagraph: 'Der Smart Ring ist ein eleganter, wasserdichter Ring zur Überwachung von Gesundheit und Aktivität. Er misst Herzfrequenz (HR/HRV), SpO₂, Schlaf (inkl. REM), Hauttemperatur und tägliche Aktivität. Feine Trends und Hinweise helfen, Erholung, Schlaf und Fitness zu verbessern — ohne Ablenkung und unnötige Bildschirme.',
    detailSleepTitle: 'Schlaf und Regeneration',
    detailSleepDesc: 'Analyse der Schlafphasen (REM, Tiefschlaf), Tipps für mehr Energie.',
    detailActivityTitle: 'Aktivität und Sport',
    detailActivityDesc: 'Schritte, Kalorien, Distanz und Sportmodi; wöchentliche Ziele.',
    detailHRVTitle: 'Herzfrequenz und HRV',
    detailHRVDesc: '24/7 HR/HRV- und Stressmessungen für ein vollständiges Gesundheitsbild.',
    detailBatteryTitle: 'Lange Laufzeit',
    detailBatteryDesc: 'Akku 5–7 Tage, Laden im magnetischen Etui ~1,5 Std.',
    detailsGainsTitle: 'Ihre Vorteile',
    detailsGain1: 'Einblicke in Schlaf, Aktivität, Hauttemperatur, Herzfrequenz und SpO₂ an einem Ort.',
    detailsGain2: 'Feine, trendbasierte Hinweise — ohne ablenkende Bildschirme.',
    detailsGain3: '5–7 Tage Akkulaufzeit und schnelles Laden im magnetischen Etui.',
    detailsGain4: 'Komfort und Stil — leichtes Design, 5 ATM Wasserfestigkeit.',
    detailsCompatibility: 'Kompatibilität: Android 5.1+ / iOS 8.0+ • App: QRing • Bluetooth 5.2',
    
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