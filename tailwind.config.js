/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "arial": ["arial", "sans-serif"],
        "roboto": ["roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

