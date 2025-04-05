import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      boxShadow: {
        //low: "var(--shadow-elevation-low-bottom)",
        //medium: "var(--shadow-elevation-medium-bottom)",
        //high: "var(--shadow-elevation-high-bottom)",

        "low-top": "var(--shadow-elevation-low-top)",
        "medium-top": "var(--shadow-elevation-medium-top)",
        "high-top": "var(--shadow-elevation-high-top)",

        "low-bottom": "var(--shadow-elevation-low-bottom)",
        "medium-bottom": "var(--shadow-elevation-medium-bottom)",
        "high-bottom": "var(--shadow-elevation-high-bottom)",
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",

        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",

        "text-base": "var(--text-base)",
        "text-heading": "var(--text-heading)",
        "text-muted": "var(--text-muted)",

        surface: "var(--surface)",
        "surface-100": "var(--surface-100)",
        "surface-200": "var(--surface-200)",

        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        info: "var(--info)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('preline/plugin'),
  ],
} satisfies Config;
