/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hamam': {
          'terracotta': '#C4704B',
          'terracotta-dark': '#A85A38',
          'stone': '#F5F0EB',
          'stone-dark': '#E8E0D8',
          'olive': '#5C6B4F',
          'olive-dark': '#4A573F',
          'gold': '#C9A84C',
          'charcoal': '#2C2C2C',
          'warm-gray': '#6B6560',
          'cream': '#FFFCF7',
          'white': '#FFFFFF',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'base': ['16px', { lineHeight: '1.6' }],
      },
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.75',
      },
      maxWidth: {
        '7xl': '1280px',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  safelist: [
    'font-playfair',
    'font-inter',
    'text-hamam-charcoal',
    'bg-hamam-cream',
  ],
  plugins: [],
}
