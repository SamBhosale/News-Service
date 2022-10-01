import React, { Component } from 'react'

export class Spinner extends Component {
    

    render() {
        return (
            <div>
               <div className="text-center my-3"><img src="loader.gif" alt="loader.gif" /></div> 
            </div>
        )
    }
}

export default Spinner
