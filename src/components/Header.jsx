import { Menu } from 'lucide-react';

export default function Header() {
  const navItems = [
    { label: 'Startseite', href: '#' },
    { label: 'Anwendungen', href: '#' },
    { label: 'Gutscheine', href: '#' },
    { label: 'Über uns', href: '#' },
    { label: 'Kontakt', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto bg-hamam-dark-nav/95 backdrop-blur-md rounded-2xl shadow-lg shadow-black/20 border border-hamam-dark-border/50 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-tight flex-shrink-0">
            <div className="text-hamam-cream font-heading text-xl font-bold tracking-wide">
              HAMAM
            </div>
            <div className="text-hamam-dark-muted font-body text-xs tracking-widest uppercase">
              Braunschweig
            </div>
          </div>

          {/* Navigation - Centered (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-hamam-dark-muted hover:text-hamam-cream text-sm font-medium font-body transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="https://www.treatwell.de/ort/hamam-braunschweig/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-hamam-terracotta hover:bg-hamam-terracotta-dark text-white text-sm font-semibold font-body px-5 py-2.5 rounded-xl transition-colors duration-200 flex-shrink-0"
          >
            Termin buchen
          </a>

          {/* Mobile hamburger menu */}
          <button className="md:hidden text-hamam-cream p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
