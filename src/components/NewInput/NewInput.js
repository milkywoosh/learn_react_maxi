import React from "react";
import FormInput from "../FormInput/FormInput";
import Card from "../UI/Card/Card";
import styles from './NewInput.module.css';
function NewInput(props) {

    const getUpdateData =(enteredData)=> {
        props.onUpdate(enteredData)
    }
    let lengthData = props.lenInfo
    return(
        <Card className={`${styles['main-frame']}`}>
            <FormInput onInputData={getUpdateData}
            getLength={lengthData}
            />
        </Card>
    )
}

export default NewInput;