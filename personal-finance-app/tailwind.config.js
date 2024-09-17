/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily : {
      sans : ['Public Sans', 'sans-serif']
    },

    colors : {
      "beige-500" : "#98908B",
      "beige-100" : "#F8F4F0",
      "grey-900" : "#201F24",
      "grey-500" : "#696868",
      "grey-300" : "#B3B3B3",
      "grey-100" : "#F2F2F2",
      "green" : "#277C78",
      "yellow" : "#F2CDAC",
      "cyan" : "#82C9D7",
      "navy" : "#626070",
      "red" : "#C94736",
      "purple" : "#826CB0",
      "purple-sec" : "#AF81BA",
      "turquoise" : "#597C7C",
      "brown" : "#93674F",
      "mangenta" : "#934F6F",
      "blue-sec" : "#3F82B2",
      "navy-grey" : "#97A0AC",
      "army-green" : "#7F9161",
      "gold" : "#CAB361",
      "orange" : "#BE6C49"
    },
    extend: {},
  },
  plugins: [],
}