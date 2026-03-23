/**
 * Voucher.jsx
 * Voucher page (/voucher).
 * Encourages visitors to purchase wellness gift vouchers.
 * Sections:
 *   1. Page heading + warm subheading
 *   2. Two VoucherCard components side by side
 *   3. VoucherCTA — delivery info note
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import VoucherCard from '../components/VoucherCard'
import VoucherCTA from '../components/VoucherCTA'

export default function Voucher() {
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
            {t('voucher.heading')}
          </h1>
          <p className="text-[#2C2C2C]/70 text-base md:text-lg leading-relaxed">
            {t('voucher.subheading')}
          </p>
        </motion.div>
      </section>

      {/* Voucher cards */}
      <section className="py-12 md:py-16 bg-[#F5EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Two voucher cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: Monetary gift voucher */}
            <VoucherCard
              tag={t('voucher.card1.tag')}
              name={t('voucher.card1.name')}
              description={t('voucher.card1.description')}
              priceLabel={t('voucher.card1.priceRange')}
              ctaLabel={t('voucher.buyButton')}
              ctaUrl="https://www.gurado.de/hamam-braunschweig/geldwert-gutschein.html"
            />

            {/* Card 2: Sauna 10-visit card — highlighted as bestseller */}
            <VoucherCard
              tag={t('voucher.card2.tag')}
              name={t('voucher.card2.name')}
              description={t('voucher.card2.description')}
              priceLabel={t('voucher.card2.price')}
              ctaLabel={t('voucher.orderButton')}
              ctaUrl="https://www.gurado.de/hamam-braunschweig/sauna-zehnerkarte.html"
              highlighted
            />
          </div>

          {/* Delivery information note */}
          <VoucherCTA />
        </div>
      </section>
    </div>
  )
}
