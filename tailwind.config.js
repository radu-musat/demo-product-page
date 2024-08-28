/** @type {import('tailwindcss').Config} */
import tailwindcssPrimeUi from 'tailwindcss-primeui';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true, // Optional: to center the container
        padding: '.75rem', // Optional: adjust padding as needed
        screens: {
          sm: '1274px', // Custom max width for small screens
          md: '1274px', // Custom max width for medium screens
          lg: '1274px', // Custom max width for large screens
          xl: '1274px', // Custom max width for extra-large screens
          '2xl': '1274px' // Custom max width for 2xl screens
        }
      }
    }
  },
  plugins: [tailwindcssPrimeUi]
};
