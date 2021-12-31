import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Card from "../../UI/Card";

function DataInsertionForm(props) {
    const [onEdit, setOnEdit] = useState(true);


    const SaveEnteredData = (enteredData) => {
        const newData = {
            ...enteredData
        }
        props.OnSavedEnteredData(newData)
    }
    const OnEditHandler = () => {
        setOnEdit(true)
    }
    const OffEditHandler = () => {
        setOnEdit(false)
    }
    const getModalPopUp =()=> {
        props.onShowPopUp(true)
    }
    const getModalHide =()=> {
        props.onShowPopUp(false)
    }


    return (
        <Card >
            {/* create toggle between 'Add Data' and  'form' */}



            {!onEdit &&
                <div>
                    <button onClick={OnEditHandler}>Add Data Here !</button>
                    
                        <button onClick={getModalPopUp}>Show Modal</button>
                        <button onClick={getModalHide}>Close Modal</button>

                </div>
            }
            {onEdit && <FormInput
                onClick={OffEditHandler}
                onAddDataInput={SaveEnteredData} />}
        </Card>
    )
}

export default DataInsertionForm;