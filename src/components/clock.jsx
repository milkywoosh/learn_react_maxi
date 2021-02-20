

// Source Documentation about Life Cycle and setState
// -->  https://reactjs.org/docs/state-and-lifecycle.html
import React, { Component } from 'react';


class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            date: new Date() 
        };
    }


        componentDidMount() {
            this.timerID = setInterval( () =>  this.tick(), 1000  );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {    
            this.setState(
                { date: new Date() }); 
        }


    render() {
        return(
            <React.Fragment>
                <div>
                    <h1> Time Clock </h1>
                    <h3> { this.state.date.toLocaleTimeString() } </h3> 
                    
                </div>
            </React.Fragment>
            
            
        )
    }

}


export default Clock;