import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ( ) => {
  return (
    <header className="bg-white black-80 tc pv4 avenir">
       <h1 className="mt2 mb0 baskerville i fw1 f1">ALEXANDER BERNHARDT LIBRARY</h1>
       <h2 className="mt2 mb0 f6 fw4 ttu tracked">An initiate of Alexander Bernhardt Grail Publishing Company</h2>
      <div className='bt bb tc mw8 center mt3'>
        <ul>
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/'>Home</Link></li>
          </div>
          
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/about'>About</Link></li>
          </div>
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/services'>Services</Link></li>
          </div>
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/eresources'>Eresources</Link></li>
          </div>
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/register'>Register</Link></li>
          </div>
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/blog'>Blog</Link></li>
          </div>
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/contact'>Contact</Link></li>
          </div>
          <div className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">
            <li><Link to='/book-hall'>Rent Hall</Link></li>
          </div>
          <div className="link dim gray    f6 f5-ns dib mr3" href="#" title="About">
        
          </div>

        </ul>

      </div>

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
