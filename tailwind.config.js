const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
        sans: ["'Red Hat Mono', monospace"],
      },
      screens: {
        tablet: "1100px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
