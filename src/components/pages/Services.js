
import React from 'react';
import { Link } from 'react-router-dom';
import Col4Div from './Col4Div';

const Services = () => {
    return (
    <div>
        <div className="row welcome text-center">
            <div className="col-12">
                <h1 className="display-4">Services </h1>

                <hr />
                <div className="col-12">

                    <p className="lead"> We offer condusive study enviroment with matured ambiance. Members of the
                        public
                        can <Link to='/register'>register</Link> and study at their comfort.</p>
                    <p className="lead">Our library hall with the capacity to accomodate
                        up to 40 persons is also available and can be <Link to='/book-hall'>rented</Link> for seminar
                        presentations,
                        public lectures, toturial sessions or any other academic related event.</p>
                    <p className="lead">
                        We also offer public lecture series tagged <strong>Alexander Bernhardt Library
                            Series</strong>
                    </p>
                </div>
            </div>
        </div>
        <br /> <br /> 
        <Col4Div />
    </div>

    
    )
}

export default Services;