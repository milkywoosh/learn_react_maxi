

//  UNDERSTAND THIS --> https://reactjs.org/docs/state-and-lifecycle.html


// import the package we have made
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Counters from './components/counters';
import Clock from './components/clock';
import BindingAny from './components/tryBinding';

// import CounterImprove from './components/counterImprove'
// import CounterCondRender from './components/counterConditionalRendering';

// import AppHello from './Apphello'




ReactDOM.render(
  //  put your 'Package' inside the <React.Fragment>
  <React.Fragment>
     <BindingAny />
     <Clock />
     <Counters /> 

     {/* <App /> */}
 
     
  </React.Fragment>, 
  document.getElementById('root')
 
 
);
//<App /> 
 // {/* element, document.getElementById('root'); */}
   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
