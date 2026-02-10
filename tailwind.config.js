/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Herbal Luxury palette
        Green: "#6FAE8E",        // primary herbal green
        Black: "#2F3E34",        // heading text
        DeepNightBlack: "#F7F1E8", // main background
        MidNightBlack: "#EFE6D8",  // section/cards
        EveningBlack: "#EFE6D8",   // section/cards
        DarkGray: "#C8A45D",     // gold hint
        SlateGray: "#9BC4B0",    // soft sage accent
        LightGray: "#5A5A5A",    // body text
        SilverGray: "#8A8A8A",   // muted text
        Snow: "#FFFFFF",         // button text / light
      },
      fontFamily: {
        'cascadia-normal': ['cascadia-normal'],
        'circular': ['circular-normal', 'sans-serif'],
        'circular-light': ['circular-light', 'sans-serif'],
        'circular-normal': ['circular-normal', 'sans-serif'],
        'circular-medium': ['circular-medium', 'sans-serif'],
        'circular-bold': ['circular-bold', 'sans-serif'],

      }
    },
  },
}
