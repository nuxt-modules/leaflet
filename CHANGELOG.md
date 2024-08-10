# Changelog

## v1.2.1

This release improves the `useLMarkerCluster` to help using legacy methods from Leaflet.

More info : https://leaflet.nuxtjs.org/guide/marker-cluster.html

### ✨ Changes

- `useLMarkerCluster` now returns 2 objects
  - `markers` which is the array of [Marker](https://leafletjs.com/reference.html#marker) created during the creation of the cluster
  - `markerCluster` which is the MarkerCluster created
- Markers passed to `useLMarkerCluster` now takes a `popup` option, considered an HTML string, that automatically binds a [Popup](https://leafletjs.com/reference.html#popup) to the corresponding marker

### ❤️  Contributors

- Gugustinette  <mercier.augustin@outlook.fr>
- @tratteo

## v1.2.0

This release add support fort the [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat) plugin, through an auto-imported composable `useLHeat`.

More info : https://leaflet.nuxtjs.org/guide/heat.html

### ✨ Changes

- `useLHeat` composable was added to support [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat)
  - Related tests and documentation were added
- `useMarkerCluster` was renamed to `useLMarkerCluster` to fit the [standards](https://nuxt.com/docs/guide/going-further/modules#always-prefix-exposed-interfaces)

### ❤️  Contributors

- Gugustinette  <mercier.augustin@outlook.fr>

## v1.1.0

This release add support fort the [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) plugin, through an auto-imported composable `useMarkerCluster`.

More info : https://leaflet.nuxtjs.org/guide/marker-cluster.html

### ✨ Changes

- **Add support for Leaflet.markercluster** : [issue](https://github.com/nuxt-modules/leaflet/issues/15)

### ❤️  Contributors

- Gugustinette  <mercier.augustin@outlook.fr>
- Daniel Roe <daniel@roe.dev>
- @antoineLZCH
- @shinGangan

## v1.0.14

This release is a migration from the old `nuxt3-leaflet` module to the new `@nuxtjs/leaflet` module.
It includes the same features as version `1.0.13` of the old module, but also enable compatibility with Nuxt 4.

Consider that this is the new module's first stable release, as previous versions are not available on npm through the `@nuxtjs` namespace.

### ✨ Changes

- **Indicate compatibility with Nuxt 4** : [commit](https://github.com/nuxt-modules/leaflet/commit/00f81c18ff80341fdefecec0a0b56d067adbd524)

### ❤️  Contributors

- Gugustinette <mercier.augustin@outlook.fr>
- Daniel Roe <daniel@roe.dev>

## v1.0.13

This release drops the old `leaflet-runtime.ts` to take advantage of the [Vue Leaflet behavior](https://github.com/vue-leaflet/vue-leaflet/blob/db34dff79cc62bc6fa51357e953e9bcf55725c94/src/components/LMap.vue#L250-L256) when importing Leaflet.
This prevent Leaflet from being imported literally everywhere in the app, even if it isn't used.

### ✨ Changes

- **Drop Leaflet runtime import:** [#1](https://github.com/nuxt-modules/leaflet/issues/1)

### ❤️  Contributors

- Gugustinette <mercier.augustin@outlook.fr>
- Daniel Roe <daniel@roe.dev>

## v1.0.12

Initial Release

### ✨ Changes

  - **Auto-import Vue Leaflet components:** [v1.0.1](https://github.com/nuxt-modules/leaflet/commit/ae50d3ef634b4903878f3c2b81b0ba7a71795707#diff-9b09a2431586002325ecf88d666c07eedba4dbdec83acfa5890526aa2e18764c)
  - **Auto-import Leaflet as L:** [v1.0.3](https://github.com/nuxt-modules/leaflet/commit/67f25f8c8cf59e1c89711e7a938dd292d4e358df#diff-082d2c8211be1dd40cb6dc5a124074d5bb825b41568250ce265dfa4d3e0c601a)

### ❤️  Contributors

- Gugustinette <mercier.augustin@outlook.fr>
