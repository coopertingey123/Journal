import React, {Component} from 'react'

import Navbar from "./navbar"

export default class ViewPage extends Component{
    constructor() {
        super()
        this.state = {
            data: []        }

    }

    componentDidMount(){
        fetch("https://journal-time-api-octclass.herokuapp.com/journal/get", {
            method: "GET"
        })
        .then(response => response.json(""))
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
        
    }
    

    render(){
        let entries = this.state.data
        return(
            <div className="page-wrapper">
                <Navbar/>
                {console.log(this.state.data)}
                
                {entries.map(entry =>
                    <div className="entry-wrapper">
                        <div className="title">
                            {console.log(this.state.data)}
                            Title: {entry[2]}
                        </div>
                        <div className="date">
                            Date: {entry[4]}
                        </div>
                        <div className="location">
                            Location: {entry[5]}
                        </div>
                        <div className="description">
                            Description: {entry[3]}
                        </div>
                        <div className="people">
                            People: {entry[1]}
                        </div>
                    </div>
                    )}
                
               
            </div>
                
            
        )
    }

}