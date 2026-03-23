/**
 * Footer.jsx
 * Site-wide footer with:
 * - Business address, phone, email
 * - Instagram link with icon
 * - Quick navigation links
 * - Copyright line
 * All text translated via i18next.
 */

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2C2C2C] text-[#F5EFE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#D4A96A]">
              Hamam Braunschweig
            </h3>
            <p className="text-sm text-[#F5EFE6]/70 leading-relaxed">
              {t('footer.tagline')}
            </p>
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/hamam_braunschweig/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4A96A] hover:text-white transition-colors duration-200 text-sm"
              aria-label="Instagram"
            >
              <Instagram size={18} />
              <span>@hamam_braunschweig</span>
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A96A]">
              {t('footer.contact')}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#F5EFE6]/80">
              {/* Address */}
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#C1674A]" />
                <span>Baumschulenweg 2B<br />38104 Braunschweig</span>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0 text-[#C1674A]" />
                <a
                  href="tel:+4917793265150"
                  className="hover:text-[#D4A96A] transition-colors"
                >
                  0177 93 26 515
                </a>
              </li>
              {/* Email */}
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0 text-[#C1674A]" />
                <a
                  href="mailto:info@hamam-braunschweig.de"
                  className="hover:text-[#D4A96A] transition-colors break-all"
                >
                  info@hamam-braunschweig.de
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4A96A]">
              {t('footer.quickLinks')}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#F5EFE6]/80">
              <li>
                <Link to="/" className="hover:text-[#D4A96A] transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4A96A] transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A96A] transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/voucher" className="hover:text-[#D4A96A] transition-colors">
                  {t('nav.voucher')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-[#F5EFE6]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F5EFE6]/40">
          <span>© {currentYear} {t('footer.copyright')}</span>
          <span>Inhaberin: Saliha-Nur Erden</span>
        </div>
      </div>
    </footer>
  )
}
