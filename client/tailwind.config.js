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
      },
    },
  },
  plugins: [],
};
