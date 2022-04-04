import React from 'react';
import HotelContext from '../context/hotelContext';
import '../stylesheets/stars.css';

const SearchBox = () => {

    return (
        <>
            <div className="container">
                <HotelContext.Consumer>
                    {searchBox => (
                        <>
                            <div className='searchbox-title'>Choose you search criteria:</div>
                            <ul class="nav justify-content-center searchbox">
                                <li class="nav-item">
                                    <a className="nav-link">
                                        <span className='searchbox-spacing'>Adults</span>
                                        <span className='searchbox-spacing'><button type="button" className="btn btn-sm btn-success searchbtn"
                                            onClick={() => searchBox.countAdults("plus")}>+</button></span>
                                        <span className='searchbox-spacing'>{searchBox.adults}</span>
                                        <span><button type="button" className="btn btn-sm btn-danger searchbtn"
                                            onClick={() => searchBox.countAdults("minus")}>-</button></span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a className="nav-link">
                                        <span className='searchbox-spacing'>Children</span>
                                        <span className='searchbox-spacing'><button type="button" className="btn btn-sm btn-success searchbtn"
                                            onClick={() => searchBox.countChildren("plus")}>+</button></span>
                                        <span className='searchbox-spacing'>{searchBox.children}</span>
                                        <span><button type="button" className="btn btn-sm btn-danger searchbtn"
                                            onClick={() => searchBox.countChildren("minus")}>-</button></span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" aria-current="page">

                                        <fieldset className="starability-basic searchbox-rating">
                                            <input onChange={() => searchBox.getRate(0)} type="radio" id="no-rate" className="input-no-rate" name="rating" value="1" checked aria-label="No rating." />
                                            <input onChange={() => searchBox.getRate(1)} type="radio" id="first-rate1" name="rating" value="1" />
                                            <label htmlFor="first-rate1" title="Terrible">1 star</label>
                                            <input onChange={() => searchBox.getRate(2)} type="radio" id="first-rate2" name="rating" value="2" />
                                            <label htmlFor="first-rate2" title="Not good">2 stars</label>
                                            <input onChange={() => searchBox.getRate(3)} type="radio" id="first-rate3" name="rating" value="3" />
                                            <label htmlFor="first-rate3" title="Average">3 stars</label>
                                            <input onChange={() => searchBox.getRate(4)} type="radio" id="first-rate4" name="rating" value="4" />
                                            <label htmlFor="first-rate4" title="Very good">4 stars</label>
                                            <input onChange={() => searchBox.getRate(5)} type="radio" id="first-rate5" name="rating" value="5" />
                                            <label htmlFor="first-rate5" title="Amazing">5 stars</label>
                                        </fieldset>
                                    </a>
                                </li>
                            </ul>


                        </>
                    )}
                </HotelContext.Consumer>
            </div>


        </>
    );
}

export default SearchBox;


