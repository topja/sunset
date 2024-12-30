/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#008EC4",
        azulSueve: "#EBF9FF",
        verdeOscuro: "#008395",
        fondo: "#F7F7F7",
        Charcoal: "#122620",
        Gold: "#D6AD60",
        Tan: "#B68D40",
        Cream: "#F4EBD0",
      },
    },
      fontFamily: {
        agbalumo: ["Agbalumo", "serif"], 
        inter: ["Inter", "sans-serif"], 
    },
  },
  plugins: [],
}

