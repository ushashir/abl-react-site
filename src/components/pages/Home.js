import React from 'react';

import About from './About';
import Services from './Services';
import Col4Div from './Col4Div';
import AblSeries from './AblSeries';
import Contact from '../forms/Contact';

const Home = () => {
    return (
        <div>
            <img alt="logo" src={ require('../img/bg.jpg') } />

            <About />
            <Services />
            <Col4Div />
            <AblSeries />
            <Contact />     
        </div>
    )
}

export default Home;