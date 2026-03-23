/**
 * Hero.jsx
 * Full-viewport-height hero section for the Home page.
 * Features:
 * - Background image from picsum.photos with a warm dark overlay
 * - Centered brand label, heading, subtext, and CTA button
 * - Framer Motion fade-in-from-below animation on mount
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const TREATWELL_URL = 'https://www.treatwell.de/ort/hamam-braunschweig/'

// Animation variants — content fades up from slightly below
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative flex items-center justify-center min-h-screen text-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image — warm spa aesthetic */}
      <img
        src="https://picsum.photos/seed/hamam/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark warm overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e08]/70 via-[#2C1810]/60 to-[#1a0e08]/75" />

      {/* Hero content — animated in on mount */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small uppercase label */}
        <motion.p
          variants={itemVariants}
          className="text-accent text-xs md:text-sm uppercase tracking-[0.25em] mb-4 font-medium"
        >
          {t('hero.label')}
        </motion.p>

        {/* Main heading in Playfair Display */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-5"
        >
          {t('hero.heading')}
        </motion.h1>

        {/* Subtext — appointment-only note */}
        <motion.p
          variants={itemVariants}
          className="text-white/80 text-base md:text-lg mb-8 leading-relaxed"
        >
          {t('hero.subtext')}
        </motion.p>

        {/* CTA button → Treatwell booking */}
        <motion.div variants={itemVariants}>
          <a
            href={TREATWELL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3.5 text-sm font-medium tracking-wider uppercase hover:opacity-90 transition-opacity duration-300 rounded-sm"
          >
            {t('hero.cta')}
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle scroll indicator at the bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-px h-10 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  )
}
