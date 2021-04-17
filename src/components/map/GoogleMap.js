import React from "react";
import Map from './Map';
import { withScriptjs, withGoogleMap } from "react-google-maps";



const WrappedMap = withScriptjs(withGoogleMap(Map));
const GoogleMap = () => {
    return (
        <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div className="map-div-container" />}
            containerElement={<div className="map-div-container" />}
            mapElement={<div className="map-div-container" />}
        />
    );
}

export default GoogleMap;