/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'light': '0 0px 5px 1px rgba(255, 255, 255, 0.3)',
        'light-sm': '0 0px 5px 2px rgba(255, 255, 255, 0.3)',
        'dark': '0 0px 10px 5px rgba(0, 0, 0, 0.3)',
        'dark-sm': '0 0px 5px 2px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        "github": "#0d1117",
        "accent": "1e91ea",
      },
      backgroundImage: {
        "rainforest-light": "linear-gradient(to right bottom, rgba(215, 230, 220, 0.92), rgba(215, 210, 220, 0.93)), url('/assets/rainforest-hiva.jpg')",
        "rainforest-dark": "linear-gradient(to right bottom, rgba(30, 20, 30, 0.9), rgba(20, 30, 30, 0.9)), url('/assets/rainforest-hiva.jpg')",
        "sea-light": "linear-gradient(to right bottom, rgba(195, 200, 230, 0.91), rgba(210, 210, 240, 0.93)), url('/assets/sea.jpg')",
        "sea-dark": "linear-gradient(to right bottom, rgba(20, 20, 30, 0.9), rgba(30, 30, 40, 0.9)), url('/assets/sea.jpg')",
        "modern-light": "linear-gradient(to right bottom, rgba(195, 200, 230, 0.91), rgba(210, 210, 240, 0.93))",
      },
      dropShadow: {
        "dark": "0 15px 15px rgba(40, 40, 40, 1.0)",
        "light": "0 2px 2px rgba(255, 255, 255, 0.1)",
        "light-xl": "0 5px 5px rgba(255, 255, 255, 0.2)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)"
        ]
      },
    },
  },
  plugins: [],
}
