import MustafaStory from '../components/pages/MustafaStory';
import FAQAccordion from '../components/pages/FAQAccordion';
import Gallery from '../components/pages/Gallery';

/**
 * About - About page
 *
 * Features:
 * - Mustafa's story
 * - FAQ section
 * - Photo gallery
 */
export default function About() {
  return (
    <main className="bg-hamam-cream">
      {/* Page Hero */}
      <section className="bg-hamam-stone-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl text-hamam-charcoal mb-4">
            Über uns
          </h1>
          <p className="font-inter text-lg text-hamam-warm-gray">
            Entdecken Sie die Geschichte hinter Hamam Braunschweig
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <MustafaStory />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-hamam-stone">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FAQAccordion />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Gallery />
        </div>
      </section>
    </main>
  );
}
