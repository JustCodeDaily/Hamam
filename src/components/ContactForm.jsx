/**
 * ContactForm.jsx
 * UI-only contact form (no backend).
 * Controlled form with Name, Email, and Message fields.
 * On submit: shows a success state with a confirmation message.
 * All labels and messages are translated via i18next.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CheckCircle, Send } from 'lucide-react'

export default function ContactForm() {
  const { t } = useTranslation()

  // Controlled form state
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  // Tracks whether the "sent" success state should show
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate a successful send (no real backend for this demo)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  // Shared input/textarea styles
  const inputClass =
    'w-full bg-[#F5EFE6] border border-[#EAD9C6] rounded-sm px-4 py-3 text-sm text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:outline-none focus:border-[#C1674A] focus:ring-1 focus:ring-[#C1674A] transition-colors duration-200'

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white rounded-sm p-6 md:p-8 shadow-sm"
    >
      <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C2C2C] mb-6">
        {t('contact.form.heading')}
      </h3>

      <AnimatePresence mode="wait">
        {submitted ? (
          /* Success state */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center py-8 gap-4"
          >
            <CheckCircle size={48} className="text-[#C1674A]" />
            <p className="text-[#2C2C2C] font-medium text-base">
              {t('contact.form.success')}
            </p>
            <p className="text-[#2C2C2C]/60 text-sm">
              {t('contact.form.successSubtext')}
            </p>
            {/* Allow sending another message */}
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-[#C1674A] text-sm underline hover:no-underline"
            >
              ← Neue Nachricht
            </button>
          </motion.div>
        ) : (
          /* Form */
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
          >
            {/* Name field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/60">
                {t('contact.form.name')}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.form.namePlaceholder')}
                required
                className={inputClass}
              />
            </div>

            {/* Email field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/60">
                {t('contact.form.email')}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.form.emailPlaceholder')}
                required
                className={inputClass}
              />
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/60">
                {t('contact.form.message')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.form.messagePlaceholder')}
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#C1674A] text-white py-3 px-6 rounded-sm text-sm font-medium tracking-wide hover:bg-[#a85539] transition-colors duration-200 self-start"
            >
              <Send size={15} />
              {t('contact.form.send')}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
