/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-fixed-dim': '#00dbe7',
        'background': '#121318',
        'surface-container-lowest': '#0d0e13',
        'surface-container-low': '#1a1b21',
        'surface-container': '#1e1f25',
        'surface-container-high': '#292a2f',
        'surface-container-highest': '#34343a',
        'secondary': '#fface8',
        'secondary-container': '#ff24e4',
        'on-surface': '#e3e1e9',
        'on-surface-variant': '#b9cacb',
        'outline': '#849495',
        'outline-variant': '#3a494b',
        'primary-fixed': '#74f5ff',
        'on-primary': '#00363a',
        'error': '#ffb4ab',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
