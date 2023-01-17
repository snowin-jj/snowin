/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      screens: {
        xl: '1380px',
      },
      colors: {
        primaryDark: '#121212',
        lightGray: '#A6A6A6',
      },
    },
  },
  plugins: [],
};
