/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': '#001929',
        'background': '#ffffff',
        'primary': '#fe8e48',
        'secondary': '#ebf7ff',
        'accent': '#df5601',
      },
    },
    keyframes: {
      'expand': {
        '0%': {
          transform: 'scale(0)',
          opacity: 1,
          // border: '8px',
        },
        '50%': {
          opacity: 0.8,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0,
          // border: '16px',
        },
      },
    },
    animation: {
      'buttonGenius': 'expand 1s linear infinite',
    },
  },
  plugins: [],
}

