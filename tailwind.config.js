module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(from|to|via)-.+/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// /(from|to|via)-(sky|blue|emerald|orange|cyan|teal|purple|rose|indigo|amber|yellow|lime)-(500|600|700|800)/,
// /\/(40|50|60|70|80|90)/,
// \/(4|5|6|7|8|9)0
