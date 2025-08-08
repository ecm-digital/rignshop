'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Smart Ring
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features-section" 
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Funkcje
            </a>
            <a 
              href="#specs-section" 
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Specyfikacje
            </a>
            <a 
              href="#order-section" 
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Zamów
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center">
            <a
              href="#order-section"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Zamów teraz
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}