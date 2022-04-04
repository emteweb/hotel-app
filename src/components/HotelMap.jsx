import React, { useContext } from 'react';
import HotelContext from '../context/hotelContext';


import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Marker } from "react-mapbox-gl";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HotelMap = () => {
    const hotelData = useContext(HotelContext);

    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOXTOKEN
    });
    const markerUrl = process.env.REACT_APP_MARKERURL

    return (
        <div className="container">

            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '70vh',
                    width: '210vh',
                    center: [-1.6676889727155322, 52.66264489790555],
                    zoom: 0.62
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.127758000, 51.507351000]} />
                </Layer>

                <Marker
                    coordinates={[-0.127758000, 51.507351000]}
                    anchor="bottom">
                    <FontAwesomeIcon className='pin' icon={faLocationPin} />
                </Marker>
                <Marker
                    coordinates={[-2.238484845867145, 53.476745976760796]}
                    anchor="bottom">
                    <FontAwesomeIcon className='pin' icon={faLocationPin} />
                </Marker>
                <Marker
                    coordinates={[-1.9010646316642137, 52.481999698656324]}
                    anchor="bottom">
                    <FontAwesomeIcon className='pin' icon={faLocationPin} />
                </Marker>
                <Marker
                    coordinates={[-3.5194016065578118, 50.726033682474814]}
                    anchor="bottom">
                    <FontAwesomeIcon className='pin' icon={faLocationPin} />
                </Marker>


            </Map>

        </div>



    )
}

export default HotelMap;