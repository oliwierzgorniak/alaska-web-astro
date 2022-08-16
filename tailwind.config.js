/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      primary: "rgb(44, 54, 57)",
      background: "rgb(220, 215, 201)",
      accent: "rgb(162, 123, 92)",
    },
  },
  plugins: [],
};
