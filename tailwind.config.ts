import { purple } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';

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
        xl: '80px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#81e6d9',
          hover: '#319795',
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
          800: '#323232',
        },
      },
    },
  },
  plugins: [],
};
