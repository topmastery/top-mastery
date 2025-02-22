import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffd900",
          light: "#ffe133",
        },
        dark: {
          DEFAULT: "#121212",
          light: "#2a2a2a",
        },
        light: {
          DEFAULT: "#ffffff",
          dark: "#f5f5f5",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        section: "clamp(60px, 8vw, 100px)",
        element: "clamp(20px, 3vw, 30px)",
      },
      borderRadius: {
        DEFAULT: "15px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
