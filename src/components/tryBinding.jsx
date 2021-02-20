

//  TRIAL USING and UNDERSTANDING the BINDING METHOD of JS in React
//  to change State
import React, { Component } from 'react';

class BindingAny extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            message: 'Hello' 
        }

        this.changeHandling = this.changeHandling.bind(this)
    }

    
    changeHandling() {
        this.setState({ 
            message: 'anythingggg'
        })
    }
        

    render() { 
        return ( 
            <div>
                <h2>{ this.state.message }</h2>
                <button onClick={ this.changeHandling }>Click me to change!</button>
            </div>

         );
    }
}
 
export default BindingAny;