export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cardinal: ['"Cardinal Fruit"', "Georgia", "serif"],
        clash: ['"Clash Display"', "sans-serif"],
        hanken: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          secondary: "#414141",
        },
      },
    },
  },
  plugins: [],
};
