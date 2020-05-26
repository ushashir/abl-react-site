import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ( ) => {
  return (
    <div className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
     
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/eresources'>Eresources</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/blog'>Contact</Link>
        </li>
      </ul>
    </div>
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
