/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitronRegular: ["Orbitron-Regular", "sans-serif"],
        orbitronSemibold: ["Orbitron-SemiBold", "sans-serif"],
        pretendard: ["Pretendard", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
