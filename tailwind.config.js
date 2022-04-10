const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        sans: ["'Arial', monospace"],
        maven_pro:"maven pro"
      },
      screens: {
        tablet: "1100px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
