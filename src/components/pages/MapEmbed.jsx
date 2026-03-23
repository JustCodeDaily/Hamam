/**
 * MapEmbed - Google Maps embed component
 *
 * Features:
 * - Responsive embedded Google Maps
 * - Shows Hamam Braunschweig location
 * - Rounded corners
 */
export default function MapEmbed() {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden h-96">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.4447523937324!2d10.261897!3d52.277143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b16ac3d0c0c0c0%3A0x0!2sHamam%20Braunschweig!5e0!3m2!1sde!2sde!4v1234567890"
      />
    </div>
  );
}
