import React, { useState } from "react";
import './App.css';
import DataInput from "./component/DataInput/DataInput";


const DataSource = [
    {
        id: Math.random().toString(36).substring(2, 9),
        email: 'aaa@email.com',
        isValid: true,
    },
];


function App(props) {
    const [currData, setCurrData] = useState(DataSource);

    const UpdataCurrValue = (enterData) => {
        console.log(currData)
        setCurrData((prevData) => {
            return [enterData, ...prevData ]
        })
    }


    return (

        <div className=''>
            <DataInput
                onSupplyDataInput={UpdataCurrValue}
                onUpdatedValue={currData}

            />
        </div>
    )
}

export default App;