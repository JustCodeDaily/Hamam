/**
 * ContactInfo.jsx
 * Displays the business's contact details and opening hours summary
 * on the Contact page.
 * Includes address, phone, email, Instagram link.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ContactInfo() {
  const { t } = useTranslation()

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="bg-[#EAD9C6] rounded-sm p-6 md:p-8 flex flex-col gap-6"
    >
      <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C2C2C]">
        Hamam Braunschweig
      </h3>

      <ul className="flex flex-col gap-4">
        {/* Address */}
        <li className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 shrink-0 text-[#C1674A]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/50 mb-0.5">
              {t('contact.address')}
            </p>
            <p className="text-sm text-[#2C2C2C]">
              Baumschulenweg 2B<br />38104 Braunschweig
            </p>
          </div>
        </li>

        {/* Phone */}
        <li className="flex items-start gap-3">
          <Phone size={18} className="mt-0.5 shrink-0 text-[#C1674A]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/50 mb-0.5">
              {t('contact.phone')}
            </p>
            <a
              href="tel:+4917793265150"
              className="text-sm text-[#2C2C2C] hover:text-[#C1674A] transition-colors"
            >
              0177 93 26 515
            </a>
          </div>
        </li>

        {/* Email */}
        <li className="flex items-start gap-3">
          <Mail size={18} className="mt-0.5 shrink-0 text-[#C1674A]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/50 mb-0.5">
              {t('contact.email')}
            </p>
            <a
              href="mailto:info@hamam-braunschweig.de"
              className="text-sm text-[#2C2C2C] hover:text-[#C1674A] transition-colors break-all"
            >
              info@hamam-braunschweig.de
            </a>
          </div>
        </li>

        {/* Instagram */}
        <li className="flex items-start gap-3">
          <Instagram size={18} className="mt-0.5 shrink-0 text-[#C1674A]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/50 mb-0.5">
              {t('contact.instagram')}
            </p>
            <a
              href="https://www.instagram.com/hamam_braunschweig/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2C2C2C] hover:text-[#C1674A] transition-colors"
            >
              @hamam_braunschweig
            </a>
          </div>
        </li>

        {/* Opening hours summary */}
        <li className="flex items-start gap-3">
          <Clock size={18} className="mt-0.5 shrink-0 text-[#C1674A]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/50 mb-1">
              {t('contact.openingHours')}
            </p>
            <div className="text-sm text-[#2C2C2C] flex flex-col gap-0.5">
              <span>Mo: –</span>
              <span>Di–Do: 11:00–19:00</span>
              <span>Fr: 11:00–20:00 (Frauenzeit)</span>
              <span>Sa: 12:00–21:00</span>
              <span>So: 12:00–18:00</span>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  )
}
