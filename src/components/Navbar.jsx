/**
 * Navbar.jsx
 * Sticky top navigation bar with:
 * - Logo text in Playfair Display
 * - Page navigation links
 * - Language toggle (DE | EN)
 * - "Book Now" CTA button linking to Treatwell
 * - Mobile hamburger menu with slide-down panel
 * - Backdrop blur for a frosted-glass luxury feel
 */

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageToggle from './LanguageToggle'

const TREATWELL_URL = 'https://www.treatwell.de/ort/hamam-braunschweig/'

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  // Track scroll to add a subtle shadow when page scrolls down
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu whenever a link is clicked
  const closeMenu = () => setMenuOpen(false)

  // Helper: active link styling (terracotta color for the current page)
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 font-medium text-sm tracking-wide ${
      isActive
        ? 'text-primary'
        : 'text-text hover:text-primary'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-lg md:text-xl font-semibold text-text hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Hamam Braunschweig
          </Link>

          {/* Desktop navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink to="/" end className={navLinkClass}>{t('nav.home')}</NavLink>
            <NavLink to="/services" className={navLinkClass}>{t('nav.services')}</NavLink>
            <NavLink to="/contact" className={navLinkClass}>{t('nav.contact')}</NavLink>
            <NavLink to="/voucher" className={navLinkClass}>{t('nav.voucher')}</NavLink>
          </nav>

          {/* Desktop: language toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <a
              href={TREATWELL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-sm text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-200"
            >
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile: hamburger button */}
          <button
            className="md:hidden p-2 text-text hover:text-primary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-surface px-4 py-6 flex flex-col gap-5">
          <nav className="flex flex-col gap-4">
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>{t('nav.home')}</NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>{t('nav.services')}</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>{t('nav.contact')}</NavLink>
            <NavLink to="/voucher" className={navLinkClass} onClick={closeMenu}>{t('nav.voucher')}</NavLink>
          </nav>
          <div className="flex items-center justify-between pt-4 border-t border-surface">
            <LanguageToggle />
            <a
              href={TREATWELL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-sm text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-200"
              onClick={closeMenu}
            >
              {t('nav.bookNow')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
