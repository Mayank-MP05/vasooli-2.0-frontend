module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 0px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
