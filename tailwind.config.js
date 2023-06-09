/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "secondary": "#F9FAFB",
        "sec-gray": "#E5E7EB"
      },
      maxWidth: {
        "app-fit": "98rem"
      }
    },
  },
  plugins: [],
}