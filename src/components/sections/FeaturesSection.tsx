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
    gradient: 'from-gray-100 to-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-black'
  },
  {
    icon: '🏃',
    titleKey: 'activityMonitoring',
    descKey: 'activityDescription',
    gradient: 'from-gray-100 to-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-black'
  },
  {
    icon: '🌡️',
    titleKey: 'temperatureMonitoring',
    descKey: 'temperatureDescription',
    gradient: 'from-gray-100 to-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-black'
  },
  {
    icon: '❤️',
    titleKey: 'heartRate',
    descKey: 'heartRateDescription',
    gradient: 'from-gray-100 to-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-black'
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="features-section" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('featuresIntro')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {t(feature.titleKey as keyof typeof import('@/hooks/useLanguage').translations.pl)}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {t(feature.descKey as keyof typeof import('@/hooks/useLanguage').translations.pl)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}