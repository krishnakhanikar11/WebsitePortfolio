module.exports = {
  
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-x': '#64ffda',
        'blue-x': '#0a192f',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        "green-tint": "rgba(100,255,218,0.1)",
        'light-blue': '#112240',
        'navy': '#112240',
        'purle-end':'#3719ca'
      },
      fontFamily:{
        greenText : ['Fira Code'],
        mainText : ['Calibre']
      }, 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}



