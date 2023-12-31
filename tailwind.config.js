/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        main: "#130055",
      },
      backgroundImage: {
        "travel-image":
          "url('https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80')",
      },
    },
  },
  plugins: [],
};
