/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitronRegular: ["Orbitron-Regular", "sans-serif"],
        orbitronSemibold: ["Orbitron-SemiBold", "sans-serif"],
        orbitronMedium: ["Orbitron-Medium", "sans-serif"],
        orbitronExtrabold: ["Orbitron-ExtraBold", "sans-serif"],
        pretendard: ["Pretendard", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
