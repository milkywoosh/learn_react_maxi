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

    handleDelete = (counterId) => {
        // console.log('Event handler called');
        const deletingList = this.state.counters.filter(c => c.id !== counterId);
        // overwritting counters list value with deletingList 
        this.setState({ counters: deletingList });
    };

    render() { 
        return (

        <React.Fragment>

            

            <div>
               { this.state.counters.map( counter => 
               <Counter 
                        // passing props here
                        key={ counter.id } 
                        // value={ counter.value } 
                        onDelete={ this.handleDelete }
                        // id={ counter.id }

                        counter={ counter } // then change with 'onClick={this.props.counter.id} in counter.jsx
                                            // also this.state = { count: this.props.counter.value in counter.jsx};
                        />) }                  
            </div>

            <div>
                <h1> This is a separation </h1>
            </div>


            
            </React.Fragment>    
        )}
}
 
export default Counters;