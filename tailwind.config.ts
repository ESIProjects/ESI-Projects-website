/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        buttonShadow: "#3D3D3D 5px 5px",
        buttonShadowGreen: "#B0EFC6 3.33px 3.33px",
        buttonShadowRed: "#FF1F1F 3.33px 3.33px",
      },
      dropShadow: {
        lightShadow: "3.4277427196502686px 3.4277427196502686px 0px #3B3B3B"
      },
      keyframes: {
        float:{
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-1rem)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}