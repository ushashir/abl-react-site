import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
// pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Eresources from './components/pages/Eresources';
import UserManual from './components/pages/UserManual';
import Blog from './components/pages/Blog';
import Footer from './components/pages/Footer';
import NotFound from './components/pages/NotFound';
// forms
import Register from './components/forms/Register';
import Contact from './components/forms/Contact';
import RentHall from './components/forms/RentHall';
// styling
import './App.css';


function App() {
  return (
    <div className="container">
        <Router>
          <div className='App'>
            <Navbar />
            
            <div className=''>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/eresources' component={Eresources} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/usermanual' component={UserManual} />
                <Route exact path='/book-hall' component={RentHall} />
                <Route component={NotFound} />
              </Switch>

              <Footer />
            </div>
          </div>
          
        </Router>
      </div>
  );
}

export default App;
