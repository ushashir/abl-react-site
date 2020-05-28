
import React from 'react';

const AblSeries = () => {
    return (
        <div className="row padding">
                    <div className="col-md-12 col-lg-6">
                        <h2>Alexander Bernhardt Library Series</h2>
                        <p>The Alexander Bernhardt Library Series is a special library extension service
                            designed to offer round table discussions on sensitive issues and topics of public interest.
                        </p>
                        <p>A variety of scholars and professional experts are mobilized by the library management
                            to deliberate exhaustively on chosen topics. This program features occasionally in the
                            library
                            hall.</p>

                        <br />
                        <a href="https://alexanderbernhardtlibrary.com/Blog/2019/12/12/alexander-bernhardt-library-series/" className="btn btn-primary">Read more </a>
                    </div>
                    <div className="col-lg-6">
                        <img alt="series" src={require ("../img/ablseries.jpg")} className="img-fluid" />
                    </div>
                </div>
    )
}

export default AblSeries;