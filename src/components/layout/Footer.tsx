export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Smart Ring</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Nowoczesne rozwiązania do monitorowania zdrowia i snu. 
              Dołącz do tysięcy zadowolonych użytkowników na całym świecie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li><a href="#features-section" className="text-gray-400 hover:text-white transition-colors duration-200">Funkcje</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Specyfikacje</a></li>
              <li><a href="#order-section" className="text-gray-400 hover:text-white transition-colors duration-200">Zamów</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Aplikacja</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Wsparcie</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Kontakt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Gwarancja</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Zwroty</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Smart Ring. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Polityka prywatności
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Warunki użytkowania
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}