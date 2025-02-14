import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3ae0d", //yellow
        secondary: "#192324", //dark black
        tertiary: "#af601a", //orange
        quaternary: "#7c877f", //gray
      },
    },
  },
  plugins: [],
} satisfies Config;
