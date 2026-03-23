/**
 * ServiceCard.jsx
 * Reusable card component used in ServiceTeaser (Home) and ServicesGrid (Services page).
 * Shows: icon/emoji, service name, description, duration, optional price, optional CTA button.
 * Props:
 *   icon       — emoji or lucide-react component
 *   name       — service name string
 *   description — short description string
 *   duration   — duration string e.g. "90 min"
 *   price      — optional price string e.g. "ab €55"
 *   bookUrl    — optional booking URL for the CTA button
 *   bookLabel  — label for the CTA button
 *   variant    — "teaser" (home page) | "full" (services page)
 */

import { motion } from 'framer-motion'

export default function ServiceCard({
  icon,
  name,
  description,
  duration,
  price,
  bookUrl,
  bookLabel = 'Book Now',
  variant = 'teaser',
}) {
  return (
    <div
      className={`bg-surface rounded-sm flex flex-col ${
        variant === 'full' ? 'p-6 md:p-8' : 'p-6'
      } shadow-sm hover:shadow-md transition-shadow duration-300 group`}
    >
      {/* Icon — rendered large on the full variant */}
      {icon && (
        <div className={`mb-4 text-primary ${variant === 'full' ? 'text-4xl' : 'text-3xl'}`}>
          {icon}
        </div>
      )}

      {/* Service name */}
      <h3 className="font-heading text-lg md:text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-200">
        {name}
      </h3>

      {/* Description */}
      <p className="text-sm text-text/70 leading-relaxed flex-1 mb-4">
        {description}
      </p>

      {/* Duration + price row */}
      <div className="flex items-center justify-between mt-auto">
        {/* Duration badge */}
        <span className="text-xs font-medium bg-background text-text/70 px-3 py-1 rounded-full">
          {duration}
        </span>

        {/* Price (shown only when provided) */}
        {price && (
          <span className="text-sm font-semibold text-primary">
            {price}
          </span>
        )}
      </div>

      {/* Book Now CTA — only shown on the full/services page variant */}
      {variant === 'full' && bookUrl && (
        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block text-center bg-primary text-white py-2.5 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-200 rounded-sm"
        >
          {bookLabel}
        </a>
      )}
    </div>
  )
}
