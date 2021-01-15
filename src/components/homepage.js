import React from 'react'
import {Link} from "react-router-dom"

import Navbar from "./navbar"

export default function homepage(props) {
    return (
        <div className='homepage-wrapper'>
            <Navbar/>
            <h1>Homepage</h1>
            <Link className="nav-link" to="/add-entry">
                Add Entry
            </Link>
            <Link className="nav-link" to="/view-entries">
                View Entries
            </Link>
        </div>
    )
}