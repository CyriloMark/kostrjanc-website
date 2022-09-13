/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#5884B0",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#143C63",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        roboto_mono: ["Roboto Mono", "monospace"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};