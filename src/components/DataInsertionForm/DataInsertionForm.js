import React from "react";
import FormInput from "../FormInput/FormInput";
import Card from "../../UI/Card";

function DataInsertionForm(props) {

    const SaveEnteredData =(enteredData)=> {
        const newData = {
            ...enteredData
        }

        props.OnSavedEnteredData(newData)
    }


    return (
        <Card>
            <FormInput onAddDataInput={SaveEnteredData}/>
        </Card>
    )
}

export default DataInsertionForm;