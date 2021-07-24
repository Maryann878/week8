import React, { Component } from 'react'

export default class product extends Component {

    state ={
        totalNumber: 0,
    };
    }
    render() {
        return (
            <div>
               <p>{this.state.total}</p> 
            </div>
        )
    }
}
