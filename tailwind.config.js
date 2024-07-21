/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "linear-gradient(rgba(42, 41, 48, 0.7), rgba(23, 23, 27, 0.5)), url('/src/assets/hero-img.jpg')",
      },
      backgroundColor: {
        "dark-background": "rgba(0, 0, 0, 0.8)",
        "neutral-background": "rgba(255, 255, 255, 0.8)",
      },
      height: {
        0.375: "1.5px",
      },
    },
  },
  plugins: [],
};
