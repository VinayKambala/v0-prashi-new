/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1680px",
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
          DEFAULT: "#d4af37",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#2c2c2c",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Premium construction company palette
        cream: "#faf8f5",
        "warm-white": "#ffffff",
        "light-gray": "#f5f5f5",
        "medium-gray": "#e8e8e8",
        "dark-gray": "#2c2c2c",
        charcoal: "#1a1a1a",
        gold: "#d4af37",
        "gold-light": "#e6c659",
        "gold-dark": "#b8941f",
        "accent-blue": "#2563eb",
        "accent-green": "#059669",
        platinum: "#e5e5e5",
        champagne: "#f7e7ce",
        bronze: "#cd7f32",
        steel: "#71797e",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        rotateSlowly: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInScale: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 15s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        shimmer: "shimmer 3s infinite",
        "rotate-slowly": "rotateSlowly 20s linear infinite",
        "slide-in-up": "slideInUp 0.6s ease-out",
        "fade-in-scale": "fadeInScale 0.5s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(90deg, #d4af37, #e6c659)",
        "gradient-light": "linear-gradient(90deg, #ffffff, #faf8f5)",
        "gradient-construction": "linear-gradient(135deg, #faf8f5 0%, #ffffff 50%, #f5f5f5 100%)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(212, 175, 55, 0.25)",
        "gold-md": "0 4px 12px rgba(212, 175, 55, 0.3)",
        "gold-lg": "0 8px 24px rgba(212, 175, 55, 0.35)",
        construction: "0 10px 40px rgba(0, 0, 0, 0.1)",
        premium: "0 20px 60px rgba(0, 0, 0, 0.15)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2c2c2c",
            a: {
              color: "#d4af37",
              "&:hover": {
                color: "#b8941f",
              },
            },
            h1: {
              color: "#2c2c2c",
              fontWeight: 600,
            },
            h2: {
              color: "#2c2c2c",
              fontWeight: 500,
            },
            h3: {
              color: "#2c2c2c",
              fontWeight: 500,
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
