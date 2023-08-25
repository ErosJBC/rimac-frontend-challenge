/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-rimac': "#03050F",
        'gray-rimac-10': "#F8F9FF",
        'gray-rimac-60': "#5E6488",
        'neutral-rimac': "#7981B2",
        'neutral-rimac-light': "#FAFBFF",
        'neutral-rimac-soft': "#EDEFFC",
        'blue-berry-rimac': "#4F4FFF",
        'rose-rimac': "#FF1C44",
        'rose-rimac-dark': "#C333FF",
        'aqua-rimac': "#00F4E2",
        'lemon-rimac': "#00FF7F",
      }
    },
  },
  plugins: [],
}

