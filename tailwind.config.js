/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Nunito Sans'", "sans-serif"],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.2)', // Uniform shadow
      }
    },
  },
  plugins: [],
}
