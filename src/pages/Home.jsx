import Hero from '../components/pages/Hero';
import IntroStrip from '../components/pages/IntroStrip';
import ServicesPreview from '../components/pages/ServicesPreview';
import MustafaTeaser from '../components/pages/MustafaTeaser';
import OpeningHours from '../components/pages/OpeningHours';
import Testimonials from '../components/pages/Testimonials';

/**
 * Home - Landing page
 *
 * Combines all home page sections:
 * - Hero banner
 * - Introduction
 * - Service preview
 * - Mustafa teaser
 * - Opening hours
 * - Customer testimonials
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <IntroStrip />
      <ServicesPreview />
      <MustafaTeaser />
      <OpeningHours />
      <Testimonials />
    </main>
  );
}
