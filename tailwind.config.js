const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./Layout/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkest: "#000329",
      darker: "#0E1445",
      light: "#7C83D7",
      dark: "#1E2663",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      width: {
        img: "320px",
        photo: "480px",
        card: "710px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
