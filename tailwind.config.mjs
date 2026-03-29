/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          50: "#f0f9f0",
          100: "#dcf8c6",
          200: "#8ce9f5",
          300: "#25d366",
          400: "#25d366",
          500: "#25d366",
          600: "#1fa355",
          700: "#1a8d48",
          800: "#14753b",
          900: "#0f5c2e",
        },
      },
      spacing: {
        "4xl": "56rem",
        "5xl": "64rem",
      },
      borderRadius: {
        full: "999px",
      },
    },
  },
  plugins: [],
}
