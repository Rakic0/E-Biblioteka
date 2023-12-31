import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        47: "4.7rem",
        39: "3.9rem",
        33: "3.3rem",
        29: "2.9rem",
        26: "2.6rem",
        24: "2.4rem",
        22: "2.2rem",
        20: "2rem",
        18: "1.8rem",
        17: "1.7rem",
        16: "1.6rem",
        14: "1.4rem",
        13: "1.3rem",
      },
      colors: {
        smalt: "#003C95",
        guardsman_red: "#D30E00",
        cod_gray: "#1e1e1eb3",
        alto: "#D9D9D9",
      },
      scale: {
        "180": "1.8",
      },
    },
  },
  plugins: [],
};
export default config;
