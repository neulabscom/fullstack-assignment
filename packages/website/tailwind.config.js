module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        postCard: '32px'
      },
      boxShadow: {
        postCard: '0px 2px 2px rgb(0 0 0 / 20%)',
      },
      colors: {
        greenDark: 'rgb(18 71 52)'
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"]
      },
    },
  },
  plugins: [],
}