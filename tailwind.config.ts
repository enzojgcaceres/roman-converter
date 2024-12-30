import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       marble: '#f4f4f4',
       gold: '#d4af37',
       terracotta: '#e2725b',
       bronze: '#cd7f32',
      },
      fontFamily: {
        roman: ['"Cinzel"', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
