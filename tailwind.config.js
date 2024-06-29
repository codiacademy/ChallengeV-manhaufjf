/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#C1C1C1',
        magic:{
          100: '#CE80F4',
          200: '#A211EB',
          300: '#9C23D9',
          400: '#582173',
          500: '#431055'
        }
      }
    },
  },
  plugins: [],
}

