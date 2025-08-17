'use client';

export default function DetailsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Aligned heading (outside grid to zachować spójny margines) */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Szczegółowy opis</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Copy */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Smart Ring to elegancki, wodoodporny pierścień do monitorowania zdrowia i
              aktywności. Mierzy tętno (HR/HRV), saturację SpO₂, sen (w tym fazy REM),
              temperaturę skóry oraz dzienną aktywność. Dzięki subtelnym trendom i
              wskazówkom pomaga poprawić regenerację, sen oraz kondycję — bez
              rozpraszania i zbędnych ekranów.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">💤</div>
                <h3 className="font-semibold text-gray-900 mb-1">Sen i regeneracja</h3>
                <p className="text-gray-600 text-sm">Analiza faz snu (REM, głęboki), wskazówki poprawy energii.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">🏃</div>
                <h3 className="font-semibold text-gray-900 mb-1">Aktywność i sport</h3>
                <p className="text-gray-600 text-sm">Kroki, kalorie, dystans i tryby sportowe; cele tygodniowe.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">❤️</div>
                <h3 className="font-semibold text-gray-900 mb-1">Tętno i HRV</h3>
                <p className="text-gray-600 text-sm">Całodobowe pomiary HR/HRV i stresu dla pełnego obrazu zdrowia.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">🔋</div>
                <h3 className="font-semibold text-gray-900 mb-1">Długa praca</h3>
                <p className="text-gray-600 text-sm">Bateria 5–7 dni, ładowanie w magnetycznym etui ~1,5 h.</p>
              </div>
            </div>

            <a href="#order" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-900 text-white hover:bg-primary-800 shadow-md border border-primary-700 transition">
              Zamów teraz
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Feature list */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Co zyskujesz</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Wgląd w sen, aktywność, temperaturę skóry, tętno i SpO₂ w jednym miejscu.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Subtelne wskazówki oparte na trendach — bez rozpraszających ekranów.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>5–7 dni pracy na baterii i szybkie ładowanie w magnetycznym etui.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600">✓</span><span>Wygodę i styl — lekka konstrukcja, wodoodporność 5 ATM.</span></li>
            </ul>
            <div className="mt-6 text-sm text-gray-500">
              Kompatybilność: Android 5.1+ / iOS 8.0+ • Aplikacja: QRing • Bluetooth 5.2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
