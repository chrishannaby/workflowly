module.exports = {
  mode: "jit",
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "black",
        pinkred: "#FF6583",
        plurple: "#6C63FF",
      },
    },
  },
  variants: {},
  plugins: [],
};
