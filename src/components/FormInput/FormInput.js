import React from "react";
import './FormInput.css';

function FormInput() {


    return (
        <form onSubmit={'#'}>
            <div className='form-data-control-wrapper'>
                <div className='form-data-control'>
                    <label>Name</label>
                    <input
                        required
                        type='text'
                        // value={'#'}
                        // onChange={'#'}
                        placeholder="Insert yourname" />
                </div>
                <div className='form-data-control'>
                    <label>Age</label>
                    <input
                        required
                        type='number'
                        // value={'#'}
                        // onChange={''}
                        placeholder="Insert age" />
                </div>
                <div className='form-data-control'>
                    <label>Date of Birth</label>
                    <input
                        required
                        type='date'
                        // value={'#'}
                        // onChange={'#'}
                         />
                </div>
                <div className='form-data-control'>
                    <button type='submit'>Add Data</button>
                </div>
            </div>
        </form>

    )
}

export default FormInput;

