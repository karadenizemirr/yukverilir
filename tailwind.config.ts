import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        bold: ['gabarito-bold'],
        black: ['gabarito-black'],
        extrabold: ['gabarito-extrabold'],
      },
      colors: {
        primary: '#064ACB',
        secondary: '#F3A953',
        light: '#F2F3F3',
        silver : '#808080b0',
      }
    },
  },
  plugins: [],
}
export default config
