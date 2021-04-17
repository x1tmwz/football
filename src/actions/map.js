const setMarkers = (markers) => ({
    type: "SET_MARKERS",
    markers
})
const getMarker = (markerId,markerIndex) => ({
    type: "GET_MARKER",
    markerId,
    markerIndex
})
const setMarkerToEmpty = () => ({
    type: "SET_MARKER_EMPTY"
})
const setClickedMarker = (marker) => ({
    type: "SET_CLICKED_MARKER",
    marker
    
})
export {
   setMarkers,
   getMarker,
   setMarkerToEmpty,
   setClickedMarker
};