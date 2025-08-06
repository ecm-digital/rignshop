'use client';

import { TranslationContext, Messages } from '@/hooks/useTranslations';

interface TranslationProviderProps {
  children: React.ReactNode;
  messages: Messages;
  locale: string;
}

export default function TranslationProvider({ 
  children, 
  messages, 
  locale 
}: TranslationProviderProps) {
  return (
    <TranslationContext.Provider value={{ messages, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}