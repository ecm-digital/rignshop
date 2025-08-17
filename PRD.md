# Smart Ring Store — Dokument Wymagań Produktowych (PRD)

## 1. Kontekst i cele
- **Produkt**: Jednostronicowy serwis marketingowo‑sprzedażowy (landing page) z koszykiem/checkoutem.
- **Cele**:
  - Skuteczna prezentacja wartości produktu (sen, aktywność, temperatura, tętno).
  - Konwersja do zakupu (pierwsza akcja: „Zamów teraz”).
  - Szybkość na mobile, dostępność i lokalizacja (PL/EN/DE).
- **Status**: To jest **MVP**. Docelowo pełny sklep będzie uruchomiony na **Shopify** (landing może pozostać jako strona kampanijna lub zostać przeniesiony do szablonu Shopify).

## 2. KPI / metryki sukcesu
- **Konwersja do checkoutu (CVR)**: ≥ 2,5%.
- **Wydajność (mobile)**: LCP ≤ 2,5 s (p75), CLS ≤ 0,1, INP ≤ 200 ms.
- **Bounce rate hero**: ≤ 45%.
- **Błędy checkoutu**: < 0,5%.

## 3. Grupy docelowe
- **Wellness seeker** (25–40): sen/stres.
- **Fitness enthusiast** (18–35): wydolność/odzysk.
- **Biohacker** (25–45): decyzje oparte na danych.

## 4. Zakres (MVP)
- Strona główna:
  - Hero: pełnoekranowe wideo w tle + CTA (scroll do zamówienia).
  - Karuzela funkcji (sen, aktywność, temperatura, tętno) z rozwijaniem „+”.
  - Galeria produktu + warianty kolorystyczne.
  - Pasek statystyk (bateria, dokładność, monitoring, wodoszczelność).
  - Sekcja zamówienia (cena, USP, CTA do checkoutu).
  - Stopka (linki, social).
- **Lokalizacja**: PL / EN / DE (istniejący `useLanguage`).
- **Płatności (tymczasowo w MVP)**: Stripe (jeden produkt, jedna cena). Po starcie sklepu na Shopify – migracja do **Shopify Checkout / Storefront API**.
- **E‑mail**: potwierdzenia przez Resend (lub inny provider transakcyjny).
- **Analityka**: pageview + zdarzenia CTA/checkout (GA4 lub Plausible).

### Poza zakresem (V2+)
- Konta użytkownika i historia zamówień.
- Subskrypcje/membership.
- CMS i stany magazynowe.

## 5. Architektura informacji
- `/` — strona główna (wszystkie sekcje).
- `/api/orders` — utworzenie sesji Stripe.
- `/api/contact` — formularz kontaktowy.

## 6. Wymagania funkcjonalne
- **Hero**: autoplay wideo (muted, playsinline), poster/fallback; CTA przewija do sekcji zamówień.
- **Karuzela funkcji**:
  - Przewijanie horyzontalne (snap), strzałki i kropki, wsparcie touch/drag.
  - „Plus” rozwija kartę (lekki zoom + krótki opis), ponowne kliknięcie zwija.
  - Autoplay z pauzą przy hover/utratą widoczności.
- **Galeria**: zdjęcie główne + zbliżenia; przełączanie wariantów.
- **Zamówienie**: cena, listy USP, przycisk do Stripe.
- **I18n**: kopie z `useLanguage` (PL/EN/DE).
- **A11y**: widoczne focusy, alt text, aria‑label, kontrast ≥ 4,5:1.
- **SEO**: tytuł/opis, meta dla social, sitemap, robots.

## 7. Wymagania niefunkcjonalne
- **Wydajność**: lazy‑load obrazów, zoptymalizowane wideo/poster; JS first‑load < 130 kB.
- **Dostępność/niezawodność**: ≥ 99,9%.
- **Prywatność**: analityka bezciasteczkowa preferowana; PCI po stronie Stripe.
- **Bezpieczeństwo**: rate‑limit API, walidacje Zod, sanityzacja danych.

## 8. Integracje
- **Stripe**: płatność jednorazowa (PRICE_ID z env), success/cancel URL.
- **Resend**: API Key z env; szablon e‑mail z danymi zamówienia.
- **Shopify (docelowo)**: Storefront API/Checkout; synchronizacja produktu/ceny.

## 9. Konfiguracja i środowiska
- Pliki: `.env.local`, `.env.production`.
  - `NEXT_PUBLIC_SITE_URL`
  - `STRIPE_SECRET_KEY`
  - `STRIPE_PRICE_ID`
  - `RESEND_API_KEY`
- Start produkcyjny: `npm run build` + `npm start` (port konfigurowalny; dev: 3003).

## 10. Analityka — zdarzenia
- `page_view` (path, locale)
- `cta_click` (section, label)
- `checkout_started`
- `purchase_success` (amount, currency)

## 11. Kryteria akceptacji (QA)
- Wideo autoplay działa na iOS/Android (muted/playsinline), widoczny fallback.
- Karuzela: snap, strzałki, kropki, rozwijanie „+”, obrazy widoczne na wszystkich kartach.
- Lighthouse mobile: Perf ≥ 90, SEO ≥ 90, Best Practices ≥ 90, A11y ≥ 90.
- Stripe (tryb testowy) kończy się sukcesem i wraca pod właściwy adres.
- Wszystkie języki renderują bez brakujących kluczy.

## 12. Ryzyka i mitigacja
- Ciężkie wideo → kompresja, skrócenie, dobry poster.
- Zewnętrzne hosty obrazów → lokalne fallbacki.
- iOS autoplay policy → `muted`, `playsinline`, retry po interakcji.

## 13. Harmonogram (orientacyjnie)
- Tydz. 1: UI MVP (hero, karuzela, i18n, wideo).
- Tydz. 2: Checkout, e‑mail, analityka, SEO.
- Tydz. 3: Wydajność/A11y, QA, kontent, publikacja.

## 14. Plan migracji do Shopify (high‑level)
- Przygotować model produktu w Shopify (produkt, warianty, cena, podatki, wysyłka).
- Przenieść checkout z Stripe do **Shopify Checkout** (lub użyć **Storefront API** w UI).
- Zastąpić API zamówień endpointami Shopify; dodać webhooks (order/create).
- Zweryfikować i18n i SEO po migracji (adresy, sitemap, meta).
- Testy end‑to‑end (płatności, maile, stany zamówienia) przed switchem DNS.
