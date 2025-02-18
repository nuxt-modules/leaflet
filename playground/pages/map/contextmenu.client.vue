<template>
  <div style="height:100vh; width:100vw">
    <h1>Context Menu</h1>

    <UContextMenu :items="items" :ui="{ content: 'w-48' }">
      <div>
        <LMap
          style="height: 400px; width: 500px;"
          ref="map"
          :zoom="6"
          :max-zoom="18"
          :center="[47.21322, -1.559482]"
          :use-global-leaflet="false"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
          />
        </LMap>
      </div>
    </UContextMenu>
  </div>
</template>

<script setup lang="ts">
import type { ContextMenuItem } from '#ui/types';

const items = ref<ContextMenuItem[][]>([
  [
    {
      label: 'Appearance',
      children: [
        {
          label: 'System',
          icon: 'i-lucide-monitor'
        },
        {
          label: 'Light',
          icon: 'i-lucide-sun'
        },
        {
          label: 'Dark',
          icon: 'i-lucide-moon'
        }
      ]
    }
  ],
  [
    {
      label: 'Show Sidebar',
      kbds: ['meta', 's']
    },
    {
      label: 'Show Toolbar',
      kbds: ['shift', 'meta', 'd']
    },
    {
      label: 'Collapse Pinned Tabs',
      disabled: true
    }
  ],
  [
    {
      label: 'Refresh the Page'
    },
    {
      label: 'Clear Cookies and Refresh'
    },
    {
      label: 'Clear Cache and Refresh'
    },
    {
      type: 'separator'
    },
    {
      label: 'Developer',
      children: [
        [
          {
            label: 'View Source',
            kbds: ['meta', 'shift', 'u']
          },
          {
            label: 'Developer Tools',
            kbds: ['option', 'meta', 'i']
          },
          {
            label: 'Inspect Elements',
            kbds: ['option', 'meta', 'c']
          }
        ],
        [
          {
            label: 'JavaScript Console',
            kbds: ['option', 'meta', 'j']
          }
        ]
      ]
    }
  ]
])
</script>

<style>
#placeholder {
  background: rgba(255, 255, 255, 0.1);
}
</style>
