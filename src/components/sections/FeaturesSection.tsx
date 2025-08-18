'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const features = [
  {
    icon: '💤',
    titleKey: 'sleepMonitoring',
    descKey: 'sleepDescription',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: '🏃',
    titleKey: 'activityMonitoring',
    descKey: 'activityDescription',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: '🌡️',
    titleKey: 'temperatureMonitoring',
    descKey: 'temperatureDescription',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: '❤️',
    titleKey: 'heartRate',
    descKey: 'heartRateDescription',
    color: 'from-red-500 to-red-600'
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();

  return (
    <section id="features-section" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('featuresTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featuresIntro')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {t(feature.titleKey as keyof typeof import('@/hooks/useLanguage').translations.pl)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey as keyof typeof import('@/hooks/useLanguage').translations.pl)}
                </p>
                
                {/* Hover effect line */}
                <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '7', label: t('batteryLife'), suffix: '' },
            { number: '99', label: t('measurementAccuracy'), suffix: '%' },
            { number: '24', label: t('monitoring'), suffix: '/7' },
            { number: '50', label: t('waterResistance'), suffix: 'm' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}