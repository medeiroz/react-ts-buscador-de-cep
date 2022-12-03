/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
   extend: {
    animation: {
      flip: 'flip 2s',
    },
    keyframes: {
      flip: {
          from: { transform: 'rotateX(90deg)' },
          to: { transform: 'rotateX(0deg)' },
        },
    },
   },
 },
 plugins: [],
}