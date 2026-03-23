import { Star } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

/**
 * Testimonials - Customer testimonials section
 *
 * Features:
 * - Three placeholder testimonial cards
 * - Star ratings (gold colored stars)
 * - Reviewer names and quotes
 * - TODO: Replace with real Google reviews
 */
export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Ein wunderbares Erlebnis! Mustafa ist ein wahrer Meister seines Fachs. Sehr entspannend und professionell.',
      name: 'Maria K.',
      rating: 5,
    },
    {
      quote: 'Das beste Hamam-Erlebnis außerhalb der Türkei. Ich gehe regelmäßig hin und kann es nur jedem empfehlen.',
      name: 'Thomas B.',
      rating: 5,
    },
    {
      quote: 'Absolut zu empfehlen! Die Atmosphäre ist herrlich warm und einladend. Perfekt für Entspannung.',
      name: 'Sandra L.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-hamam-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading title="Das sagen unsere Gäste" />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-hamam-white rounded-2xl shadow-md p-8 flex flex-col"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-hamam-gold fill-hamam-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-inter text-hamam-charcoal text-lg leading-relaxed mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Name */}
              <p className="font-inter font-semibold text-hamam-charcoal">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* TODO: Replace with real Google reviews */}
      </div>
    </section>
  );
}
