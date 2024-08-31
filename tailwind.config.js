/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        SlideInShort: {
          '0%': { transform: 'translateX(-10px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        SlideInLong: {
          '0%': { transform: 'translateX(-25px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        SlideInShort: 'SlideInShort 0.5s ease-out forwards',
        SlideInLong: 'SlideInLong 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
