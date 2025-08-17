'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const specifications = [
  {
    category: 'Wymiary i waga',
    specs: [
      { name: 'Średnice wewnętrzne', value: '18,3 / 19,1 / 20,0 / 20,8 / 21,6 mm', description: 'Rozmiary: 8 / 9 / 10 / 11 / 12' },
      { name: 'Waga', value: 'ok. 3,5 g', description: 'Ultralekka konstrukcja' },
      { name: 'Materiał', value: 'Stal nierdzewna', description: 'Trwała i hipoalergiczna' },
    ]
  },
  {
    category: 'Bateria i ładowanie',
    specs: [
      { name: 'Pojemność', value: '14 mAh (od rozmiaru 11: 18 mAh)', description: 'Polimer‑Li‑Ion' },
      { name: 'Czas pracy', value: '5–7 dni', description: 'Stan czuwania do 15 dni' },
      { name: 'Czas ładowania', value: 'ok. 1,5 h', description: 'Pełne naładowanie' },
      { name: 'Ładowanie', value: 'Magnetyczne etui', description: 'Etui + kabel w zestawie' },
    ]
  },
  {
    category: 'Łączność i układ',
    specs: [
      { name: 'Bluetooth', value: '5.2 Low‑Power', description: 'Stabilna, energooszczędna' },
      { name: 'Chipset', value: 'Realtek RTL8762 ESF', description: 'Wydajny układ SoC' },
      { name: 'Aplikacja', value: 'QRing', description: 'Android 5.1+ / iOS 8.0+' },
      { name: 'Języki', value: '> 30', description: 'Wielojęzyczny interfejs' },
    ]
  },
  {
    category: 'Czujniki i pomiary',
    specs: [
      { name: 'Tętno / HRV', value: 'Vcare VC30F‑S', description: 'Pomiary 24/7' },
      { name: 'Akcelerometr', value: 'ST LIS2DOCTR', description: 'Kroki, aktywność, tryby sportowe' },
      { name: 'Temperatura skóry', value: 'Trend dobowy', description: 'Wczesne wykrywanie obciążenia' },
      { name: 'SpO₂ / stres / sen', value: 'Tak', description: 'Analiza jakości snu (w tym REM)' },
    ]
  },
  {
    category: 'Odporność i wykonanie',
    specs: [
      { name: 'Wodoodporność', value: '5 ATM', description: 'Codzienne użytkowanie, sport' },
      { name: 'Obudowa', value: 'Stal nierdzewna', description: 'Elegancka i trwała' },
      { name: 'Etui ładujące', value: 'Magnetyczne', description: 'Bezpieczne przechowywanie i ładowanie' },
      { name: 'Zawartość zestawu', value: 'Ring, etui, kabel, instrukcja', description: 'Komplet startowy' },
    ]
  }
];

export default function SpecsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Specyfikacje
            <br />
            <span className="text-blue-600">techniczne</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kluczowe parametry Smart Ring: lekki, wodoodporny, z bogatym zestawem czujników i długim czasem pracy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {specifications.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-8"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(
                    expandedCategory === category.category ? null : category.category
                  )}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCategory === category.category ? 'auto' : 0,
                    opacity: expandedCategory === category.category ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.specs.map((spec) => (
                        <div
                          key={spec.name}
                          className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-gray-900">{spec.name}</span>
                            <span className="font-bold text-blue-600">{spec.value}</span>
                          </div>
                          <p className="text-sm text-gray-600">{spec.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Dlaczego Smart Ring?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Najdłuższa bateria</h4>
              <p className="text-gray-600">7 dni pracy vs 1-2 dni u konkurencji</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Najlżejszy design</h4>
              <p className="text-gray-600">4-6g vs 8-12g innych urządzeń</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Najdokładniejsze pomiary</h4>
              <p className="text-gray-600">99% precyzja vs 85-90% u innych</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}