import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    state = { 
       counters : [
           {id: 1, value: 0},
           {id: 2, value: 0},
           {id: 3, value: 0},
           {id: 4, value: 0}
       ],
       anything: 'nice',
       anythingx: 'okay'
    }

    // handleDelete = () => 

    render() { 
        return (

        <React.Fragment>

            

            <div>
               { this.state.counters.map( counter => 
               <Counter key={ counter.id } value={ counter.value } id={ counter.id } />) }                
            </div>

            <div>
                <h1> This is a separation </h1>
            </div>


            
            </React.Fragment>    
        )}
}
 
export default Counters;