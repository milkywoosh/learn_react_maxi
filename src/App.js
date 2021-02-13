import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

// import anyfunction from 'javascriptFile.js';
// import HelloJohn from './sayHello.js'
import Tweet from './Tweet';







// function that will be exported, so it is visible and call-able
// from another function
function App() { // --> JSX

  // learning state ---------------------------
  // function: to make the button more interactive by Clicking
  // useState can be 'boolean', 'Object', 'number'
  
  const fontStyle = {
    // remember to use CamelCase not using - (dash)
    color: "blue",
    fontSize: "100px"
  };

  // react Hook
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  
  const [users, setUsers] = useState([
    {name:'john', message: 'hello goodbye'},
  // {name:'liam', message:'rock and roll'},
  // {name:'noel', message:'rock and roll'}
  ]);



  const increment = () => {
    // this is onClick function to increment the value [1]
    setCount(count+1);
    // if click, the color change to be red
    // !isRed == true, because useState(false)
    setRed(!isRed);
  }
  
  const decrement = () => {
    if (count > 0) {
      setCount(count-1);
      setRed(!isRed);
    } else if (count < 0) {
       count = 0;
    } 
  }
  

  return ( 
    <div className = 'app'>
      
      {users.map(user => 

        // name and message is the attribute for value props on Tweet.js
        <Tweet name={user.name} message={user.message}/>
      
      )}

       {/* this is interactive button to increment and decrement */}
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      

      


      {/* this is dynamic object, mutable/changable e*/}
      {/* number will be incremented by click */}
      <h2 style={fontStyle}>{ count }</h2>

      {/* changing to red color */}
      {/* if isRed === true, change to red, otherwise change to green */}
      <h2 className={isRed ? 'red': 'green'}>Red color set up</h2>

      {/* DONT DELETE
      {/* <h1>Hello world</h1> */}
      {/* "name" is props, as parameter in tweet function 
      <Tweet name='john' message='random tweet'/>
      <Tweet name='liam' message='random tweet'/>
      <Tweet name='obrien' message='random tweet'/>
      */}




    </div>
  );
}

// export App function to make it visible
export default App;
