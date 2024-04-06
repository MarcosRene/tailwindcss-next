import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#8257e6',
      },
    },
  },
  plugins: [],
};
export default config;

