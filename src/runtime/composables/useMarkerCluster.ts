import type { MarkerOptions, Map } from 'leaflet'

interface MarkerProps {
  name?: string
  lat: number
  lng: number
  options?: MarkerOptions
}

interface Props {
  leafletObject: Map
  markers: MarkerProps[]
}

export const useMarkerCluster = async (props: Props) => {
  // Get Leaflet from the window object
  const L = window.L

  // Lazy-load leaflet.markercluster
  // Importing it at the top level will cause errors because it could be loaded before the Leaflet library
  const { MarkerClusterGroup } = await import('leaflet.markercluster')

  // Initialize marker cluster
  const markerCluster = new MarkerClusterGroup()

  // For each marker in props
  props.markers.forEach((location: any) => {
    // Create a Leaflet marker
    const marker = L.marker([location.lat, location.lng], {
      title: location.name,
      ...location.options,
    })

    // Add the marker to the cluster
    markerCluster.addLayer(marker)
  })

  // Add the marker cluster to the map
  props.leafletObject.addLayer(markerCluster)
}
