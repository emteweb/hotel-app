import React, { useContext } from 'react';
import HotelContext from '../context/hotelContext';
import HotelDetails from './HotelDetails';


const HotelList = () => {

    const currentData = useContext(HotelContext);
    const filterRate = currentData.rate;

    return (

        <HotelContext.Consumer>
            {currentHotel => (
                currentHotel.hotels.map((hotel) => (

                    <div>
                        {hotel.starRating >= filterRate ? <HotelDetails hotel={hotel} /> : null}
                    </div>
                ))
            )}
        </HotelContext.Consumer>
    );
}

export default HotelList;