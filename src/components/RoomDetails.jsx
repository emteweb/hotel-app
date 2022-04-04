import React, { useContext } from 'react';
import HotelContext from '../context/hotelContext';


const RoomDetails = (props) => {

    const { name, occupancy, bedConfiguration, longDescription } = props.roomData;
    const i = props.index;
    const currentHotel = useContext(HotelContext);

    return (
        <>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div>
                    {occupancy.maxAdults >= currentHotel.adults && occupancy.maxChildren >= currentHotel.children
                        ?

                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`flush-heading${i}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`#flush-collapse${i}`}>
                                    {name}
                                </button>
                            </h2>
                            <div id={`flush-collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${i}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div>
                                        <h5>Room type: {bedConfiguration}</h5>
                                        <ul>
                                            <li>Max adults: {occupancy.maxAdults}</li>
                                            <li>Max children: {occupancy.maxChildren}</li>
                                        </ul>
                                        <p>{longDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </>


    );
}

export default RoomDetails;