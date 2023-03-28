/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Outfit', 'sans-serif'],
      'serif': ['Outfit', 'serif'],
      'mono': ['Outfit', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
