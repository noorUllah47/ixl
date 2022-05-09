import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './ScndNav.module.css'

const ScnNav = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-lgtGreen ${classes.scndNav}`}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white active ps-0" aria-current="page" to="/">Learning</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Diagnostic</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Analytics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default ScnNav;