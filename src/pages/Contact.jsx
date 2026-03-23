/**
 * Contact.jsx
 * Contact page (/contact).
 * Three sections:
 *   1. Page heading
 *   2. Two-column: ContactInfo (left) + ContactForm (right)
 *   3. MapEmbed — full-width Google Maps iframe
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="pt-16"> {/* compensate for fixed navbar */}

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
            {t('contact.heading')}
          </h1>
          <p className="text-[#2C2C2C]/70 text-base md:text-lg">
            {t('contact.subheading')}
          </p>
        </motion.div>
      </section>

      {/* Contact info + form */}
      <section className="py-12 md:py-16 bg-[#F5EFE6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact info — narrower left column */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            {/* Contact form — wider right column */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>

          {/* Map embed below the columns */}
          <MapEmbed />
        </div>
      </section>
    </div>
  )
}
