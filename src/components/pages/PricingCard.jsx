import { Check } from 'lucide-react';

/**
 * PricingCard - Service pricing card component
 *
 * Props:
 * - name (string): Service name
 * - duration (string): Service duration
 * - price (string): Main price (for single price services)
 * - prices (array): Array of { label, price } for multi-tier services
 * - includes (array): Array of included items
 * - note (optional string): Optional note
 * - type (optional string): Type of service (for context)
 */
export default function PricingCard({
  name,
  duration,
  price,
  prices,
  includes,
  note,
  type,
}) {
  return (
    <div className="bg-hamam-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-playfair text-2xl text-hamam-charcoal mb-3">
          {name}
        </h3>
        {type && (
          <p className="font-inter text-sm text-hamam-warm-gray italic">
            {type}
          </p>
        )}
        {duration && (
          <div className="inline-block bg-hamam-olive text-hamam-white text-xs px-3 py-1 rounded-full font-inter font-medium mt-2">
            {duration}
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="mb-8">
        {price && (
          <p className="text-hamam-terracotta font-playfair text-2xl font-bold">
            {price}
          </p>
        )}
        {prices && (
          <div className="space-y-2">
            {prices.map((priceItem, index) => (
              <div key={index} className="flex justify-between font-inter text-hamam-charcoal">
                <span>{priceItem.label}</span>
                <span className="font-semibold text-hamam-terracotta">
                  {priceItem.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Includes List */}
      {includes && (
        <div className="mb-6">
          <h4 className="font-inter font-semibold text-hamam-charcoal mb-3">
            Inklusive
          </h4>
          <ul className="space-y-2">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3 font-inter text-hamam-warm-gray">
                <Check size={18} className="text-hamam-olive flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Note */}
      {note && (
        <p className="font-inter text-sm text-hamam-warm-gray italic text-opacity-75">
          {note}
        </p>
      )}
    </div>
  );
}
