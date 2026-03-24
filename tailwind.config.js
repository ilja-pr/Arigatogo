// tailwind.config.js
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgLight: 'var(--color-bgLight)',
        textLight: 'var(--color-textLight)',
        accentLight: 'var(--color-accentLight)',
        bgDark: 'var(--color-bgDark)',
        textDark: 'var(--color-textDark)',
        accentDark: 'var(--color-accentDark)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
