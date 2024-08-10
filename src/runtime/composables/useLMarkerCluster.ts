import type { MarkerOptions, Map, Marker } from 'leaflet'

interface MarkerProps {
  name?: string
  lat: number
  lng: number
  options?: MarkerOptions
  /**
   * Should be a string formatted as HTML
   */
  popup?: string
}

interface Props {
  leafletObject: Map
  markers: MarkerProps[]
}

export const useLMarkerCluster = async (props: Props) => {
  // Get Leaflet from the window object
  const L = window.L

  // Lazy-load leaflet.markercluster
  // Importing it at the top level will cause errors because it could be loaded before the Leaflet library
  const { MarkerClusterGroup } = await import('leaflet.markercluster')

  // Initialize marker cluster
  const markerCluster = new MarkerClusterGroup()

  // Create an array to store the markers
  const markers = [] as Marker[]

  // For each marker in props
  props.markers.forEach((location: any) => {
    // Create a Leaflet marker
    const marker = L.marker([location.lat, location.lng], {
      title: location.name,
      ...location.options,
    })

    // If a popup is provided, bind it to the marker
    if (location.popup) {
      const popup = L.DomUtil.create('div', 'popup')
      popup.innerHTML = location.popup
      marker.bindPopup(popup)
    }

    // Add the marker to the cluster
    markerCluster.addLayer(marker)

    // Add the marker to the markers array
    markers.push(marker)
  })

  // Add the marker cluster to the map
  props.leafletObject.addLayer(markerCluster)

  // Return the markerCluster and markers
  return {
    markerCluster,
    markers,
  }
}
