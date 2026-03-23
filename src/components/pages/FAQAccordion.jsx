import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/faq';
import SectionHeading from '../shared/SectionHeading';

/**
 * FAQAccordion - FAQ accordion component
 *
 * Features:
 * - Expandable accordion items
 * - One open at a time
 * - Smooth transitions
 * - Chevron icon animation
 */
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <SectionHeading title="Häufige Fragen" />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-hamam-stone-dark rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-6 bg-hamam-white hover:bg-hamam-stone transition-colors"
            >
              <h3 className="font-inter font-semibold text-hamam-charcoal text-lg text-left">
                {item.question}
              </h3>
              <ChevronDown
                size={20}
                className={`text-hamam-terracotta flex-shrink-0 ml-4 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="bg-hamam-stone-dark p-6 border-t border-hamam-stone-dark animate-fade-in">
                <p className="font-inter text-hamam-warm-gray leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
