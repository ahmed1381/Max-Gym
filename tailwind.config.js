/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pureWhite: '#fff',
        primary : '#1d232a',
        secondary: '#3f4e5f',
        accent: '#9ea5af',
        text: '#cccdd2',
        action: '#d59b3d',
        actiong: '#f2bf3f',
        'pureWhite-hover': '#f2f2f2',
        'primary-hover': '#2a3038',
        'secondary-hover': '#4f5e6f',
        'accent-hover': '#aeb5bf',
        'text-hover': '#dddddd',
        'action-hover': '#b08033',
      },
      boxShadow: {
        'input': 'inset 2px 5px 10px rgba(0,0,0,0.3)',
        'box': 'box-shadow: 13px 13px 100px #969696,\n' +
            '             -13px -13px 100px #ffffff;\n' +
            '}'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}