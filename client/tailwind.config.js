/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BEIGE: "#d6c9b6",
        GREY: "#dbdad8",
        DARK_GREY: "#383838",
        POWDER_BLUE: "#bbdddd",
        DARK_BG: "#061818",
        ORANGE_LIGHT: "#f37a43",
        ORANGE_DARK: "#061818",
        CUSTOM_BLACK: "#121213",
        CUSTOM_DARK_GRAY: "#1f1f20",
        DARK: "#070707",
        MEDIUM_GRAY: "#575759",
        CUSTOM_RED: "#EB546f",
        YELLOW: "#ffc700",
        WHITE: "#f1f1f4",
        BLUE: "#7193ed",
      },
      fontFamily: {
        bakbakOne: "Bakbak One, cursive",
      },
    },
  },
  plugins: [],
};
