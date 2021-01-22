import React from 'react'
// import {Link} from "react-router-dom"
// import JournalWritingImage from "../../static/assets/images/prayer-journal-facebook.jpg"

import Navbar from "./navbar"

export default function homepage(props) {
    return (
        <div className="page-wrapper">
            <Navbar/>
            <div className='homepage-wrapper'>
                <div className="text-wrapper">
                    <div className="quote-wrapper">
                        Memories are not to be forgotten
                    </div>
                    
                    <div className="signup-wrapper">
                        Get started today
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}