import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brown-gradient": "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
      },
    },
  },
  plugins: [],
} satisfies Config;
