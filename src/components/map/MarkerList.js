import React, { useContext } from "react";
import MapContex from '../../context/MapContex';
import {setClickedMarker} from '../../actions/map'
import PureMarker from './PureMarker';




const MarkerList = () => {
    const { state,dispatch } = useContext(MapContex);
    const onMarkerClick = (marker)=>{
        if(marker){
            dispatch(setClickedMarker(marker))
        }
    }
    return (
        <>
            {state.choseMarker.length > 0 ?
                state.choseMarker.map((marker) => {
                    return (
                        <PureMarker key={marker.id} marker={marker} onMarkerClick={onMarkerClick} />
                    )
                }) :
                state.markers.map((marker) => {
                    return (
                        <PureMarker key={marker.id} marker={marker} onMarkerClick={onMarkerClick}/>
                    )
                })
            }

        </>
    );
}



export default MarkerList