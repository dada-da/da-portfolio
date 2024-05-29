import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
        },
        grey: {
          DEFAULT: 'var(--grey)',
          disabled: 'var(--grey-disabled)',
        },
        black: {
          DEFAULT: 'var(--black)',
        },
        background: 'var(--background)',
        overlay: 'var(--background-overlay)',
        content: 'var(--content)',
        highlight: 'var(--highlight)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
