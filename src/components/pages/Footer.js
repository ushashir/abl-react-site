
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
                <div className="row">
                  <div className="col">
                  <strong><p>SOCIAL</p></strong>
                    <a href="https://www.facebook.com/alexbernlibrary"> <i className="fab fa-facebook"></i> </a>
                    <br />
                    <a href="https://twitter.com/ab_library"> <i className="fab fa-twitter"></i> </a>
                  </div>
                  <div className="col">
                    <p><strong>EXPLORE LINKS</strong> </p> 
                    <Link to='/'>Home</Link><br /> 
                    <Link to='/book-hall'>Rent Hall</Link> <br />
                    <Link to='/eresources'>Eresources</Link><br />
                    <br />     
                  </div>
                  <div className="col">
                      <br />
                      <br />
                    <Link to='/register'>Register</Link> <br />
                    <Link to='/blog'>Blog</Link> <br />
                    <a href="https://www.google.com/search?q=alexander+bernhardt+library&oq=a&aqs=chrome.
                    1.69i60j69i59l2j69i60l2j5l3.5021j0j7&sourceid=chrome&ie=UTF-8#lrd=0x103b8d22f0c7b65b:0x6561c8c28a7b0da7,1,,," 
                    >Reviews</a> 
                    <br />
                </div>
                  <div className="col">
                    <strong><p>CONTACTS</p></strong>
                    8 Morris Street. Yaba. Lagos - Nigeria <br />
                    +234 813 857 2304 <br />
                    info@alexanderbernhardtlibrary.com <br />
                    Mon - Sat: 8am - 6pm 
                  </div>
                  <br />
                <hr />

                
                </div>
                <h5> All rights reserved. | Alexander Bernhardt Library. &copy; 2020.  
                    Powered by  <a href="http://nawipedia.com">nawill</a></h5>
    </div>  

    )
}

export default Footer;