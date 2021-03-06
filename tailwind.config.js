module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "heading": "#3f434a",
        "body-light": "#8a9099",
        "body-dark": "#595f69",
        "gray": "#c6c9cc",
        "border": "#e8e9eb",
        "bg": "#f8f8f8",
        "white": "#ffffff",
        "accent": "#304ffd",
        "orange": "#ff965d",
        "red": "#fd7972",
        "yellow": "#ffd240",
        "blue": "#22cce2",
        "green": "#49c96d",
        "dark-green": "#20a144",
        "dark-orange": "#e56e19",
        "dark-yellow": "#e5b823",
        "dark-red": "#f05c54",
        "dark-blue": "#009eb2",
        "purple": "#b656eb",
        "pink": "#f9ddc5"
      },
      "gradientColors": {},
      "fontSize": {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "0.9375rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "3.5rem"
      },
      boxShadow: {
        "button-passive": "0 2px 0 rgba(38,63,202,1)",
        "button-active": "0 8px 16px rgba(48, 76, 253, 0.2)",
        "popover-lg": "0 20px 50px rgba(44, 63, 88, 0.15);"
      },
      "fontFamily": {
        "poppins": "Poppins"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}