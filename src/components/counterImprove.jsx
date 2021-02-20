import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'

// difference between JSX and JS??
// what is 'Extends Component' in react??

class CounterImprove extends Component {
  
  // state is property in react 'component'
  state = { 
      count : 0,
      address: {
          street: 'Abbey Road'
      },
      tags: ['tag1', 'tag2', 'tag3']
  };

  // css style
  styles = { // to implement CSS: style = {this.styles}
    fontSize: 20,
    fontWeigth: 'Bold'
  }
  
  /* 
     Event handler
     remember: "constructor" mode can be replaced with "arrow function" =()=> !
  */
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  // Event handler
  // Handling Event
  handleIncrement() {
    // console.log('Increment clicked', this);

    // updating state or to change the view number --> "useState()";
    this.setState({ count: this.state.count+1 })
  }


  // my improvisation
  handleDecrement() {
    // console.log('Increment clicked', this);
    if (this.state.count < 0) {
      this.state.count = 0;
    } else if (this.state.count > 0){
      this.setState({ count: this.state.count-1 })
    }
    // updating state or to change the view number --> "useState()";
    // this.setState({ count: this.state.count-1 })
  }



  render() {

    // automating the changing of the Badge
    let classes = this.getBadgeClasses(); // for className in <span> tag
    let formatCount = this.formatCount(); // for filler in <span> tag or use { this.formatCount() }

      return(
        //   using <React.Fragment> or <div>
          <div className>
            {/* style = {{fontSize:50, fontWeight:'Bold'}}  untuk attach style independently*/}
              
              <span className={ classes }> { formatCount } </span>
              <button 
                className='btn btn-secondary btn-sm' // bootstrap
                // Passing Event Argument
                onClick={ this.handleIncrement }
              >
                Increment</button>


              <button
                className='btn btn-secondary btn-sm m-3'
                onClick={this.handleDecrement}
              >
              Decrement</button> 
            {/* 
                note: dont put parenthesis on handleIncrement
            */}
              

            <ul>
              {/* rendering LIST item */}
              {this.state.tags.map(tag =>  <li key={tag}>{ tag }</li>  )}
              
            </ul>

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