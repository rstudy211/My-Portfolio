/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       Leckerli: ["Leckerli One", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
