'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const variants = [
  {
    id: 'black',
    name: 'Midnight Black',
    color: 'Czarny',
    price: 99,
    description: 'Elegancki czarny pierścień z matowym wykończeniem PVD. Idealny do codziennego noszenia.',
    gradient: 'from-gray-800 to-gray-900',
    features: ['Matowe wykończenie', 'Odporne na zarysowania', 'Dyskretny design']
  },
  {
    id: 'silver',
    name: 'Titanium Silver',
    color: 'Srebrny',
    price: 99,
    description: 'Klasyczny srebrny pierścień z naturalnego tytanu. Ponadczasowy i uniwersalny.',
    gradient: 'from-gray-300 to-gray-400',
    features: ['Naturalny tytan', 'Hypoalergiczny', 'Klasyczny wygląd']
  },
  {
    id: 'gold',
    name: 'Rose Gold',
    color: 'Złoty',
    price: 99,
    description: 'Luksusowy pierścień w kolorze różowego złota. Wyróżnia się elegancją i stylem.',
    gradient: 'from-yellow-400 to-yellow-600',
    features: ['Powłoka PVD', 'Luksusowy wygląd', 'Limitowana edycja']
  }
];

export default function ProductVariants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wybierz swój
            <br />
            <span className="text-blue-600">idealny styl</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Smart Ring dostępny jest w trzech eleganckich wariantach kolorystycznych. 
            Każdy z nich łączy w sobie zaawansowaną technologię z wyjątkowym designem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main product image */}
              <motion.div
                key={selectedVariant.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${selectedVariant.gradient} rounded-full flex items-center justify-center shadow-2xl`}>
                  <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedVariant.gradient} rounded-full blur-3xl opacity-30 scale-110`}></div>
              
              {/* Price badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedVariant.price}€</div>
                  <div className="text-xs text-gray-600">+ darmowa dostawa</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Variant selection */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {selectedVariant.name}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {selectedVariant.description}
              </p>
            </div>

            {/* Variant selector */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Wybierz kolor:</h4>
              <div className="grid grid-cols-1 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedVariant.id === variant.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${variant.gradient} shadow-md`}></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{variant.name}</div>
                        <div className="text-sm text-gray-600">{variant.color}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{variant.price}€</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Cechy charakterystyczne:</h4>
              <div className="space-y-2">
                {selectedVariant.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size guide */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Przewodnik rozmiarów</h4>
              <div className="grid grid-cols-4 gap-2 text-center text-sm">
                <div className="p-2 bg-gray-50 rounded">
                  <div className="font-semibold">S</div>
                  <div className="text-gray-600">6-7</div>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <div className="font-semibold">M</div>
                  <div className="text-gray-600">8-9</div>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <div className="font-semibold">L</div>
                  <div className="text-gray-600">10-11</div>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <div className="font-semibold">XL</div>
                  <div className="text-gray-600">12-13</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Rozmiary US. Skorzystaj z naszego darmowego zestawu do pomiaru rozmiaru.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}