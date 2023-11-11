import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          10: '#144EE6',
        },
        black : {
          10: '#0B101B'    
        },
        grey : {
          10 :'#181E29' 
        },
        lite:{
          10: '#C9CED6'
        },
        pink: {
          10:'#EB568E'
        }
      }
    },
  },
  plugins: [],
}
export default config
