/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#0a0a0f",  // page background
          900: "#12121a",  // surface / cards
          800: "#1b1b26",  // elevated surface
          700: "#262633",  // borders
        },
        aura: {
          violet: "#8b5cf6",   // primary electric violet
          magenta: "#d946ef",  // secondary neon magenta
          cyan: "#22d3ee",     // tertiary accent
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(139,92,246,0.3)',
        'glow-magenta': '0 0 20px rgba(217,70,239,0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
