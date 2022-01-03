import React from "react";
import FormInput from "../FormInput/FormInput";
import styles from './NewInput.module.css';
function NewInput(props) {

    const getUpdateData = (enteredData) => {
        props.onUpdate(enteredData)
    }
    let lengthData = props.lenInfo
    return (
        // <div className={styles.mainFrame}>
        <>
            <FormInput onInputData={getUpdateData}
                getLength={lengthData}
            />
        </>
        // </div>

    )
}

export default NewInput;