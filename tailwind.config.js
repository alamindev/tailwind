module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}", 
  ],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-red": "#ff2d20",
        "brand-dark": "#011E26",
      },
    },
  },
  plugins: [],
};
