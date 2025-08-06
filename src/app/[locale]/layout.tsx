import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['pl', 'en', 'de'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return {
    title: locale === 'pl' 
      ? 'Smart Ring - Nowoczesny sposób na zdrowy sen'
      : locale === 'en'
      ? 'Smart Ring - Modern way to healthy sleep'
      : 'Smart Ring - Moderne Art für gesunden Schlaf',
    description: locale === 'pl'
      ? 'Inteligentny pierścień do monitorowania zdrowia i snu'
      : locale === 'en'
      ? 'Smart ring for health and sleep monitoring'
      : 'Intelligenter Ring für Gesundheits- und Schlafüberwachung',
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}