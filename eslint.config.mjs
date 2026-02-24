import nextConfig from 'eslint-config-next'

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
      // This rule is for Pages Router; App Router uses native <head> in layout.tsx
      '@next/next/no-head-element': 'off',
      // Custom fonts in App Router layout.tsx <head> is valid; rule targets Pages Router _document.js
      '@next/next/no-page-custom-font': 'off',
    },
  },
]

export default eslintConfig