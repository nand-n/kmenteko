/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      colors: {
        primary: "#0F3A62",
        outline: "#D1D1D1",
        black100: "#1C1F1B",
        surface: "#F5FAFD",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
