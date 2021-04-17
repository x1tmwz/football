import React, { useContext } from "react";
import { GoogleMap, InfoWindow } from "react-google-maps";
import MapContex from '../../context/MapContex';
import configDefault from '../../configDefault.json';
import MarkerList from './MarkerList';
import {setClickedMarker} from '../../actions/map'




const Map = () => {
    const { state,dispatch } = useContext(MapContex);
    const removeInfo =()=>{
        dispatch(setClickedMarker(null));
    }
    return (
        <GoogleMap
            defaultZoom={configDefault["colorado"].zoom}
            defaultCenter={{ lat: configDefault["colorado"].center.lat, lng: configDefault["colorado"].center.lng }}
        >
            <MarkerList />
            {state.clickedMarker && <InfoWindow
                position={state.clickedMarker.position}
                onCloseClick={removeInfo}

            >
                <div>{`${state.clickedMarker.id}  ${state.clickedMarker.display}`}</div>
            </InfoWindow>}

        </GoogleMap>
    );
}



export default Map