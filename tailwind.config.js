/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      // sm: "640px",
      // md: "768px",
      // lg: "960px",
      // xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#93C23D",
        secondary: "#B8E5DE",
        lightGrey: "#B6B6B6",
        darkGrey: "#5F5F5F",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
