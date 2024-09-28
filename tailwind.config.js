/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
