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
    
    componentDidMount() {
        this.setState({
            owner: Cookies.get("email")
        })
    }


    handleLogout() {
        Cookies.remove("email")
        this.setState({
            owner: ""
        })
    }

    render() {
        if (this.state.owner === "") {
            return (
                <div className='navbar-wrapper'>
                    
                    <div className="signed-in-wrapper">
                        Not signed in
                    </div>
                    <div className="links-wrapper">                
                        <div className="nav-link-wrapper">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>  
                        </div>
                        <div className="nav-link-wrapper">
                            <Link className="nav-link" to="/create-account">
                                Create an Account
                            </Link>  
                        </div>
                        
                        <div className="nav-link-wrapper">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>  
                        </div>
                    </div>                  
                    
                </div>
            )
        }
        else {
            return (
                <div className='navbar-wrapper'>
                    
                    <div className="signed-in-wrapper">
                        Signed in as {this.state.owner}
                    </div>
                    <div className="links-wrapper">                
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
                            <Link onClick={this.handleLogout} className="nav-link" to="/">
                                Logout
                            </Link>  
                        </div>
                    </div>
                    
                    
                    
                </div>
            )
        }
    }
}
