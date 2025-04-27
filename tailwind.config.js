// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../docs/**/*.mdx",
    "!../docs/node_modules",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        "3xl": "1620px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "2880px",
      },
      colors: {
        left: "#75CFE8",     // Update from "#0FABFF"
        right: "#2D2372",    // Update from "#AE24E0"
        accent: "#D2EAFE",
        palePurple: "#F1E4F3",
        componentDarkMode: "#282a2c",
      },
    },
  },
  plugins: [require("autoprefixer")],
  autoprefixer: {
    browsers: ["last 2 versions", "safari >= 7", "ie >= 10"],
  },
};
