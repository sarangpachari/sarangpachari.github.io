/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: "#F4F4F0",
        ink: "#111111",
        accent: "#FF4F00",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        body: ['"Space Grotesk"', "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #111111",
        "brutal-sm": "2px 2px 0px 0px #111111",
        "brutal-lg": "6px 6px 0px 0px #111111",
        "brutal-accent": "4px 4px 0px 0px #FF4F00",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
}
