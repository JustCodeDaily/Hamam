import { Link } from 'react-router-dom';

/**
 * CTAButton - Reusable call-to-action button component
 *
 * Props:
 * - text (string): Button text
 * - href (string): URL or route
 * - variant ('primary' | 'secondary'): Style variant
 * - external (boolean): If true, opens in new tab; if false, uses React Router Link
 */
export default function CTAButton({ text, href, variant = 'primary', external = false }) {
  const baseStyles = 'rounded-full px-8 py-3 font-inter font-medium transition-all duration-200 inline-block';

  const primaryStyles = 'bg-hamam-terracotta text-white hover:bg-hamam-terracotta-dark';
  const secondaryStyles = 'border-2 border-hamam-olive text-hamam-olive hover:bg-hamam-olive hover:text-white';

  const styles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={href} className={styles}>
      {text}
    </Link>
  );
}
