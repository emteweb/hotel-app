import React, { useContext } from 'react';
import HotelContext from '../context/hotelContext';
import RoomDetails from './RoomDetails';
import axios from 'axios';

const RoomList = (props) => {

    const roomURL = "https://obmng.dbm.guestline.net/api/roomRates/OBMNG"
    const [rooms, setRooms] = React.useState([]);

    React.useEffect(() => {

        axios.get(`${roomURL}/${props.roomId}`)
            .then(result => {
                setRooms(result.data.rooms);
                //console.log(result.data.rooms);
            })

    }, []);

    return (
        <>
            <h5>Available rooms:</h5>
            {rooms.map((room, i) => (
                <RoomDetails roomData={room} index={i} />
            ))}
        </>
    );
}

export default RoomList;
