/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBorder: '#EFF3F4', /* custom border used throughout the page */
        customHover: '#F4F6F8', /* custom Hover bacground used for sidebar buttons */
        customText : '#424955', /* custom Text color used for sidebar paragraphs */
      },
    },
  },
  plugins: [],
};
