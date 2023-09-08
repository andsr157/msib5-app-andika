/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        600: "#0984DD",
        700: "#0764A7",
        yellow: "#FCE834",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
      },
      error: {
        50: "#FEF3F2",
        500: "#F04438",
        700: "#B42318",
      },
      gits: {
        blue: {
          500: "#28A0F6",
        },
      },
    },
  },
  plugins: [],
}
