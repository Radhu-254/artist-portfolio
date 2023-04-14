/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero: "url('/src/img/hero/hero.jpg')",
        about: "url('/src/img/about/bg.jpg')",
        interview: "url('/src/img/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/src/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
