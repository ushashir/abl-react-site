import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ( ) => {
  return (
  <header className="header-nav" role="banner">
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">  
        <div className="navbar-brand">Alexander Bernhardt Library </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">

              <ul className="navbar-nav ml-auto">
                  <li className="nav-link active"><Link to='/'>Home</Link></li>        
                  <li className="nav-link"><Link to='/about'>About</Link></li>
                  <li className="nav-link"><Link to='/services'>Services</Link></li>
                  <li className="nav-link"><Link to='/eresources'>Eresources</Link></li>
                  <li className="nav-link"><Link to='/register'>Register</Link></li>
                  <li className="nav-link"><Link to='/blog'>Blog</Link></li>
                  <li className="nav-link"><Link to='/contact'>Contact</Link></li>
                  <li className="nav-link"><Link to='/book-hall'>Rent Hall</Link></li>
              </ul>
    
            </div>
      </div>
  </nav>
</header>

    
  )
}

// Navbar.defaultProps = {
//   title: 'Github Profile Finder',
//   icon: 'fab fa-github'
// }

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired
// }

export default Navbar
