
import React from 'react';

const Contact = () => {
    return (

    <div>
        <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 "
                data-scrollreveal="enter top and move 100px, wait 0.5s">
                <div className="text-center">
                    <h1><i className="fa fa-tint small-icons bk-color-black"></i>Contact us Now</h1>
                    <p className="lead">
                        8, Morris Street. Yaba. Lagos - Nigeria.
                    </p>
                </div>
            </div>
        </div>
        
            <div className="row padding">
                <div className="col-md-12 col-lg-6">
                <h3><i className="fa fa-comments small-icons bk-color-red"></i>Message Us Here!</h3>
                </div>
                <hr /> 
            </div>

                
                <form >
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Name" name="name" value="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email address" name="email" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control"
                                    rows="6" cols="25" placeholder="Message" value=""></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" name="submit" className="btn btn-primary btn-lg">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
                
                <div className="col-lg-6">
                    <h3><i className="fa fa-comments small-icons bk-color-red"></i>Reach Us Here</h3>
                    <hr />
                    8, Morris Street. Yaba. Lagos - Nigeria.<br />
                    <p><strong> <a href="Tel:+234 813 857 2304">Tel: +234 813 857 2304 </a> </strong></p> <br />
                    Email: info@alexanderbernhardtlibrary.com <br />
                    <h4>Social Media Preference</h4>
                    <div className="col-12 social padding">
                        <a href="https://www.facebook.com/alexbernlibrary"> <i className="fab fa-facebook"></i> </a>
                        <a href="https://twitter.com/ab_library"> <i className="fab fa-twitter"></i> </a>
                        
                    </div>
                </div>
        </div>
    )
}

export default Contact;