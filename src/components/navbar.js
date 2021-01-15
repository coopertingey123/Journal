import React, { Component } from 'react'

import { Link } from "react-router-dom"
import Cookies from "js-cookie"



export default class LoggedIn extends Component {
    constructor() {
        super()
        
        this.state = {
            owner: ""
        }      
    }
    
    // componentDidMount() {
    //     this.setState({
    //         owner: Cookies.get("email")
    //     })
    // }


    // handleLogout() {
    //     Cookies.remove("email")
    // }

    render() {
        
        return (
            <div className='navbar-wrapper'>
                <div className="nav-side">
                    Signed in as: <br/> {this.state.owner}
                </div>
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>  
                </div>
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/add-entry">
                        Add Entry
                    </Link>
                </div>
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to="/view-entries">
                        View Entries
                    </Link>
                </div>
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to exact="/create-account">
                        Create an Account
                    </Link>  
                </div>
                <div className="nav-side">
                    <Link className="nav-Link" to="/">
                        <button> Log Out </button>
                    </Link>
                </div>
            </div>
        )
        }
    }
