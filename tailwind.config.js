/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: "#1b1b1b",
        black: "#111",
        blackFade: "#11111170",
        mutedLight: "#ffffff50",
        mutedELight: "#ffffff03",
        border: "#ffffff10",
        green: "#55D6BE",
        red: "#EE4266",
      },
      animation: {
        "move-left": "move-left 20s linear infinite",
        "move-top": "move-top 5s  ease-in-out infinite",
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-top": {
          "0%": {
            transform: "translateY(0%)",
            opacity: "0.1",
          },
          "20%": {
            transform: "translateY(20%)",
            opacity: "0.3",
          },
          "40%": {
            transform: "translateY(50%)",
            opacity: "0.7",
          },
          "55%": {
            transform: "translateY(70%)",
            opacity: "1",
          },
          "75%": {
            transform: "translateY(70%)",
            opacity: "1",
          },
          "80%": {
            transform: "translateY(50%)",
            opacity: "0.7",
          },
          "90%": {
            transform: "translateY(20%)",
            opacity: "0.3",
          },
          "95%": {
            transform: "translateY(0%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
