/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
      },
      boxShadow: {
        'button-inset': 'inset 0px 1px 0px 0px rgba(255, 255, 255, 0.3)'
      },
      keyframes: {
        pulse: {
          '0%': {
            width: '0.5rem',
            height: '0.5rem',
            opacity: '1'
          },
          '50%': {
            width: '1.5rem',
            height: '1.5rem',
            opacity: '0'
          },
          '100%': {
            width: '1.5rem',
            height: '1.5rem',
            opacity: '0'
          }
        }
      },
      animation: {
        pulse: 'pulse 2.5s infinite ease-out'
      }
    }
  },
  plugins: []
};
