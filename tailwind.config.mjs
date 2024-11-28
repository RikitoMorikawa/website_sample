/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fuchi': {
          50: '#f0f9f7',
          100: '#d5efe9',
          200: '#aeddd3',
          300: '#83c5b7',
          400: '#5aab9b',
          500: '#429283',
          600: '#357569',
          700: '#2d5d55',
          800: '#284a45',
          900: '#233d39',
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      }
    },
  },
  plugins: [],
}