/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          400: '#00ff9d',
          500: '#00cc7e',
          600: '#009960',
        }
      }
    },
  },
  plugins: [],
}
