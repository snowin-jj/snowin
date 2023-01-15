/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
