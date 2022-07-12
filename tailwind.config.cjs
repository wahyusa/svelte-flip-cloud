const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        "brand-text": "hsl(215, 51%, 70%)",
        "brand-bg": "hsl(217, 54%, 11%)",
        "brand-card": "hsl(216, 50%, 16%)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      }
    },
  },

  plugins: [],
};

module.exports = config;
