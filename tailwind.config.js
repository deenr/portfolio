/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          50: '#fcedea',
          100: '#f9dad4',
          200: '#f3b5aa',
          300: '#ec917f',
          400: '#e66c55',
          500: '#e0472a',
          600: '#b33922',
          700: '#862b19',
          800: '#5a1c11',
          900: '#2d0e08'
        }
      }
    }
  },
  plugins: []
};
