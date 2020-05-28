import React from 'react';

import About from './About';
import Services from './Services';
import Col4Div from './Col4Div';
import AblSeries from './AblSeries';
import Contact from '../forms/Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className="vh-10 dt w-100 tc bg-light-gray green cover">
              <img alt="logo" src={ require('../img/bg.jpg') } />
            </div>
            <div className="tc">
                <h1>Welcome to Alexander Bernhardt Library Website</h1>
            </div>
            
            <About />
            <Services />
            <Col4Div />
            <AblSeries />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;