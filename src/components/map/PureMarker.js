import React from 'react';
import { Marker } from "react-google-maps";



const PureMarker = ({ marker, onMarkerClick }) => {
    const clickMe = () => {
        onMarkerClick(marker)
    }
    return (
        <Marker
            position={marker.position}
            onClick={clickMe}
        />
    )
}
export default React.memo(PureMarker);