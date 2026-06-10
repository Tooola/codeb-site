import { createContext, useState, useContext, useEffect } from 'react';
import fr from './fr';
import en from './en';

const translations = { fr, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'fr');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  // Helper function to get nested keys
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (let k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    // Fallback to french if translation is missing
    if (value === undefined && lang !== 'fr') {
      value = translations['fr'];
      for (let k of keys) {
        if (value === undefined) break;
        value = value[k];
      }
    }
    
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => useContext(LanguageContext);
