/**
 * OpeningHours.jsx
 * Displays the weekly opening schedule in a clean table-style layout.
 * Special notes for Friday (women-only) and appointment-only policy.
 * Phone number displayed prominently for easy booking.
 * Framer Motion: fades in on scroll.
 */

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Clock, Phone } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function OpeningHours() {
  const { t } = useTranslation()

  // Day rows with their corresponding hours and optional footnotes
  const hours = [
    { day: t('openingHours.days.monday'),    time: t('openingHours.hours.closed'),   isClosed: true },
    { day: t('openingHours.days.tuesday'),   time: t('openingHours.hours.weekdays') },
    { day: t('openingHours.days.wednesday'), time: t('openingHours.hours.weekdays') },
    { day: t('openingHours.days.thursday'),  time: t('openingHours.hours.weekdays') },
    {
      day: t('openingHours.days.friday'),
      time: t('openingHours.hours.friday'),
      note: t('openingHours.fridayNote'),
    },
    { day: t('openingHours.days.saturday'),  time: t('openingHours.hours.saturday') },
    { day: t('openingHours.days.sunday'),    time: t('openingHours.hours.sunday') },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#EAD9C6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section heading */}
          <div className="text-center mb-10">
            <div className="w-10 h-0.5 bg-[#C1674A] mx-auto mb-5" />
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#2C2C2C] flex items-center justify-center gap-3">
              <Clock size={28} className="text-[#C1674A]" />
              {t('openingHours.heading')}
            </h2>
          </div>

          {/* Hours table card */}
          <div className="bg-[#F5EFE6] rounded-sm shadow-sm overflow-hidden">
            {hours.map((row, index) => (
              <div
                key={row.day}
                className={`flex items-center justify-between px-5 py-4 ${
                  index < hours.length - 1 ? 'border-b border-[#EAD9C6]' : ''
                } ${row.isClosed ? 'opacity-50' : ''}`}
              >
                {/* Day name */}
                <span className="text-sm font-medium text-[#2C2C2C] w-28 shrink-0">
                  {row.day}
                </span>

                {/* Flexible middle spacer */}
                <span className="flex-1 mx-4 h-px bg-[#EAD9C6] hidden sm:block" />

                {/* Time + optional note */}
                <div className="text-right">
                  <span className={`text-sm ${row.isClosed ? 'text-[#2C2C2C]/60' : 'text-[#2C2C2C] font-medium'}`}>
                    {row.time}
                  </span>
                  {row.note && (
                    <span className="ml-2 text-xs bg-[#C1674A] text-white px-2 py-0.5 rounded-full">
                      {row.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Appointment note */}
          <p className="text-center text-sm text-[#2C2C2C]/70 mt-6 leading-relaxed">
            {t('openingHours.appointmentNote')}
          </p>

          {/* Phone CTA */}
          <div className="mt-6 text-center">
            <a
              href="tel:+4917793265150"
              className="inline-flex items-center gap-2 bg-[#C1674A] text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-[#a85539] transition-colors duration-200"
            >
              <Phone size={16} />
              0177 93 26 515
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
