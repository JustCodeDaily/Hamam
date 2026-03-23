/**
 * Divider - Decorative horizontal line component
 *
 * A centered decorative divider using the hamam-gold color
 * Used between sections for visual rhythm
 */
export default function Divider() {
  return (
    <div className="flex justify-center my-8">
      <div className="w-16 h-1 bg-hamam-gold rounded-full" />
    </div>
  );
}
