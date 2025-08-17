'use client';

import { useState } from 'react';

const faqs = [
  { q: 'Jak długo działa bateria?', a: 'Typowo 5–7 dni przy normalnym użytkowaniu; ładowanie trwa około 1,5 godziny w magnetycznym etui.' },
  { q: 'Czy pierścień jest wodoodporny?', a: 'Tak, 5 ATM — odporny na zachlapania i pływanie; unikaj gorącej wody/sauny.' },
  { q: 'Czy działa z moim telefonem?', a: 'Tak, Android 5.1+ oraz iOS 8.0+ poprzez aplikację QRing.' },
  { q: 'Jak dobrać rozmiar?', a: 'Średnice wewnętrzne: 18,3/19,1/20,0/20,8/21,6 mm (rozmiary 8–12). Najlepiej zmierzyć wewnętrzny obwód posiadanego pierścionka.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/40" />
      <div className="relative container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">FAQ</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {faqs.map((item, idx) => (
            <div key={idx} className="divide-y divide-gray-100">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-medium text-gray-900">{item.q}</span>
                <span className="text-gray-500">{open === idx ? '−' : '+'}</span>
              </button>
              <div className={`px-6 pb-5 text-gray-700 ${open === idx ? '' : 'hidden'}`}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
