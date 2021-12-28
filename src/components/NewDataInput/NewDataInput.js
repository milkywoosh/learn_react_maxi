import React, { useState } from "react";
import Card from '../../UI/Card';
import FormInput from "../FormInput/FormInput";

function NewDataInput(props) {
    const [isInputData, setInputData] = useState(true);

    const saveDataHandlerToArray = (enteredData) => {
        const newData = {
            ...enteredData,
            id: Math.random().toString(36).substring(2, 9)
        }

        console.log(newData)
        props.onSaveData(newData)

    }

    const onInputDataHandler =()=> {
        setInputData(true)
    }
    const offInputDataHandler =()=> {
        setInputData(false)
    }



    return (
        <Card>
            {!isInputData &&<button onClick={onInputDataHandler}>Add New Data</button>}
            {isInputData &&  <FormInput onCancel={offInputDataHandler} onSaveInputData={saveDataHandlerToArray} />}
        </Card>
    )
}

export default NewDataInput;