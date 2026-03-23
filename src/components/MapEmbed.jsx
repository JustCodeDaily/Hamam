/**
 * MapEmbed.jsx
 * Embeds a Google Maps iframe pointing to the business address:
 * Baumschulenweg 2B, 38104 Braunschweig
 * Rounded corners, full width, with a heading above the map.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function MapEmbed() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mt-12"
    >
      {/* Map section heading */}
      <div className="mb-4">
        <div className="w-8 h-0.5 bg-[#C1674A] mb-3" />
        <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C2C2C]">
          {t('contact.mapHeading')}
        </h3>
      </div>

      {/* Google Maps iframe */}
      <div className="overflow-hidden rounded-sm shadow-sm">
        <iframe
          title="Hamam Braunschweig – Standort"
          src="https://maps.google.com/maps?q=Baumschulenweg+2B,+38104+Braunschweig&output=embed"
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Maps: Hamam Braunschweig, Baumschulenweg 2B"
        />
      </div>
    </motion.div>
  )
}
