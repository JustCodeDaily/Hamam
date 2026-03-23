/**
 * MustafaStory - About Mustafa Erden section
 *
 * Features:
 * - Two-column layout (image left, text right)
 * - Photo placeholder with gradient
 * - Full biography
 * - Stacks on mobile
 */
export default function MustafaStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Photo Placeholder */}
        <div
          className="aspect-square rounded-2xl shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #C4704B 0%, #5C6B4F 100%)',
          }}
        >
          {/* TODO: Mustafa photo */}
          <div className="w-full h-full flex items-center justify-center text-hamam-white text-center px-6">
            <p className="font-inter text-sm italic">Foto von Mustafa Erden wird hier eingefügt</p>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="font-playfair text-4xl md:text-5xl text-hamam-charcoal mb-6">
            Über Mustafa Erden
          </h2>

          <p className="font-inter text-lg text-hamam-warm-gray leading-relaxed mb-6">
            Ich heiße Mustafa Erden und bin der Betreiber des Hamam Braunschweig. Als ausgebildeter Hamam-Meister und Masseur bringe ich mehr als 10 Jahre Erfahrung im Bereich des Hamam mit. Mein Handwerk lernte ich traditionell in der Türkei und brachte meine Kunst nach Deutschland, wo ich mir zunächst in Bad Harzburg einen Namen machte.
          </p>

          <p className="font-inter text-lg text-hamam-warm-gray leading-relaxed mb-6">
            Mein Wunsch ist es, dass alle meine Gäste den Vorteil der Hamam-Anwendung erkennen und nachhaltig genießen. Meine Philosophie ist es, Sie gesund zu halten und dafür zu sorgen, dass Sie entspannt durch den stressigen Alltag kommen. Daher empfehle ich eine Hamam-Anwendung alle 3–4 Wochen.
          </p>

          <p className="font-inter text-lg text-hamam-terracotta font-semibold italic">
            "Ihre Gesundheit und Entspannung sind meine Priorität."
          </p>
        </div>
      </div>
    </section>
  );
}
