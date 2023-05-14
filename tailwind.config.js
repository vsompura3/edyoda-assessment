/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '8xl': '1440px',
        '9xl': '1700px',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1080ff',
          light: '#0096ff',
          dark: '#0048ff',
        },
        success: {
          light: '#d7eddd',
          dark: '#47ba68',
        },
        danger: {
          light: '#f77171',
          dark: '#ff0000',
        },
        alert: {
          light: '#f3c163',
          dark: '#de4313',
        },
        disabled: '#e7e7e7',
        surface: {
          100: '#d9d9d9',
          200: '#bebebe',
          300: '#3c4852',
        },
      },
    },
  },
  plugins: [],
}
