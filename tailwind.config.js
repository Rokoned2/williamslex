/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "650px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {},

    fontFamily: {
      roboto: ["Roboto Condensed", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
