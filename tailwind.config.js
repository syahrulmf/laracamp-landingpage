/** @type {import('tailwindcss').Config} */
const colors = require("./node_modules/react-landing-storybook/colors");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/react-landing-storybook/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        ring: {
          ...colors,
        },
        fill: {
          ...colors,
        },
        fontFamily: {
          sans: ["poppins"],
        },
      },
    },
  },
  plugins: [],
};
