/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#060A0D",
                secondary: "#5884B0",
                white: "#CCE6FF",
                dimWhite: "rgba(204, 230, 255, 0.7)",
                dimBlue: "#143C63",
            },
            fontFamily: {
                barlow: ["Barlow", "sans-serif"],
                roboto_mono: ["Roboto Mono", "monospace"],
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
