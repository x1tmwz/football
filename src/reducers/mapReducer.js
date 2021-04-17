const getMarker = (markers, markerId, markerIndex) => {
    if (markers[markerIndex].id === markerId) {
        return [markers[markerIndex]]
    } else {
        return markers.filter((marker) => marker.id === markerId);
    }

}
const defaultState = {
    markers: [],
    choseMarker: [],
    clickedMarker: null
}
const mapReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_MARKER':
            return { ...state, choseMarker: getMarker(state.markers, action.markerId, action.markerIndex) };
        case 'SET_MARKERS': {
            if (state.choseMarker[0]) {
                const newChoseMarker = action.markers[state.choseMarker[0].index];
                return { markers: action.markers, choseMarker: [newChoseMarker], clickedMarker: newChoseMarker };
            }
            return { ...state, markers: action.markers }
        }
        case 'SET_MARKER_EMPTY':
            return { ...state, choseMarker: [] }
        case 'SET_CLICKED_MARKER':
            return { ...state, clickedMarker: action.marker }
        default:
            return state;
    }
}
export { mapReducer as default, defaultState }




