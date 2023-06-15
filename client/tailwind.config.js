/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        UltraDark: "#000000",
        Black: "#0d0d0d",
      },
      fontFamily: {
        bakbakOne: "Bakbak One, cursive",
        beVietnam: "Be Vietnam Pro, sans-serif",
      },
    },
  },
  plugins: [],
};
