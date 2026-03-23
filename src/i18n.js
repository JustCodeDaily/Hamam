/**
 * i18n.js
 * Initializes i18next with react-i18next for DE/EN language support.
 * Language preference is persisted in localStorage so it survives page reloads.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from './locales/de.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    // Default to German since this is a local German business
    lng: localStorage.getItem('hamam_lang') || 'de',
    fallbackLng: 'de',
    interpolation: {
      // React already escapes by default, so no need for i18next escaping
      escapeValue: false,
    },
  });

// Persist language selection across reloads
i18n.on('languageChanged', (lang) => {
  localStorage.setItem('hamam_lang', lang);
});

export default i18n;
