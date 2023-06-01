/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                black: "#060A0D",
                white: "#CCE6FF",
                secondary: "#5884B0",
                dimWhite: "#CCE6FF70",
                dimBlue: "#143C63",
                red: "#e23b32",
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
