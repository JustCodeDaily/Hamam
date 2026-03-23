/**
 * WhatIsHamam.jsx
 * Two-column editorial section explaining the Ottoman bath tradition.
 * Left column: heading + body text
 * Right column: atmospheric placeholder image
 * Framer Motion: fades in on scroll using whileInView
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// Shared fade-up animation used across scroll sections
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function WhatIsHamam() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column — left on desktop */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="order-2 lg:order-1"
          >
            {/* Decorative accent line */}
            <div className="w-10 h-0.5 bg-primary mb-6" />

            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text leading-snug mb-6">
              {t('whatIsHamam.heading')}
            </h2>

            <div className="flex flex-col gap-4 text-text/80 leading-relaxed">
              <p>{t('whatIsHamam.body1')}</p>
              <p>{t('whatIsHamam.body2')}</p>
              <p>{t('whatIsHamam.body3')}</p>
            </div>
          </motion.div>

          {/* Image column — right on desktop */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/steam/800/600"
                alt="Atmospheric steam bath interior"
                className="w-full h-72 md:h-96 object-cover"
                loading="lazy"
              />
              {/* Warm color tint overlay */}
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
