import React,{ useReducer,useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import MapContext from '../context/MapContex';
import mapReducer, { defaultState } from '../reducers/mapReducer';
import {setMarkers} from '../actions/map';
import {getMarkers as getMarkersFromServer} from '../fetch/map'

const AppRouter = () => {
    const [state,dispatch] = useReducer(mapReducer,defaultState);
    useEffect(()=>{
       
        const getMarkers = async()=>{
            const data = await getMarkersFromServer();
            dispatch(setMarkers(data));
        }
        getMarkers();
    },[])
    return (
        <MapContext.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={MainPage} exact={true} />
                    <Route path='*' component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </MapContext.Provider>

    );

}
export default AppRouter;