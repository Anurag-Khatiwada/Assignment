import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <Link to="/partners"><button className='nav-link'>Become a partner</button></Link>
            <Link to="/carers"> <button className='nav-link'>Carers</button></Link>
           
        </div>
    </nav>
  )
}

export default Navbar
