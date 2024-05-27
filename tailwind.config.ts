/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '24px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#88CCCA',
          hover: '#4fd1c5',
        },
        yellow: {
          DEFAULT: '#fbd38d',
          hover: '#F6AD55',
        },
        purple: {
          DEFAULT: '#af52bf',
          hover: '#9c27b0',
        },
        black: {
          DEFAULT: '#121212',
          500: '#8a8a8a',
          700: '#505050',
          800: '#151515',
        },
        grey: {
          DEFAULT: '#484848',
          200: '#B4B4B4',
        },
        red: {
          DEFAULT: '#CC888A',
        },
      },
    },
  },
  plugins: [],
};
