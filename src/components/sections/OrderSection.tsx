'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';

// Apple-style Input component
const Input = ({ type = 'text', name, value, onChange, placeholder, required = false, className = '' }: {
  type?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={`px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ${className}`}
  />
);



export default function OrderSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
    country: 'Polska',
    variant: 'black',
    size: 'M'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Order submitted:', formData);
  };

  return (
    <section id="order-section" className="py-32 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('orderTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            {t('orderSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
          {/* Order summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit sticky top-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 tracking-tight">Podsumowanie zamówienia</h3>
            
            {/* Product preview */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">Smart Ring</h4>
                  <p className="text-gray-600">Midnight Black • Rozmiar M</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900 text-xl">{t('price')}</div>
                </div>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Cena produktu</span>
                <span className="text-gray-900 font-semibold">{t('price')}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">Dostawa</span>
                <span className="text-black font-semibold">Gratis</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold text-xl">Razem</span>
                  <span className="text-gray-900 font-bold text-2xl">{t('price')}</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { text: t('freeShipping'), icon: '🚚' },
                { text: t('returnPolicy'), icon: '↩️' },
                { text: t('warranty'), icon: '🛡️' },
                { text: 'Bezpieczne płatności', icon: '🔒' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50 border border-gray-200"
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Order form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-10 tracking-tight">Dane do zamówienia</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal data */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imię *
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Jan"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nazwisko *
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Kowalski"
                    required
                    className="w-full"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jan@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+48 123 456 789"
                    required
                    className="w-full"
                  />
                </div>
              </motion.div>
              
              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 tracking-tight">Adres dostawy</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ulica i numer *
                  </label>
                  <Input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="ul. Przykładowa 123"
                    required
                    className="w-full"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Miasto *
                    </label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Warszawa"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kod pocztowy *
                    </label>
                    <Input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="00-000"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Product options */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 tracking-tight">Wybór produktu</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kolor
                    </label>
                    <select
                      name="variant"
                      value={formData.variant}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="black">Midnight Black</option>
                      <option value="silver">Titanium Silver</option>
                      <option value="gold">Rose Gold (+100 zł)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rozmiar
                    </label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="S">S (6-7 US)</option>
                      <option value="M">M (8-9 US)</option>
                      <option value="L">L (10-11 US)</option>
                      <option value="XL">XL (12-13 US)</option>
                    </select>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="pt-8"
              >
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full"
                >
                  Zamów teraz - 1 299 zł
                </Button>
                <p className="text-xs text-gray-600 text-center mt-3">
                  Klikając &quot;Zamów teraz&quot; akceptujesz nasze warunki sprzedaży i politykę prywatności
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}