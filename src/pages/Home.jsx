/**
 * Home.jsx
 * Landing page (/) for Hamam Braunschweig.
 * Sections in order:
 *   1. Hero — full-viewport hero with tagline and CTA
 *   2. WhatIsHamam — two-column editorial about the Ottoman bath tradition
 *   3. ServiceTeaser — three featured services in staggered cards
 *   4. OpeningHours — weekly schedule with appointment note
 *   5. MeetYourHost — personal intro for Saliha-Nur Erden
 */

import Hero from '../components/Hero'
import WhatIsHamam from '../components/WhatIsHamam'
import ServiceTeaser from '../components/ServiceTeaser'
import OpeningHours from '../components/OpeningHours'
import MeetYourHost from '../components/MeetYourHost'

export default function Home() {
  return (
    <>
      {/* 1. Full-viewport hero */}
      <Hero />

      {/* 2. Educational section on the Hamam tradition */}
      <WhatIsHamam />

      {/* 3. Three featured service teasers */}
      <ServiceTeaser />

      {/* 4. Weekly opening hours table */}
      <OpeningHours />

      {/* 5. Owner introduction */}
      <MeetYourHost />
    </>
  )
}
