import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1FF",
        ink: "#0F1B2D",
        cobalt: { DEFAULT: "#2A44F5", deep: "#1B2FC4" },
        sun: "#FFD23F",
        bubblegum: "#FF8FC7",
        mint: "#7BE8B8",
        tangerine: "#FF8A3D",
        lilac: "#D9D0FF",
        slate: "#4F5B6E",
        line: "#D9DEE7",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        pop: "4px 4px 0 0 #0F1B2D",
        "pop-lg": "8px 8px 0 0 #0F1B2D",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin-slow 16s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
