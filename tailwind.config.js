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
        background: "var(--bg-dark)",
        surface: "var(--bg-surface)",
        primary: {
          light: "#38bdf8", // Sky 400
          DEFAULT: "#0ea5e9", // Cyan/Sky 500
          dark: "#0284c7", // Sky 600
        },
        accent: {
          light: "#60a5fa", // Blue 400
          DEFAULT: "#3b82f6", // Electric Blue 500
          dark: "#2563eb", // Blue 600
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
          '0%, 100%': { boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
