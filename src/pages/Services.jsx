import { services } from '../data/services';
import { TREATWELL_URL } from '../data/constants';
import SectionHeading from '../components/shared/SectionHeading';
import PricingCard from '../components/pages/PricingCard';
import ServiceCategory from '../components/pages/ServiceCategory';

/**
 * Services - Services and pricing page
 *
 * Displays:
 * - Three service categories with pricing
 * - Hamam packages (Spartarif, Klassisch)
 * - Oil massages
 * - Custom package builder
 */
export default function Services() {
  return (
    <main className="bg-hamam-cream">
      {/* Page Hero */}
      <section className="bg-hamam-stone-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl text-hamam-charcoal mb-4">
            Anwendungen & Preise
          </h1>
          <p className="font-inter text-lg text-hamam-warm-gray">
            Wählen Sie Ihr persönliches Wellness-Erlebnis
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Category 1: Hamam Packages */}
          <ServiceCategory title={services[0].title}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services[0].services.map((service) => (
                <PricingCard
                  key={service.name}
                  name={service.name}
                  duration={service.duration}
                  price={service.price}
                  prices={service.prices}
                  includes={service.includes}
                  note={service.note}
                />
              ))}
            </div>
          </ServiceCategory>

          {/* Category 2: Oil Massages */}
          <ServiceCategory title={services[1].title}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services[1].services.map((service) => (
                <PricingCard
                  key={service.name}
                  name={service.name}
                  type={service.type}
                  prices={service.prices}
                  note={service.note}
                />
              ))}
            </div>
          </ServiceCategory>

          {/* Category 3: Custom Package */}
          <ServiceCategory title={services[2].title}>
            <div className="bg-hamam-white rounded-2xl shadow-md p-8">
              <p className="font-inter text-hamam-warm-gray mb-8">
                Stellen Sie sich Ihr persönliches Hamam-Erlebnis zusammen und genießen Sie maximale Flexibilität
              </p>
              <div className="space-y-4">
                {services[2].services[0].items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between py-4 border-b border-hamam-stone-dark last:border-b-0"
                  >
                    <div className="flex-1">
                      <p className="font-inter font-medium text-hamam-charcoal">
                        {item.name}
                      </p>
                      <p className="font-inter text-sm text-hamam-warm-gray">
                        {item.duration}
                      </p>
                    </div>
                    <p className="font-inter font-semibold text-hamam-terracotta ml-4 whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ServiceCategory>

          {/* Info Box */}
          <div className="bg-hamam-gold bg-opacity-10 border-l-4 border-hamam-gold rounded-lg p-8 my-16">
            <h3 className="font-inter font-semibold text-hamam-charcoal mb-3">
              Wichtige Information
            </h3>
            <p className="font-inter text-hamam-warm-gray">
              Bitte bei allen Hamam- und Sauna-Aufenthalten: Badebekleidung, Badeschuhe und Bademantel oder Bade-Saunatuch mitbringen! Oder alle Utensilien für 5 € ausleihen.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={TREATWELL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hamam-terracotta text-white px-8 py-4 rounded-full font-inter font-medium hover:bg-hamam-terracotta-dark transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Termin buchen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
