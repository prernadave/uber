/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // Vite ke liye ensure karein ki yeh file included ho
    "./src/**/*.{js,ts,jsx,tsx}", // React ke liye correct path set karein
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
