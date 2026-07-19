/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      },
      colors: {
        indigo: {
          50: '#f3fbf0',
          100: '#e3f6dc',
          200: '#c8edba',
          300: '#a3df8d',
          400: '#7ccd63',
          500: '#6DC042', // EXACT BRAND GREEN!
          600: '#5da538', // Brand green for hover/button text
          700: '#467d29',
          800: '#3b6523',
          900: '#31521d',
          950: '#172c0c',
        },
        violet: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#6DC042', // EXACT BRAND GREEN!
          600: '#5da538',
          700: '#467d29',
          800: '#3b6523',
          900: '#31521d',
          950: '#172c0c',
        },
        slate: {
          50: '#f5f7f9',
          100: '#eaedf2',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#1B2A3B', // EXACT BRAND NAVY!
          900: '#1B2A3B', // EXACT BRAND NAVY!
          950: '#0f172a',
        }
      }
    },
  },
  plugins: [],
};
