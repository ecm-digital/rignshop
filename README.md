# Smart Ring Store

Nowoczesny sklep internetowy dla inteligentnych pierścieni monitorujących zdrowie i sen.

## 🌍 Automatyczne wykrywanie kraju i języka

Aplikacja automatycznie wykrywa kraj użytkownika i ustawia odpowiedni język:

### Wykrywanie kraju:
- **Niemcy (DE)** → Język niemiecki 🇩🇪
- **Polska (PL)** → Język polski 🇵🇱  
- **Kraje anglojęzyczne** → Język angielski 🇺🇸
  - USA, Wielka Brytania, Kanada, Australia, Nowa Zelandia, Irlandia, RPA, Indie, Singapur, Hong Kong

### Priorytet ustawień języka:
1. **Parametr URL** (`?lang=pl|en|de`) - najwyższy priorytet
2. **Zapisany język** w localStorage
3. **Automatyczne wykrywanie kraju** przez IP geolokalizację
4. **Język przeglądarki** jako fallback
5. **Angielski** jako domyślny

### Jak to działa:
- Używa serwisu `ipapi.co` do wykrycia kraju na podstawie adresu IP
- Zapisuje wykryty kraj w localStorage
- Pokazuje wskaźnik "Auto" przy automatycznie ustawionym języku
- Wyświetla informację o wykrytym kraju w sekcji hero

## 🚀 Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`

## 🛠️ Technologie

- **Next.js 15** z Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Automatyczne wykrywanie kraju i języka**

## 📱 Funkcjonalności

- 🌍 Automatyczne wykrywanie kraju i języka
- 💤 Monitoring snu i aktywności
- 🌡️ Pomiar temperatury ciała
- ❤️ Monitorowanie tętna
- 🎨 Galeria produktów z wariantami kolorystycznymi
- 📱 Responsywny design
- 🔄 Hot Module Replacement (HMR)

## 🌐 Wspierane języki

- 🇵🇱 Polski (PL)
- 🇺🇸 Angielski (EN) 
- 🇩🇪 Niemiecki (DE)

## 📦 Wdrożenie

Projekt jest automatycznie wdrażany na Vercel przy każdym push na GitHub.