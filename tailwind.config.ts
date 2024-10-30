import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFA116",
        "secondary": "#F7F8FF",
        "tertiary": "#262626",
        "this-blue": "#017AFF"
      },
    },
  },
  plugins: [],
};
export default config;
