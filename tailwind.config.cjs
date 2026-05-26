/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#111111',
        secondaryBg: '#1b1b1b',
        accentOrange: '#ff6b00',
        accentRed: '#ff3c00',
        lightText: '#f5f5f5',
        grayText: '#bbbbbb',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(255, 107, 0, 0.3)',
        'glow-red': '0 0 25px rgba(255, 60, 0, 0.4)',
      }
    },
  },
  plugins: [],
}