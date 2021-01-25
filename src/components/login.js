import React, { Component } from 'react'
import Cookies from "js-cookie"
import Navbar from "./navbar"


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            loginFailed: false,
            loginError: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        Cookies.set("email", this.state.email)
        fetch("https://journal-backend-cjt.herokuapp.com/user/authentication", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
            
        .then(data => {
            if (data.status === "logged_in") {
                Cookies.set("email", this.state.email)
                this.props.history.push("/")
            }
            else {
                this.setState({ loginFailed: true })
            }
        })
        .catch(error => {
            console.log("Error logging in: ", error)
            this.setState({ loginError: true })
        })
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navbar/>
                <div className='login-wrapper'>
                    <h1>Journal App</h1>
                    <h2>Login to see your journal entries</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="whole-input-wrapper">
                            <div className="input-wrapper">
                                Email:
                                <input 
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Your email"
                                />
                            </div>
                            
                            <div className="input-wrapper">
                                Password:                        
                                <input 
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Your password"
                                />
                            </div>
                        </div>
                        <button type="submit">Login</button>
                        <div className="signup-wrapper">
                            <a href="/create-account">Don't have an account? Sign up here!</a>
                        </div>
                    </form>
                    
                    {this.state.loginFailed ? <p>Invalid Credentials...</p> : null}
                    {this.state.loginError ? <p>Error Logging in.. Please try again later</p> : null}
                </div>
            </div>
        )
    }
}

