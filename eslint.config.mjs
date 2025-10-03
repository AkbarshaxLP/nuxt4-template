// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    tooling: true,
  },
}).append({
  ignores: ['**/api-gen/**', '**/components/ui/**'],
})
