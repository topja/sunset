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
      },
    },
      fontFamily: {
        agbalumo: ["Agbalumo", "serif"], 
        inter: ["Inter", "sans-serif"], 
    },
  },
  plugins: [],
}

