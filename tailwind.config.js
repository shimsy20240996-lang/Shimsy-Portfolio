/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        primary: {
          light: "#d946ef", // Fuchsia 500
          DEFAULT: "#c026d3", // Fuchsia 600
          dark: "#a21caf", // Fuchsia 700
        },
        accent: {
          light: "#c084fc", // Purple 400
          DEFAULT: "#a855f7", // Purple 500
          dark: "#9333ea", // Purple 600
        },
        navy: {
          light: "#1e293b", // Slate 800
          DEFAULT: "#0f172a", // Slate 900
          dark: "#020617", // Slate 950
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(192, 38, 211, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(192, 38, 211, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
