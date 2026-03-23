import SectionHeading from '../shared/SectionHeading';

/**
 * Gallery - Image gallery section
 *
 * Features:
 * - Grid of placeholder images (3 columns desktop, 2 mobile)
 * - Warm gradient placeholders
 * - TODO: Replace with actual photos
 */
export default function Gallery() {
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-16 md:py-24">
      <SectionHeading title="Unser Hamam" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {placeholders.map((item) => (
          <div
            key={item}
            className="aspect-square rounded-2xl shadow-md overflow-hidden"
            style={{
              background: `linear-gradient(135deg, hsla(${20 + item * 10}, 60%, 50%, 0.6) 0%, hsla(${100 + item * 10}, 40%, 40%, 0.6) 100%)`,
            }}
          >
            {/* TODO: Replace with actual photos of the Hamam space */}
            <div className="w-full h-full flex items-center justify-center text-hamam-white text-center px-4">
              <p className="font-inter text-sm italic">Foto {item}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
