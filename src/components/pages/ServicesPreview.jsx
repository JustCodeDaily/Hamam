import { Link } from 'react-router-dom';
import { Droplets, Flame, Heart } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

/**
 * ServicesPreview - Three-card service preview section
 *
 * Features:
 * - Three service cards in a row (stacked on mobile)
 * - Icon, title, description, price
 * - Hover effects (lift + shadow increase)
 * - Link to full services page
 */
export default function ServicesPreview() {
  const services = [
    {
      icon: Droplets,
      title: 'Hamam',
      description: 'Ganzkörper Peeling & traditionelle Schaummassage',
      price: 'Ab 75 € pro Person',
    },
    {
      icon: Flame,
      title: 'Sauna',
      description: 'Finnische Sauna & Dampfsauna zur Vorerwärmung',
      price: 'Ab 15 € / 45 Min.',
    },
    {
      icon: Heart,
      title: 'Massage',
      description: 'Entspannende Ganzkörper-Mandelöl-Massage',
      price: 'Ab 30 € / 30 Min.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-hamam-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Unsere Anwendungen"
          subtitle="Entdecken Sie unser umfassendes Wellness-Angebot"
        />

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-hamam-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="text-hamam-gold w-12 h-12 mb-4" />
                <h3 className="font-playfair text-2xl text-hamam-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-hamam-warm-gray mb-4">
                  {service.description}
                </p>
                <p className="font-inter font-semibold text-hamam-terracotta">
                  {service.price}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link to full services page */}
        <div className="text-center">
          <Link
            to="/anwendungen"
            className="font-inter text-hamam-terracotta font-medium hover:text-hamam-terracotta-dark transition-colors inline-flex items-center gap-2"
          >
            Alle Anwendungen & Preise →
          </Link>
        </div>
      </div>
    </section>
  );
}
