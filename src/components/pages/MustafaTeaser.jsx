import { Link } from 'react-router-dom';

/**
 * MustafaTeaser - Two-column teaser about Mustafa
 *
 * Features:
 * - Image placeholder on left (rounded, gradient background)
 * - Text content on right
 * - Link to full About page
 * - Stacks on mobile
 */
export default function MustafaTeaser() {
  return (
    <section className="py-16 md:py-24 bg-hamam-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div
            className="aspect-square rounded-2xl shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #C4704B 0%, #5C6B4F 100%)',
            }}
          >
            {/* TODO: Mustafa photo */}
            <div className="w-full h-full flex items-center justify-center text-hamam-white text-center px-6">
              <p className="font-inter text-sm italic">Foto von Mustafa wird hier eingefügt</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-hamam-gold uppercase tracking-wider text-sm font-inter mb-2">
              Ihr Hamam-Meister
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-hamam-charcoal mb-6">
              Mustafa Erden
            </h2>
            <p className="font-inter text-lg text-hamam-warm-gray leading-relaxed mb-8">
              Mit über 10 Jahren Erfahrung bringe ich die traditionelle türkische Badekunst nach Braunschweig. Meine Philosophie: Sie gesund halten und für Entspannung im stressigen Alltag sorgen.
            </p>
            <Link
              to="/ueber-uns"
              className="font-inter text-hamam-terracotta font-medium hover:text-hamam-terracotta-dark transition-colors inline-flex items-center gap-2"
            >
              Mehr erfahren →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
