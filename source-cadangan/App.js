import React from "react";
import Card from "./UI/Card";
import AddData from "./components/AddData/AddData";
import AllDataShow from "./components/AllDataShow/AllDataShow";
import './App.css';




function App() {

    return (

        <div className=''>
            
                <AddData />
                <AllDataShow />
            
        </div>
    )
}

export default App;