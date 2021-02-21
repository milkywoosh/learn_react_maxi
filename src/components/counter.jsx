import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {

    constructor(props) {
      super(props);
        // state is property in react 'component'          
      this.state = { 
        count: this.props.counter.value

      };

      this.handleIncrement = this.handleIncrement.bind(this);
    }
       
      
    // constructor

      

      /* 
      Event handler
      remember: "constructor" mode can be replaced with "arrow function" =()=> !
      */

    // Event handler
    // Handling Event
    handleIncrement = () => {
    // console.log('Increment clicked', this);
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
                note: dont put parenthesis on handleIncrement because
                      because handleIncrement is reference
            */}
            {/* style = {{fontSize:50, fontWeight:'Bold'}}  untuk attach style independently*/}
              <span className={ classes }> { formatCount } </span>
            
              <button 
                className='btn btn-secondary btn-sm' // bootstrap
                // Passing Event Argument
                onClick={ this.handleIncrement } 
              >
              Increment</button>

              <button onClick={ () => this.props.onDelete(this.props.counter.id) }
                      className="btn btn-danger btn-sm m-2"
              >
                Delete</button>
          </div>
         
      );
  }

        // Rendering Classes Dynamically --> has been refactored!
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
} // class 



export default Counter;