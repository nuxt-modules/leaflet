// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true,
    tooling: true,
  },
  dirs: {
    src: ['src', 'docs'],
  },
})
  .override('nuxt/typescript/rules', {
    rules: {
      // TODO: Discuss if we want to enable this
      '@typescript-eslint/no-explicit-any': 'off',
    },
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  })
