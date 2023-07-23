/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        59: "59px",
        screen: "100vh",
      },
      minWidth: {
        88: "88px",
        0: "0px",
      },
      colors: {
        "custom-gray": "#EEEDEF",
        "custom-purple": "#1A1523",
        "custom-thin-gray": "#DCDBDD",
        "tomato-light-9": "#E54D2E",
        "tomato-light-7": "#F3B0A2",
      },
    },
  },
  plugins: [],
}
