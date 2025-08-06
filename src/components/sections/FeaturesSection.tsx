'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '💤',
    title: 'Monitoring snu',
    description: 'Śledź jakość swojego snu, fazy REM i głębokiego snu. Otrzymuj spersonalizowane rekomendacje dla lepszego odpoczynku.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: '🏃',
    title: 'Aktywność fizyczna',
    description: 'Monitoruj kroki, kalorie, dystans i intensywność treningów. Ustaw cele i śledź swoje postępy.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: '🌡️',
    title: 'Temperatura ciała',
    description: 'Ciągłe monitorowanie temperatury ciała pomaga wykryć zmiany w zdrowiu i cyklu menstruacyjnym.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: '❤️',
    title: 'Tętno',
    description: 'Precyzyjne pomiary tętna spoczynkowego i podczas aktywności. Alerty przy nieprawidłowych wartościach.',
    color: 'from-red-500 to-red-600'
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Wszystko, czego potrzebujesz
            <br />
            <span className="text-blue-600">w jednym pierścieniu</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Ring łączy w sobie zaawansowane technologie monitorowania zdrowia 
            w eleganckim, dyskretnym urządzeniu, które nosisz 24/7.
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
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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
            { number: '7', label: 'dni pracy baterii', suffix: '' },
            { number: '99', label: 'precyzja pomiarów', suffix: '%' },
            { number: '24', label: 'godziny monitorowania', suffix: '/7' },
            { number: '50', label: 'metrów wodoodporność', suffix: 'm' }
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