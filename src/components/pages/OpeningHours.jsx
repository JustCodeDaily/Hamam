import { hours } from '../../data/hours';
import { PHONE_NUMBER } from '../../data/constants';

/**
 * OpeningHours - Opening hours section
 *
 * Features:
 * - Full-width dark background
 * - Clean grid/table layout
 * - Special badge for Friday women-only time
 * - Contact phone number
 */
export default function OpeningHours() {
  return (
    <section className="bg-hamam-charcoal text-hamam-stone py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-playfair text-4xl md:text-5xl text-hamam-cream text-center mb-12">
          Öffnungszeiten
        </h2>

        {/* Hours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {hours.map((item) => (
            <div
              key={item.day}
              className="flex justify-between items-center py-4 border-b border-hamam-olive-dark"
            >
              <span className="font-inter font-medium text-hamam-stone">
                {item.day}
              </span>
              <div className="flex items-center gap-3">
                <span className="font-inter text-hamam-gold font-semibold">
                  {item.time}
                </span>
                {item.note && (
                  <span className="text-xs bg-hamam-olive text-hamam-stone px-2 py-1 rounded-full whitespace-nowrap">
                    {item.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center text-hamam-warm-gray text-sm">
          <p>
            Termine nach Vereinbarung:{' '}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-hamam-gold font-medium hover:underline"
            >
              {PHONE_NUMBER}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
