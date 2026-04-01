/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#060912',
        ink: '#d8e3ff',
        muted: '#9fb0d9',
        electric: '#57b5ff',
        violet: '#7e5dff',
      },
      boxShadow: {
        glow: '0 14px 45px rgba(40, 86, 211, 0.35)',
        card: '0 18px 42px rgba(5, 12, 28, 0.55)',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
