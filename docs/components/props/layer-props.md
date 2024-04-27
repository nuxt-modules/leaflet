- from [layer.ts](https://github.com/vue-leaflet/vue-leaflet/blob/master/src/functions/layer.ts)

| Prop name   | Description                                                                                                                                                                                               | Type                          | Required | Default       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------- | ------------- |
| pane        | By default the layer will be added to the map's [overlay pane](https://leafletjs.com/reference.html#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default | String                        | -        | 'overlayPane' |
| attribution | String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.             | String                        | -        | null          |
| name        |                                                                                                                                                                                                           | String                        | -        | -             |
| layerType   |                                                                                                                                                                                                           | String in ["base", "overlay"] | -        | -             |
| visible     |                                                                                                                                                                                                           | Boolean                       | -        | true          |

<!--@include: ./component-props.md-->
