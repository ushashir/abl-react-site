
import React from 'react';
import {Link} from 'react-router-dom'

const RentHall = () => {
    return (
        <div >
            <div className="row centered-form">
                <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Fill the form below to Book for Hall Space! </h3> <br />
                        </div>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" required name="first_name" id="first_name" className="form-control input-sm"
                                            placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" required name="last_name" id="last_name" className="form-control input-sm"
                                            placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="number" required name="phone " className="form-control input-sm"
                                    placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" className="form-control input-sm"
                                    placeholder="Email Address" />
                            </div>
    
                            <div className="form-group">
                                <input type="text"  name="Organisation" id="Organisation"
                                    className="form-control input-sm" placeholder="Organisation (Optional)" />
                            </div>
    
                            <div className="form-group">
                                <input type="text-box" required name="Nature_of_Event" id="Nature_of_Event"
                                    className="form-control input-sm" placeholder="Nature of Event" />
                            </div>
                            
                            <div className="form-group">
                            <input type="text-box" required name="Scheduled Date" id="Scheduled Date"
                                className="form-control input-sm" placeholder="Scheduled Date" />
                            </div>
    
                    <hr />
    
                <input type="submit" value="Rent" className="btn btn-info btn-block" />

                </form> <br /> <br />
    
                <Link to='/'>Back to home page</Link>
            </div>
        </div>
        </div>
        </div>
        
    )
}

export default RentHall;