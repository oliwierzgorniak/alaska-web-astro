/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "rgb(44, 54, 57)",
      background: "rgb(220, 215, 201)",
      accent: "rgb(162, 123, 92)",
    },
    screens: {
      xs: "360px",
      md: "800px",
      lg: "1000px",
      xl: "1700px",
      "2xl": "2500px",
    },
  },
  plugins: [],
};
