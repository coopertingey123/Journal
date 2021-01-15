import React, { Component } from 'react'
import Navbar from "./navbar"

export default class CreateAccount extends Component {
    constructor() {
        super()

        this.state = {
            // firstName: "",
            // lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            emailError: false,
            passwordError: false,
            error: false
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

        if (this.state.password === this.state.confirmPassword) {
            fetch("https://journal-time-api-octclass.herokuapp.com/user/add", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    // first_name: this.state.firstName,
                    // last_name: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data == "User added successfully") {
                    // this.props.history.push("/login")
                }
                // else if (data === "Owner already exists") {
                //     this.setState({ emailError: true })
                // }
                
                else {
                    this.setState({ error: true })
                }
            })
            .catch(error => {
                console.log("Error creating user: ", error)
                this.setState({ error: true })
            })
        }
        else if (this.state.password !== this.state.confirmPassword){
            this.setState({ passwordError: true })
        }
    }

    render() {
        return (
            <div className='page-wrapper'>
                <Navbar/>
                <div className="form-wrapper">
                    <div className="text">
                        Sign up to keep your journal entries.
                        
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign up here!</h1>
                        {/* <div className="wrapper">
                            First name:
                            <input
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                placeholder="First Name"
                            />
                        </div>
                        <div className="wrapper">
                            Last name:
                            <input
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder="Last Name"
                            />
                        </div> */}

                        <div className="wrapper">
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                            />
                        </div>

                        <div className="wrapper">
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                        </div>

                        <div className="wrapper">
                            Confirm password:
                            <input
                                type="password"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                placeholder="Password"
                            />
                        </div>

                        <div className="button">
                            <button type="submit">
                                Sign up
                            </button>
                        </div>

                    </form>
                    {this.state.error ? <p>Error signing up... Please try again later</p> : null}
                    {this.state.passwordError ? <p>Passwords do not match. Please try again</p> : null}
                    {this.state.emailError ? <p>Email already exists. Please enter another</p> : null}
                </div>
            </div>
        )
    }
}