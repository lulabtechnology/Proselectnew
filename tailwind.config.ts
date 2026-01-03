import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper))",
        ink: "rgb(var(--ink))",
        brand: {
          DEFAULT: "rgb(var(--brand))",
          50: "rgb(var(--brand-50))",
          100: "rgb(var(--brand-100))",
          200: "rgb(var(--brand-200))",
          700: "rgb(var(--brand-700))",
          900: "rgb(var(--brand-900))"
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          50: "rgb(var(--accent-50))",
          100: "rgb(var(--accent-100))",
          700: "rgb(var(--accent-700))"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(2, 6, 23, 0.10)",
        glow: "0 0 0 1px rgba(2,6,23,0.06), 0 18px 60px rgba(12,74,155,0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;
