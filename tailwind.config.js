// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'bright-blue': 'hsl(220, 98%, 61%)',
          'first': 'hsl(192, 100%, 67%)',
          'second': 'hsl(280, 87%, 65%)',
          'third': 'hsl(230, 100%, 67%)',
        },
        light: {
          'very-light-gray': 'hsl(0, 0%, 98%)',
          'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
          'light-grayish-blue': 'hsl(233, 11%, 84%)',
          'dark-grayish-blue': 'hsl(236, 9%, 61%)',
          'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        },
        dark: {
          'very-dark-blue': 'hsl(235, 21%, 11%)',
          'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
          'light-grayish-blue': 'hsl(234, 39%, 85%)',
          'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
          'dark-grayish-blue': 'hsl(234, 11%, 52%)',
          'very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
          'very-dark-grayish-blue-alt': 'hsl(237, 14%, 26%)',
        },
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-dark': "url('/bg-mobile-dark.jpg')",
        'mobile-light': "url('/bg-mobile-light.jpg')",
        'desktop-dark': "url('/bg-desktop-dark.jpg')",
        'desktop-light': "url('/bg-desktop-light.jpg')",
      },
      letterSpacing: {
        'wide': '.3125em',
      },
      width: {
        '90': '23.438rem',
        '110':'40.25rem'
      },
      spacing: {
        '50': '12.5rem',
        '62': '16.5rem',
      }
    },
  },
  plugins: [],
}


