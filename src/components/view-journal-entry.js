import React, {Component} from 'react'

import Navbar from "./navbar"

export default class ViewPage extends Component{
    constructor() {
        super()
        this.state = {
            data: []        
        }

        this.handleDelete = this.handleDelete.bind(this)

    }

    componentDidMount(){
        fetch("https://journal-backend-cjt.herokuapp.com/journal/get", {
            method: "GET"
        })
        .then(response => response.json(""))
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
        
    }

    handleDelete(id){
        const shouldDelete = confirm(`Do you really want to delete journal?`);
        fetch(`https://journal-backend-cjt.herokuapp.com/journal/delete/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
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
                        <div className="date-and-location">
                            {entry[4]} at {entry[5]}
                        </div>
                        <div className="people">
                            With {entry[1]}
                        </div>
                        <div className="description">
                            Description: {entry[3]}
                        </div>
                        
                        <button onClick={() => this.handleDelete(entry[0])}>Delete</button>
                    </div>
                    )}
                
               
            </div>
                
            
        )
    }

}