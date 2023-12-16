/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        discord: {
          foreground: {
            primary: "hsl(0 0% 100% / <alpha-value>)",
            DEFAULT: "hsl(0 0% 100% / <alpha-value>)",
          },
          background: {
            primary: "hsl(206 9% 15% / <alpha-value>)",
            secondary: "hsl(214 7% 19% / <alpha-value>)",
            DEFAULT: "hsl(206 9% 15% / <alpha-value>)",
          },
          accent: {
            DEFAULT: "hsl(235 86% 65% /<alpha-value>)",
          },
        },
      },
    },
  },
  plugins: [],
};
