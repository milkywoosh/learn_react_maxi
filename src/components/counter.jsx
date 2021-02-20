import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'

// difference between JSX and JS??
// what is 'Extends Component' in react??

class Counter extends Component {

      // state is property in react 'component'
      state = { 
          count: this.props.value
      };

      /* 
      Event handler
      remember: "constructor" mode can be replaced with "arrow function" =()=> !
      */

      // Event handler
      // Handling Event
      handleIncrement = () => {
      // console.log('Increment clicked', this);

      // updating state or to change the view number --> "useState()";
          
          this.setState({ count: this.state.count+1 });
      }

  render() {
          // automating the changing of the Badge
      let classes = this.getBadgeClasses(); // for className in <span> tag
      let formatCount = this.formatCount(); // for filler in <span> tag or use { this.formatCount() }

   
      return(
        //   using <React.Fragment> or <div>
          <div className>
            
            {/* 
                note: dont put parenthesis on handleIncrement
            */}
            {/* style = {{fontSize:50, fontWeight:'Bold'}}  untuk attach style independently*/}
              <span className={ classes }> { formatCount } </span>
            
              <button 
                className='btn btn-secondary btn-sm' // bootstrap
                // Passing Event Argument
                onClick={ this.handleIncrement }
              >
              Increment</button>

            
          </div>
         
      );
  }

   // Rendering Classes Dynamically --> has been refactored!
   //  
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  // dynamic the number view on UI
  formatCount() {
    // object destructuring
    const { count } = this.state;
    return (count === 0)? "Zero": count;
    
  };
} 



export default Counter;