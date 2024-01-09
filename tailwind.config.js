/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-white": "#fff",
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        "gray-700": "#363a3d",
        black: "#000",
        mediumspringgreen: {
          "100": "#1cd264",
          "200": "#1bc55f",
        },
        gray1: {
          "100": "rgba(30, 30, 30, 0.7)",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        slategray: "#576074",
        darkslategray: "#434343",
        darkgray: "#b1a7a7",
        "primary-800": "#1e2640",
        "gray-400": "#889099",
        "primary-700": "#2c3a61",
        "primary-900": "#0f1320",
        gainsboro: "#e6e6e6",
      },
      spacing: {},
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-large-400": "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
      "33xl": "52px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
