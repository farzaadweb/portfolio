/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem'
      }
    },
    colors: {
      primary: {
        '100': 'var(--color-primary-100)',
        '75': 'var(--color-primary-75)',
        '50': 'var(--color-primary-50)',
        '25': 'var(--color-primary-25)'
      },
      secondary: {
        '100': 'var(--color-secondary-100)',
        '75': 'var(--color-secondary-75)',
        '50': 'var(--color-secondary-50)',
        '25': 'var(--color-secondary-25)'
      },
      neutral: {
        '100': 'var(--color-neutral-100)',
        '75': 'var(--color-neutral-75)',
        '50': 'var(--color-neutral-50)',
        '25': 'var(--color-neutral-25)',
        'white': 'var(--color-neutral-white)'
      },
      semantic: {
        'error': 'var(--color-semantic-error)',
        'info': 'var(--color-semantic-info)',
        'warning': 'var(--color-semantic-warning)',
        'success': 'var(--color-semantic-success)'
      }
    }
  },
  plugins: []
};