'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  const t = useTranslations('hero');
  
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order-section');
    orderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Debug info */}
        <div className="absolute top-4 left-4 z-20 bg-black text-white p-2 text-xs">
          Video Debug: Check console
        </div>
        
        {/* Simple video test */}
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadStart={() => console.log('🎬 Video loading started')}
          onCanPlay={() => console.log('✅ Video can play')}
          onError={(e) => console.error('❌ Video error:', e)}
          onLoadedData={() => console.log('📊 Video data loaded')}
          onLoad={() => console.log('🔄 Video load event')}
          ref={(el) => {
            if (el) {
              console.log('🎥 Video element mounted:', el);
              console.log('🔗 Video src:', el.src);
              console.log('📱 Video readyState:', el.readyState);
              console.log('🎯 Video currentSrc:', el.currentSrc);
            }
          }}
        />
        
        {/* Fallback background if video fails */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800"></div>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
          >
            {t('title')}
            <br />
            <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {t('description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              {t('orderNow')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 text-xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
              onClick={() => {
                const featuresSection = document.getElementById('features-section');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('learnMore')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating smart ring visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden xl:block"
      >
        <div className="relative">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full opacity-80"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-30 scale-150"></div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}