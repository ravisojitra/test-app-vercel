module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafaf8",
          100: "#f4f3ef",
          200: "#eeebe5",
          300: "#eae7e0",
          600: "#7f7f7f",
          700: "#666666",
          800: "#4c4c4c",
          900: "#191919",
          "300_01": "#e0dbd0",
          "50_01": "#fcfcfb",
          "100_01": "#f6f5f2",
        },
        deep_purple: { A700: "#5600ff" },
        blue_gray: { 900: "#333333" },
      },
      boxShadow: { bs: "inset 0px 0px 14px 4px #ffffff7f" },
      fontFamily: { manrope: "Manrope" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
