import { ChevronDown } from 'lucide-react';
import CTAButton from '../shared/CTAButton';
import { TREATWELL_URL } from '../../data/constants';

/**
 * Hero - Hero banner section for home page
 *
 * Features:
 * - Full viewport height
 * - Warm gradient overlay with dark semi-transparent background
 * - Center-aligned content
 * - Two CTA buttons (primary and secondary)
 * - Animated scroll-down indicator
 */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center pt-20 pb-12"
      style={{
        background: 'linear-gradient(135deg, rgba(44, 44, 44, 0.7) 0%, rgba(196, 112, 75, 0.5) 100%), linear-gradient(to bottom, #3a3a3a 0%, #5C6B4F 100%)',
      }}
    >
      {/* {/* TODO: Replace with actual hero image */}
      <div className="absolute inset-0 -z-10" />

      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Small label */}
        <p className="text-hamam-gold uppercase tracking-wider text-sm font-inter mb-4 animate-fade-in">
          Willkommen im
        </p>

        {/* Main heading */}
        <h1 className="font-playfair text-5xl md:text-7xl text-hamam-cream font-bold mb-6 animate-fade-in animation-delay-200">
          Hamam Braunschweig
        </h1>

        {/* Subtext */}
        <p className="font-inter text-lg md:text-xl text-hamam-stone mb-12 leading-relaxed text-opacity-90 animate-fade-in animation-delay-400">
          Ihr privates Hamam-Erlebnis — Traditionelle Badekunst, Sauna & Wellness
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-600">
          <a
            href={TREATWELL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hamam-terracotta text-white px-8 py-4 rounded-full font-inter font-medium hover:bg-hamam-terracotta-dark transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Termin buchen
          </a>
          <CTAButton
            text="Anwendungen entdecken"
            href="/anwendungen"
            variant="secondary"
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-hamam-gold" />
        </div>
      </div>
    </section>
  );
}
