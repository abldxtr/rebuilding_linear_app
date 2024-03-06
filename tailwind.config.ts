import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      marquee: {
        to: {
          transform: "translateX(-50%)",
        },
      },
    },
    animation: {
      marquee: "marquee 30s linear infinite",
    },
    extend: {
      colors: {
        accent: "rgb(103,232,249,1)",
      },
      // ...
    },
  },
  plugins: [],
};
export default config;
