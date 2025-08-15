'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect, useRef } from 'react';
import LanguageSelector from '@/components/LanguageSelector';
import ProductGallery from '@/components/ProductGallery';

export default function Home() {
  const { t } = useLanguage();
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Get auto-detected country from localStorage
    const country = localStorage.getItem('autoDetectedCountry');
    if (country) {
      setDetectedCountry(country);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure correct attributes for mobile autoplay
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // Ignore - some browsers require user interaction
        });
      }
    };

    // Attempt to start playback
    tryPlay();

    // Resume after tab becomes visible
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <main className="min-h-screen bg-primary-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-950 border-b border-primary-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary-900 text-xl font-bold">💍</span>
              </div>
              <h1 className="text-2xl font-bold text-primary-50 font-display">
                Smart Ring
              </h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="group relative text-sm font-medium text-primary-200 hover:text-primary-50 transition-colors duration-300">
                {t('features')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-50 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#specifications" className="group relative text-sm font-medium text-primary-200 hover:text-primary-50 transition-colors duration-300">
                {t('specifications')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-50 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#order" className="group relative text-sm font-medium text-primary-200 hover:text-primary-50 transition-colors duration-300">
                {t('order')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-50 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Language selector and CTA */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <a
                href="#order"
                className="group relative bg-primary-50 hover:bg-primary-100 text-primary-900 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md border border-primary-200"
              >
                <span className="relative z-10">{t('orderNow')}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/video-poster.svg"
            className="w-full h-full object-cover"
            onCanPlay={() => {
              // Attempt to play again when ready
              const v = videoRef.current;
              if (v && v.paused) {
                v.play().catch(() => {});
              }
            }}
            onTouchStart={() => {
              const v = videoRef.current;
              if (v) {
                v.muted = true;
                v.play().catch(() => {});
              }
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-display">
              {t('heroTitle')}
              <br />
              <span className="text-blue-400">{t('heroTitleHighlight')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
            <a
              href="#order"
              className="inline-block bg-white/90 hover:bg-white text-primary-900 px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl border border-white"
            >
              {t('orderNowPrice')}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-display">
              {t('featuresTitle')}
            </h3>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Odkryj zaawansowane technologie monitorowania zdrowia w jednym eleganckim urządzeniu
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sleep Monitoring */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-primary-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-primary-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💤</div>
                <h4 className="text-xl font-bold mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                  {t('sleepMonitoring')}
                </h4>
                <p className="text-primary-600 leading-relaxed">{t('sleepDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-300 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>

            {/* Physical Activity */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-steel/20 to-accent-navy/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-primary-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-accent-steel">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏃</div>
                <h4 className="text-xl font-bold mb-3 text-primary-900 group-hover:text-accent-steel transition-colors">
                  {t('activityMonitoring')}
                </h4>
                <p className="text-primary-600 leading-relaxed">{t('activityDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-steel to-accent-navy rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>

            {/* Body Temperature */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cream/20 to-accent-beige/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-primary-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-accent-cream">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌡️</div>
                <h4 className="text-xl font-bold mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                  {t('temperatureMonitoring')}
                </h4>
                <p className="text-primary-600 leading-relaxed">{t('temperatureDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-accent-cream to-accent-beige rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>

            {/* Heart Rate */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-primary-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-primary-400">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">❤️</div>
                <h4 className="text-xl font-bold mb-3 text-primary-900 group-hover:text-primary-600 transition-colors">
                  {t('heartRate')}
                </h4>
                <p className="text-primary-600 leading-relaxed">{t('heartRateDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />

      {/* Stats Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-800/20 via-transparent to-primary-700/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-100/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-100/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-50 mb-6 font-display">
              {t('statsTitle')}
            </h3>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Zaawansowane technologie w eleganckim opakowaniu
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Battery Life */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-primary-50 group-hover:scale-110 transition-transform duration-300">
                  7
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-cream rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-primary-200 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('batteryLife')}
              </div>
            </div>
            
            {/* Measurement Accuracy */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-primary-50 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-steel rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-primary-200 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('measurementAccuracy')}
              </div>
            </div>
            
            {/* 24/7 Monitoring */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-primary-50 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-300 rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-primary-200 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('monitoring')}
              </div>
            </div>
            
            {/* Water Resistance */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-primary-50 group-hover:scale-110 transition-transform duration-300">
                  50m
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-navy rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-primary-200 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('waterResistance')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-display">
              {t('orderTitle')}
            </h3>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Dołącz do tysięcy zadowolonych użytkowników Smart Ring
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="relative group">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 via-primary-400/20 to-primary-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-white border border-primary-200 rounded-3xl p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Price section */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary-900 mb-2">
                    {t('price')}
                  </div>
                  <p className="text-primary-500 text-sm">Jednorazowa płatność</p>
                </div>
                
                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center p-3 bg-primary-50 rounded-xl border border-primary-100">
                    <span className="text-primary-600 mr-4 text-2xl">✓</span>
                    <span className="text-primary-700 font-medium">{t('freeShipping')}</span>
                  </li>
                  <li className="flex items-center p-3 bg-primary-50 rounded-xl border border-primary-100">
                    <span className="text-primary-600 mr-4 text-2xl">✓</span>
                    <span className="text-primary-700 font-medium">{t('returnPolicy')}</span>
                  </li>
                  <li className="flex items-center p-3 bg-primary-50 rounded-xl border border-primary-100">
                    <span className="text-primary-600 mr-4 text-2xl">✓</span>
                    <span className="text-primary-700 font-medium">{t('warranty')}</span>
                  </li>
                </ul>
                
                {/* CTA Button */}
                <button className="w-full group/btn relative bg-primary-900 hover:bg-primary-800 text-primary-50 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl border border-primary-700">
                  <span className="relative z-10">{t('orderNow')}</span>
                </button>
                
                {/* Additional info */}
                <div className="text-center mt-6">
                  <p className="text-sm text-primary-500">
                    🔒 Bezpieczna płatność • 📱 Kompatybilne z iOS i Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-950 text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-800/10 to-primary-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-primary-700/10 to-primary-800/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-900 text-2xl font-bold">💍</span>
                </div>
                <h4 className="text-3xl font-bold text-primary-50 font-display">
                  Smart Ring
                </h4>
              </div>
              <p className="text-primary-300 leading-relaxed max-w-md">
                {t('footerDescription')}
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h5 className="text-xl font-semibold mb-6 text-primary-50">Szybkie linki</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-primary-300 hover:text-primary-100 transition-colors duration-300 hover:translate-x-1 inline-block">
                    Funkcje
                  </a>
                </li>
                <li>
                  <a href="#specifications" className="text-primary-300 hover:text-primary-100 transition-colors duration-300 hover:translate-x-1 inline-block">
                    Specyfikacje
                  </a>
                </li>
                <li>
                  <a href="#order" className="text-primary-300 hover:text-primary-100 transition-colors duration-300 hover:translate-x-1 inline-block">
                    Zamów
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className="text-center md:text-left">
              <h5 className="text-xl font-semibold mb-6 text-primary-50">Social Media</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="group w-12 h-12 bg-primary-800 hover:bg-primary-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-primary-700">
                  <span className="text-primary-100 text-lg group-hover:scale-110 transition-transform duration-300">📘</span>
                </a>
                <a href="#" className="group w-12 h-12 bg-primary-800 hover:bg-primary-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-primary-700">
                  <span className="text-primary-100 text-lg group-hover:scale-110 transition-transform duration-300">🐦</span>
                </a>
                <a href="#" className="group w-12 h-12 bg-primary-800 hover:bg-primary-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-primary-700">
                  <span className="text-primary-100 text-lg group-hover:scale-110 transition-transform duration-300">📷</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-primary-800 pt-8 text-center">
            <p className="text-primary-400 text-sm">
              {t('copyright')}
            </p>
            <p className="text-primary-500 text-xs mt-2">
              Made with ❤️ using Next.js and modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}