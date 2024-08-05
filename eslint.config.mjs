// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true,
    tooling: true,
  },
  dirs: {
    src: ['src'],
  },
})
  .append({
    ignores: ['node_modules', 'dist', 'playground', 'docs'],
  })
  .override('nuxt/typescript/rules', {
    rules: {
      // Required while Leaflet's types are not updated
      '@typescript-eslint/no-explicit-any': 'off',
    },
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  })
