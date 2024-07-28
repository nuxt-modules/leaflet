import type { Map } from 'leaflet';

interface HeatPoint {
  lat: number;
  lng: number;
  intensity: number;
}

interface Props {
  leafletObject: Map;
  heatPoints: HeatPoint[];
}

export const useHeat = async (props: Props) => {
  // Get Leaflet from the window object
  const L = window.L;

  // Lazy-load leaflet.heat
  // Importing it at the top level will cause errors because it could be loaded before the Leaflet library
  await import('leaflet.heat');

  const heat = L.heatLayer(
    props.heatPoints.map((point) => [point.lat, point.lng, point.intensity]),
    {radius: 50}
  );

  // Add the heat layer to the map
  props.leafletObject.addLayer(heat);

  // Return the heat layer
  return heat;
}
