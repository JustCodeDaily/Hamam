/**
 * VoucherCard.jsx
 * Reusable card for displaying a voucher product on the Voucher page.
 * Props:
 *   tag        — badge text (e.g. "Bestseller")
 *   name       — voucher product name
 *   description — description text
 *   priceLabel — price range or fixed price
 *   ctaLabel   — button label
 *   ctaUrl     — external link to the voucher purchase page
 *   highlighted — if true, uses terracotta accent background
 */

import { motion } from 'framer-motion'
import { Gift, ExternalLink } from 'lucide-react'

export default function VoucherCard({
  tag,
  name,
  description,
  priceLabel,
  ctaLabel,
  ctaUrl,
  highlighted = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 ${
        highlighted
          ? 'bg-[#C1674A] text-white'
          : 'bg-white text-[#2C2C2C]'
      }`}
    >
      {/* Bestseller / tag badge */}
      {tag && (
        <div
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
            highlighted
              ? 'bg-white text-[#C1674A]'
              : 'bg-[#D4A96A] text-white'
          }`}
        >
          {tag}
        </div>
      )}

      <div className="p-7 md:p-9 flex flex-col flex-1 gap-5">
        {/* Gift icon */}
        <div className={highlighted ? 'text-white/80' : 'text-[#C1674A]'}>
          <Gift size={32} />
        </div>

        {/* Voucher name */}
        <h3 className={`font-['Playfair_Display'] text-2xl font-semibold leading-snug ${
          highlighted ? 'text-white' : 'text-[#2C2C2C]'
        }`}>
          {name}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed flex-1 ${
          highlighted ? 'text-white/85' : 'text-[#2C2C2C]/70'
        }`}>
          {description}
        </p>

        {/* Price */}
        <p className={`text-3xl font-bold font-['Playfair_Display'] ${
          highlighted ? 'text-white' : 'text-[#C1674A]'
        }`}>
          {priceLabel}
        </p>

        {/* CTA button */}
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 py-3 px-6 rounded-sm text-sm font-medium tracking-wide transition-colors duration-200 ${
            highlighted
              ? 'bg-white text-[#C1674A] hover:bg-[#F5EFE6]'
              : 'bg-[#C1674A] text-white hover:bg-[#a85539]'
          }`}
        >
          {ctaLabel}
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  )
}
