import { ArrowRight } from 'lucide-react';
import { TREATWELL_URL } from '../../data/constants';

/**
 * MobileBookingBar - Fixed mobile booking bar
 *
 * Features:
 * - Fixed to bottom of screen on mobile (md:hidden)
 * - Full-width terracotta background
 * - Links to Treatwell for booking
 * - Subtle top shadow
 */
export default function MobileBookingBar() {
  return (
    <a
      href={TREATWELL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 md:hidden bg-hamam-terracotta text-white py-4 px-4 shadow-lg shadow-black/20 flex items-center justify-between group cursor-pointer hover:bg-hamam-terracotta-dark transition-colors"
    >
      <span className="font-inter font-medium">Jetzt Termin buchen</span>
      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
