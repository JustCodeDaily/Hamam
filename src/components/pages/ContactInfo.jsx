import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, INSTAGRAM_URL, ADDRESS } from '../../data/constants';
import { hours } from '../../data/hours';

/**
 * ContactInfo - Contact information section
 *
 * Features:
 * - Address with clickable maps
 * - Phone number (tel: link)
 * - Email (mailto: link)
 * - Instagram link with icon
 * - Opening hours
 */
export default function ContactInfo() {
  return (
    <div className="bg-hamam-white rounded-2xl shadow-md p-8 md:p-12">
      <h2 className="font-playfair text-4xl text-hamam-charcoal mb-8">Kontakt</h2>

      {/* Address */}
      <div className="flex items-start gap-4 mb-8">
        <MapPin className="text-hamam-terracotta flex-shrink-0 mt-1" size={24} />
        <div>
          <p className="font-inter font-semibold text-hamam-charcoal">
            Hamam Braunschweig
          </p>
          <p className="font-inter text-hamam-warm-gray">
            {ADDRESS.street}<br />
            {ADDRESS.entrance}<br />
            {ADDRESS.postcode} {ADDRESS.city}
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4 mb-8">
        <Phone className="text-hamam-terracotta flex-shrink-0" size={24} />
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="font-inter text-hamam-charcoal hover:text-hamam-terracotta transition-colors"
        >
          {PHONE_NUMBER}
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4 mb-8">
        <Mail className="text-hamam-terracotta flex-shrink-0" size={24} />
        <a
          href={`mailto:${EMAIL}`}
          className="font-inter text-hamam-charcoal hover:text-hamam-terracotta transition-colors break-all"
        >
          {EMAIL}
        </a>
      </div>

      {/* Instagram */}
      <div className="flex items-center gap-4 mb-12 pb-12 border-b border-hamam-stone-dark">
        <Instagram className="text-hamam-terracotta flex-shrink-0" size={24} />
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-hamam-charcoal hover:text-hamam-terracotta transition-colors"
        >
          @hamam_braunschweig
        </a>
      </div>

      {/* Opening Hours */}
      <div>
        <h3 className="font-inter font-semibold text-hamam-charcoal mb-4">
          Öffnungszeiten
        </h3>
        <div className="space-y-2">
          {hours.map((item) => (
            <div key={item.day} className="flex justify-between font-inter text-hamam-warm-gray">
              <span>{item.day}</span>
              <span className="font-semibold text-hamam-charcoal">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
