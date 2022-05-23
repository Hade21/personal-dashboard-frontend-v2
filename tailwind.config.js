module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, sans serif",
        opensans: "Open Sans, sans serif",
      },
      colors: {
        "profile-color": "rgba(87, 70, 234, 1)",
        "card-color": "rgba(29, 32, 75, 1)",
        "home-color": "rgba(13, 19, 35, 1)",
        "finance-color": "rgba(255, 139, 100, 1)",
        "todo-color": "rgba(86, 194, 230, 1)",
        "article-color": "rgba(255, 94, 125, 1)",
        "input-border": "rgba(200, 200, 200, 1)",
      },
    },
  },
  plugins: [],
};
