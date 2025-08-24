/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Figma에서 추출한 색상들
        primary: '#1285ff',
        secondary: '#4da3ff',
        text: {
          primary: '#121a0f',
          secondary: '#212837',
          muted: '#373737',
        },
        background: {
          primary: '#f7fafc',
          secondary: '#fafafa',
        },
        border: '#ededed',
      },
    },
  },
  plugins: [],
}
