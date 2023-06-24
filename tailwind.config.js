/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        'color-purple': 'var(--color-purple)',
        'color-light-red': 'var(--color-light-red)',
        'color-white':'var(--color-white)',
        'color-off-white':'var(--color-off-white)',
        'color-light-grey':'var(--color-light-grey)',
        'color-smokey':'var(--color-smokey-grey)',
        'color-off-black':'var(--color-off-black)'
      }
    },
  },
  plugins: [],
}

