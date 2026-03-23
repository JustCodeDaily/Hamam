/**
 * ServiceTeaser.jsx
 * Home page section showing three featured services in a staggered card row.
 * Uses ServiceCard.jsx in "teaser" variant (no booking button).
 * Includes a "See All Services" link to /services.
 * Framer Motion: cards stagger in on scroll with 0.1s delay between each.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'
import { Droplets, Flame, Sparkles } from 'lucide-react'

// Container drives the stagger timing for child cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

// Each card fades in from slightly below
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ServiceTeaser() {
  const { t } = useTranslation()

  // The three featured services shown on the home page
  const services = [
    {
      icon: <Droplets size={28} />,
      name: t('serviceTeaser.card1.name'),
      description: t('serviceTeaser.card1.description'),
      duration: t('serviceTeaser.card1.duration'),
    },
    {
      icon: <Flame size={28} />,
      name: t('serviceTeaser.card2.name'),
      description: t('serviceTeaser.card2.description'),
      duration: t('serviceTeaser.card2.duration'),
    },
    {
      icon: <Sparkles size={28} />,
      name: t('serviceTeaser.card3.name'),
      description: t('serviceTeaser.card3.description'),
      duration: t('serviceTeaser.card3.duration'),
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-10 h-0.5 bg-primary mx-auto mb-5" />
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text">
            {t('serviceTeaser.heading')}
          </h2>
        </motion.div>

        {/* Staggered service cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={cardVariants}>
              <ServiceCard {...service} variant="teaser" />
            </motion.div>
          ))}
        </motion.div>

        {/* Link to full services page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="inline-block border border-primary text-primary px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-primary hover:text-white transition-colors duration-200 rounded-sm"
          >
            {t('serviceTeaser.seeAll')} →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
