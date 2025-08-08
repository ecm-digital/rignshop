'use client';

import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Smart Ring</h1>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {t('features')}
              </a>
              <a href="#specifications" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {t('specifications')}
              </a>
              <a href="#order" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {t('order')}
              </a>
            </nav>

            {/* Language selector and CTA */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <a
                href="#order"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                {t('orderNow')}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('heroTitle')}
              <br />
              <span className="text-blue-600">{t('heroTitleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('heroDescription')}
            </p>
            
            {/* Product visualization */}
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              {t('orderNowPrice')}
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('featuresTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">💤</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{t('sleepMonitoring')}</h4>
              <p className="text-gray-600">{t('sleepDescription')}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🏃</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{t('activityMonitoring')}</h4>
              <p className="text-gray-600">{t('activityDescription')}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🌡️</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{t('temperatureMonitoring')}</h4>
              <p className="text-gray-600">{t('temperatureDescription')}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{t('heartRate')}</h4>
              <p className="text-gray-600">{t('heartRateDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">7</div>
              <div className="text-sm md:text-base opacity-90">dni pracy baterii</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
              <div className="text-sm md:text-base opacity-90">precyzja pomiarów</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">monitorowanie</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50m</div>
              <div className="text-sm md:text-base opacity-90">wodoodporność</div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t('orderTitle')}
          </h3>
          <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-xl">
            <div className="text-3xl font-bold text-gray-900 mb-6">{t('price')}</div>
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t('freeShipping')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t('returnPolicy')}</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{t('warranty')}</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              {t('orderNow')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">Smart Ring</h4>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            {t('footerDescription')}
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            {t('copyright')}
          </p>
        </div>
      </footer>
    </main>
  );
}