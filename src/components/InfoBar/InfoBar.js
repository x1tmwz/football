import React,{useContext,useEffect} from 'react';
import InfoList from './InfoList';
import MapContex from '../../context/MapContex';
import {getMarker,setMarkerToEmpty,setMarkers} from '../../actions/map';
import {getLocation} from '../../socket/socket';


const InfoBar = ({ title, data = [1, 2, 3] }) => {
    const { state, dispatch } = useContext(MapContex);
    const setOption = (marker)=>{
        if(marker){
            dispatch(getMarker(marker.id,marker.index));
            return;
        }
        dispatch(setMarkerToEmpty());
    }
   
    useEffect(()=>{
        getLocation(({markers})=>{
            dispatch(setMarkers(markers))
        })

    },[dispatch])
    
    return (
        <div className="info-bar">
            <h3>{title}</h3>
            <InfoList options={state.markers} optionLabelProp="id" setOption={setOption} />
        </div>

    )




}
export default InfoBar;

