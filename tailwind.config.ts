import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08070a",
          900: "#0d0b10",
          800: "#17141a",
          700: "#211c24",
        },
        gold: {
          300: "#eddcb0",
          400: "#dcc088",
          500: "#c9a24d",
          600: "#a9822f",
        },
      },
      fontFamily: {
        display: ["Merriweather", "serif"],
        body: ["Inter", "sans-serif"],
        script: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 28%, rgba(201,162,77,0.20), transparent 62%)",
      },
      keyframes: {
        bounceSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        bounceSlow: "bounceSlow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
