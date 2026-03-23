import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TREATWELL_URL } from '../../data/constants';

/**
 * Navbar - Sticky header navigation component
 *
 * Features:
 * - Sticky positioning with subtle shadow on scroll
 * - Logo/branding on left
 * - Navigation links in center/right
 * - Mobile hamburger menu
 * - "Termin buchen" CTA button
 * - Active route highlighting
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Startseite', href: '/' },
    { label: 'Anwendungen', href: '/anwendungen' },
    { label: 'Gutschein', href: '/gutschein' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-hamam-cream shadow-sm transition-shadow duration-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <h1 className="font-playfair text-2xl font-bold text-hamam-charcoal">HAMAM</h1>
          <p className="font-inter text-xs text-hamam-warm-gray">Braunschweig</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-inter text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-hamam-terracotta border-b-2 border-hamam-terracotta pb-1'
                  : 'text-hamam-charcoal hover:text-hamam-terracotta'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <a
          href={TREATWELL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-hamam-terracotta text-white px-6 py-2 rounded-full font-inter font-medium text-sm hover:bg-hamam-terracotta-dark transition-colors"
        >
          Termin buchen
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-hamam-charcoal"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-hamam-cream z-40">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-inter font-medium py-2 text-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-hamam-terracotta border-l-4 border-hamam-terracotta pl-3'
                    : 'text-hamam-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={TREATWELL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-hamam-terracotta text-white px-6 py-3 rounded-full font-inter font-medium text-center hover:bg-hamam-terracotta-dark transition-colors mt-4"
            >
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
