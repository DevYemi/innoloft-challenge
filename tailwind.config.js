/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#272E71",
        secondary: "#F9FAFB"
      },
      maxWidth: {
        "app-fit": "95rem"
      }
    },
  },
  plugins: [],
}