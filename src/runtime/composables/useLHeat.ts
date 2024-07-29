// L can be loaded here as the composable should be loaded client-side only
import L from 'leaflet';
import type { Map } from 'leaflet';

interface HeatPoint {
  lat: number;
  lng: number;
  intensity: number;
}

interface Props {
  leafletObject: Map;
  heatPoints: HeatPoint[];
  radius?: number;
}

export const useLHeat = async (props: Props) => {
  // Lazy-load leaflet.heat
  // Importing it at the top level will cause errors because it could be loaded before the Leaflet library
  await import('leaflet.heat');

  const heat = L.heatLayer(
    props.heatPoints.map((point) => [point.lat, point.lng, point.intensity]),
    {radius: props.radius || 50}
  );

  // Add the heat layer to the map
  props.leafletObject.addLayer(heat);

  // Return the heat layer
  return heat;
}
