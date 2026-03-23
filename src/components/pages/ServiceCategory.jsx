/**
 * ServiceCategory - Wrapper component for service category sections
 *
 * Props:
 * - title (string): Category title
 * - children: Content/cards to render
 */
export default function ServiceCategory({ title, children }) {
  return (
    <section className="mb-16 md:mb-20">
      <h2 className="font-playfair text-3xl md:text-4xl text-hamam-charcoal mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}
