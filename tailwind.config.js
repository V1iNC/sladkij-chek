/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#faf6f2',
          100: '#f5ede3',
          200: '#e9d7c3',
          300: '#d9ba9c',
          400: '#c6996e',
          500: '#b58152',
          600: '#9c6842',
          700: '#3D2314',
          800: '#331c10',
          900: '#29170d',
        },
        cream: {
          50: '#F5F0E5',
          100: '#f0e8d6',
          200: '#e8d8b7',
          300: '#dac292',
          400: '#cdac6e',
          500: '#c39952',
          600: '#ad7f3d',
          700: '#8f6633',
          800: '#775430',
          900: '#64472c',
        },
        caramel: {
          50: '#fcf7ee',
          100: '#f7e8ca',
          200: '#efd09c',
          300: '#e5b269',
          400: '#dc9840',
          500: '#d48427',
          600: '#b6651e',
          700: '#954b1d',
          800: '#7a3e1f',
          900: '#66351d',
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};