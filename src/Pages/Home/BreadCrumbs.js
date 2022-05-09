import React from 'react'
import { NavLink } from 'react-router-dom';

const BreadCrumbs = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink className="text-black" to="/">Home</NavLink></li>
                <li className="breadcrumb-item active text-black" aria-current="page">C.25 Write digits given words - up to 10</li>
            </ol>
        </nav>
    );
}

export default BreadCrumbs;