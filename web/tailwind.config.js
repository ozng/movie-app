/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "light-background": "#FFFFFF",
        "light-title": "#333333",
        "light-paragraph": "#666666",
        "dark-background": "#1E1E1E",
        "dark-title": "#FFFFFF",
        "dark-paragraph": "#CCCCCC",
        "faded-1": "#CCCCCC",
        "faded-2": "#666666",
        "faded-3": "#333333",
        accent: "#f5c618",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
