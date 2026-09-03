import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4E',
          light: '#2C3F6B',
          dark: '#101A33',
        },
        gold: {
          DEFAULT: '#D4A73C',
          light: '#E8C878',
          dark: '#B58A28',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
