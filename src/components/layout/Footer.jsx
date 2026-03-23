import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_URL, PHONE_NUMBER, EMAIL } from '../../data/constants';

/**
 * Footer - Site footer component
 *
 * Features:
 * - Three-column layout (stacked on mobile)
 * - Logo and tagline
 * - Quick navigation links
 * - Contact information
 * - Social media links
 * - Copyright notice
 */
export default function Footer() {
  return (
    <footer className="bg-hamam-olive text-hamam-stone py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-hamam-gold mb-2">HAMAM</h3>
            <p className="text-hamam-stone-dark">Braunschweig</p>
            <p className="text-sm text-hamam-warm-gray mt-4">
              Ihr privates Hamam-Erlebnis in Braunschweig
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-inter font-semibold text-hamam-stone mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-hamam-gold transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/anwendungen" className="hover:text-hamam-gold transition-colors">
                  Anwendungen
                </Link>
              </li>
              <li>
                <Link to="/gutschein" className="hover:text-hamam-gold transition-colors">
                  Gutschein
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="hover:text-hamam-gold transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-hamam-gold transition-colors">
                  Kontakt
                </Link>
              </li>
              <li className="pt-2 border-t border-hamam-olive-dark">
                <a href="#" className="hover:text-hamam-gold transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hamam-gold transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-inter font-semibold text-hamam-stone mb-4">Kontakt</h4>
            <p className="text-sm leading-relaxed mb-4">
              Baumschulenweg 2B<br />
              Eingang von Berliner Str.<br />
              38104 Braunschweig
            </p>
            <p className="text-sm mb-3">
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-hamam-gold transition-colors">
                {PHONE_NUMBER}
              </a>
            </p>
            <p className="text-sm mb-4">
              <a href={`mailto:${EMAIL}`} className="hover:text-hamam-gold transition-colors">
                {EMAIL}
              </a>
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-hamam-gold transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hamam-olive-dark pt-8 text-center text-sm text-hamam-warm-gray">
          <p>© 2026 Hamam Braunschweig. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
