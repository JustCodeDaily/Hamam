import { useState } from 'react';

export default function Header() {
  const [language, setLanguage] = useState('de');

  const navItems = {
    de: [
      { label: 'Home', href: '#' },
      { label: 'Anwendungen', href: '#' },
      { label: 'Gutscheine', href: '#' },
      { label: 'Kontakt', href: '#' },
    ],
    en: [
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Vouchers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  };

  const ctaLabel = language === 'de' ? 'Termin buchen' : 'Book Appointment';

  return (
    <header className="bg-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Hamam Braunschweig
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems[language].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle & CTA */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage('de')}
              className={`font-semibold transition-colors ${
                language === 'de'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              DE
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`font-semibold transition-colors ${
                language === 'en'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              EN
            </button>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold">
            {ctaLabel}
          </button>
        </div>
      </div>
    </header>
  );
}
