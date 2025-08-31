'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

function ImageWithFallback({ src, alt, className, onClick }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fallback = '/Images/Black.webp';

  return (
    <div className={`relative w-full h-full overflow-hidden ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-2xl" />
      )}
      <img
        src={error ? fallback : src}
        alt={alt}
        className={`w-full h-full ${className || 'object-cover'} transition-opacity duration-300`}
        onLoad={() => {
          console.log('Image loaded:', src);
          setIsLoading(false);
        }}
        onError={(e) => {
          console.log('Image error:', src, e);
          setError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}

const colorOptions = [
  { key: 'black', name: 'Black', color: '#1a1a1a', bgColor: 'bg-gray-900', gradient: 'from-gray-900 to-gray-700' },
  { key: 'silver', name: 'Silver', color: '#c0c0c0', bgColor: 'bg-zinc-300', gradient: 'from-zinc-200 to-zinc-50' },
  { key: 'gold', name: 'Gold', color: '#ffd700', bgColor: 'bg-amber-300', gradient: 'from-amber-300 to-yellow-200' }
] as const;

type ColorKey = typeof colorOptions[number]['key'];

const galleryImages: Record<ColorKey, { hero: string; close1: string; close2: string; close3: string }> = {
  black: {
    hero: '/Images/Black.webp',
    close1: '/Images/Black.webp',
    close2: '/Images/Black.webp',
    close3: '/Images/Black.webp',
  },
  silver: {
    hero: '/Images/Silver.webp',
    close1: '/Images/Silver.webp',
    close2: '/Images/Silver.webp',
    close3: '/Images/Silver.webp',
  },
  gold: {
    hero: '/Images/Gold.webp',
    close1: '/Images/Gold.webp',
    close2: '/Images/Gold.webp',
    close3: '/Images/Gold.webp',
  },
};

export default function ProductGallery() {
  const { t } = useLanguage();
  const [color, setColor] = useState<ColorKey>('black');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<'hero' | 'close1' | 'close2' | 'close3'>('hero');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentColor = colorOptions.find(c => c.key === color)!;
  const imgs = galleryImages[color];

  const handleColorChange = (colorKey: ColorKey) => {
    setColor(colorKey);
    setActiveImage('hero');
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('galleryTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Odkryj każdy szczegół naszego inteligentnego pierścienia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image Section */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className={`aspect-square bg-gradient-to-br ${currentColor.gradient} rounded-3xl p-12 shadow-lg max-w-2xl mx-auto`}>
                <div
                  key={`${color}-${activeImage}`}
                  className="w-full h-full relative cursor-pointer group"
                  onClick={() => openLightbox(imgs[activeImage])}
                >
                  <ImageWithFallback
                    src={imgs[activeImage]}
                    alt={`Smart Ring ${color} - ${activeImage}`}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(imgs).map(([key, src]) => (
                <button
                  key={key}
                  onClick={() => setActiveImage(key as 'hero' | 'close1' | 'close2' | 'close3')}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === key
                      ? 'border-gray-900 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-400 hover:scale-102'
                  }`}
                >
                  <ImageWithFallback
                    src={src}
                    alt={`Thumbnail ${key}`}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
                {t('colorVariants')}
              </h3>
              <div className="flex gap-4 justify-center">
                {colorOptions.map((colorOption, index) => (
                  <motion.button
                    key={colorOption.key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleColorChange(colorOption.key)}
                    className={`group relative p-1 rounded-2xl transition-all duration-300 ${
                      color === colorOption.key
                        ? 'ring-2 ring-gray-900 ring-offset-2'
                        : 'hover:ring-2 hover:ring-gray-400 hover:ring-offset-2'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-xl ${colorOption.bgColor} flex items-center justify-center shadow-md`}>
                      <div className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: colorOption.color }} />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {colorOption.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={closeLightbox}
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
              
              <ImageWithFallback
                src={selectedImage}
                alt={`Smart Ring ${color} - Enlarged view`}
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
