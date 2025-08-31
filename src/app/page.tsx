'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect, useRef } from 'react';
import LanguageSelector from '@/components/LanguageSelector';
import ProductGallery from '@/components/ProductGallery';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ExtendedProductSection from '@/components/sections/ExtendedProductSection';
import { Button } from '@/components/ui/Button';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  // Build-time fallback for href to ensure SSR has a valid absolute link
  const BUILD_PRODUCT_URL = (
    process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_URL ||
    // Fallback for common typo in env var name
    process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_UR ||
    ''
  ).trim().replace(/^@+/, '');
  const BUILD_STORE_DOMAIN = (process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '').trim().replace(/^@+/, '');
  const buildTimeHref = (() => {
    if (BUILD_PRODUCT_URL) {
      try {
        const u = new URL(BUILD_PRODUCT_URL);
        return u.toString();
      } catch {}
      if (BUILD_STORE_DOMAIN) {
        const domain = BUILD_STORE_DOMAIN.replace(/^https?:\/\//, '').replace(/\/$/, '');
        const path = BUILD_PRODUCT_URL.startsWith('/')
          ? BUILD_PRODUCT_URL
          : BUILD_PRODUCT_URL.startsWith('products/')
            ? `/${BUILD_PRODUCT_URL}`
            : `/products/${BUILD_PRODUCT_URL}`;
        return `https://${domain}${path}`;
      }
    }
    return undefined;
  })();
  const { t } = useLanguage();
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [priceText, setPriceText] = useState<string | null>(null);
  const [variantId, setVariantId] = useState<string | null>(null);
  const [runtimeProductUrl, setRuntimeProductUrl] = useState<string | null>(null);
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

    const tryOnce = () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = true;
      v.playsInline = true;
      v.setAttribute('playsinline', 'true');
      v.setAttribute('webkit-playsinline', 'true');
      v.play().catch(() => {});
      window.removeEventListener('touchstart', tryOnce, true);
      window.removeEventListener('click', tryOnce, true);
      window.removeEventListener('pointerdown', tryOnce, true);
      window.removeEventListener('scroll', tryOnce, true);
    };
    window.addEventListener('touchstart', tryOnce, { once: true, capture: true } as unknown as boolean);
    window.addEventListener('click', tryOnce, { once: true, capture: true } as unknown as boolean);
    window.addEventListener('pointerdown', tryOnce, { once: true, capture: true } as unknown as boolean);
    window.addEventListener('scroll', tryOnce, { once: true, capture: true } as unknown as boolean);

    const retry = setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = true;
      v.play().catch(() => {});
    }, 1200);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('touchstart', tryOnce, true);
      window.removeEventListener('click', tryOnce, true);
      window.removeEventListener('pointerdown', tryOnce, true);
      window.removeEventListener('scroll', tryOnce, true);
      clearTimeout(retry);
    };
  }, []);

  useEffect(() => {
    // Product details for price only
    fetch('/api/products')
      .then((r) => r.json())
      .then((json) => {
        const p = json?.product;
        if (!p) return;
        setVariantId(p.variantId ?? null);
        if (p.productUrl) setRuntimeProductUrl(p.productUrl as string);
        if (p.price && p.currency) {
          const formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: p.currency });
          setPriceText(formatter.format(parseFloat(p.price)));
        }
      })
      .catch(() => {});
  }, []);
  const ctaHref = 'https://npstq1-x0.myshopify.com/products/r09-smart-ring-waterproof-5atm-health-fitness-rings-heart-rate-blood-oxygen-sleep-monitoring-with-charging-case-for-ios-android-copy-copy';

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/90 border-b border-gray-800/20 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">S</span>
              </div>
              <h1 className="text-xl font-semibold text-white tracking-tight">
                Smart Ring
              </h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                {t('features')}
              </a>
              <a href="#specifications" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                {t('specifications')}
              </a>
              <a href="#order" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                {t('order')}
              </a>
            </nav>

            {/* Language selector */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 overflow-hidden bg-black">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/video-poster.svg"
            className="w-full h-full object-cover transform scale-110 translate-y-8"
            onCanPlay={() => {
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
          >
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback dla przeglądarek bez obsługi wideo */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <img src="/video-poster.svg" alt="Smart Ring" className="w-full h-full object-cover" />
            </div>
          </video>
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Apple-style typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              {t('heroTitle')}
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-blue-400 mb-8 tracking-tight">
              {t('heroTitleHighlight')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              {t('heroDescription')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="xl"
                className="shadow-2xl"
                onClick={() => window.location.href = ctaHref}
              >
                {priceText ? `${t('orderNow')} • ${priceText}` : t('orderNowPrice')}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features (stable) */}
      <FeaturesSection />

      {/* Extended Product Description */}
      <ExtendedProductSection />

      {/* Product Gallery */}
      <ProductGallery />



      {/* FAQ */}
      <FAQSection />

      {/* Order Section */}
      <section id="order" className="py-24 bg-gray-50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 font-display">
              {t('orderTitle')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('orderSubtitle')}
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="relative group">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-gray-400/20 to-gray-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Price section */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-black mb-2">
                    {t('price')}
                  </div>
                  <p className="text-gray-500 text-sm">{t('orderSubtitle')}</p>
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
                <Button
                  variant="primary"
                  size="xl"
                  className="w-full shadow-xl"
                  onClick={() => window.location.href = ctaHref}
                >
                  {priceText ? `${t('orderNow')} • ${priceText}` : t('orderNow')}
                </Button>
                
                {/* Additional info */}
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500">
                    {t('orderAdditionalInfo')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-800/10 to-gray-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-gray-700/10 to-gray-800/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-black text-2xl font-bold">💍</span>
                </div>
                <h4 className="text-3xl font-bold text-white font-display">
                  Smart Ring
                </h4>
              </div>
              <p className="text-primary-300 leading-relaxed max-w-md">
                {t('footerDescription')}
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h5 className="text-xl font-semibold mb-6 text-primary-50">{t('quickLinks')}</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-primary-300 hover:text-primary-100 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {t('features')}
                  </a>
                </li>
                <li>
                  <a href="#specifications" className="text-primary-300 hover:text-primary-100 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {t('specifications')}
                  </a>
                </li>
                <li>
                  <a href="#order" className="text-primary-300 hover:text-primary-100 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {t('order')}
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Social Media */}
            <div className="text-center md:text-left">
              <h5 className="text-xl font-semibold mb-6 text-primary-50">{t('socialMedia')}</h5>
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