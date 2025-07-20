/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          light: "#60a5fa", // blue-400
          dark: "#1e40af", // blue-800
        },
        accent: {
          DEFAULT: "#a21caf", // purple-700
          light: "#e879f9", // fuchsia-400
        },
      },
    },
  },
  plugins: [],
}