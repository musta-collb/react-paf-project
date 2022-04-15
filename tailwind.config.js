const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
      },
      screens: {
        tablet: "1100px",
        ...defaultTheme.screens,
      },
      colors: {
        purple: colors.purple,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
