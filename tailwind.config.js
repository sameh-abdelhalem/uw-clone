/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "700px",
        md: "990px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {
        strongGreen: "rgb(16, 138, 0)",
        textGreen: "rgb(20, 168, 0)",
        hoverGreen: "#14a800",
        navGreen: "#108a00",
        darkGray: "rgb(24, 24, 24)",
      },

      backgroundImage: {},
    },
  },
  plugins: [],
};
