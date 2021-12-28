import React from "react";
import Card from '../../UI/Card';
import FormInput from "../FormInput/FormInput";

function NewDataInput(props) {


    const saveDataHandlerToArray =(enteredData)=> {
        const newData = {
            ...enteredData,
            id: Math.random().toString(36).substring(2,9)
        }
        props.onSaveData(newData)
    }
    return (
        <Card>
            <FormInput onSaveInputData={saveDataHandlerToArray}/>
        </Card>
    )
}

export default NewDataInput;