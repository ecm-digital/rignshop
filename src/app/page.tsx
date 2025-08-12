'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';
import LanguageSelector from '@/components/LanguageSelector';
import ProductGallery from '@/components/ProductGallery';

export default function Home() {
  const { t } = useLanguage();
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    // Get auto-detected country from localStorage
    const country = localStorage.getItem('autoDetectedCountry');
    if (country) {
      setDetectedCountry(country);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">💍</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Smart Ring
              </h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="group relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                {t('features')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#specifications" className="group relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                {t('specifications')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#order" className="group relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                {t('order')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Language selector and CTA */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <a
                href="#order"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
              >
                <span className="relative z-10">{t('orderNow')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Country detection indicator */}
            {detectedCountry && (
              <div className="mb-6 inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 rounded-full text-sm shadow-lg animate-fade-in">
                <span className="text-green-600">🌍</span>
                <span>{t('countryDetected')}: {detectedCountry}</span>
                <span className="text-xs opacity-75">{t('languageSetAutomatically')}</span>
              </div>
            )}
            
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              {t('heroTitle')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                {t('heroTitleHighlight')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
            
            {/* Enhanced Product visualization */}
            <div className="mb-12 relative">
              <div className="relative w-80 h-80 mx-auto">
                {/* Outer ring with glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-full shadow-2xl animate-pulse-slow">
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full"></div>
                </div>
                
                {/* Middle ring with blue accent */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-lg animate-bounce-slow">
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full"></div>
                </div>
                
                {/* Inner core with white accent */}
                <div className="absolute inset-16 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-inner animate-pulse">
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-50 to-white rounded-full"></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="space-y-4">
              <button className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                <span className="relative z-10">{t('orderNowPrice')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Secondary info */}
              <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Darmowa dostawa • 30 dni na zwrot • 2 lata gwarancji</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('featuresTitle')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Odkryj zaawansowane technologie monitorowania zdrowia w jednym eleganckim urządzeniu
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sleep Monitoring */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-blue-200">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💤</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {t('sleepMonitoring')}
                </h4>
                <p className="text-gray-600 leading-relaxed">{t('sleepDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>

            {/* Physical Activity */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-green-200">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏃</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                  {t('activityMonitoring')}
                </h4>
                <p className="text-gray-600 leading-relaxed">{t('activityDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>

            {/* Body Temperature */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-orange-200">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌡️</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  {t('temperatureMonitoring')}
                </h4>
                <p className="text-gray-600 leading-relaxed">{t('temperatureDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>

            {/* Heart Rate */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-red-200">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">❤️</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {t('heartRate')}
                </h4>
                <p className="text-gray-600 leading-relaxed">{t('heartRateDescription')}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('statsTitle')}
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Zaawansowane technologie w eleganckim opakowaniu
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Battery Life */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  7
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-blue-100 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('batteryLife')}
              </div>
            </div>
            
            {/* Measurement Accuracy */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-blue-100 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('measurementAccuracy')}
              </div>
            </div>
            
            {/* 24/7 Monitoring */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-blue-100 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('monitoring')}
              </div>
            </div>
            
            {/* Water Resistance */}
            <div className="group text-center">
              <div className="relative mb-4">
                <div className="text-5xl md:text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  50m
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-sm md:text-base text-blue-100 opacity-90 group-hover:opacity-100 transition-opacity">
                {t('waterResistance')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('orderTitle')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dołącz do tysięcy zadowolonych użytkowników Smart Ring
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="relative group">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-white border border-gray-100 rounded-3xl p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Price section */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {t('price')}
                  </div>
                  <p className="text-gray-500 text-sm">Jednorazowa płatność</p>
                </div>
                
                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center p-3 bg-green-50 rounded-xl border border-green-100">
                    <span className="text-green-500 mr-4 text-2xl">✓</span>
                    <span className="text-gray-700 font-medium">{t('freeShipping')}</span>
                  </li>
                  <li className="flex items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-blue-500 mr-4 text-2xl">✓</span>
                    <span className="text-gray-700 font-medium">{t('returnPolicy')}</span>
                  </li>
                  <li className="flex items-center p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <span className="text-purple-500 mr-4 text-2xl">✓</span>
                    <span className="text-gray-700 font-medium">{t('warranty')}</span>
                  </li>
                </ul>
                
                {/* CTA Button */}
                <button className="w-full group/btn relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                  <span className="relative z-10">{t('orderNow')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {/* Additional info */}
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500">
                    🔒 Bezpieczna płatność • 📱 Kompatybilne z iOS i Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">💍</span>
                </div>
                <h4 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Smart Ring
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                {t('footerDescription')}
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h5 className="text-xl font-semibold mb-6 text-white">Szybkie linki</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    Funkcje
                  </a>
                </li>
                <li>
                  <a href="#specifications" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    Specyfikacje
                  </a>
                </li>
                <li>
                  <a href="#order" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    Zamów
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className="text-center md:text-left">
              <h5 className="text-xl font-semibold mb-6 text-white">Social Media</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="group w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <span className="text-white text-lg group-hover:scale-110 transition-transform duration-300">📘</span>
                </a>
                <a href="#" className="group w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <span className="text-white text-lg group-hover:scale-110 transition-transform duration-300">🐦</span>
                </a>
                <a href="#" className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <span className="text-white text-lg group-hover:scale-110 transition-transform duration-300">📷</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Made with ❤️ using Next.js and modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}