import { GURADO_URL, PHONE_NUMBER } from '../data/constants';
import SectionHeading from '../components/shared/SectionHeading';

/**
 * Vouchers - Gift vouchers page
 *
 * Features:
 * - Two voucher options (Wertgutschein, 10er-Karte)
 * - Links to Gurado for purchases
 * - Information about in-person pickup
 */
export default function Vouchers() {
  return (
    <main className="bg-hamam-cream">
      {/* Page Hero */}
      <section className="bg-hamam-stone-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl text-hamam-charcoal mb-4">
            Gutscheine
          </h1>
          <p className="font-inter text-lg text-hamam-warm-gray">
            Das perfekte Geschenk für Ihre Liebsten
          </p>
        </div>
      </section>

      {/* Voucher Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Wertgutschein */}
            <div className="bg-hamam-white rounded-2xl shadow-md p-10 flex flex-col">
              <h3 className="font-playfair text-3xl text-hamam-charcoal mb-4">
                Wertgutschein
              </h3>
              <p className="font-inter text-hamam-warm-gray text-lg leading-relaxed mb-6 flex-grow">
                Verschenken Sie Entspannung. Wählen Sie einen Betrag zwischen 30 € und 500 € — einlösbar für alle Anwendungen.
              </p>
              <p className="font-playfair text-2xl text-hamam-terracotta font-bold mb-6">
                Ab 30 €
              </p>
              <a
                href={GURADO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-hamam-terracotta text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-hamam-terracotta-dark transition-all text-center"
              >
                Gutschein kaufen
              </a>
            </div>

            {/* Card 2: Sauna 10er-Karte */}
            <div className="bg-hamam-white rounded-2xl shadow-md p-10 flex flex-col">
              <h3 className="font-playfair text-3xl text-hamam-charcoal mb-4">
                Sauna 10er-Karte
              </h3>
              <p className="font-inter text-hamam-warm-gray text-lg leading-relaxed mb-6 flex-grow">
                Für regelmäßige Besucher. 10 Sauna-Eintritte zum Vorteilspreis.
              </p>
              <p className="font-playfair text-2xl text-hamam-terracotta font-bold mb-6">
                300 €
              </p>
              <a
                href={GURADO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-hamam-terracotta text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-hamam-terracotta-dark transition-all text-center"
              >
                Jetzt kaufen
              </a>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-hamam-stone rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="font-inter text-hamam-warm-gray">
              Gutscheine können auch persönlich abgeholt werden. Vereinbaren Sie einen Termin:{' '}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-hamam-terracotta font-medium hover:underline"
              >
                {PHONE_NUMBER}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
