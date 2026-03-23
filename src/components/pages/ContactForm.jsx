import { useState } from 'react';

/**
 * ContactForm - Contact form component
 *
 * Features:
 * - Name, Email, Message fields
 * - Form validation
 * - Success message on submit
 * - TODO: Connect to email service or backend
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to email service or backend
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-hamam-white rounded-2xl shadow-md p-8 md:p-12">
      <h2 className="font-playfair text-4xl text-hamam-charcoal mb-8">
        Schreiben Sie uns
      </h2>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-hamam-olive bg-opacity-10 border-l-4 border-hamam-olive rounded text-hamam-olive font-inter">
          Vielen Dank! Wir melden uns bei Ihnen.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block font-inter font-medium text-hamam-charcoal mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-hamam-stone-dark rounded-lg font-inter text-hamam-charcoal focus:outline-none focus:border-hamam-terracotta focus:ring-2 focus:ring-hamam-terracotta focus:ring-opacity-20"
            placeholder="Ihr Name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block font-inter font-medium text-hamam-charcoal mb-2">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-hamam-stone-dark rounded-lg font-inter text-hamam-charcoal focus:outline-none focus:border-hamam-terracotta focus:ring-2 focus:ring-hamam-terracotta focus:ring-opacity-20"
            placeholder="Ihre E-Mail"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block font-inter font-medium text-hamam-charcoal mb-2">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 border border-hamam-stone-dark rounded-lg font-inter text-hamam-charcoal focus:outline-none focus:border-hamam-terracotta focus:ring-2 focus:ring-hamam-terracotta focus:ring-opacity-20 resize-none"
            placeholder="Ihre Nachricht"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-hamam-terracotta text-white py-3 rounded-full font-inter font-medium hover:bg-hamam-terracotta-dark transition-colors"
        >
          Nachricht senden
        </button>
      </form>

      {/* TODO: Connect to email service or backend */}
    </div>
  );
}
