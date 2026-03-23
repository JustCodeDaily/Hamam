/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hamam-terracotta':      '#C4704B',
        'hamam-terracotta-dark': '#A85A38',
        'hamam-stone':           '#F5F0EB',
        'hamam-stone-dark':      '#E8E0D8',
        'hamam-olive':           '#5C6B4F',
        'hamam-olive-dark':      '#4A573F',
        'hamam-gold':            '#C9A84C',
        'hamam-charcoal':        '#2C2C2C',
        'hamam-warm-gray':       '#6B6560',
        'hamam-cream':           '#FFFCF7',
        'hamam-dark-bg':         '#1A1614',
        'hamam-dark-nav':        '#221E1B',
        'hamam-dark-card':       '#2A2522',
        'hamam-dark-card-hover': '#332D29',
        'hamam-dark-section':    '#211D1A',
        'hamam-dark-text':       '#F5F0EB',
        'hamam-dark-muted':      '#A89E96',
        'hamam-dark-border':     '#3D3633',
        'hamam-dark-footer':     '#151210',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body':    ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
