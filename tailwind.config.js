/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      screens: {
        tablet: "873px",
        mobile: "580px",
      },
      colors: {
        primary: "#FFB84C",
        secondary: "#2B2730",
        tertiary: "#F6F6F6",
      },
      backgroundImage: {
        bgImage: "url(../src/assets/images/banner.png)",
      },
      boxShadow: {
        bottom: ".1px 7px 0px 1px #FFB84C",
      },
      keyframes: {
        beep: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        beep: "beep 2s infinite",
      },
    },
  },
  plugins: [],
};
