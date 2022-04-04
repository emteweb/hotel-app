import React from 'react';
import RoomList from './RoomList';

const HotelDetails = (props) => {

    const { images } = props.hotel;
    //console.log(props.hotel.name, "-", props.hotel);

    return (
        <>
            <div key={props.hotel.id} className="container">

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">

                            {images.length < 2
                                ?
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {
                                            images.map(pic => (
                                                <div class="carousel-item active">
                                                    <img src={pic.url} className="d-block w-100" alt={pic.alt} style={{ width: 400, height: 300 }} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                :
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        {
                                            images.map((pic, i) => (
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} aria-label={`Slide ${i}`}
                                                    class={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : "false"}
                                                ></button>
                                            ))
                                        }
                                    </div>
                                    <div className="carousel-inner">

                                        {
                                            images.map((pic, i) => (

                                                <div className={i === 0 ? "carousel-item active" : "carousel-item"}>
                                                    <img src={pic.url} className="d-block w-100" alt={pic.alt} style={{ width: 400, height: 300 }} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            }
                        </div>
                        <div className="col">
                            <div className="card-body">
                                
                                <div id='wrapper' className="row" >
                                    <div id='c1' className="col-6" >
                                        <h3 className="card-title hotel-title">{props.hotel.name}</h3>
                                    </div>
                                    <div id='c2' className="col-6 hotel-rating starability-result" data-rating={props.hotel.starRating}>
                                        {/* <span className='starability-result' data-rating={props.hotel.starRating}></span> */}
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <p className="card-text hotelDesc" >{props.hotel.address1} - {props.hotel.postcode} - {props.hotel.town}</p>
                                        <p className="card-text hotelDesc" ><small class="text-muted">{props.hotel.description}</small></p>
                                    </div>
                                </div>
                                
                                <RoomList roomId={props.hotel.id} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelDetails;