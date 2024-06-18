import type { MarkerOptions } from 'leaflet';

interface MarkerProps {
  name?: string;
  lat: number;
  lng: number;
  options?: MarkerOptions;
}

interface Props {
  mapInstance: any;
  markers: MarkerProps[];
}

export const useMarkerCluster = async (props: Props) => {
  // Get Leaflet from the window object
  const L = window.L;

  // Import MarkerClusterGroup from leaflet.markercluster
  // This is a dynamic import, so it will only be loaded when this function is called
  // Also, importing it at the top level will cause errors because it could be loaded before the Leaflet library
  const { MarkerClusterGroup } = await import('leaflet.markercluster');

  // Initialize marker cluster
  const markerCluster =  new MarkerClusterGroup();

  // For each marker in props
  props.markers.forEach((location: any) => {
    // Create a Leaflet marker
    const marker = L.marker([location.lat, location.lng], {
      title: location.name,
      ...location.options,
    });

    // Add the marker to the cluster
    markerCluster.addLayer(marker);
  });

  // Add the marker cluster to the map
  props.mapInstance.leafletObject.addLayer(markerCluster);
}
