import React, { useState } from "react";
import AllDataTable from "./components/AllDataTable/AllDataTable";
import DataInsertionForm from "./components/DataInsertionForm/DataInsertionForm";



const DATABASE = [
    {
        id: Math.random().toString(36).substring(2, 9),
        name: "Ben",
        division: "IT Dept",
        birthDate: new Date(1990, 2, 2)
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        name: "Ron",
        division: "IT Dept",
        birthDate: new Date(2000, 3, 3)
    },
]

function App(props) {
    const [updateData, setUpdatedData] = useState(DATABASE);

    // update data onInsert();
    const UpdateInsertData =(enteredData)=> {
        setUpdatedData( (prevData)=> {
            return [enteredData, ...prevData]
        })
    }

    return (
        <div>
            <DataInsertionForm OnSavedEnteredData={UpdateInsertData} />
            <AllDataTable OnDataSupply={updateData
            }/>
        </div>
    )
}

export default App;