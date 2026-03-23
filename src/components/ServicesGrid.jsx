/**
 * ServicesGrid.jsx
 * Renders the full list of services on the Services page using ServiceCard.
 * All five services are listed with full details (name, description, duration, price, book button).
 * Framer Motion: stagger animation — each card delays by 0.1s.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ServiceCard from './ServiceCard'
import { Droplets, Flame, Sparkles, Leaf, Wind } from 'lucide-react'

const TREATWELL_URL = 'https://www.treatwell.de/ort/hamam-braunschweig/'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ServicesGrid() {
  const { t } = useTranslation()

  const services = [
    {
      icon: <Droplets size={28} />,
      name: t('services.items.hamam.name'),
      description: t('services.items.hamam.description'),
      duration: `90 ${t('services.min')}`,
      price: `${t('services.from')} €55`,
    },
    {
      icon: <Leaf size={28} />,
      name: t('services.items.hamamKosmetik.name'),
      description: t('services.items.hamamKosmetik.description'),
      duration: `120 ${t('services.min')}`,
      price: `${t('services.from')} €75`,
    },
    {
      icon: <Flame size={28} />,
      name: t('services.items.sauna.name'),
      description: t('services.items.sauna.description'),
      duration: `60 ${t('services.min')}`,
      price: `${t('services.from')} €30`,
    },
    {
      icon: <Wind size={28} />,
      name: t('services.items.peeling.name'),
      description: t('services.items.peeling.description'),
      duration: `45 ${t('services.min')}`,
      price: `${t('services.from')} €40`,
    },
    {
      icon: <Sparkles size={28} />,
      name: t('services.items.schaum.name'),
      description: t('services.items.schaum.description'),
      duration: `30 ${t('services.min')}`,
      price: `${t('services.from')} €25`,
    },
  ]

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {services.map((service) => (
        <motion.div key={service.name} variants={cardVariants}>
          <ServiceCard
            {...service}
            variant="full"
            bookUrl={TREATWELL_URL}
            bookLabel={t('services.bookNow')}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
