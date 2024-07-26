import type { Config } from 'tailwindcss'

export default {
  content: [
    // app content
    `./src/**/*.{js,ts,jsx,tsx,mdx}`,
    `../../packages/**/*.{js,ts,jsx,tsx}`,
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-blue': '#1947F2',
        snow: '#fbfbfb',
      },
    },
  },
  plugins: [],
} satisfies Config
