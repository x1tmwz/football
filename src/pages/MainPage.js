import React from "react";
import GoogleMap from '../components/map/GoogleMap';
import InfoBar from '../components/InfoBar/InfoBar';
import configDefault from '../configDefault.json';



const MainPage = () => {


    return (
        <div className="main-page">
            <InfoBar title={configDefault.main.title} />
            <div className="main-page-map-container">
                <GoogleMap />
            </div>

        </div>
    );
}

export default MainPage;