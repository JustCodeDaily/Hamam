/**
 * VoucherCTA.jsx
 * Soft note at the bottom of the Voucher page explaining delivery options.
 * Displays a subtle note and a secondary support contact.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'

export default function VoucherCTA() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-14 bg-surface rounded-sm px-6 py-8 text-center max-w-2xl mx-auto"
    >
      {/* Delivery note */}
      <Mail size={24} className="text-primary mx-auto mb-4" />

      <p className="text-text font-medium mb-2">
        {t('voucher.cta.note')}
      </p>

      <p className="text-text/60 text-sm">
        {t('voucher.cta.subNote')}
      </p>
    </motion.div>
  )
}
