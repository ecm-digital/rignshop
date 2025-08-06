import { useContext, createContext } from 'react';

export interface Messages {
  [key: string]: string | string[] | Messages;
}

export const TranslationContext = createContext<{
  messages: Messages;
  locale: string;
}>({
  messages: {},
  locale: 'pl'
});

export function useTranslations(namespace?: string) {
  const { messages } = useContext(TranslationContext);
  
  return (key: string, values?: Record<string, string | number>) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const keys = fullKey.split('.');
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    if (typeof value !== 'string') {
      return fullKey; // Return key if translation not found
    }
    
    // Simple placeholder replacement
    if (values) {
      return value.replace(/\{(\w+)\}/g, (match: string, key: string) => {
        return values[key]?.toString() || match;
      });
    }
    
    return value;
  };
}