module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_grey:"#36393f",
        discord_black:"#555",
        discord_black_secondary:"#333",
        discord_grey_primary:"#8e9297",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
