import React, { useState } from "react";
import './App.css';
import Counter from "./components/CounterUseReducer/Counter";
import NewDataInput from "./components/NewDataInput/NewDataInput";
import TableDataShow from "./components/TableDataShow/TableDataShow";
import Timer from "./components/Timer/Timer";

const DataSource = [
    {
        id: Math.random().toString(36).substring(2, 9),
        fullName: 'Ben',
        emailPerson: 'Ben@gmail.com',
        birthDate: new Date(1990, 5, 5),
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        fullName: 'Ron',
        emailPerson: 'Ron@gmail.com',
        birthDate: new Date(1993, 3, 2),
    },
];


function App(props) {
    const [supplyData, setSupplyData] = useState(DataSource);

    const addDataHandler = (entriData) => {
        setSupplyData( (prevData) => {
            return [entriData,...prevData ];
        })
    }

    return (

        <div className=''>
            <NewDataInput onSaveData={addDataHandler}/>
            <TableDataShow onSupplyData={supplyData} />
            <Timer />
            <Counter />
        </div>
    )
}

export default App;