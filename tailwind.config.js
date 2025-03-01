/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mochiy: ["Mochiy Pop One", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: ["light", "dark"],
    }
}