/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:    '#F5F0E8',
        charcoal: '#1C1C1C',
        stone:    '#8C7B6B',
        gold:     '#C9A96E',
        sage:     '#7A8C7E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
