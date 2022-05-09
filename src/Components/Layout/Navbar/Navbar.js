import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>
                    <img className={`${classes.navLogo}`} src="https://uk.ixl.com/dv3/QOQP8kRQG-0KNiAevO3UpMy3s0c/yui3/site-nav/assets/icon-ixl-logo-156.png" alt='logo' />
                </NavLink>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;