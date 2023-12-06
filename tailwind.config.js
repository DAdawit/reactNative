/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // iPhone 5/SE
        sm: "375px", // iPhone 6/7/8/X
        md: "414px", // iPhone 6/7/8 Plus/XS Max
        lg: "768px", // iPad
        xl: "1024px",
      },
    },
  },
  plugins: [],
};
