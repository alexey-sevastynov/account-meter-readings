import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--color-background))",
                foreground: "rgb(var(--color-foreground))",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-mono)", "monospace"],
            },
        },
    },
} satisfies Config;
