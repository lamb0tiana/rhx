import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
