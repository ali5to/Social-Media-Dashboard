/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(195, 100%, 50%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "desaturated-purple": "hsl(243, 51%, 70%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue-top": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        toggle: "hsl(230, 22%, 74%)",
        "darker-grayish-blue": "hsla(232, 33%, 91%, 1)",
      },
      backgroundImage: {
        instagram:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        "toggle-gradient":
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
};
