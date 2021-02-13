import React from 'react';
import './App.css';


// remember props, also can use obj destructuring {name, message}
// and just write {name} or {message inside the element of JSX}
function Tweet(props) {

    // logic here

   
    return(
        <div className='tweet'>
            <h1>This is twitter-like</h1>
            {/* using {} to insert the value for props.value */}
            <h2>{ props.name }</h2>
            <p>Anykind of Tweet:<br></br>{ props.message }</p>
            <p> { props.name } </p>

        </div>
    )
}


export default Tweet;