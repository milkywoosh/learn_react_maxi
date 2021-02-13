


/*

REMEMBER WE ARE LEARNING "Conditional Rendering"

*/


import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'

// difference between JSX and JS??
// what is 'Extends Component' in react??

class CounterCondRender extends Component {
  
  // state is property in react 'component'
  state = { 
      count : 1,
      address: {
          street: 'Abbey Road'
      },
      tags: []
      // 'tag1', 'tag2', 'tag3'
  };

  styles = { // to implement: style = {this.styles}
    fontSize: 20,
    fontWeigth: 'Bold'
  }
  
  /* rendering LIST item with LOGIC
     using map() method
  */
  renderTags() {
    if (this.state.tags.length === 0) return <p>Please make sure the list is exist</p>

    return <ul> { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) } </ul>
    
  }


  render() {


      return(
        //   using <React.Fragment> or <div>
          <div className>

          {/* 
            using principle of Truthy or Falsey!
            [ true && 'hi'] return 'hi' 
            
            { this.state.tags == 0 && 'Please create the list items' }
          */}

          { this.state.tags.length == 0 && 'Please create the list items' }
          { this.renderTags() }

            </div>
      );
  }

 

  
} 



export default CounterCondRender;