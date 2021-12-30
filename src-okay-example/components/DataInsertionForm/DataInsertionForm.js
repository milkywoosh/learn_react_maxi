import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Card from "../../UI/Card";

function DataInsertionForm(props) {
    const [onEdit, setOnEdit] = useState(true);


    const SaveEnteredData =(enteredData)=> {
        const newData = {
            ...enteredData
        }
        props.OnSavedEnteredData(newData)
    }
    const OnEditHandler =()=> {
        setOnEdit(true)
    }
    const OffEditHandler =()=> {
        setOnEdit(false)
    }


    return (
        <Card >
            {/* create toggle between 'Add Data' and  'form' */}
            { !onEdit && <button onClick={OnEditHandler}>Add Data Here !</button>}
            { onEdit && <FormInput 
                onClick={OffEditHandler}
                onAddDataInput={SaveEnteredData}/>}
        </Card>
    )
}

export default DataInsertionForm;