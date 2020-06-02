import React from 'react';

import About from './About';
import Services from './Services';
import AblSeries from './AblSeries';
import Contact from '../forms/Contact';

const Home = () => {
    return (
        <div>
            <img alt="logo" src={ require('../img/bg.jpg') } />

            <About />
            <br /> <br /> <br /> <br />
            <Services />
            <br /> <br /> <br /> <br />
            <AblSeries />
            <br /> <br /> <br /> <br />
            <Contact />
                 
        </div>
    )
}

export default Home;