/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"Libre Franklin"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        paper: '#FFFFFF',
        ink: '#101012',
        muted: '#52525B',
        faint: '#8B8B93',
        line: '#E6E6EA',
        accent: '#2342E0',
      },
      maxWidth: {
        prose: '40rem',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
};
