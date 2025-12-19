/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          cream: '#EBE9D6',
          green: '#89C978',
          yellow: '#FDD835',
          red: '#FF6B6B',
          blue: '#4ECDC4',
          black: '#121212',
          white: '#ffffff',
        }
      },
      boxShadow: {
        'neo': '5px 5px 0px 0px #000000',
        'neo-sm': '3px 3px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}

