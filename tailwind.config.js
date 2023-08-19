module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          100: "#d9d9d9",
          900: "#363535",
          "700_75": "#42446e75",
          "100_01": "#cccccc",
        },
        gray: { 50: "#fbfbfb", 500: "#a6a6a6", 900: "#191919" },
        amber: { 400: "#f5de19" },
        red: { 600: "#de4c36" },
        blue: { 500: "#1f9cf0" },
        light_blue: { 500: "#13b0f5", 700: "#007acc", 900: "#0065a9" },
        pink: { A200: "#e60faa" },
        black: { 900: "#000000", "900_33": "#00000033" },
        white: { A700_01: "#ffffff", A700: "#fffdfd" },
      },
      fontFamily: { poppins: "Poppins", dmsans: "DM Sans" },
      boxShadow: { bs: "2px 2px  100px 0px #00000033" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
