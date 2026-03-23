/**
 * SectionHeading - Centered section heading component
 *
 * Props:
 * - title (string): Main heading text (rendered in Playfair Display)
 * - subtitle (optional string): Subtitle text (rendered in warm-gray)
 */
export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-playfair text-4xl md:text-5xl text-hamam-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-hamam-warm-gray text-lg max-w-2xl mx-auto mb-6">
          {subtitle}
        </p>
      )}
      {/* Decorative gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-1 bg-hamam-gold rounded-full" />
      </div>
    </div>
  );
}
