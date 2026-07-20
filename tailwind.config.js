/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: {
            DEFAULT: '#2563eb', // Royal Blue 600
            light: '#eff6ff',
            border: '#bfdbfe',
            dark: '#1d4ed8',
          },
          green: {
            DEFAULT: '#10b981', // Emerald Green 500
            light: '#ecfdf5',
            border: '#a7f3d0',
            dark: '#059669',
          },
          orange: {
            DEFAULT: '#f97316', // Sunset Orange 500
            light: '#fff7ed',
            border: '#fed7aa',
            dark: '#ea580c',
          },
        },
      },
    },
  },
  plugins: [],
};
