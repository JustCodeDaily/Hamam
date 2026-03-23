import ContactInfo from '../components/pages/ContactInfo';
import MapEmbed from '../components/pages/MapEmbed';
import ContactForm from '../components/pages/ContactForm';

/**
 * Contact - Contact page
 *
 * Features:
 * - Contact information with hours
 * - Google Maps embed
 * - Contact form
 */
export default function Contact() {
  return (
    <main className="bg-hamam-cream">
      {/* Page Hero */}
      <section className="bg-hamam-stone-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl text-hamam-charcoal mb-4">
            Kontakt
          </h1>
          <p className="font-inter text-lg text-hamam-warm-gray">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Info and Map Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <ContactInfo />
            <MapEmbed />
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
