import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch, useTestContext } from '@nuxt/test-utils'

describe('nuxt leaflet', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/no-inject-css', import.meta.url)),
  })

  it('renders a basic map without the global CSS injection', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    // Verify there is no error
    expect(html).toContain('<html')
  })

  it('does not add Leaflet CSS to the global stylesheets', () => {
    expect(useTestContext().nuxt?.options.css).not.toContain('leaflet/dist/leaflet.css')
  })
})
