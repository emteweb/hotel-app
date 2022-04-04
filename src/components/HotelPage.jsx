import React, { useState } from 'react';
import SearchBox from './SearchBox';
import HotelList from './HotelList';
import HotelMap from './HotelMap';
import HotelContext from '../context/hotelContext';

import axios from 'axios';

const baseURL = "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";

const HotelPage = () => {

    const [hotels, setHotels] = React.useState([]);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rate, setRate] = useState(1);


    const changeRate = (e) => {
        console.log("Clicked radio button!", e);
        setRate(e);
        return e;
    }

    const changeAdults = (param) => {
        if (param === "plus") {
            setAdults(adults + 1)
        }
        else {
            setAdults(adults - 1)
        }
    }

    const changeChildren = (param) => {
        if (param === "plus") {
            setChildren(children + 1)
        }
        else {
            setChildren(children - 1)
        }
    }

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setHotels(response.data);
        });
    }, []);

    return (

        <div className="container">

            <HotelContext.Provider value={
                {
                    hotels,
                    adults,
                    countAdults: changeAdults,
                    children,
                    countChildren: changeChildren,
                    rate,
                    getRate: changeRate,
                }
            }
            >
                {/* <HotelMap /> */}
                <SearchBox />
                <HotelList />
            </HotelContext.Provider>
        </div>

    );
}

export default HotelPage;