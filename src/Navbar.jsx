import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="appName">
                <Link className="logo" to="/">Go Programming</Link>
            </div>
            <div className='links'>
                <Link to="/album" className="navLink">Album</Link>
                <Link to="/registration" className="navLink">Registration</Link>
                <Link to="/persons" className="navLink">Persons</Link>
            </div>
        </nav>
    )
}
export default Navbar