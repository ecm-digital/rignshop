'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' }
  ];

  const quickLinks = [
    { name: 'Funkcje', href: '#features-section' },
    { name: 'Specyfikacje', href: '#specs-section' },
    { name: 'Zamów', href: '#order-section' },
    { name: 'Aplikacja', href: '#app-section' }
  ];

  const supportLinks = [
    { name: 'Kontakt', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Gwarancja', href: '#warranty' },
    { name: 'Zwroty', href: '#returns' }
  ];

  const legalLinks = [
    { name: 'Polityka prywatności', href: '#privacy' },
    { name: 'Warunki użytkowania', href: '#terms' },
    { name: 'Cookies', href: '#cookies' }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-20" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Smart Ring</h3>
              <p className="text-lg text-gray-600 max-w-md leading-relaxed font-light">
                Nowoczesne rozwiązania do monitorowania zdrowia i snu. 
                Dołącz do tysięcy zadowolonych użytkowników na całym świecie.
              </p>
            </div>
            
            {/* Social media */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Śledź nas</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="w-12 h-12 bg-gray-50 hover:bg-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-gray-200 hover:border-gray-300"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">Nawigacja</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">Wsparcie</h4>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-600 mb-4 font-light">
              Otrzymuj najnowsze informacje o produktach i promocjach.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Twój email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
              />
              <Button variant="primary" size="md" className="rounded-l-none rounded-r-xl">
                →
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-500 text-sm font-light">
              © 2024 Smart Ring. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200 font-light"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}