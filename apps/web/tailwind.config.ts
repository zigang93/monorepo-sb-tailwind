import sharedConfig from 'tailwind-config/tailwind.config'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: sharedConfig.content,
  presets: [sharedConfig],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        // brand
        'neon-blue': '#1947F2',
        // neutral
        snow: '#fbfbfb',
      },
      boxShadow: {
        'card-light': '0 0 5px 2px rgba(221, 221, 221, 0.8)',
        'card-dark': '0 0 5px 2px rgba(0, 0, 0, 0.8)',
        highlight: '0 0 15px 3px rgba(221, 221, 221, 0.8)',
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
        blink: 'blink 2s  infinite',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(2)' },
          '100%': { transform: 'scaleY(0.5)' },
        },
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
} satisfies Config
