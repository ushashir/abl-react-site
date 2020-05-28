
import React from 'react';

const Col4Div = () => {
    return (
        <div className="row padding">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"> <a href="https://alexanderbernhardtlibrary.com/Blog/">NEWS ALERT</a> </h4>
                                <p className="card-text"><b>COVID-19: LIBRARY SHUT DOWN TO CONTINUE. </b> 
                                <br /> 
                                The library will continue to be shut down pending when the general lock down from government is over.
                                 It will be recalled that the ...
                                </p>
                               <a href="https://alexanderbernhardtlibrary.com/Blog/2020/04/13/covid-19-library-shut-down-to-continue/" 
                                    className="btn btn-outline-secondary">Read More here...</a> 
                            </div>
                            <img className="card-imd-top" alt="news" src={require('../img/library_charges.jpg')}  />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"> <a href="https://alexanderbernhardtlibrary.com/Blog/2020/01/11/rent-a-portable-place-for-your-conference/">RENT OUR LIBRARY HALL</a> </h4>
                                <p className="card-text">Our library hall with the capacity to accommodate
                                    up to 40 persons is also available and can be Rented for seminar presentations,
                                    public lectures, toturial sessions or any other academic related event.</p>
                                <a href="inc/renthall.php" className="btn btn-outline-secondary">Rent Here</a>
                            </div>
                            <img className="card-imd-top" src={require ("../img/renthall2.jpg")} alt="hall" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">OPENING/CLOSING HOURS</h4>
                                <p className="card-text">8am - 6pm, Monday - Friday</p>
                                <p className="card-text"> 9am - 3pm, Saturdays</p>
                                <p className="card-text">Closed, Sunday</p>
                                <p>Note: Events can be booked on Sundays</p>
                                <br /> <br />
                            </div>
                            <img className="card-imd-top" src={ require ("../img/och.jpg")} alt="hours" />
                        </div>
                    </div>

                </div>
    )
}

export default Col4Div;