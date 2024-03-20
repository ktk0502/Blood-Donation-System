import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
          <div className='main'>
              <div className="left">
                <h1 className='logo'>Organ-Donation</h1>
              </div>
              <div className="right">
                <ul style={{marginRight:'3vw'}}>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/About'}><li>About</li></Link>
                </ul>
              </div>
          </div>
        </>
      )
}

export default Navbar
