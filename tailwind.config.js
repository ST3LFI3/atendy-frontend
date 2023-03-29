/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{      
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'primary':'#6246EA',
      'primary-light':'#A89BEA',
      'secondary':'#E45858',
      'gray-100':'#F2F2F2',
      'gray-300':'#E0E0E0',
      'gray-500':'#BDBDBD',
      'gray-600':'#828282',
      'gray-700':'#4F4F4F',
      'dark':'#333333',
    },
    fontFamily:{
      sans:['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
