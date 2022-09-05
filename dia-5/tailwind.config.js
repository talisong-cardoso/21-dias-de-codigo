/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url(./assets/bg-mobile.svg);",
        "hero-desktop": "url(./assets/bg-desktop.svg);"
      }
    },
  },
  plugins: [],
}
