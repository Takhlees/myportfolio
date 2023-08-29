import React from 'react'
import { useState } from 'react'

import { Link } from 'react-scroll'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>

      <div className="port">

        <nav className="navbar-nav">
          <h2>PortFolio</h2>

          <div className='comp'>
            <Link className="nav-link" to="home" smooth={true}>Home</Link>
            <Link className="nav-link" to="about" smooth={true}>About</Link>
            <Link className="nav-link" to="projects" smooth={true}>Projects</Link>
            <Link className="nav-link" to="contact" smooth={true}>Contact</Link>
          </div>

          <ul className={`navbar-items ${showMenu ? 'show' : ''}`}>
            <Link className="nav-link" to="home" smooth={true}>Home</Link>
            <Link className="nav-link" to="about" smooth={true}>About</Link>
            <Link className="nav-link" to="projects" smooth={true}>Projects</Link>
            <Link className="nav-link" to="contact" smooth={true}>Contact</Link>
          </ul>

          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>



      </div>

    </>

  )

}

