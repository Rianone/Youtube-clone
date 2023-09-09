/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        white: '#F1F1F1',
        // white_v: '#AAAAAA',
        red: '#FF0000',
        black: '#282828'
      }
    },
  },
  plugins: [],
}
