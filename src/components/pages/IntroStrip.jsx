/**
 * IntroStrip - Introduction section explaining what Hamam is
 *
 * Simple centered text section on light stone background
 */
export default function IntroStrip() {
  return (
    <section className="bg-hamam-stone py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl text-hamam-charcoal mb-6">
          Was ist Hamam?
        </h2>

        <p className="font-inter text-lg text-hamam-warm-gray leading-relaxed mb-8">
          Das Hamam ist ein traditionelles osmanisches Dampfbad — eine Jahrhunderte alte Badekultur, die Körper und Geist reinigt. Bei uns erleben Sie diese Tradition in privater, entspannter Atmosphäre mit professionellen Anwendungen.
        </p>

        {/* Decorative gold divider */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-hamam-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
