import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
// pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Eresources from './components/pages/Eresources';
import Register from './components/pages/Register';
import UserManual from './components/pages/UserManual';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/Contact';

// styling
import './App.css';


function App() {
  return (
   

        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/eresources' component={Eresources} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/usermanual' component={UserManual} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      
   
  );
}

export default App;
