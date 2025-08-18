'use client';

import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';

const colorOptions = [
  { key: 'black', className: 'from-gray-900 to-gray-700', ring: 'bg-gray-900', accent: 'bg-gray-700' },
  { key: 'silver', className: 'from-zinc-200 to-zinc-50', ring: 'bg-zinc-200', accent: 'bg-zinc-400' },
  { key: 'gold', className: 'from-amber-300 to-yellow-200', ring: 'bg-amber-300', accent: 'bg-amber-400' },
] as const;

type ColorKey = typeof colorOptions[number]['key'];

function ImageWithFallback({ src, alt, sizes, className, priority = false }: { src: string; alt: string; sizes: string; className?: string; priority?: boolean }) {
  const [error, setError] = useState(false);
  const fallback = 'https://picsum.photos/1200/800?blur=1';
  return (
    <Image
      src={error ? fallback : src}
      alt={alt}
      fill
      className={className || 'object-cover'}
      sizes={sizes}
      priority={priority}
      unoptimized
      onError={() => setError(true)}
    />
  );
}

// Use user's uploaded images from public/Images
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

  const colorIndex = colorOptions.findIndex((c) => c.key === color) ?? 0;
  const current = colorOptions[colorIndex];
  const imgs = galleryImages[color];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t('galleryTitle')}</h3>
        </div>

        {/* Color variants selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-x-2">
              <span className="text-sm font-medium text-gray-600 mr-2">{t('colorVariants')}:</span>
              <button
                onClick={() => setColor('black')}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                  color === 'black' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-gray-900 mr-2"></span>
                {t('colorBlack')}
              </button>
              <button
                onClick={() => setColor('silver')}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                  color === 'silver' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-zinc-300 mr-2"></span>
                {t('colorSilver')}
              </button>
              <button
                onClick={() => setColor('gold')}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                  color === 'gold' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="w-3 h-3 rounded-full bg-amber-300 mr-2"></span>
                {t('colorGold')}
              </button>
            </div>
          </div>
        </div>

        {/* Single image (no cropping) */}
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${current.className} flex items-center justify-center`}>
            <div className="relative w-full h-[420px] md:h-[520px]">
              <ImageWithFallback
                src={imgs.hero}
                alt={`${t('galleryTitle')} - hero - ${color}`}
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
