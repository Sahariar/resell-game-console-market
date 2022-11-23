/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#003366",
        
"secondary": "#7EE7CD",
        
"accent": "#701a75",
        
"neutral": "#1f2937",
        
"base-100": "#F2F1F4",
        
"info": "#82C8E3",
        
"success": "#15803d",
        
"warning": "#A8610B",
        
"error": "#e11d48",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
