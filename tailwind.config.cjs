module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'urgent-red': '#E63946',
        'clinic-white': '#FFFFFF',
        'light-gray': '#F1FAEE',
        'navy-blue': '#1D3557',
        'progress-orange': '#F77F00',
        'progress-green': '#06D6A0',
        'red-light-bg': '#FEE2E2'
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
