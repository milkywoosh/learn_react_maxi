import React from "react";
import FormInput from "../FormInput/FormInput";
import './AddData.css';


function AddData() {


    return(
        <div className='add-data-control'>
            <FormInput onInputData={'#'}/>
        </div>
    )
}


export default AddData;