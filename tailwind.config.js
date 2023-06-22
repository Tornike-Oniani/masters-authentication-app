module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'cst-gray': {
          600: '#F8F9FA',
          700: '#F6F6F6',
          800: '#F5F5F5',
          900: '#F0F1F4',
        },
        'cst-dark-gray': {
          700: '#6C757D',
          800: '#5C636A',
          900: '#565E64',
        },
        'cst-black': {
          800: '#2B3A4A',
          900: '#263442',
        },
        'cst-lavender': {
          700: '#8176C1',
          800: '#7A6FBE',
          900: '#685EA2',
        },
        'cst-cyan': {
          800: '#29BBE3',
          900: '#239FC1',
        },
        'cst-text-gray': {
          600: '#8699AD',
          700: '#6C757D',
          800: '#5B626B',
          900: '#000000',
        },
        'cst-border': {
          100: '#CED4DA',
          200: '#b9bfc4',
        },
      },
    },
  },
};
