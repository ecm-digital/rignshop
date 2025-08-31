'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';

export default function ExtendedProductSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('extendedHeroTitle')}
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            {t('extendedHeroSubtitle')}
          </p>
        </motion.div>

        {/* Health Intelligence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t('healthIntelligenceTitle')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('healthIntelligenceDesc')}
          </p>
        </motion.div>

        {/* Core Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center">
            {t('coreFeaturesTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-4xl mb-4">💤</div>
              <h4 className="text-xl font-semibold text-black mb-3">{t('sleepMonitoringExtended')}</h4>
              <p className="text-gray-700">{t('sleepMonitoringExtendedDesc')}</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="text-xl font-semibold text-black mb-3">{t('heartHealthTitle')}</h4>
              <p className="text-gray-700">{t('heartHealthDesc')}</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="text-4xl mb-4">🏃</div>
              <h4 className="text-xl font-semibold text-black mb-3">{t('activityTrackingTitle')}</h4>
              <p className="text-gray-700">{t('activityTrackingDesc')}</p>
            </div>
          </div>
        </motion.div>

        {/* Modern Life Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center">
            {t('modernLifeTitle')}
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* No Recurring Costs */}
            <div className="bg-black text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">{t('noRecurringCostsTitle')}</h4>
              <p className="text-gray-300 mb-6">{t('noRecurringCostsDesc')}</p>
              <div className="space-y-2">
                {t('noRecurringCostsBenefits').split('\n').map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-white">✓</span>
                    <span className="text-gray-300">{benefit.replace('• ', '')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ultra-Lightweight */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-black mb-4">{t('ultraLightweightTitle')}</h4>
              <p className="text-gray-700 mb-6">{t('ultraLightweightDesc')}</p>
              <div className="space-y-2">
                {t('ultraLightweightBenefits').split('\n').map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-black">✓</span>
                    <span className="text-gray-700">{benefit.replace('• ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Battery Life */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-black mb-4">{t('batteryLifeExtendedTitle')}</h4>
              <p className="text-gray-700 mb-6">{t('batteryLifeExtendedDesc')}</p>
              <div className="space-y-2">
                {t('batteryLifeExtendedBenefits').split('\n').map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-black">✓</span>
                    <span className="text-gray-700">{benefit.replace('• ', '')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Precision Sensors */}
            <div className="bg-black text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">{t('precisionSensorsTitle')}</h4>
              <p className="text-gray-300 mb-6">{t('precisionSensorsDesc')}</p>
              <div className="space-y-2">
                {t('precisionSensorsBenefits').split('\n').map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-white">✓</span>
                    <span className="text-gray-300">{benefit.replace('• ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Health Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              {t('healthInsightsTitle')}
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('healthInsightsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">{t('sleepAnalysisTitle')}</h4>
              <p className="text-gray-700">{t('sleepAnalysisDesc')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">{t('heartHealthAnalysisTitle')}</h4>
              <p className="text-gray-700">{t('heartHealthAnalysisDesc')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">{t('activityMonitoringAnalysisTitle')}</h4>
              <p className="text-gray-700">{t('activityMonitoringAnalysisDesc')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">{t('temperatureInsightsTitle')}</h4>
              <p className="text-gray-700">{t('temperatureInsightsDesc')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">{t('stressManagementTitle')}</h4>
              <p className="text-gray-700">{t('stressManagementDesc')}</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">{t('dailyReportsTitle')}</h4>
              <p className="text-gray-700">{t('dailyReportsDesc')}</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center">
            {t('technicalSpecsTitle')}
          </h3>
          
          <div className="bg-black text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-gray-300">{t('technicalSpecsModel')}</p>
                <p className="text-gray-300">{t('technicalSpecsConnectivity')}</p>
                <p className="text-gray-300">{t('technicalSpecsWeight')}</p>
                <p className="text-gray-300">{t('technicalSpecsBattery')}</p>
                <p className="text-gray-300">{t('technicalSpecsCharging')}</p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-300">{t('technicalSpecsWaterResistance')}</p>
                <p className="text-gray-300">{t('technicalSpecsSensors')}</p>
                <p className="text-gray-300">{t('technicalSpecsCompatibility')}</p>
                <p className="text-gray-300">{t('technicalSpecsWarranty')}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold mb-4">{t('availableOptionsTitle')}</h4>
              <p className="text-gray-300 mb-2">{t('availableOptionsSizes')}</p>
              <p className="text-gray-300">{t('availableOptionsColors')}</p>
            </div>
          </div>
        </motion.div>

        {/* Product Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center">
            {t('productBenefitsTitle')}
          </h3>
          
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="space-y-4">
              {t('productBenefitsList').split('\n').map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-black text-xl">✓</span>
                  <span className="text-gray-700 text-lg">{benefit.replace('• ', '')}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Price and CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-black text-white p-12 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('priceTitle')}</h3>
            <p className="text-gray-300 text-lg mb-8">{t('shippingInfo')}</p>
            
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-4">{t('readyToTransformTitle')}</h4>
              <p className="text-gray-300">{t('readyToTransformDesc')}</p>
            </div>
            
            <a 
              href="#order" 
              className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {t('orderNow')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}