/**
 * MeetYourHost.jsx
 * Personal introduction section for the spa owner Saliha-Nur Erden.
 * Two-column: image on the left, bio text on the right.
 * Framer Motion: slides in from the left on scroll.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function MeetYourHost() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image — slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://picsum.photos/seed/portrait/600/700"
                alt="Saliha-Nur Erden – Inhaberin Hamam Braunschweig"
                className="w-full h-80 md:h-[480px] object-cover object-center"
                loading="lazy"
              />
              {/* Terracotta accent strip on the left edge */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            </div>
          </motion.div>

          {/* Text content — fades in slightly after the image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-2"
          >
            {/* Accent line */}
            <div className="w-10 h-0.5 bg-primary mb-6" />

            {/* Section label */}
            <p className="text-primary text-xs uppercase tracking-[0.2em] mb-3 font-medium">
              {t('meetYourHost.heading')}
            </p>

            {/* Host name */}
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-2">
              {t('meetYourHost.name')}
            </h2>

            {/* Professional title */}
            <p className="text-accent text-sm font-medium mb-6 italic">
              {t('meetYourHost.title')}
            </p>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 text-text/80 leading-relaxed">
              <p className="text-base md:text-lg">
                "{t('meetYourHost.bio')}"
              </p>
              <p>
                {t('meetYourHost.bio2')}
              </p>
            </div>

            {/* Decorative quote mark */}
            <div className="mt-8 font-heading text-6xl text-surface leading-none select-none">
              ❝
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
