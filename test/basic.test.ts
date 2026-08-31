import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch, useTestContext } from '@nuxt/test-utils'

describe('nuxt leaflet', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders a basic map', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    // Verify there is no error
    expect(html).toContain('<html')
  })

  it('adds Leaflet CSS to the global stylesheets by default', () => {
    expect(useTestContext().nuxt?.options.css).toContain('leaflet/dist/leaflet.css')
  })
})
