import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
    function handleClick(){
        
    navigate("/signin")
    }
    return (
    <nav className="navbar navbar-light bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>
                    <img className={`${classes.navLogo}`} src="https://uk.ixl.com/dv3/QOQP8kRQG-0KNiAevO3UpMy3s0c/yui3/site-nav/assets/icon-ixl-logo-156.png" alt='logo' />
                </NavLink>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={handleClick} aria-label="Sign in" class="crisp-button quick-login-button site-nav-header-button" id="qlsubmit" name="qlsubmit"  value="true">Sign in</button>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;