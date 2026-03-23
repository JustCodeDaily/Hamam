/**
 * BookingBanner.jsx
 * Full-width terracotta call-to-action strip at the bottom of the Services page.
 * Encourages visitors to book a session via the Treatwell link.
 * Framer Motion: fades in on scroll.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const TREATWELL_URL = 'https://www.treatwell.de/ort/hamam-braunschweig/'

export default function BookingBanner() {
  const { t } = useTranslation()

  return (
    <section className="bg-primary py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Main CTA text */}
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-3">
          {t('bookingBanner.text')}
        </h2>

        {/* Supporting subtext */}
        <p className="text-white/80 text-base mb-8">
          {t('bookingBanner.subtext')}
        </p>

        {/* Book Now button — white on terracotta for contrast */}
        <a
          href={TREATWELL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-background text-primary px-8 py-3.5 text-sm font-semibold tracking-wider uppercase hover:bg-surface transition-colors duration-200 rounded-sm"
        >
          {t('bookingBanner.button')}
        </a>
      </motion.div>
    </section>
  )
}
