/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // puntos de interruccion tamaño de pantalla

      // "ss": { max: "419px" },
      // "sm": { min: "420px", max: "640px" }, // móvil

      "sm": { max: "640px" }, // móvil
      "md": { min: "641px", max: "768px" }, // tablet
      "lg": { min: "769px", max: "1024px" }, // laptop
      "xl": { min: "1025px", max: "1280px" }, // desktop
      "2xl": { min: "1281px" }, // desktop
    },
    extend: {},
  },
  plugins: [],
}
