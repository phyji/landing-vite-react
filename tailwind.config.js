/** @type {import('tailwindcss').Config} */
export default {
    darkMode:"class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            space: ['"Space Grotesk"', 'sans-serif'], // Menambahkan font Space Grotesk
            satoshi: ["Satoshi"]
          },
          container: {
            center: true, // Memastikan kontainer selalu di tengah
            padding: {
              DEFAULT: '1rem', // Padding default (16px)
              sm: '2rem',      // Padding untuk breakpoint sm (32px)
              lg: '4rem',      // Padding untuk breakpoint lg (64px)
              xl: '0px',      // Padding untuk breakpoint xl (80px)
            },
            screens: {
              sm: '640px',
              md: '768px',
              lg: '1024px',
              xl: '1280px',
            },
          },
          backgroundImage: {
            'gradient-150': 'linear-gradient(150deg, var(--tw-gradient-stops))',
            'gradient-225': 'linear-gradient(225deg, var(--tw-gradient-stops))',
            'circle-pattern':"url('src/assets/Subtract.png')"
          }
        },
      },
      plugins: [],
    };