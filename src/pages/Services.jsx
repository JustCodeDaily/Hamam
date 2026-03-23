/**
 * Services.jsx
 * Services page (/services).
 * Lists all five spa treatments with details and booking links.
 * Sections:
 *   - Page heading + subheading
 *   - ServicesGrid — full list of ServiceCard components
 *   - BookingBanner — full-width terracotta CTA strip
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ServicesGrid from '../components/ServicesGrid'
import BookingBanner from '../components/BookingBanner'

export default function Services() {
  const { t } = useTranslation()

  return (
    <div className="pt-16"> {/* pt-16 accounts for the fixed navbar height */}

      {/* Page header */}
      <section className="py-16 md:py-20 bg-[#F5EFE6] text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl mx-auto px-4"
        >
          <div className="w-10 h-0.5 bg-[#C1674A] mx-auto mb-5" />
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-4">
            {t('services.heading')}
          </h1>
          <p className="text-[#2C2C2C]/70 text-base md:text-lg">
            {t('services.subheading')}
          </p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="py-12 md:py-16 bg-[#F5EFE6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ServicesGrid />
        </div>
      </section>

      {/* Booking CTA banner */}
      <BookingBanner />
    </div>
  )
}
