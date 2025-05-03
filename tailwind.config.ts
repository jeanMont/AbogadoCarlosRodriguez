import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix:"",
  theme: {
    container: {
        center:true,
        padding:"2rem",
        screens:{
            "2xl":"1400px",
        },
    },
    extend: {
        colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "#1D71B8", // Azul principal
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#2D2E83", // Azul oscuro/indigo
              foreground: "#FFFFFF",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "#F8F9FA",
              foreground: "#9A9A9C", // Gris
            },
            accent: {
              DEFAULT: "#E8F1FA", // Versión clara del azul principal
              foreground: "#1D71B8",
            },
            popover: {
              DEFAULT: "hsl(var(--popover))",
              foreground: "hsl(var(--popover-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
            // Colores corporativos específicos
            corporate: {
              blue: "#1D71B8",
              navy: "#2D2E83",
              gray: "#9A9A9C",
              white: "#FFFFFF",
            },
          },
          
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90deg, rgba(11, 61, 145, 1) 0%, rgba(11, 61, 145, 0) 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
