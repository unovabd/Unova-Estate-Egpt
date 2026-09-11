'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('unova_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang && browserLang.startsWith('ar')) {
        setLanguage('ar');
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('unova_lang', language);
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtl ? 'ar-EG' : 'en-EG';
    if (isRtl) {
      document.documentElement.classList.add('rtl');
      document.body.style.fontFamily = "'Cairo', 'Public Sans', sans-serif";
    } else {
      document.documentElement.classList.remove('rtl');
      document.body.style.fontFamily = "'Public Sans', sans-serif";
    }
  }, [language, mounted]);

  const toggleLanguage = (lang) => {
    const targetLang = lang || (language === 'en' ? 'ar' : 'en');
    setLanguage(targetLang);
  };

  const t = (keyPath, fallback = '') => {
    const keys = keyPath.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        let fallbackObj = translations['en'];
        for (const fKey of keys) {
          if (fallbackObj && fallbackObj[fKey] !== undefined) {
            fallbackObj = fallbackObj[fKey];
          } else {
            return fallback || keyPath;
          }
        }
        return fallbackObj;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRtl: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
