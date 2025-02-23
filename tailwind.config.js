/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A3FF',
        dark: {
          DEFAULT: '#111111',
          light: '#1A1A1A'
        },
        light: {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5'
        }
      },
      fontFamily: {
        sans: ['var(--font-cairo)', 'sans-serif'],
      },
      direction: {
        rtl: 'rtl',
      }
    },
  },
  plugins: [],
};
