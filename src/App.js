import React, { useState } from "react";
import DataInsertionForm from "./components/DataInsertionForm/DataInsertionForm";
import OverviewPage from "./components/OverviewPage/OverviewPage";
import ModalPopUp from "./components/ModalPopUp/ModalPopUp";


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
    {
        id: Math.random().toString(36).substring(2, 9),
        name: "Tony",
        division: "Finance",
        birthDate: new Date(1999, 4, 4)
    },
]

function App(props) {
    const [updateData, setUpdatedData] = useState(DATABASE);
    const [popUp, setPopUp] = useState(false)
    // update data onInsert();
    const UpdateInsertData =(enteredData)=> {
        setUpdatedData( (prevData)=> {
            return [enteredData, ...prevData]
        })
    }
    const showPopUpHandler = (state) => {
        setPopUp(state)
    }


    return (
        <div>
            <DataInsertionForm 
            OnSavedEnteredData={UpdateInsertData}
            onShowPopUp={showPopUpHandler}

            />
            {popUp ? <ModalPopUp onSetPopUp={popUp}/>: <OverviewPage  sourceData={updateData}/>}
           
           

        </div>
    )
}

export default App;