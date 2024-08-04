# Q&A

## Does the module support Nuxt 2 ?

No, the module at least requires Nuxt 3.

For Nuxt 2, you can use [this module](https://www.npmjs.com/package/nuxt-leaflet).

## How does Leaflet compare to Mapbox ?

[Mapbox](https://www.mapbox.com/) is a mapping platform that provides a suite of tools to create maps and location-based services. It includes similar features to Leaflet, but with paid plans for more advanced services.

Think of Leaflet as an open-source technology, while Mapbox is a complete collection of advanced tools and services.

Both are great choices, it depends on your needs and budget. To be fair, [the creator of Leaflet](https://github.com/mourner) also works at Mapbox.

If you want to use Mapbox with Nuxt, you can use the [Nuxt Mapbox](https://nuxt.com/modules/nuxt-mapbox) module.

## How does Leaflet compare to MapLibre ?

[MapLibre](https://maplibre.org/) is a fork of the original Mapbox GL JS library. It has very similar features to Leaflet, and is also free and open-source.

:::tip Quote from [MapLibre's Github repository](https://github.com/maplibre/maplibre-gl-js)
MapLibre originated as an open-source fork of mapbox-gl-js, before their switch to a non-OSS license in December 2020.

The library's initial versions (1.x) were intended to be a drop-in replacement for the Mapbox’s OSS version (1.x) with additional functionality, but have evolved a lot since then.
:::

If you want to use MapLibre with Nuxt, we recommend using the [Nuxt MapLibre](https://gugustinette.github.io/nuxt-maplibre) module.

## Will Leaflet.draw be supported in the future ?

[Leaflet.draw](https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html) was created to provide a simple way to draw shapes on a map made with Leaflet.

However, as the project is not maintained anymore (last update in 2018, see [Github repository](https://github.com/Leaflet/Leaflet.draw)), we choose not to include its support in the module.
