import React from 'react'
import { NavLink } from 'react-router-dom';

const BreadCrumbs = ({data}) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink className="text-black" to="/">Home</NavLink></li>
                <li className="breadcrumb-item active text-black" aria-current="page"></li>
            </ol>
        </nav>
    );
}

export default BreadCrumbs;