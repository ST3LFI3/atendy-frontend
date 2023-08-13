/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
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
      'primary-gradient':'#E6E2F9',
      'primary-light-gradient':'#EAE8F2',
      'secondary':'#E45858',
      'gray-100':'#F2F2F2',
      'gray-300':'#E0E0E0',
      'gray-500':'#BDBDBD',
      'gray-600':'#828282',
      'gray-700':'#4F4F4F',
      'gray-900':'#111827',
      'dark':'#333333',
      'text-dark':'#121214',
      'white':'#fff',
      'white-ligth':'#F8F8FF',
      'neutral-50':'#fafafa',
      'input':'#F4F4FF'
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontFamily:{
      sans:['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
