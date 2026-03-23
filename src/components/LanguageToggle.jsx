/**
 * LanguageToggle.jsx
 * Renders "DE | EN" toggle in the Navbar.
 * Clicking a language code sets i18next to that language.
 * The active language is highlighted in the brand terracotta color.
 */

import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const setLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium tracking-wider">
      {/* German option */}
      <button
        onClick={() => setLang('de')}
        aria-label="Deutsche Sprache"
        className={`transition-colors duration-200 px-1 ${
          currentLang === 'de'
            ? 'text-[#C1674A] font-semibold'
            : 'text-[#2C2C2C] hover:text-[#C1674A] opacity-60'
        }`}
      >
        DE
      </button>

      {/* Visual separator */}
      <span className="text-[#2C2C2C] opacity-30 select-none">|</span>

      {/* English option */}
      <button
        onClick={() => setLang('en')}
        aria-label="English language"
        className={`transition-colors duration-200 px-1 ${
          currentLang === 'en'
            ? 'text-[#C1674A] font-semibold'
            : 'text-[#2C2C2C] hover:text-[#C1674A] opacity-60'
        }`}
      >
        EN
      </button>
    </div>
  )
}
