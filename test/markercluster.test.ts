import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'

describe('nuxt leaflet', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/markercluster', import.meta.url)),
  })

  it('renders a basic map with the leaflet.markercluster plugin', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    // Verify there is no error
    expect(html).toContain('<html')
  })
})
