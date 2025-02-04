/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00224D",
        secondary: "#001B3E",
        activehover: "#FF204E",
        button: "#A0153E",
        buttonhover: "#5D0E41",
      },
      fontFamily: {
        dmSans: ['"DM Sans"', "sans-serif"],
        dmSerif: ['"DM Serif Text"', "serif"],
        dmSerifDis: ['"DM Serif Display"', "serif"],
        intert: ["Inter Tight", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          //overide default container padding
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      }
    },
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    // },
  },
  plugins: [],
};
