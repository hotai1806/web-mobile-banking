module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      fontSize: {
        // Or with a default line-height as well
        '3xl': ['14px', {
          letterSpacing: '-0.02em',
          lineHeight: '19px',
        }],
      }
    }
  },
  plugins: [],
}
