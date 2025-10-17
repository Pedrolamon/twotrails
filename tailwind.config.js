// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'sage': '#6D8D7E',
        'terracotta': '#A8795A',
        'beige-light': '#F5F5DC',
      },
    },
  },
  plugins: [],
}